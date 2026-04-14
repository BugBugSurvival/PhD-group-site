# Synthesis And Verification, Edinburgh — Group Site

Maintainer guide for the group webpage. Everything here assumes you are editing
files by hand and pushing to GitHub Pages (or wherever you host the `group-site/`
folder). There is **no build step**, no framework, and no npm. Open a file, edit
it, refresh the browser.

---

## 1. What's in this folder

```
group-site/
├── index.html        ← home page shell (do not edit for content)
├── styles.css        ← all visual styling / design system
├── render.js         ← rendering engine — reads data files into the page
│
├── config.js         ← ⭐ site meta, about, research, join, footer
├── people.js         ← ⭐ PI and PhD students
├── news.js           ← ⭐ news feed
├── artefacts.js      ← ⭐ papers, code, slides, videos
│
├── README.md         ← this file
│
└── assets/
    ├── people/       ← square headshots go here
    └── ...           ← any other images
```

**The four starred files are the only ones you normally need to edit.** They
contain plain JavaScript arrays and objects — no HTML, no CSS. Each file has a
big comment header at the top explaining its fields.

`index.html` is a "shell": it definef section structure
and mount points, and `render.js` fills it with data from the four data files
when the page loads. Unless you are changing the overall page layout, leave
both the HTML file and `render.js` alone.

---

## 2. Running locally

Just double-click `index.html` (or open it with **File → Open** in your browser).
Everything is plain HTML/CSS/JS — no server required.

---

## 3. Deploying

The folder is a static site, so any static host works. For GitHub Pages:

1. Push the repository to GitHub.
2. In the repo settings → **Pages**, point the source at this folder's branch
   (or move the contents of `group-site/` to the repo root and publish from
   there).
3. Commit and push; Pages will rebuild automatically.

---

## 4. Common tasks

### 4.1 Add a news item

Open `news.js`. Paste a new entry at the **top** of the `SITE.news` array
(newest first is the convention). Example:

```js
{
  date: "Nov 2025",
  tag: "CAV 2026",
  color: "matcha",
  body: "<strong>Our paper X was accepted at CAV 2026.</strong> Presented by <a href='https://…'>Student Name</a>.",
},
```

Fields:

| field   | meaning                                                                 |
| ------- | ----------------------------------------------------------------------- |
| `date`  | Short label (e.g. `"Nov 2025"`).                                        |
| `tag`   | Venue / badge text shown as a colored pill.                             |
| `color` | Pill color — one of `matcha`, `slushie`, `ube`, `pom`, `lemon`.         |
| `body`  | The news text. **HTML is allowed**: `<strong>`, `<em>`, `<a href="…">`. |

### 4.2 Add or edit a PhD student

Open `people.js`. The `SITE.students` array contains one object per student.
Minimum fields:

```js
{
  name: "Jane Doe",
  initials: "JD",
  color: "matcha",
  years: "2026 — present",
  bio: 'Main supervisor <a href="https://…">Prof. X</a>. Works on Y.',
},
```

Optional fields:

```js
  photo: "assets/people/jane.jpg",    // square image — round avatar
  links: [
    { label: "Homepage", href: "https://…" },
    { label: "GitHub",   href: "https://github.com/…" },
    { label: "Email",    href: "mailto:jane@ed.ac.uk" },
    { label: "LinkedIn", href: "https://linkedin.com/in/…" },
    { label: "Scholar",  href: "https://scholar.google.com/…" },
  ],
```

- If `photo` is omitted, the card falls back to an initials avatar.
- If `links` is omitted or empty, no pill-link row is shown.
- The `bio` field accepts inline HTML so you can drop supervisor links
  directly into the sentence.

To **remove** a student, delete their object from the array. Make sure to
remove the trailing comma if you delete the last entry.

The hero "PhD researchers" stat at the top of the page shows the count
automatically using `{{studentCount}}` — do not hardcode the number.

### 4.3 Add an artefact (paper, code, slides, video)

Open `artefacts.js` and add an entry to the `SITE.artefacts` array:

```js
{
  title: "Paper Title Here",
  kind: "paper",               // paper | code | slides | video | dataset
  year: "2026",
  venue: "CAV 2026",           // optional
  authors: "A. Alice, B. Bob", // optional
  description: "One-line blurb. HTML allowed.",
  links: [
    { label: "Preprint", href: "https://arxiv.org/abs/…" },
    { label: "GitHub",   href: "https://github.com/…" },
  ],
  tags: ["verification"],      // optional, reserved for future filtering
},
```

The `kind` field automatically picks a colored side stripe, so you never pick
a color manually. The entry appears on the main page in array order.

### 4.4 Edit hero copy, research themes, footer, or "Join us"

All of this lives in `config.js`. The file has five labelled sections:

1. **`SITE.meta`** — group name, hero headline, eyebrow, subhead, stats.
2. **`SITE.about`** — the "About the group" heading and paragraphs.
3. **`SITE.research`** — the three colored research themes and their topic cards.
4. **`SITE.join`** — the pink "Want to do a PhD?" call-to-action.
5. **`SITE.footer`** — footer blurb, link columns, copyright, tagline.

A few specifics:

- **Hero headline** supports two inline tokens:
  - `{{accent:word}}` → yellow Lemon pill
  - `{{green:word}}` → matcha-green emphasis
- **Stats cards** can take an optional `href` to become clickable links
  (e.g. the "Group lead" card jumps to `#people`). The `{{studentCount}}`
  token in a stat value is replaced automatically with `SITE.students.length`.
