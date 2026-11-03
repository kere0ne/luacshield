#!/usr/bin/env python3
"""Run a Lua payload on real Lua 5.1 (lupa) with a Roblox-ish stub, print JSON result."""
import sys, json, os

payload_path = sys.argv[1]
stub_path = sys.argv[2] if len(sys.argv) > 2 else ""
extra = sys.argv[3] if len(sys.argv) > 3 else ""

from lupa.lua51 import LuaRuntime
rt = LuaRuntime()
logs = []
rt.globals()['print'] = lambda *a: logs.append(" ".join(str(x) for x in a))
rt.execute('''
wait = function() end
task = { wait = function() end, spawn = function(f, ...) return f(...) end, defer = function(f, ...) return f(...) end }
typeof = function(v) return type(v) end
warn = function(...) print(...) end

''')
with open(payload_path, 'rb') as f:
    code = f.read().decode('latin-1')
if stub_path:
    with open(stub_path, 'rb') as f:
        stub = f.read().decode('latin-1')
    rt.execute('local f = loadstring(%s, "stub") if f then f() end' % json.dumps(stub))
loader = '''
local f, e = loadstring(%s, "@luacshield/run.lua")
if not f then print("LOADERR", tostring(e)) return end
local ok, err = pcall(f)
if not ok then print("RUNERR", tostring(err)) else print("ALLDONE") end
''' % json.dumps(code)
try:
    rt.execute(loader)
    ok = logs and logs[-1] == "ALLDONE"
    err = ""
    if not ok:
        for l in logs:
            if l.startswith("RUNERR") or l.startswith("LOADERR"):
                err = l
    print(json.dumps({"ok": ok, "error": err, "logs": logs}))
except Exception as e:
    print(json.dumps({"ok": False, "error": "PYERR " + str(e)[:400], "logs": logs}))
