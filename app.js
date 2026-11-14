(function () {
  const preview = new URLSearchParams(location.search).has("preview");
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
  }), { threshold: 0.08 });
  const observe = () => document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));

  /* ---------- Generated rose-gold covers ---------- */
  const PALETTES = [["#B76E79", "#E9B9A8"], ["#9C5A66", "#DDA594"], ["#C98C7E", "#F1D2C2"], ["#A8606E", "#E7B3B8"], ["#8E4B57", "#D69A8E"], ["#C27D86", "#F0C7BA"]];
  let coverSeq = 0;
  function cover(p, wide) {
    const [a, b] = PALETTES[p.hue % PALETTES.length];
    const w = wide ? 1200 : 640, h = wide ? 400 : 360, id = "g" + p.id + "-" + (++coverSeq);
    let bars = "";
    for (let i = 0; i < 9; i++) {
      const bh = 30 + ((i * 37 + p.title.length * 7) % 110);
      bars += `<rect x="${w * 0.08 + i * (w * 0.045)}" y="${h - bh - 22}" width="${w * 0.028}" height="${bh}" rx="5" fill="#fff" opacity="${0.16 + (i % 3) * 0.06}"/>`;
    }
    const pts = Array.from({ length: 8 }, (_, i) => `${w * 0.52 + i * (w * 0.06)},${h * 0.62 - Math.sin(i * 0.9 + p.hue) * h * 0.14 - i * h * 0.035}`).join(" ");
    return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
      <pattern id="${id}d" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="#fff" opacity=".28"/></pattern></defs>
      <rect width="${w}" height="${h}" fill="url(#${id})"/><rect width="${w}" height="${h}" fill="url(#${id}d)"/>
      <circle cx="${w * 0.86}" cy="${h * 0.12}" r="${h * 0.5}" fill="#fff" opacity=".09"/><circle cx="${w * 0.86}" cy="${h * 0.12}" r="${h * 0.3}" fill="#fff" opacity=".09"/>
      ${bars}<polyline points="${pts}" fill="none" stroke="#fff" stroke-width="${wide ? 5 : 4}" stroke-linecap="round" stroke-linejoin="round" opacity=".75"/></svg>`;
  }

  if (preview) { document.body.classList.add("preview"); $("preview-bar").hidden = false; }

  /* ---------- Header ---------- */
  $("cover-name").textContent = SITE.name;
  $("cover-title").textContent = SITE.coverTitle;
  $("cover-quote").textContent = SITE.quote;
  $("headline").textContent = SITE.headline;
  $("availability").textContent = SITE.availability;
  $("location").textContent = SITE.location;
  $("avatar").src = SITE.photo;
  const extLink = (url) => (url.startsWith("http") ? ' target="_blank" rel="noopener"' : "");
  const contactsAll = [...SITE.contacts, ...(SITE.resume ? [{ label: "Resume", text: "Download CV (PDF)", url: SITE.resume, icon: "" }] : [])];
  $("contact-inline").innerHTML = contactsAll.map((c) =>
    `<a href="${esc(c.url)}"${extLink(c.url)}>${c.icon ? `<img src="${esc(c.icon)}" alt="">` : ""}<span>${esc(c.text)}</span></a>`).join("");
  $("footer-name").textContent = "© " + new Date().getFullYear() + " " + SITE.name;

  /* ---------- Overview ---------- */
  $("about").innerHTML = SITE.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("logos").innerHTML = SITE.organizations.map((o) => `
    <div class="logo-card reveal">
      <a class="logo-img" href="${esc(o.url)}" target="_blank" rel="noopener" title="${esc(o.name)} website"><img src="${esc(o.logo)}" alt="${esc(o.name)} logo" loading="lazy"></a>
      <a class="logo-name" href="${esc(o.url)}" target="_blank" rel="noopener">${esc(o.name)} <span aria-hidden="true">↗</span></a>
      <a class="logo-sub" href="${esc(o.link)}">${esc(o.sub)} &rarr;</a>
    </div>`).join("");

  const byId = Object.fromEntries(SITE.projects.map((p) => [p.id, p]));
  const skillById = Object.fromEntries(SITE.skills.map((s) => [s.id, s]));
  const visible = SITE.projects.filter(ready);
  const skillIcon = (s) => (s.icon ? `<img src="${esc(s.icon)}" alt="">` : `<i>${esc(s.badge || s.name[0])}</i>`);
  const card = (p) => {
    const res = show(p.result.value) ? `<span class="big">${txt(p.result.value)}</span>` : "";
    return `<a class="card reveal" href="#project/${p.id}">
      <div class="card-cover">${cover(p)}<span class="badge">${esc(p.type)} · ${esc(p.period)}</span>${res}</div>
      <div class="card-body"><h3>${esc(p.title)}</h3><span class="org">${esc(p.org)}</span>
      <span class="card-skills">${p.skills.map((k) => skillById[k] ? `<span>${esc(skillById[k].name)}</span>` : "").join("")}</span></div></a>`;
  };
  $("featured").innerHTML = SITE.featured.map((id) => byId[id]).filter((p) => p && ready(p)).map(card).join("");
  $("story-teaser-title").textContent = SITE.story.title;
  $("story-teaser-intro").textContent = SITE.story.intro;

  /* ---------- Education ---------- */
  const projLink = (pr) => (pr.link && byId[pr.link] && ready(byId[pr.link]) ? `<a href="#project/${pr.link}">${esc(pr.text)} &rarr;</a>` : esc(pr.text));
  const entryHead = (e, title, sub) => `
    <div class="entry-head">
      <a class="entry-logo" href="${esc(e.url)}" target="_blank" rel="noopener"><img src="${esc(e.logo)}" alt="${esc(e.org)} logo" loading="lazy"></a>
      <div><h3>${esc(title)}</h3><p class="entry-org">${sub}</p></div>
      <span class="entry-period">${esc(e.period)}<small>${esc(e.place)}</small></span>
    </div>`;
  $("education-list").innerHTML = SITE.education.map((e) => `
    <article class="entry reveal" id="entry-${e.id}">
      ${entryHead(e, e.degree, `<a href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.org)} ↗</a>`)}
      ${e.details.filter(show).map((d) => `<p class="entry-text">${txt(d)}</p>`).join("")}
      ${e.projects.length ? `<h4>Projects</h4><ul class="entry-projects">${e.projects.map((pr) => `<li>${projLink(pr)}</li>`).join("")}</ul>` : ""}
    </article>`).join("");
  $("certificates").innerHTML = SITE.certificates.map((c) => `<div class="edu reveal"><h4>${esc(c.name)}</h4><p>${esc(c.note)}</p></div>`).join("");
  $("languages").innerHTML = SITE.languages.map((l) =>
    `<div class="lang reveal"><div class="lang-top"><strong>${esc(l.name)}</strong><span>${esc(l.level)}</span></div><div class="bar"><i style="width:${l.pct}%"></i></div></div>`).join("");

  /* ---------- Experience ---------- */
  $("experience-list").innerHTML = SITE.experience.map((e) => `
    <article class="entry reveal" id="entry-${e.id}">
      ${entryHead(e, e.role, `<a href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.org)} ↗</a>${e.orgNote ? ` · <span>${esc(e.orgNote)}</span>` : ""}`)}
      <ul class="entry-points">${e.points.map((pt) => `<li><b>${esc(pt.title)}:</b> ${txt(pt.text)}</li>`).join("")}</ul>
      ${e.projects.length ? `<h4>Projects</h4><ul class="entry-projects">${e.projects.map((pr) => `<li>${projLink(pr)}</li>`).join("")}</ul>` : ""}
    </article>`).join("");

  /* ---------- Projects: type tabs + skill rail ---------- */
  const TYPES = [["all", "All"], ["work", "Work"], ["academic", "Academic"], ["personal", "Personal project"]];
  const typeOf = { work: "Work", academic: "Academic", personal: "Personal project" };
  let fType = "all", fSkill = null;
  function renderProjects() {
    $("filters").innerHTML = TYPES.map(([k, l]) => `<a href="#projects/${k}" class="${k === fType ? "active" : ""}">${esc(l)}</a>`).join("");
    const inType = visible.filter((p) => fType === "all" || p.type === typeOf[fType]);
    const counts = Object.fromEntries(SITE.skills.map((s) => [s.id, inType.filter((p) => p.skills.includes(s.id)).length]));
    $("skill-rail").innerHTML = `<h3>Skills</h3><button class="${!fSkill ? "active" : ""}" data-skill="">All skills <em>${inType.length}</em></button>` +
      SITE.skills.filter((s) => counts[s.id]).map((s) =>
        `<button class="${fSkill === s.id ? "active" : ""}" data-skill="${s.id}">${skillIcon(s)}<span>${esc(s.name)}</span><em>${counts[s.id]}</em></button>`).join("");
    const list = inType.filter((p) => !fSkill || p.skills.includes(fSkill));
    $("filter-note").innerHTML = fSkill && skillById[fSkill] ? `Showing ${list.length} project${list.length === 1 ? "" : "s"} using <b>${esc(skillById[fSkill].name)}</b> · <button data-skill="">clear</button>` : "";
    $("gallery").innerHTML = list.map(card).join("") || '<p class="muted">No projects for this filter yet.</p>';
    observe();
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-skill]");
    if (!b) return;
    fSkill = b.dataset.skill || null;
    if (fSkill && !visible.some((p) => (fType === "all" || p.type === typeOf[fType]) && p.skills.includes(fSkill))) fType = "all";
    if (location.hash.startsWith("#projects")) renderProjects(); else location.hash = "#projects/" + fType;
  });

  function renderCase(id) {
    const p = byId[id];
    if (!p || !ready(p)) { location.hash = "#projects"; return; }
    const i = visible.indexOf(p), prev = visible[i - 1], next = visible[i + 1];
    const sec = (title, body) => (body ? `<section><h2>${title}</h2>${body}</section>` : "");
    const para = (s) => (show(s) ? `<p>${txt(s)}</p>` : "");
    const list = (arr) => { const a = (arr || []).filter(show); return a.length ? `<ul>${a.map((x) => `<li>${txt(x)}</li>`).join("")}</ul>` : ""; };
    const meta = [["Context", p.org], ["Role", p.role], ["Period", p.period], ["Tools", p.tools.join(", ")]]
      .filter(([, v]) => show(v)).map(([k, v]) => `<div><b>${k}</b><span>${txt(v)}</span></div>`).join("");
    const slug = Object.keys(typeOf).find((k) => typeOf[k] === p.type) || "all";
    $("crumbs").innerHTML = `<a href="#overview">${esc(SITE.name)}</a> / <a href="#projects">Projects</a> / <a href="#projects/${slug}">${esc(p.type)}</a> / <span>${esc(p.title)}</span>`;
    const hasViz = window.PRACTICE && window.PRACTICE[p.id];
    $("case").innerHTML = `
      <div class="case-hero">${cover(p, true)}${show(p.result.value) ? `<div class="big"><strong>${txt(p.result.value)}</strong>${txt(p.result.label)}</div>` : ""}</div>
      <span class="eyebrow" style="margin-top:24px">${esc(p.type)}</span>
      <h1>${esc(p.title)}</h1>
      <div class="case-skills">${p.skills.map((k) => skillById[k] ? `<button data-skill="${k}">${skillIcon(skillById[k])}${esc(skillById[k].name)}</button>` : "").join("")}</div>
      <div class="case-meta">${meta}</div>
      ${sec("The challenge", para(p.problem))}
      ${sec("Approach", para(p.approach))}
      ${hasViz ? '<section class="wide"><h2>Analysis &amp; visuals</h2><div id="practice-viz"></div></section>' : preview ? sec("Analysis & visuals", '<div class="chart-slot">Chart / dashboard goes here (hidden on the public site until added)</div>') : ""}
      ${p.gallery ? `<section class="wide"><h2>How it works</h2>${p.simulated ? '<p class="sim-banner">All screenshots use <b>simulated data</b>. The original tool contains confidential bank figures, so this demo rebuilds the same structure with invented numbers.</p>' : ""}<div class="steps">${p.gallery.map((g) => `<figure class="step"><a href="${esc(g.src)}" target="_blank" rel="noopener"><img src="${esc(g.src)}" alt="${esc(g.title)}" loading="lazy"></a><figcaption><b>${esc(g.title)}</b>${esc(g.text)}</figcaption></figure>`).join("")}</div>${p.download ? `<a class="btn-download" href="${esc(p.download)}" download>Download the demo workbook (.xlsx, simulated data)</a>` : ""}</section>` : ""}
      ${sec("Results", para(p.outcome))}
      ${sec("Recommendations", list(p.recommendations))}
      ${sec("Reflection", para(p.reflection))}
      ${sec("Next steps", list(p.next))}
      ${p.type === "Personal project" ? `<p class="practice-note">Personal practice project with a simulated dataset, built to mirror the planning problems in Supply Chain Analyst roles. ${p.code ? `<a href="${esc(p.code)}" target="_blank" rel="noopener">View the Python code &amp; data on GitHub &rarr;</a>` : ""}</p>` : ""}
      <nav class="case-nav">${prev ? `<a href="#project/${prev.id}">&larr; ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a href="#project/${next.id}">${esc(next.title)} &rarr;</a>` : ""}</nav>`;
    if (hasViz && window.renderPractice) window.renderPractice($("practice-viz"), window.PRACTICE[p.id]);
  }

  /* ---------- About me ---------- */
  $("hobbies").innerHTML = SITE.hobbies.map((h) => `
    <article class="hobby reveal">
      <div class="hobby-photos n${h.photos.length}">${h.photos.map((src) => `<img src="${esc(src)}" alt="${esc(h.title)}" loading="lazy">`).join("")}</div>
      <div class="hobby-text"><h3>${esc(h.title)}</h3><p>${esc(h.text)}</p></div>
    </article>`).join("");
  $("story-title").textContent = SITE.story.title;
  $("story-intro").textContent = SITE.story.intro;
  $("chapters").innerHTML = SITE.story.chapters.map((c) =>
    `<li class="chapter reveal"><span class="kicker grad-text">${esc(c.kicker)}</span><div><h3>${esc(c.title)}</h3><p>${txt(c.text)}</p></div></li>`).join("");
  $("takeaways").innerHTML = SITE.story.takeaways.map((t) => `<span class="chip">${esc(t)}</span>`).join("");
  $("contact-list").innerHTML = contactsAll.map((c) =>
    `<a class="contact-row" href="${esc(c.url)}"${extLink(c.url)}><span class="cr-left">${c.icon ? `<img src="${esc(c.icon)}" alt="">` : ""}${esc(c.label)}</span><span>${esc(c.text)} &rarr;</span></a>`).join("");
  $("contact-line").textContent = SITE.availability + " · " + SITE.location;

  /* ---------- Router ---------- */
  const TABS = ["overview", "education", "experience", "projects", "about"];
  function route() {
    const [tab, sub] = (location.hash.replace("#", "") || "overview").split("/");
    let panel = tab === "project" ? "project" : TABS.includes(tab) ? tab : "overview";
    document.querySelectorAll(".panel").forEach((el) => (el.hidden = el.id !== "panel-" + panel));
    const active = panel === "project" ? "projects" : panel;
    document.querySelectorAll("#tabs a").forEach((a) => a.classList.toggle("active", a.dataset.tab === active));
    const bar = document.querySelector(".tabs-bar");
    const top = bar.offsetTop - (preview ? 46 : 0);
    let target = null;

    if (panel === "projects") { fType = typeOf[sub] ? sub : "all"; if (!sub) fSkill = null; renderProjects(); }
    if (panel === "project") renderCase(sub);
    if (panel === "about") {
      const s = ["hobbies", "story", "contact"].includes(sub) ? sub : "hobbies";
      document.querySelectorAll(".about-pane").forEach((el) => (el.hidden = el.id !== "pane-" + s));
      document.querySelectorAll("#about-tabs a").forEach((a) => a.classList.toggle("active", a.dataset.sub === s));
    }
    if ((panel === "education" || panel === "experience") && sub) target = $("entry-" + sub);

    if (target) {
      document.querySelectorAll(".entry.flash").forEach((el) => el.classList.remove("flash"));
      target.classList.add("in", "flash");
      window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY - bar.offsetHeight - (preview ? 56 : 12));
    } else if (window.scrollY > top) window.scrollTo(0, top);
    observe();
  }
  window.addEventListener("hashchange", route);
  route();
})();
