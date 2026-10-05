# ayeshaandleeb.github.io

Academic portfolio website for **Ayesha Andleeb** — AI, Machine Learning & Deep Learning.

## Live site

Once deployed: **https://ayeshaandleeb.github.io**

## Tech stack

| Layer   | Tool |
|---------|------|
| Markup  | HTML 5 |
| Styling | Tailwind CSS (CDN) + custom design-system CSS |
| Scripts | Vanilla JavaScript (no build step) |
| Hosting | GitHub Pages (static) |

No backend, no build step, no frameworks to install.

---

## Folder structure

```
ayeshaandleeb.github.io/
├── index.html              ← main page
├── css/
│   └── styles.css          ← design-system tokens & component styles
├── js/
│   ├── projects-data.js    ← all project definitions (edit here to add projects)
│   └── script.js           ← URL resolver, card renderer, nav, animations
├── assets/
│   ├── cv/
│   │   └── Ayesha_Andleeb_CV.pdf
│   ├── images/             ← profile or section images (add later)
│   └── projects/           ← project screenshots (add later)
├── .nojekyll               ← tells GitHub Pages to skip Jekyll
└── README.md
```

---

## Deploy to GitHub Pages

1. **Create the repository** on GitHub named exactly `AyeshaAndleeb.github.io` (your GitHub username, case-sensitive).

2. **Push the code:**
   ```bash
   cd ayeshaandleeb.github.io
   git init
   git add -A
   git commit -m "Initial commit: academic portfolio"
   git branch -M main
   git remote add origin https://github.com/AyeshaAndleeb/ayeshaandleeb.github.io.git
   git push -u origin main
   ```

3. **Enable Pages:** go to the repository **Settings → Pages**, set source to **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.

4. Wait 1–2 minutes, then visit **https://ayeshaandleeb.github.io**.

---

## How to add a new project

Open **`js/projects-data.js`** and add an object to the `PROJECTS` array:

```js
{
  id:       "p-your-project",       // unique HTML id (used by anchor links)
  section:  "research",             // "research" | "hackathon" | "additional"
  featured: false,                  // true for a border highlight
  title:    "Project Title",
  area:     "Computer Vision · Deep Learning",
  overview: "One-paragraph summary shown before expanding.",
  problem:  "What problem does it solve?",
  approach: "How you built it.",
  tech:     ["Python", "TensorFlow"],
  results:  [
    "Result or metric 1.",
    "Result or metric 2."
  ],
  links:    {
    github: "https://github.com/...",
    demo:   "https://...",          // optional
    paper:  "https://..."           // optional
  }
}
```

The card is rendered automatically on page load — no HTML editing required.

**Adding a screenshot:** place the image in `assets/projects/` and add an `image` field (not yet rendered by the card template, but you can extend the renderer in `script.js`).

---

## How to update the CV

1. Replace the file at **`assets/cv/Ayesha_Andleeb_CV.pdf`** with your new PDF (keep the same filename).
2. Commit and push.

The "Download CV" buttons all point to that path.

---

## How to add a profile photo

1. Place your image (e.g. `profile.jpg`) in `assets/images/`.
2. In `index.html`, add an `<img>` inside the hero section or the About section where you'd like it to appear.

---

## Customisation

| What | Where |
|------|-------|
| Colours & fonts | CSS custom properties in `css/styles.css` (`:root` block) |
| Navigation links | `<header>` in `index.html` |
| External URLs | `URLS` object at the top of `js/script.js` |
| Project data | `js/projects-data.js` |
| Meta / SEO | `<head>` in `index.html` |

---

## License

Content © Ayesha Andleeb. Code may be reused under MIT.
