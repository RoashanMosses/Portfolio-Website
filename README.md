# Roashan Mosses — Portfolio

Personal portfolio of Roashan Mosses, an aspiring data engineer and full-stack web developer.
Hand-built with plain HTML, CSS and JavaScript (no frameworks or build step) and hosted on GitHub Pages.

## Structure
```
index.html          All page content (hero, work, about, stack, journey, contact)
css/styles.css      Design tokens, layout, responsive rules, motion
js/main.js          Nav, mobile menu, scroll reveal, local time, case-study effects
assets/             Favicon and EasyFy screenshots
```

## Run locally
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Before publishing — fill these in
- [ ] Email address: `index.html`, uncomment the "Say hello" button and set your address
- [ ] LinkedIn link: `index.html`, uncomment the LinkedIn button in the contact section
- [ ] Check the Stack and Journey sections list only skills and experience you actually have
- [ ] Optional: link to a CV (PDF in `assets/`)

## Deploy (GitHub Pages)
1. Push this folder to `github.com/RoashanMosses/Portfolio-Website`.
2. Repo → Settings → Pages → Source: "Deploy from a branch" → `main` / root.
3. The site goes live at `https://roashanmosses.github.io/Portfolio-Website/`.

To serve it at `https://roashanmosses.github.io/` instead, name the repo `RoashanMosses.github.io`.

## Adding a project
Copy the `<article class="case">` block in `index.html`, swap in the screenshots and text,
and put the images in `assets/`.
