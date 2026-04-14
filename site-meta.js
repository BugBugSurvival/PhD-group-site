/* =============================================================
   site-meta.js — title, tagline, institution, hero stats.
   -------------------------------------------------------------
   Sibling data files (edit these to update content):
     site-meta.js   — this file: site meta / hero
     about.js       — about section paragraphs
     research.js    — research themes and topic cards
     join.js        — "Join us" CTA section
     footer.js      — footer blurb, columns, copyright
     people.js      — PI and PhD students
     news.js        — news feed
     artefacts.js   — papers, code, slides, videos
   ============================================================= */

window.SITE = window.SITE || {};

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
