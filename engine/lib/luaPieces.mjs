// LuacShield runtime Lua pieces: helpers, shell layers, anti checks.
export const LUA_HELPERS = `
local __bx = function(a, b)
  if bit32 and bit32.bxor then return bit32.bxor(a, b) end
  local r, p = 0, 1
  for _ = 1, 8 do
    local aa, bb = a % 2, b % 2
    if aa ~= bb then r = r + p end
    a = (a - aa) / 2
    b = (b - bb) / 2
    p = p * 2
  end
  return r
end
local __b64d = function(s)
  local alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  local rev = {}
  for i = 1, #alpha do rev[alpha:sub(i, i)] = i - 1 end
  -- "=" padding is skipped entirely; decoding it as 0 adds phantom bytes
  local out, acc, bits = {}, 0, 0
  for i = 1, #s do
    local v = rev[s:sub(i, i)]
    if v then
      acc = acc * 64 + v
      bits = bits + 6
      if bits >= 8 then
        bits = bits - 8
        out[#out + 1] = string.char(math.floor(acc / 2 ^ bits) % 256)
        acc = acc % 2 ^ bits
      end
    end
  end
  return table.concat(out)
end
local __rc4 = function(key, data)
  local s = {}
  for i = 0, 255 do s[i] = i end
  local j = 0
  local klen = #key
  for i = 0, 255 do
    j = (j + s[i] + key:byte((i % klen) + 1)) % 256
    s[i], s[j] = s[j], s[i]
  end
  local out = {}
  local i, j2 = 0, 0
  for n = 1, #data do
    i = (i + 1) % 256
    j2 = (j2 + s[i]) % 256
    s[i], s[j2] = s[j2], s[i]
    out[n] = string.char(__bx(data:byte(n), s[(s[i] + s[j2]) % 256]))
  end
  return table.concat(out)
end
local __keyjoin = function(chunks)
  local parts = {}
  for i = 1, #chunks do
    local m, x = chunks[i][1], chunks[i][2]
    local piece = {}
    for k = 1, #m do piece[k] = string.char(__bx(m[k], x[k])) end
    parts[i] = table.concat(piece)
  end
  return table.concat(parts)
end
local __verify2 = function(data)
  local sum = 0
  for i = 1, #data do
    sum = (sum + data:byte(i) * (((i - 1) % 64) + 1) + 1) % 4294967295
  end
  return sum
end
local __fail = function(msg)
  if type(error) == "function" then error(tostring(msg), 0) end
  while true do end
end
`;

export const LUA_LZW = `
local __lzw = function(data)
  local n = math.floor(#data / 2)
  local dict = {}
  local prev, out = nil, {}
  local nextCode = 257
  local CLEAR = 256
  local function resetDict()
    for i = 0, 255 do dict[i] = string.char(i) end
    nextCode = 257
    prev = nil
  end
  resetDict()
  for i = 1, n do
    local b = i * 2 - 1
    local code = string.byte(data, b) * 256 + string.byte(data, b + 1)
    if code == CLEAR then
      resetDict()
    else
      local entry
      if code < nextCode and dict[code] then
        entry = dict[code]
      elseif prev then
        entry = prev .. string.sub(prev, 1, 1)
      else
        __fail("lzw corrupt")
      end
      out[#out + 1] = entry
      if prev and nextCode <= 65535 then
        dict[nextCode] = prev .. string.sub(entry, 1, 1)
        nextCode = nextCode + 1
      end
      prev = entry
    end
  end
  return table.concat(out)
end
`;

// The user's anti-tamper checksum routine, kept nearly verbatim.
export const LUA_ANTITAMPER = `
local __antitamper = function()
  local source = debug.getinfo(1).source
  local checksum = 0
  if source then
    for i = 1, #source do
      checksum = (checksum + string.byte(source, i) * i) % 4294967295
    end
  end
  if task and task.wait then task.wait(0.1) end
  local current = debug.getinfo(1).source
  local currentsum = 0
  if current then
    for i = 1, #current do
      currentsum = (currentsum + string.byte(current, i) * i) % 4294967295
    end
  end
  if checksum == currentsum and checksum ~= 0 then
    print("good antitamper")
  else
    print("shit anti")
    __fail("luacshield: integrity check failed")
  end
end
__antitamper()
`;

export const LUA_ANTISANDBOX = `
do
  local envOk = pcall(function()
    if game then
      assert(game.ClassName == "DataModel")
      assert(workspace and type(workspace.GetChildren) == "function")
      assert(type(game.GetService) == "function")
    end
  end)
  if not envOk then __fail("luacshield: environment check failed") end
  if type(ishookfunction) == "function" then
    local candidates = {}
    if type(request) == "function" then candidates[#candidates + 1] = request end
    if syn and type(syn.request) == "function" then candidates[#candidates + 1] = syn.request end
    if http and type(http.request) == "function" then candidates[#candidates + 1] = http.request end
    if fluxus and type(fluxus.request) == "function" then candidates[#candidates + 1] = fluxus.request end
    if type(http_request) == "function" then candidates[#candidates + 1] = http_request end
    for _, fn in ipairs(candidates) do
      local ok, hooked = pcall(ishookfunction, fn)
      if ok and hooked then __fail("luacshield: hooked request detected") end
    end
  end
end
`;

