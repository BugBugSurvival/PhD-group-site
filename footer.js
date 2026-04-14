/* =============================================================
   footer.js — footer blurb, columns, copyright, tagline.
   ============================================================= */

window.SITE = window.SITE || {};

window.SITE.footer = {
  blurb:
    "VASE — Verification And Synthesis, Edinburgh. Based in the School of Informatics, University of Edinburgh, and led by Dr Elizabeth Polgreen.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "About", href: "index.html#about" },
        { label: "Research", href: "index.html#research" },
        { label: "People", href: "index.html#people" },
        { label: "News", href: "index.html#news" },
        { label: "Artefacts", href: "index.html#artefacts" },
        { label: "Join us", href: "index.html#join" },
      ],
    },
    {
      title: "Elsewhere",
      links: [
        { label: "PI homepage", href: "https://polgreen.github.io/" },
        { label: "GitHub", href: "https://github.com/polgreen" },
        {
          label: "Google Scholar",
          href: "https://scholar.google.com/citations?user=wFYhUkIAAAAJ",
        },
        {
          label: "School of Informatics",
          href: "https://www.ed.ac.uk/informatics/",
        },
      ],
    },
  ],
  copyright: "© 2026 VASE — Verification And Synthesis, Edinburgh",
  tagline: 'Built in Scotland with Love <span style="color: var(--white);">♥</span>',
};
