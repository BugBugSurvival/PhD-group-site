/* =============================================================
   config.js — stable site-wide copy & structure.
   -------------------------------------------------------------
   This file holds the parts of the site that change rarely:
     • site meta (group name, hero headline, stats)
     • about section paragraphs
     • research themes and their topic cards
     • the "Join us" CTA section
     • footer blurb, columns and copyright

   Sibling data files (edit these to update content):
     config.js      — this file: site meta, about, research, join, footer
     people.js      — PI and PhD students
     news.js        — news feed
     artefacts.js   — papers, code, slides, videos

   Swatch color keys you can use anywhere a `color` field appears:
     "matcha" | "slushie" | "ube" | "pom" | "lemon"
   ============================================================= */

window.SITE = window.SITE || {};

/* ------------------------------------------------------------
   1. SITE META — title, tagline, institution
   ------------------------------------------------------------ */
window.SITE.meta = {
  groupName: "Synthesis And Verification, Edinburgh",
  institution: "School of Informatics · University of Edinburgh",
  // Short tagline shown as eyebrow on the hero
  eyebrow: "Verification And Synthesis, Edinburgh · School of Informatics",
  // Hero headline. Use {{accent:...}} for the yellow pill and
  // {{green:...}} for green emphasis.
  headline:
    "Building {{accent:trustworthy}} software through {{green:Synthesis and Verification}}.",
  // One-paragraph description under the headline
  subhead:
    "VASE — Verification And Synthesis, Edinburgh — is a research group at the University of Edinburgh working on formal program synthesis, automated verification, and the use of machine learning to make both scale. Led by Dr Elizabeth Polgreen.",
  // Small stats shown under the hero. If an entry has an `href`,
  // its card renders as a link. The token `{{studentCount}}` is
  // replaced at render time with the length of SITE.students so
  // the number stays in sync with people.js automatically.
  stats: [
    { label: "Group lead", value: "Dr Elizabeth Polgreen", href: "#people" },
    { label: "PhD researchers", value: "{{studentCount}} students", href: "#students" },
    { label: "Funding", value: "RAEng · DARPA · Amazon" },
  ],
};

/* ------------------------------------------------------------
   2. ABOUT — a few paragraphs introducing the group
   Each entry is one paragraph. HTML is allowed.
   ------------------------------------------------------------ */
window.SITE.about = {
  heading: "Programs that write & check themselves.",
  paragraphs: [
    "Software runs the world — and most of it is wrong. Our group investigates how programs can be <strong>automatically generated</strong> from high-level specifications, how we can <strong>prove</strong> that those programs do what we expect, and how to translate between legacy languages and modern, safer ones.",
    "We work at the intersection of formal methods, compilers, and machine learning. Our tools synthesise tensor code from C, lift legacy codebases into Rust, verify hardware and distributed systems, and use LLMs to guide enumerative search. We publish at venues such as CAV, FMCAD, PLDI, AAAI, NeurIPS, CGO and OOPSLA.",
    'The group is based in the <a href="https://www.ed.ac.uk/informatics/">School of Informatics</a> at the University of Edinburgh and is supported by a Royal Academy of Engineering Research Fellowship, a $5M DARPA TRACTOR grant, an Amazon Research Award, and EPSRC funding.',
  ],
};

/* ------------------------------------------------------------
   3. RESEARCH THEMES
   Each theme becomes a full-width colored section with cards.
   - color: matcha | slushie | ube
   - topics: 1 to 4 cards per theme (3 looks best)
   ------------------------------------------------------------ */
window.SITE.research = [
  {
    color: "matcha",
    number: "01",
    title: "Program synthesis",
    heading: "Making machines write correct programs.",
    lede: "We develop enumerative, constraint-based and learning-guided synthesis techniques that scale beyond toy benchmarks — from SyGuS solvers to LLM-guided search.",
    topics: [
      {
        tag: "Syntax-guided synthesis",
        title: "Enumerative & symbolic search",
        body: "Solver back-ends that combine grammars, CEGIS loops and reinforcement learning to generate candidate programs at scale.",
      },
      {
        tag: "LLM + formal methods",
        title: "Guided enumerative synthesis",
        body: "Using large language models as search heuristics inside sound synthesisers — the best of neural guesses and symbolic proofs.",
      },
      {
        tag: "Oracles",
        title: "Synthesis modulo oracles",
        body: "A framework for synthesis when specifications are hidden behind black-box queries — from simulators to human preferences.",
      },
    ],
  },
  {
    color: "slushie",
    number: "02",
    title: "Verification",
    heading: "Scalable proofs for real systems.",
    lede: "Model checking and theorem proving, made tractable with compositional abstractions and synthesised invariants.",
    topics: [
      {
        tag: "Hardware",
        title: "Oracle-guided hardware verification",
        body: "Unlocking verification of RTL designs by pairing SMT-based checkers with synthesis oracles for missing lemmas.",
      },
      {
        tag: "Compositional",
        title: "PolyVer: polyglot systems",
        body: "A compositional approach for verifying systems written in multiple languages — published at FMCAD 2025.",
      },
      {
        tag: "Distributed",
        title: "Message-chain reasoning",
        body: "Verifying distributed protocols by reasoning over structured message chains rather than whole-system state spaces.",
      },
    ],
  },
  {
    color: "ube",
    number: "03",
    title: "Lifting & modernisation",
    heading: "Translating the code that already runs the world.",
    lede: "We use synthesis to lift legacy C into high-level, safer representations — from tensor DSLs to Rust — preserving semantics along the way.",
    topics: [
      {
        tag: "TRACTOR",
        title: "Translating all C to Rust",
        body: "Part of the $5M DARPA TRACTOR programme, in collaboration with UW-Madison, UC Berkeley and UIUC.",
      },
      {
        tag: "Tensorize",
        title: "Fast synthesis of tensor code",
        body: "Symbolic tracing, sketching and solving to lift legacy numeric kernels — CGO 2025 Distinguished Paper.",
      },
      {
        tag: "Guided lifting",
        title: "Guided tensor lifting",
        body: "Combining enumerative search with learned priors to lift C loops into TACO — published at PLDI 2025.",
      },
    ],
  },
];

/* ------------------------------------------------------------
   4. JOIN US — the pink call-to-action section
   ------------------------------------------------------------ */
window.SITE.join = {
  heading: "Want to do a PhD on program synthesis?",
  body: "We welcome strong applicants interested in program synthesis, formal verification, compilers, and the intersection of machine learning with formal methods. Funded studentships are advertised through the School of Informatics; informal enquiries are always welcome.",
  ctas: [
    {
      label: "Email Elizabeth",
      href: "mailto:elizabeth.polgreen@ed.ac.uk",
      style: "primary",
    },
    {
      label: "Informatics PhD programme",
      href: "https://www.ed.ac.uk/informatics/postgraduate",
      style: "ghost",
    },
  ],
};

/* ------------------------------------------------------------
   5. FOOTER
   ------------------------------------------------------------ */
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