// Ports the user's anti env-log checks (antienvlog.txt) with hard fail on detection.
export const LUA_ANTIENTRYLOG = `
do
  if game then
    pcall(function()
      local Players = game:GetService("Players")
      local ok, player = pcall(function() return Players:GetPlayerFromCharacter(workspace) end)
      if ok and player == nil then
        -- clean executor
      else
        __fail("luacshield: env check 1 failed")
      end
    end)
    pcall(function()
      local GuiService = game:GetService("GuiService")
      local origSelected = GuiService.SelectedObject
      GuiService.SelectedObject = nil
      if task and task.wait then task.wait() end
      if GuiService.SelectedObject ~= nil then __fail("luacshield: env check 2 failed") end
      local fakePart = Instance.new("Part")
      local setOk = pcall(function() GuiService.SelectedObject = fakePart end)
      if setOk then __fail("luacshield: env check 2b failed") end
      GuiService.SelectedObject = origSelected
    end)
    pcall(function()
      local Tween123 = game:GetService("TweenService")
      local part21 = Instance.new("Part")
      local badGoal23 = { Position = "detected", CFrame = true, Transparency = "x" }
      local tweenOk = pcall(function() Tween123:Create(part21, TweenInfo.new(1), badGoal23) end)
      if tweenOk then __fail("luacshield: env check 3 failed") end
      local goodTween = Tween123:Create(part21, TweenInfo.new(0.1), { Transparency = 1 })
      goodTween:Play()
      if task and task.wait then task.wait() end
      goodTween:Cancel()
    end)
    pcall(function()
      local DS = game:GetService("DataStoreService")
      local dsOk, store = pcall(DS.GetDataStore, DS, "logger_trap//invalid@chars", "scope")
      if dsOk and store then __fail("luacshield: env check 4 failed") end
      if not dsOk and not tostring(store):lower():find("invalid") and not tostring(store):find("name") then
        -- clean
      else
        -- ok either way, original allowed both branches
      end
      local globalOk = pcall(DS.GetGlobalDataStore, DS)
      if not globalOk then __fail("luacshield: env check 4b failed") end
    end)
    pcall(function()
      local StarterPlayer = game:GetService("StarterPlayer")
      local sps = StarterPlayer:FindFirstChild("StarterPlayerScripts")
      if not sps then __fail("luacshield: env check 5 failed") end
      local childCount = #sps:GetChildren()
      if childCount < 2 then __fail("luacshield: env check 5b failed") end
      local testScript = Instance.new("LocalScript")
      testScript.Source = "sigma boi"
      testScript.Parent = sps
      local stillThere = sps:FindFirstChild(testScript.Name)
      testScript:Destroy()
      if not stillThere then __fail("luacshield: env check 5c failed") end
    end)
    pcall(function()
      local PromptService = game:GetService("ProximityPromptService")
      local shown, hidden = false, false
      local conShown = PromptService.PromptShown:Connect(function() shown = true end)
      local conHidden = PromptService.PromptHidden:Connect(function() hidden = true end)
      local part = Instance.new("Part")
      part.Parent = workspace
      local prompt = Instance.new("ProximityPrompt")
      prompt.Parent = part
      if task and task.wait then task.wait() end
      conShown:Disconnect()
      conHidden:Disconnect()
      prompt:Destroy()
      part:Destroy()
      if not shown or not hidden then __fail("luacshield: env check 6 failed") end
    end)
    pcall(function()
      local Teams = game:GetService("Teams")
      local neutral = Teams:FindFirstChild("Neutral")
      if neutral and neutral.TeamColor ~= BrickColor.new("Medium stone grey") then
        __fail("luacshield: env check 7 failed")
      end
    end)
    pcall(function()
      local GroupService = game:GetService("GroupService")
      local lp = game:GetService("Players").LocalPlayer
      if lp then
        local ok, groups = pcall(function() return GroupService:GetGroupsAsync(lp.UserId) end)
        if ok and groups then
          if #groups < 1 then
            -- small account, allowed
          else
            -- clean
          end
        else
          __fail("luacshield: env check 8 failed")
        end
      end
    end)
  end
end
`;

export const LUA_ANTIDUMP = `
do
  pcall(function()
    if debug and type(debug.gethook) == "function" then
      local hook = debug.gethook()
      if hook then __fail("luacshield: debug hook detected") end
    end
  end)
  pcall(function()
    if type(ishookfunction) == "function" then
      local targets = {}
      if type(loadstring) == "function" then targets[#targets + 1] = loadstring end
      if type(load) == "function" then targets[#targets + 1] = load end
      if type(getrawmetatable) == "function" then targets[#targets + 1] = getrawmetatable end
      if type(getgenv) == "function" then targets[#targets + 1] = getgenv end
      for _, fn in ipairs(targets) do
        local ok, hooked = pcall(ishookfunction, fn)
        if ok and hooked then __fail("luacshield: core hook detected") end
      end
    end
  end)
  pcall(function()
    if type(getrawmetatable) == "function" and type(setreadonly) == "function" then
      local mt = getrawmetatable(_G)
      if mt and getmetatable(_G) then __fail("luacshield: metatable tamper detected") end
    end
  end)
  if not (type(loadstring) == "function" or type(load) == "function") then
    __fail("luacshield: no loader function")
  end
end
`;
