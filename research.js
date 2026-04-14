/* =============================================================
   research.js — research themes and their topic cards.
   Each theme becomes a full-width colored section with cards.
     - color: matcha | slushie | ube | pom | lemon
     - topics: 1 to 4 cards per theme (3 looks best)
   ============================================================= */

window.SITE = window.SITE || {};

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
