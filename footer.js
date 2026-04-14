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
        { label: "About", href: "#about" },
        { label: "Research", href: "#research" },
        { label: "People", href: "#people" },
        { label: "News", href: "#news" },
        { label: "Artefacts", href: "#artefacts" },
        { label: "Join us", href: "#join" },
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
