/* =============================================================
   RENDERING — you should not need to edit this file.
   Reads window.SITE (populated by site-meta.js, about.js,
   research.js, join.js, footer.js, people.js, news.js and
   artefacts.js) and populates each page. Sections only render
   if their mount point exists on the current page.
   ============================================================= */
(function () {
  const S = window.SITE;
  if (!S) {
    console.error(
      "window.SITE is missing — check that the data files (site-meta.js, about.js, research.js, join.js, footer.js, people.js, news.js, artefacts.js) loaded before render.js."
    );
    return;
  }

  /* ---------- tiny helpers ---------- */
  const $ = (sel) => document.querySelector(sel);

  const h = (tag, attrs = {}, children = []) => {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") el.className = v;
      else if (k === "html") el.innerHTML = v;
      else if (k === "text") el.textContent = v;
      else el.setAttribute(k, v);
    }
    (Array.isArray(children) ? children : [children])
      .filter(Boolean)
      .forEach((c) =>
        el.appendChild(typeof c === "string" ? document.createTextNode(c) : c)
      );
    return el;
  };

  const formatHeadline = (str) =>
    str
      .replace(/\{\{accent:(.*?)\}\}/g, '<span class="hero__accent">$1</span>')
      .replace(
        /\{\{green:(.*?)\}\}/g,
        '<em style="font-style:normal;color:var(--matcha-600);">$1</em>'
      );

  // Build an anchor from a { label, href } object with a given class.
  const makeLink = (cls, link) => {
    const a = document.createElement("a");
    a.className = cls;
    a.href = link.href;
    if (/\bbtn\b/.test(cls)) {
      const span = document.createElement("span");
      span.className = "btn__label";
      span.setAttribute("data-label", link.label);
      span.textContent = link.label;
      a.appendChild(span);
    } else {
      a.textContent = link.label;
    }
    return a;
  };

  /* ---------- 1. META (title + nav brand, both pages) ---------- */
  document.title = S.meta.groupName;
  if ($("#brand-name")) $("#brand-name").textContent = S.meta.groupName;

  /* ---------- 2. HERO (index.html only) ---------- */
  if ($("#hero-eyebrow")) {
    $("#hero-eyebrow").textContent = S.meta.eyebrow;
    $("#hero-headline").innerHTML = formatHeadline(S.meta.headline);
    $("#hero-subhead").textContent = S.meta.subhead;

    const statsMount = $("#hero-stats");
    const studentCount = (S.students || []).length;
    S.meta.stats.forEach((s) => {
      const value = String(s.value).replace(
        /\{\{studentCount\}\}/g,
        studentCount
      );
      const tag = s.href ? "a" : "div";
      const attrs = { class: "meta-card" };
      if (s.href) attrs.href = s.href;
      statsMount.appendChild(
        h(tag, attrs, [
          h("div", { class: "meta-card__label", text: s.label }),
          h("div", { class: "meta-card__value", text: value }),
        ])
      );
    });
  }

  /* ---------- 3. ABOUT (index.html only) ---------- */
  if ($("#about-heading")) {
    $("#about-heading").textContent = S.about.heading;
    const aboutMount = $("#about-body");
    S.about.paragraphs.forEach((p, i) => {
      aboutMount.appendChild(
        h("p", { html: p, style: i > 0 ? "color:var(--warm-charcoal);" : "" })
      );
    });
  }

  /* ---------- 4. RESEARCH (index.html only) ---------- */
  if ($("#research-mount")) {
    const researchMount = $("#research-mount");
    S.research.forEach((theme) => {
      const block = h("div", {
        class: `colorblock colorblock--${theme.color}`,
      });
      const container = h("div", { class: "container" });
      container.appendChild(
        h("span", {
          class: "eyebrow",
          text: `Theme ${theme.number} / ${theme.title}`,
        })
      );
      container.appendChild(
        h("h2", {
          class: "section-heading",
          style: "margin-top:20px;",
          text: theme.heading,
        })
      );
      container.appendChild(
        h("p", {
          class: "lede",
          style: theme.color === "slushie" ? "color:var(--black);" : "",
          text: theme.lede,
        })
      );

      const grid = h("div", { class: "topic-grid" });
      theme.topics.forEach((t) => {
        const card = h("article", { class: "topic-card" }, [
          h("div", {
            class: "topic-card__tag",
            style:
              theme.color === "slushie"
                ? "color:var(--slushie-800);"
                : theme.color === "ube"
                  ? "color:var(--ube-800);"
                  : "",
            text: t.tag,
          }),
          h("h3", { text: t.title }),
          h("p", { text: t.body }),
        ]);
        grid.appendChild(card);
      });
      container.appendChild(grid);
      block.appendChild(container);
      researchMount.appendChild(block);
    });
  }

  /* ---------- 5. PEOPLE (index.html only) ---------- */
  if ($("#lead-name")) {
    const lead = S.lead;
    $("#lead-photo").src = lead.photo;
    $("#lead-photo").alt = lead.name;
    $("#lead-role").textContent = lead.role;
    $("#lead-name").textContent = lead.name;
    $("#lead-title").textContent = lead.title;
    $("#lead-bio").innerHTML = lead.bio; // HTML so you can put links
    const leadLinks = $("#lead-links");
    lead.links.forEach((l) => leadLinks.appendChild(makeLink("pill-link", l)));

    const studentMount = $("#students-mount");
    S.students.forEach((st) => {
      const avatar = st.photo
        ? h("img", {
          class: "student-card__avatar student-card__avatar--photo",
          src: st.photo,
          alt: st.name,
        })
        : h("div", { class: "student-card__avatar", text: st.initials });

      const children = [
        avatar,
        h("h4", { text: st.name }),
        h("div", { class: "student-card__meta", text: st.years }),
        h("p", { class: "student-card__sup", html: st.bio }), // HTML
      ];

      if (Array.isArray(st.links) && st.links.length) {
        const linkRow = h("div", { class: "student-card__links" });
        st.links.forEach((l) => linkRow.appendChild(makeLink("pill-link", l)));
        children.push(linkRow);
      }

      studentMount.appendChild(
        h(
          "article",
          { class: `student-card student-card--${st.color}` },
          children
        )
      );
    });
  }

  /* ---------- 6. NEWS (index.html only) ---------- */
  if ($("#news-mount")) {
    const newsMount = $("#news-mount");
    S.news.forEach((n) => {
      const hrefMatch = n.body.match(/href="([^"]+)"/);
      const attrs = { class: `news-item news-item--${n.color}` };
      if (hrefMatch) {
        attrs.style = "cursor:pointer;";
        attrs.title = hrefMatch[1];
      }
      const article = h("article", attrs, [
        h("div", { class: "news-item__date", text: n.date }),
        h("div", { class: "news-item__body" }, [
          h("span", { class: `tag tag--${n.color}`, text: n.tag }),
          document.createTextNode(" "),
          h("span", { html: n.body }),
        ]),
      ]);
      if (hrefMatch) {
        article.addEventListener("click", (e) => {
          if (e.target.closest("a")) return;
          window.open(hrefMatch[1], "_blank", "noopener");
        });
      }
      newsMount.appendChild(article);
    });
  }

  /* ---------- 7. ARTEFACTS ---------- */
  if ($("#artefacts-mount")) {
    const kindColor = {
      code: "matcha",
      slides: "lemon",
      paper: "slushie",
      video: "pom",
      dataset: "ube",
    };

    const mount = $("#artefacts-mount");
    S.artefacts.forEach((a) => {
      const color = kindColor[a.kind] || "matcha";
      const meta = [a.year, a.venue].filter(Boolean).join(" · ");

      const card = h(
        "article",
        { class: `artefact-card artefact-card--${color}` },
        [
          h("div", { class: "artefact-card__kind", text: a.kind }),
          h("h3", { class: "artefact-card__title", text: a.title }),
          meta ? h("div", { class: "artefact-card__meta", text: meta }) : null,
          a.authors
            ? h("div", { class: "artefact-card__authors", text: a.authors })
            : null,
          h("p", { class: "artefact-card__desc", html: a.description || "" }),
        ]
      );

      if (Array.isArray(a.links) && a.links.length) {
        const row = h("div", { class: "artefact-card__links" });
        a.links.forEach((l) => row.appendChild(makeLink("pill-link", l)));
        card.appendChild(row);
      }

      mount.appendChild(card);
    });
  }

  /* ---------- 8. JOIN (index.html only) ---------- */
  if ($("#join-heading")) {
    $("#join-heading").textContent = S.join.heading;
    $("#join-body").textContent = S.join.body;
    const joinCtas = $("#join-ctas");
    S.join.ctas.forEach((c) => {
      const cls = c.style === "ghost" ? "btn btn--ghost" : "btn";
      joinCtas.appendChild(makeLink(cls, c));
    });
  }

  /* ---------- 9. FOOTER (both pages) ---------- */
  if ($("#footer-lockup")) {
    $("#footer-lockup").textContent = S.meta.groupName;
    $("#footer-blurb").textContent = S.footer.blurb;
    $("#footer-copyright").textContent = S.footer.copyright;
    $("#footer-tagline").innerHTML = S.footer.tagline;

    const footerCols = $("#footer-columns");
    S.footer.columns.forEach((col) => {
      const wrap = h("div", {}, [h("h4", { text: col.title })]);
      col.links.forEach((l) => wrap.appendChild(makeLink("footer-link", l)));
      footerCols.appendChild(wrap);
    });
  }
})();
