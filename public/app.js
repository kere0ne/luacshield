(async function () {
  const cfg = window.LUACSHIELD || {};
  const hasSupabase = cfg.supabaseUrl && !cfg.supabaseUrl.startsWith("__") && cfg.supabaseAnonKey && !cfg.supabaseAnonKey.startsWith("__");
  let sb = null;
  if (hasSupabase) {
    try {
      const mod = await import("https://esm.sh/@supabase/supabase-js@2");
      sb = mod.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, {
        auth: { persistSession: true, detectSessionInUrl: true }
      });
    } catch (e) { console.warn("auth init failed", e); }
  }
  const headerBtnSlot = document.getElementById("auth-slot");

  async function renderAuth() {
    let user = null;
    if (sb) {
      try { const { data } = await sb.auth.getSession(); user = data.session && data.session.user; }
      catch (_) { user = null; }
    }
    if (user) {
      const name = user.user_metadata && (user.user_metadata.full_name || user.user_metadata.name) || user.email || "user";
      const avatar = user.user_metadata && user.user_metadata.avatar_url;
      headerBtnSlot.innerHTML =
        '<div class="userchip"><img alt="" src="' + (avatar || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='34'%3E%3C/svg%3E") + '" onerror="this.style.display=\'none\'">' +
        '<div><div class="n">' + escapeHtml(String(name).slice(0, 24)) + '</div><div class="s">Discord</div></div></div>' +
        '<button class="btn btn-ghost" id="signout">Sign out</button>';
      document.getElementById("signout").onclick = async () => { await sb.auth.signOut(); location.reload(); };
    } else {
      headerBtnSlot.innerHTML = '<a class="btn btn-plum" href="/start.html">Dashboard</a>';
    }
  }

  function escapeHtml(s) { return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

  const obfForm = document.getElementById("obf-form");
  if (obfForm) {
    const src = document.getElementById("src");
    const presetSel = document.getElementById("preset");
    const out = document.getElementById("output");
    const meta = document.getElementById("meta");
    const runBtn = document.getElementById("run-btn");
    const copyBtn = document.getElementById("copy-btn");
    const dlBtn = document.getElementById("dl-btn");
    dlBtn && (dlBtn.style.display = "none");
    copyBtn && (copyBtn.style.display = "none");

    obfForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const source = src.value;
      if (!source.trim()) { meta.innerHTML = '<span class="badge-err">Paste a script first.</span>'; return; }
      runBtn.disabled = true; runBtn.textContent = "Obfuscating…";
      out.textContent = ""; meta.textContent = "";
      try {
        const r = await fetch("/api/obfuscate", {
          method: "POST", headers: { "content-type": "application/json" },
          body: JSON.stringify({ source, preset: presetSel.value })
        });
        const d = await r.json();
        if (d.ok) {
          out.textContent = d.output;
          meta.innerHTML = '<span class="badge-ok">Done.</span> ' + (source.length / 1024).toFixed(1) + " KB in → " + (d.output.length / 1024).toFixed(1) + " KB out";
          copyBtn.style.display = "inline-flex"; dlBtn.style.display = "inline-flex";
          copyBtn.onclick = () => { navigator.clipboard.writeText(d.output); copyBtn.textContent = "Copied"; setTimeout(() => copyBtn.textContent = "Copy", 1200); };
          dlBtn.onclick = () => {
            const blob = new Blob([d.output], { type: "text/plain" });
            const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "protected.lua"; a.click();
          };
        } else {
          meta.innerHTML = '<span class="badge-err">' + escapeHtml(d.error || "failed") + "</span>";
        }
      } catch (err) {
        meta.innerHTML = '<span class="badge-err">Request failed: ' + escapeHtml(String(err)) + "</span>";
      }
      runBtn.disabled = false; runBtn.textContent = "Obfuscate";
    });
  }

  const loginBtn = document.getElementById("discord-login");
  if (loginBtn && sb) {
    loginBtn.addEventListener("click", async () => {
      loginBtn.disabled = true;
      const { error } = await sb.auth.signInWithOAuth({
        provider: "discord",
        options: { redirectTo: location.origin + "/start.html", scopes: "identify email" }
      });
      if (error) { loginBtn.disabled = false; loginBtn.textContent = "Try again"; }
    });
  } else if (loginBtn && !sb) {
    loginBtn.textContent = "Auth is being set up";
    loginBtn.disabled = true;
  }

  renderAuth();
})();
