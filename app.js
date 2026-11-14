(function () {
  const params = new URLSearchParams(location.search);
  const preview = params.has("preview");
  const key = SITE.profiles[params.get("for")] ? params.get("for") : "default";
  const P = SITE.profiles[key];
  const $ = (id) => document.getElementById(id);

  const isTodo = (s) => typeof s === "string" && s.includes("TODO");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Text with TODO markers: public -> TODO part removed; preview -> highlighted
  function txt(s) {
    if (!isTodo(s)) return esc(s);
    const i = s.indexOf("TODO");
    const before = s.slice(0, i).trim();
    if (!preview) return esc(before);
    return (before ? esc(before) + " " : "") + '<mark class="todo">' + esc(s.slice(i)) + "</mark>";
  }
  const publicPart = (s) => (isTodo(s) ? s.slice(0, s.indexOf("TODO")).trim() : (s || "").trim());
  const show = (s) => preview || (publicPart(s).length > 0 && !publicPart(s).endsWith(":"));

  // ---------- Preview bar ----------
  if (preview) {
    document.body.classList.add("preview");
    const bar = $("preview-bar");
    bar.hidden = false;
    bar.innerHTML =
      "<strong>Preview</strong>" +
      Object.entries(SITE.profiles)
        .map(([k, p]) => {
          const q = k === "default" ? "?preview=1" : "?for=" + k + "&preview=1";
          return '<a href="' + q + '" class="' + (k === key ? "active" : "") + '">' + esc(p.label) + "</a>";
        })
        .join("") +
      '<span class="hint">Yellow = missing info, hidden on the public site</span>';
  }

  // ---------- Hero ----------
  $("eyebrow").textContent = P.eyebrow;
  $("headline").textContent = P.headline;
  $("summary").textContent = P.summary;
  $("name").textContent = SITE.name;
  $("degree").textContent = SITE.degree;
  $("location").textContent = SITE.location;
  $("availability").textContent = SITE.availability;
  $("footer-name").textContent = "© " + new Date().getFullYear() + " " + SITE.name;
  ["linkedin-btn", "linkedin-btn-2"].forEach((id) => ($(id).href = SITE.linkedin));
  $("email-btn").href = "mailto:" + SITE.email;
  $("contact-line").textContent = SITE.availability + " · " + SITE.location + " · " + SITE.email;
  if (SITE.photo) {
    $("avatar").style.backgroundImage = "url(" + SITE.photo + ")";
    $("avatar").textContent = "";
  }

  // ---------- Metrics ----------
  $("metrics").innerHTML = P.metrics
    .map((m) => SITE.metrics[m])
    .filter(Boolean)
    .map((m) => '<div class="metric reveal"><strong>' + esc(m.value) + "</strong><span>" + esc(m.label) + "</span></div>")
    .join("");

  // ---------- Projects ----------
  const byId = Object.fromEntries(SITE.projects.map((p) => [p.id, p]));
  $("projects").innerHTML = P.projects
    .map((id) => byId[id])
    .filter(Boolean)
    // On the public site, skip projects whose story is still mostly missing
    .filter((p) => preview || [p.problem, p.approach, p.outcome].filter(show).length >= 2)
    .map((p) => {
      const resOk = show(p.result.value);
      const tools = p.tools.filter(show);
      const part = (label, s) => (show(s) ? "<div><b>" + label + "</b>" + txt(s) + "</div>" : "");
      return (
        '<article class="project reveal">' +
        '<div class="project-top"><div>' +
        '<span class="tag">' + esc(p.type) + " · " + esc(p.period) + "</span>" +
        "<h3>" + esc(p.title) + "</h3>" +
        '<p class="org">' + esc(p.org) + "</p></div>" +
        (resOk ? '<div class="result"><strong>' + txt(p.result.value) + "</strong><span>" + txt(p.result.label) + "</span></div>" : "") +
        "</div>" +
        '<div class="story">' + part("Challenge", p.problem) + part("Approach", p.approach) + part("Result", p.outcome) + "</div>" +
        (tools.length ? '<div class="chips">' + tools.map((t) => '<span class="chip">' + txt(t) + "</span>").join("") + "</div>" : "") +
        "</article>"
      );
    })
    .join("");

  // ---------- Skills ----------
  $("skill-groups").innerHTML = P.skills
    .map((k, i) => SITE.skills[k] && { ...SITE.skills[k], primary: i === 0 })
    .filter(Boolean)
    .map(
      (g) =>
        '<div class="skill-group reveal' + (g.primary ? " primary" : "") + '"><h3>' + esc(g.name) + '</h3><div class="chips">' +
        g.items.map((s) => '<span class="chip">' + esc(s) + "</span>").join("") +
        "</div></div>"
    )
    .join("");

  // ---------- Experience ----------
  $("timeline").innerHTML = SITE.experience
    .map(
      (e) =>
        '<li class="reveal"><div class="tl-head"><h3>' + esc(e.role) + '</h3><span class="tl-period">' + esc(e.period) + "</span></div>" +
        '<p class="tl-org">' + esc(e.org) + " · " + esc(e.place) + "</p>" +
        "<ul>" + e.points.map((x) => "<li>" + txt(x) + "</li>").join("") + "</ul></li>"
    )
    .join("");

  $("education").innerHTML = SITE.education
    .map(
      (e) =>
        '<div class="edu reveal"><h4>' + esc(e.degree) + "</h4><p>" + esc(e.org) + " · " + esc(e.period) + "</p>" +
        (show(e.note) ? "<p>" + txt(e.note) + "</p>" : "") + "</div>"
    )
    .join("");

  $("languages").innerHTML = SITE.languages
    .map(
      (l) =>
        '<div class="lang reveal"><div class="lang-top"><strong>' + esc(l.name) + "</strong><span>" + esc(l.level) +
        '</span></div><div class="bar"><i data-w="' + l.pct + '%"></i></div></div>'
    )
    .join("");

  // ---------- Reveal on scroll ----------
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        en.target.querySelectorAll(".bar i").forEach((b) => (b.style.width = b.dataset.w));
        io.unobserve(en.target);
      }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
