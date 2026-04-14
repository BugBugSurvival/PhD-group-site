/* =============================================================
   artefacts.js — the group's dataset of outputs.
   -------------------------------------------------------------
   This file is a plain list. To add a new paper, slide deck,
   code release, video or dataset, add one entry to the array
   below. Newest-first is conventional but not enforced — entries
   render in array order.

   Each entry:
     - title:       short name (required)
     - kind:        "paper" | "code" | "slides" | "video" | "dataset"
                    (drives the colored side stripe automatically)
     - year:        e.g. "2025"
     - venue:       e.g. "FMCAD 2025"  (optional)
     - authors:     e.g. "Yixuan Li, Elizabeth Polgreen"  (optional)
     - description: short blurb. HTML is allowed (<strong>, <em>, <a>).
     - links:       array of { label, href } — as many as you like
     - tags:        array of strings for filtering/search (optional)

   Sibling data files (edit these to update content):
     config.js      — site meta, about, research, join, footer
     people.js      — PI and PhD students
     news.js        — news feed
     artefacts.js   — this file: papers, code, slides, videos
   ============================================================= */

window.SITE = window.SITE || {};
window.SITE.artefacts = [
  {
    title: "PolyVer",
    kind: "paper",
    year: "2025",
    venue: "FMCAD 2025",
    authors: "Pei-Wei Chen, Elizabeth Polgreen, Sanjit A. Seshia",
    description:
      "A compositional approach for polyglot system modelling and verification.",
    links: [
      { label: "Preprint", href: "https://arxiv.org/abs/2503.03207" },
    ],
    tags: ["verification", "compositional"],
  },
  {
    title: "Tensorize",
    kind: "code",
    year: "2025",
    venue: "CGO 2025 (Distinguished Paper)",
    authors: "Alexander Brauckmann et al.",
    description:
      "Fast synthesis of tensor programs from legacy code using symbolic tracing, sketching and solving.",
    links: [
      { label: "Paper", href: "https://dl.acm.org/doi/10.1145/3696443.3708956" },
      { label: "GitHub", href: "https://github.com/alexanderb14/tensorize" },
    ],
    tags: ["synthesis", "tensors", "lifting"],
  },
  {
    title: "Guided Tensor Lifting",
    kind: "paper",
    year: "2025",
    venue: "PLDI 2025",
    authors: "Yixuan Li et al.",
    description:
      "Lifting C loops into TACO by combining enumerative search with learned priors.",
    links: [
      { label: "Preprint", href: "https://arxiv.org/abs/2504.19705" },
    ],
    tags: ["synthesis", "lifting"],
  },
  {
    title: "HyGenar",
    kind: "paper",
    year: "2025",
    venue: "ACL Findings 2025",
    description:
      "An LLM-driven hybrid genetic algorithm for few-shot grammar generation.",
    links: [
      { label: "Preprint", href: "https://arxiv.org/abs/2505.16978" },
    ],
    tags: ["LLMs", "grammars"],
  },
  {
    title: "Sherlock Holmes & the Case of the Untrustworthy Software",
    kind: "video",
    year: "2024",
    venue: "TEDx University of Edinburgh",
    authors: "Elizabeth Polgreen",
    description: "TEDx talk on software verification and trust.",
    links: [{ label: "Watch", href: "https://t.co/SSdtrx05h0" }],
    tags: ["outreach"],
  },
  {
    title: "Introduction to SAT and SMT",
    kind: "slides",
    year: "2022",
    venue: "SPLV 2022",
    authors: "Elizabeth Polgreen",
    description: "Two-part tutorial on SAT and SMT solvers.",
    links: [
      { label: "Part 1", href: "https://youtu.be/-SHvbgmDbs8" },
      { label: "Part 2", href: "https://youtu.be/kRPw-Fr33fI" },
    ],
    tags: ["teaching"],
  },
];
