# ayeshaandleeb.github.io

Academic homepage of **Ayesha Andleeb** — machine learning, deep learning, medical imaging
and LLM systems.

Live: **https://ayeshaandleeb.github.io**

## Tech

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies to install —
edit a file, commit, and GitHub Pages serves it. Google Fonts is the only external request.

```
.
├── index.html          ← the whole page; all content lives here
├── css/styles.css      ← design system (tokens at the top) + light/dark themes
├── js/script.js        ← theme toggle, mobile nav, scroll-spy, footer year
├── assets/
│   ├── cv/Ayesha_Andleeb_CV.pdf
│   └── images/ayesha-profile.jpg   ← 448×448, used by the page
│                   ayesha-profile.png  ← original, kept as the source file
├── robots.txt
├── sitemap.xml
└── .nojekyll           ← GitHub Pages serves the files as-is
```

## Page structure

About · News · Research interests · Publications · Research projects · Hackathon projects ·
Teaching · Invited talks & workshops · Awards & honours · Technical skills · CV & contact —
the section order most professor and PhD-student homepages use.

## Editing

**Add a news item.** In `index.html` find `<!-- NEWS -->`, copy one `<li>` block to the top
of the list, and change the `<time datetime="YYYY-MM">` and the text. Newest goes first.

**Add a publication.** The Publications section currently holds a short placeholder note.
A ready-to-fill `<article class="entry">` template sits in an HTML comment directly below it:
delete the `<div class="panel">…</div>`, paste the template inside a
`<div class="entries"> … </div>` wrapper, and fill in the title, authors, venue and links.
Bold your own name (`<strong>A. Andleeb</strong>`) — that is the academic convention.

**Add a project.** Copy any `<article class="entry">` block in the Research projects section.
Each has: a thumbnail tile (`entry-thumb` — a short label and a one-line caption), title,
meta line, two-sentence abstract, links, and a collapsible "Method and results".

**Change colours or fonts.** Every colour and font is a custom property in the `:root` block
at the top of `css/styles.css`, with the dark-theme values just below it.

**Update the CV.** Replace `assets/cv/Ayesha_Andleeb_CV.pdf`, keeping the filename.

**Change the portrait.** Replace `assets/images/ayesha-profile.jpg` with a square image around
448×448. Keep it under ~100 KB so the page stays fast.

**Add Google Scholar.** Once a paper is indexed, uncomment the Scholar chip in the masthead
and add the profile URL to `sameAs` in the JSON-LD block in `<head>`.

Remember to update the "Last updated" line in the footer when you make a round of changes.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## License

Content © Ayesha Andleeb. Code may be reused under the MIT License.
