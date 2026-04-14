/* =============================================================
   news.js — the group's news feed.
   -------------------------------------------------------------
   Newest first. To add a new item, paste a new object at the
   top of the array.

   Each entry:
     - date:  short string (e.g. "Aug 2025")
     - tag:   short venue/label shown as a colored pill
     - color: swatch for the tag
              ("matcha" | "slushie" | "ube" | "pom" | "lemon")
     - body:  HTML allowed (use <strong>, <em>, <a href>)

   Sibling data files (edit these to update content):
     site-meta.js   — site meta / hero
     about.js       — about section paragraphs
     research.js    — research themes and topic cards
     join.js        — "Join us" CTA section
     footer.js      — footer blurb, columns, copyright
     people.js      — PI and PhD students
     news.js        — this file: news feed
     artefacts.js   — papers, code, slides, videos
   ============================================================= */

window.SITE = window.SITE || {};
window.SITE.news = [
  {
    date: "Aug 2025",
    tag: "FMCAD 2025",
    color: "matcha",
    body: "<strong>Two papers accepted at FMCAD 2025.</strong> <em>PolyVer: a Compositional Approach for PolyGlot System Modelling and Verification</em> (with Pei-Wei Chen and Prof. Sanjit Seshia), and <em>Unlocking Hardware Verification with Oracle Guided Synthesis</em>, led by Leiqi Ye.",
  },
  {
    date: "Aug 2025",
    tag: "PACT 2025",
    color: "slushie",
    body: "<strong>Guess, Measure & Edit: Using Lowering to Lift Tensor Code</strong> accepted to PACT 2025.",
  },
  {
    date: "Jul 2025",
    tag: "DARPA TRACTOR",
    color: "ube",
    body: "<strong>$5M DARPA grant awarded</strong> as part of the TRACTOR programme (Translating All C To Rust), in collaboration with UW-Madison, UC Berkeley and UIUC.",
  },
  {
    date: "May 2025",
    tag: "ACL 2025",
    color: "pom",
    body: "<strong>HyGenar: An LLM-Driven Hybrid Genetic Algorithm for Few-Shot Grammar Generation</strong> accepted at ACL Findings.",
  },
  {
    date: "Apr 2025",
    tag: "PLDI 2025",
    color: "lemon",
    body: "<strong>Guided Tensor Lifting</strong> accepted at PLDI 2025. Presented by Yixuan Li.",
  },
  {
    date: "Mar 2025",
    tag: "CGO 2025",
    color: "matcha",
    body: "<strong>Tensorize</strong> received the Distinguished Paper Award at CGO 2025.",
  },
  {
    date: "Dec 2024",
    tag: "AAAI 2025",
    color: "slushie",
    body: "<strong>Online Prompt Selection for Program Synthesis</strong> accepted at AAAI 2025, presented by Yixuan Li.",
  },
  {
    date: "Sep 2024",
    tag: "NeurIPS 2024",
    color: "ube",
    body: "<strong>Synthetic Programming Elicitation and Repair</strong> for text-to-code in very low resource programming languages, accepted at NeurIPS 2024.",
  },
];
