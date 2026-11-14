(function () {
  const params = new URLSearchParams(location.search);
  const preview = params.has("preview");
  const key = SITE.profiles[params.get("for")] ? params.get("for") : "default";
  const P = SITE.profiles[key];
  const $ = (id) => document.getElementById(id);

  /* ---------- TODO handling ---------- */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const isTodo = (s) => typeof s === "string" && s.includes("TODO");
  const publicPart = (s) => (isTodo(s) ? s.slice(0, s.indexOf("TODO")).trim() : String(s || "").trim());
  const show = (s) => preview || (publicPart(s).length > 0 && !publicPart(s).endsWith(":"));
  function txt(s) {
    if (!isTodo(s)) return esc(s);
    const before = publicPart(s);
    if (!preview) return esc(before);
    return (before ? esc(before) + " " : "") + '<mark class="todo">' + esc(s.slice(s.indexOf("TODO"))) + "</mark>";
  }
  const ready = (p) => preview || [p.problem, p.approach, p.outcome].filter(show).length >= 2;

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((es) => es.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.1 });
  function observe() { document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el)); }

  /* ---------- Generated rose-gold covers ---------- */
  const PALETTES = [
    ["#B76E79", "#E9B9A8"], ["#9C5A66", "#DDA594"], ["#C98C7E", "#F1D2C2"],
    ["#A8606E", "#E7B3B8"], ["#8E4B57", "#D69A8E"], ["#C27D86", "#F0C7BA"]
  ];
  function cover(p, wide) {
    const [a, b] = PALETTES[p.hue % PALETTES.length];
    const w = wide ? 1200 : 640, h = wide ? 400 : 360, id = "g" + p.id + (wide ? "w" : "");
    let bars = "";
    for (let i = 0; i < 9; i++) {
      const bh = 30 + ((i * 37 + p.title.length * 7) % 110);
      bars += `<rect x="${w * 0.08 + i * (w * 0.045)}" y="${h - bh - 22}" width="${w * 0.028}" height="${bh}" rx="5" fill="#fff" opacity="${0.16 + (i % 3) * 0.06}"/>`;
    }
    const pts = Array.from({ length: 8 }, (_, i) => `${w * 0.52 + i * (w * 0.06)},${h * 0.62 - Math.sin(i * 0.9 + p.hue) * h * 0.14 - i * h * 0.035}`).join(" ");
    return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
      <pattern id="${id}d" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="#fff" opacity=".28"/></pattern></defs>
      <rect width="${w}" height="${h}" fill="url(#${id})"/>
      <rect width="${w}" height="${h}" fill="url(#${id}d)"/>
      <circle cx="${w * 0.86}" cy="${h * 0.12}" r="${h * 0.5}" fill="#fff" opacity=".09"/>
      <circle cx="${w * 0.86}" cy="${h * 0.12}" r="${h * 0.3}" fill="#fff" opacity=".09"/>
      ${bars}
      <polyline points="${pts}" fill="none" stroke="#fff" stroke-width="${wide ? 5 : 4}" stroke-linecap="round" stroke-linejoin="round" opacity=".75"/>
    </svg>`;
  }

  /* ---------- Preview bar ---------- */
  if (preview) {
    document.body.classList.add("preview");
    const bar = $("preview-bar");
    bar.hidden = false;
    bar.innerHTML = "<strong>Preview</strong>" +
      Object.entries(SITE.profiles).map(([k, p]) => {
        const q = (k === "default" ? "?preview=1" : "?for=" + k + "&preview=1") + location.hash;
        return `<a href="${q}" class="${k === key ? "active" : ""}">${esc(p.label)}</a>`;
      }).join("") +
      '<span class="hint">Yellow = missing info, hidden on the public site</span>';
  }

  /* ---------- Header ---------- */
  $("cover-name").textContent = SITE.name;
  $("cover-title").textContent = SITE.title;
  $("cover-quote").textContent = SITE.quote;
  $("name").textContent = SITE.name + " · Supply Chain Portfolio";
  $("availability").textContent = SITE.availability;
  $("location").textContent = SITE.location;
  if (SITE.photo) { $("avatar").style.backgroundImage = `url(${SITE.photo})`; $("avatar").textContent = ""; }
  $("link-pills").innerHTML = SITE.links
    .filter((l) => l.url || preview)
    .map((l) => `<a class="pill${l.url ? "" : " off"}" href="${esc(l.url || "#")}" ${l.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${esc(l.label)}${l.url ? "" : " (add file)"}</a>`)
    .join("");
  $("footer-name").textContent = "© " + new Date().getFullYear() + " " + SITE.name;

  /* ---------- Overview ---------- */
  $("about").innerHTML = P.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("metrics").innerHTML = P.metrics.map((m) => SITE.metrics[m]).filter(Boolean)
    .map((m) => `<div class="metric reveal"><strong class="grad-text">${esc(m.value)}</strong><span>${esc(m.label)}</span></div>`).join("");
  $("logos").innerHTML = SITE.organizations.map((o) =>
    `<${o.url ? `a href="${esc(o.url)}" target="_blank" rel="noopener"` : "div"} class="logo-card reveal">
      <span class="logo-img">${o.logo ? `<img src="${esc(o.logo)}" alt="${esc(o.name)} logo" loading="lazy">` : `<span class="logo-badge">${esc(o.short)}</span>`}</span>
      <b>${esc(o.name)}</b><small>${esc(o.kind)}</small></${o.url ? "a" : "div"}>`).join("");

  const byId = Object.fromEntries(SITE.projects.map((p) => [p.id, p]));
  const ordered = P.projects.map((id) => byId[id]).filter(Boolean).filter(ready);
  const card = (p) => {
    const res = show(p.result.value) ? `<span class="big">${txt(p.result.value)}</span>` : "";
    const tools = p.tools.filter(show);
    return `<a class="card reveal" href="#work/${p.id}">
      <div class="card-cover">${cover(p)}<span class="badge">${esc(p.type)} · ${esc(p.period)}</span>${res}</div>
      <div class="card-body"><h3>${esc(p.title)}</h3><span class="org">${esc(p.org)}</span>
      ${tools.length ? `<span class="tools">${tools.map(txt).join(" · ")}</span>` : ""}</div></a>`;
  };
  $("featured").innerHTML = ordered.slice(0, 3).map(card).join("");
  $("story-teaser-title").textContent = SITE.story.title;
  $("story-teaser-intro").textContent = SITE.story.intro;

  /* ---------- Case studies + filters ---------- */
  const allShown = [...ordered, ...SITE.projects.filter((p) => !P.projects.includes(p.id) && ready(p))];
  const types = ["All", ...new Set(allShown.map((p) => p.type))];
  let filter = "All";
  function renderGallery() {
    $("filters").innerHTML = types.map((t) => `<button class="${t === filter ? "active" : ""}" data-f="${esc(t)}">${esc(t)}</button>`).join("");
    $("gallery").innerHTML = allShown.filter((p) => filter === "All" || p.type === filter).map(card).join("");
    observe();
  }
  $("filters").addEventListener("click", (e) => { const f = e.target.dataset.f; if (f) { filter = f; renderGallery(); } });
  renderGallery();

  function renderCase(id) {
    const p = byId[id];
    if (!p || !ready(p)) { location.hash = "#work"; return; }
    const i = allShown.indexOf(p);
    const prev = allShown[i - 1], next = allShown[i + 1];
    const sec = (title, body) => (body ? `<section><h2>${title}</h2>${body}</section>` : "");
    const para = (s) => (show(s) ? `<p>${txt(s)}</p>` : "");
    const list = (arr) => { const a = (arr || []).filter(show); return a.length ? `<ul>${a.map((x) => `<li>${txt(x)}</li>`).join("")}</ul>` : ""; };
    const meta = [["Context", p.org], ["Role", p.role], ["Period", p.period], ["Tools", p.tools.join(", ")]]
      .filter(([, v]) => show(v)).map(([k, v]) => `<div><b>${k}</b><span>${txt(v)}</span></div>`).join("");
    $("crumbs").innerHTML = `<a href="#overview">${esc(SITE.name)}</a> / <a href="#work">Case Studies</a> / <span>${esc(p.title)}</span>`;
    $("case").innerHTML = `
      <div class="case-hero">${cover(p, true)}${show(p.result.value) ? `<div class="big"><strong>${txt(p.result.value)}</strong>${txt(p.result.label)}</div>` : ""}</div>
      <span class="eyebrow" style="margin-top:24px">${esc(p.type)} case study</span>
      <h1>${esc(p.title)}</h1>
      <div class="case-meta">${meta}</div>
      ${sec("The challenge", para(p.problem))}
      ${sec("Approach", para(p.approach))}
      ${window.PRACTICE && window.PRACTICE[p.id] ? '<section class="wide"><h2>Analysis &amp; visuals</h2><div id="practice-viz"></div></section>' : preview ? sec("Analysis & visuals", '<div class="chart-slot">Chart / dashboard goes here (hidden on the public site until added)</div>') : ""}
      ${sec("Results", para(p.outcome))}
      ${sec("Recommendations", list(p.recommendations))}
      ${sec("Reflection", para(p.reflection))}
      ${sec("Next steps", list(p.next))}
      ${p.type === "Practice" ? `<p class="practice-note">Practice project with a simulated dataset, built to mirror the planning problems in Supply Chain Analyst roles. ${p.code ? `<a href="${esc(p.code)}" target="_blank" rel="noopener">View the Python code &amp; data on GitHub &rarr;</a>` : ""}</p>` : ""}
      <nav class="case-nav">${prev ? `<a href="#work/${prev.id}">&larr; ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a href="#work/${next.id}">${esc(next.title)} &rarr;</a>` : ""}</nav>`;
    if (window.PRACTICE && window.PRACTICE[p.id] && window.renderPractice) window.renderPractice($("practice-viz"), window.PRACTICE[p.id]);
  }

  /* ---------- Story ---------- */
  $("story-title").textContent = SITE.story.title;
  $("story-intro").textContent = SITE.story.intro;
  $("chapters").innerHTML = SITE.story.chapters.map((c) =>
    `<li class="chapter reveal"><span class="kicker grad-text">${esc(c.kicker)}</span><div><h3>${esc(c.title)}</h3><p>${txt(c.text)}</p></div></li>`).join("");
  $("takeaways").innerHTML = SITE.story.takeaways.map((t) => `<span class="chip">${esc(t)}</span>`).join("");

  /* ---------- Skills tabs ---------- */
  let skillTab = P.skillTab || "software";
  function renderSkills() {
    $("skill-tabs").innerHTML = Object.entries(SITE.skills)
      .map(([k, g]) => `<button class="${k === skillTab ? "active" : ""}" data-s="${k}">${esc(g.label)}</button>`).join("");
    $("skill-grid").innerHTML = SITE.skills[skillTab].items
      .map((s, i) => `<div class="skill" style="animation-delay:${i * 30}ms"><i>${esc(s.trim()[0])}</i>${esc(s)}</div>`).join("");
  }
  $("skill-tabs").addEventListener("click", (e) => { const s = e.target.dataset.s; if (s) { skillTab = s; renderSkills(); } });
  renderSkills();

  /* ---------- Experience ---------- */
  $("timeline").innerHTML = SITE.experience.map((e) =>
    `<li class="reveal"><div class="tl-head"><h3>${esc(e.role)}</h3><span class="tl-period">${esc(e.period)}</span></div>
     <p class="tl-org">${esc(e.org)} · ${esc(e.place)}</p><ul>${e.points.map((x) => `<li>${txt(x)}</li>`).join("")}</ul></li>`).join("");
  $("education").innerHTML = SITE.education.map((e) =>
    `<div class="edu reveal"><h4>${esc(e.degree)}</h4><p>${esc(e.org)} · ${esc(e.period)}</p>${show(e.note) ? `<p>${txt(e.note)}</p>` : ""}</div>`).join("");

  /* ---------- Contact ---------- */
  $("contact-list").innerHTML = SITE.links.filter((l) => l.url).map((l) =>
    `<a class="contact-row" href="${esc(l.url)}" ${l.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${esc(l.label)}<span>${esc(l.url.replace(/^mailto:|^https?:\/\/(www\.)?/, ""))} &rarr;</span></a>`).join("");
  $("contact-line").textContent = SITE.availability + " · " + SITE.location;

  /* ---------- Router ---------- */
  const TABS = ["overview", "work", "story", "skills", "experience", "contact"];
  function route() {
    const h = location.hash.replace("#", "") || "overview";
    const [tab, sub] = h.split("/");
    const panel = tab === "work" && sub ? "case" : TABS.includes(tab) ? tab : "overview";
    document.querySelectorAll(".panel").forEach((el) => (el.hidden = el.id !== "panel-" + panel));
    document.querySelectorAll("#tabs a").forEach((a) => a.classList.toggle("active", a.dataset.tab === (panel === "case" ? "work" : panel)));
    if (panel === "case") renderCase(sub);
    const bar = document.querySelector(".tabs-bar");
    if (window.scrollY > bar.offsetTop) window.scrollTo(0, bar.offsetTop - (preview ? 46 : 0));
    observe();
  }
  window.addEventListener("hashchange", route);

  route();
})();