- **About paragraphs** and other long-form text fields accept HTML.
- **Footer tagline** accepts HTML so you can color parts of it
  (e.g. `<span style="color: var(--white);">♥</span>`).

### 4.5 Add a photo

1. Drop a **square** JPG or PNG into `assets/people/` (for people) or
   `assets/` (for anything else).
2. Reference it from the relevant data file using a relative path, e.g.
   `photo: "assets/people/jane.jpg"`.

Headshots should ideally be square — the avatar is a round crop, ~220px for
the PI and ~68px for students.

---

## 5. Colors you can use

Whenever a `color` field appears (news items, research themes, student cards,
artefact kinds), use one of these swatch keys:

| key       | rough tone       |
| --------- | ---------------- |
| `matcha`  | green            |
| `slushie` | cyan             |
| `ube`     | purple           |
| `pom`     | coral / pink     |
| `lemon`   | yellow / gold    |

Avoid putting three or more different swatches into the same section — the
design relies on a few dominant colors per area.

### Section-level color conventions

The three research themes are rendered as full-width light-swatch blocks
with black text (Matcha 300, Slushie 500, Ube 300). Eyebrow pills inside
each block get a white background with a swatch-colored border so they
stay readable against the tinted canvas.

Hover colors are deliberately varied by context:

| Element                                            | Hover fill               |
| -------------------------------------------------- | ------------------------ |
| Hero primary `.btn`                                | Ube 800 (purple)         |
| Hero ghost `.btn--ghost` ("PhD opportunities")     | Pomegranate 400 (coral)  |
| Join primary `.btn` ("Email Elizabeth")            | Matcha 600 (green)       |
| Join ghost `.btn--ghost` ("Informatics PhD …")     | Ube 800 (purple)         |
| Hero stat cards (`.meta-card`)                     | Lemon 400 (yellow)       |
| Lead card pill links (Email / Homepage / …)        | Lemon 400 (yellow)       |

Plain eyebrow pills ("The team", "Recent activity", "Open positions",
"About the group") are intentionally static — they do **not** change on
hover. If you want a new eyebrow to be interactive, add a dedicated
hover rule scoped by section.

---

## 6. Inline HTML cheat sheet

These fields all accept HTML, so you can add links and emphasis directly:

- `news.js` → `body`
- `people.js` → student `bio`, lead `bio`
- `config.js` → `about.paragraphs`, `footer.blurb`, `footer.tagline`
- `artefacts.js` → `description`

Useful snippets:

```html
<strong>Bold</strong>
<em>Italic</em>
<a href="https://example.com">Link text</a>
```

HTML is **not** supported in short plain-text fields like `name`, `title`,
`tag`, `date`, or `label` — keep those plain.

---

## 7. How the plumbing actually works

When the browser loads `index.html`, this happens:

1. The HTML file defines the section structure and loads the four data files
   (`config.js`, `people.js`, `news.js`, `artefacts.js`) followed by
   `render.js`.
2. Each data file sets keys on a shared `window.SITE` object — e.g.
   `window.SITE.news = [...]`. They can be loaded in any order.
3. `render.js` reads `window.SITE` and populates the page. Each section
   checks whether its mount point exists before rendering, so the same
   `render.js` works on both the home page and the artefacts sub-page.

If a section appears empty on the site:

- Open the browser devtools (Cmd+Option+I / Ctrl+Shift+I) → **Console**.
- Look for red errors. A typo in a data file (missing comma, unescaped quote)
  is by far the most common cause — JavaScript will refuse to parse the file
  and that whole section will stay empty.

---

## 8. Things to avoid

- **Do not edit `render.js` or `styles.css`** for routine content changes.
- **Do not hardcode numbers** like "8 students" — use `{{studentCount}}`.
- **Do not use curly quotes** (`"` `"`) inside a JavaScript string — they
  will break parsing. Stick to straight quotes (`"` or `'`). If you must
  include a straight quote inside a single-quoted string, escape it with `\'`.
- **Do not forget commas** between entries in an array or between keys in an
  object. A missing comma is the most common way to break a data file.
- **Do not commit secrets** (private emails, access tokens) — this is a
  public static site.
- **Do not write plain text inside a `.btn` element.** Buttons use a
  dual-label shift-reveal hover animation: the label slides up and a
  duplicate rendered from a `data-label` attribute rises into place.
  If you hand-write a button in HTML, wrap the label like this:

  ```html
  <a class="btn" href="…">
    <span class="btn__label" data-label="Explore our research">Explore our research</span>
  </a>
  ```

  Data-driven CTAs (e.g. the Join section) are wrapped automatically by
  `render.js` — you only need to worry about this if you edit `index.html`
  directly.

---

## 9. File-level quick reference

| Task                                 | File to edit   |
| ------------------------------------ | -------------- |
| Add a news item                      | `news.js`      |
| Add / remove / update a PhD student  | `people.js`    |
| Update the PI's bio or links         | `people.js`    |
| Add a paper / code / slides / video  | `artefacts.js` |
| Change the group name or hero copy   | `config.js`    |
| Edit the research themes             | `config.js`    |
| Edit footer copy / links / tagline   | `config.js`    |
| Edit the "Want to do a PhD?" section | `config.js`    |
| Add a photo                          | `assets/`      |
| Change the overall visual design     | `styles.css`   |
| Change the page layout / sections    | `index.html`   |
| Change the rendering logic           | `render.js`    |

---

If something breaks and you cannot figure out why, open the browser console
first — a typo in one of the data files is almost always the culprit.
