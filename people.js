/* =============================================================
   people.js — the PI and PhD researchers.
   -------------------------------------------------------------
   Edit this file to add, remove, or update a group member.

   `lead` is the PI (one object).
   `students` is an array of PhD researchers — add entries freely.

   Student entry:
     Required:
       - name:     full name
       - initials: 2 chars shown in the avatar circle (fallback
                   when no photo is provided)
       - color:    swatch key for the card top stripe
                   ("matcha" | "slushie" | "ube" | "pom" | "lemon")
       - years:    e.g. "2024 — present"
       - bio:      one short sentence. HTML is allowed so you can
                   drop links inline, e.g.
                   'Co-supervised with <a href="https://…">Prof. X</a>.'
     Optional:
       - photo:    path to a square image, e.g.
                   "assets/people/yixuan.jpeg"
                   (if omitted, the initials avatar is shown instead)
       - links:    array of { label, href } — homepage, GitHub,
                   email, LinkedIn, etc. Shown as small pill links
                   under the bio. Omit or leave empty for no links.

   Sibling data files (edit these to update content):
     config.js      — site meta, about, research, join, footer
     people.js      — this file: PI and PhD students
     news.js        — news feed
     artefacts.js   — papers, code, slides, videos
   ============================================================= */

window.SITE = window.SITE || {};

window.SITE.lead = {
  name: "Dr Elizabeth Polgreen",
  role: "Principal investigator",
  title: "Reader · School of Informatics · University of Edinburgh",
  photo: "assets/people/elizabeth.jpg",
  bio: "Elizabeth leads the group. Her research focuses on formal program synthesis and using synthesis to make verification scale. She holds a Royal Academy of Engineering Research Fellowship and completed her PhD at the University of Oxford with Professor Alessandro Abate, followed by a postdoc with Professor Sanjit Seshia at UC Berkeley.",
  links: [
    { label: "Email", href: "mailto:elizabeth.polgreen@ed.ac.uk" },
    { label: "Homepage", href: "https://polgreen.github.io/" },
    { label: "GitHub", href: "https://github.com/polgreen" },
    {
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=wFYhUkIAAAAJ",
    },
    { label: "DBLP", href: "https://dblp.uni-trier.de/pid/183/7353.html" },
  ],
};

window.SITE.students = [
  {
    name: "Yixuan Li",
    initials: "YL",
    color: "matcha",
    years: "2021 — 2025",
    bio: 'Co-supervised with <a href="https://www.dcs.ed.ac.uk/home/mob/">Prof. Mike O\'Boyle</a>. Works on LLM-guided synthesis and grammar generation.',
    photo: "assets/people/yixuan.jpeg",
    links: [
      { label: "Homepage", href: "https://bugbugsurvival.github.io/" },
      { label: "Scholar", href: "https://scholar.google.com/citations?user=7X554ioAAAAJ&hl=en" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yixuan-li-phd/" },
    ],
  },
  {
    name: "Alexander Brauckmann",
    initials: "AB",
    color: "slushie",
    years: "2021 — present",
    bio: 'Main supervisor <a href="https://www.dcs.ed.ac.uk/home/mob/">Prof. Mike O\'Boyle</a>. Tensorize lead author; CGO 2025 Distinguished Paper.',
  },
  {
    name: "José Wesley de Souza Magalhães",
    initials: "JM",
    color: "ube",
    years: "2021 — present",
    bio: 'Main supervisor <a href="https://www.dcs.ed.ac.uk/home/mob/">Prof. Mike O\'Boyle</a>. Automatic lifting of C to tensor DSLs.',
  },
  {
    name: "Guy Frankel",
    initials: "GF",
    color: "pom",
    years: "2024 — present",
    bio: 'Co-supervised with <a href="https://www.dcs.ed.ac.uk/home/mob/">Prof. Mike O\'Boyle</a>.',
  },
  {
    name: "Leiqi Ye",
    initials: "LY",
    color: "lemon",
    years: "2024 — present",
    bio: 'Co-supervised with <a href="https://jianyicheng.github.io/">Dr Jianyi Cheng</a>. Oracle-guided hardware verification.',
  },
  {
    name: "Anton Lydike",
    initials: "AL",
    color: "matcha",
    years: "2024 — present",
    bio: 'Main supervisor <a href="https://jacksonwoodruff.com/">Dr Jackson Woodruff</a>.',
  },
  {
    name: "Heba Al Kayad",
    initials: "HK",
    color: "ube",
    years: "2024 — present",
    bio: 'Main supervisor <a href="http://www.craiginnes.com/">Dr Craig Innes</a>.',
  },
  {
    name: "Zoey Shepherd",
    initials: "ZS",
    color: "slushie",
    years: "2025 — present",
    bio: 'Co-supervised with <a href="https://denotational.co.uk/">Dr Ohad Kammar</a>.',
  },
];
