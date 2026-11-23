# The Rajput Table by Neetu

A two-page, mobile-first starter website (plain HTML/CSS/JS, no build step) for a Rajasthani cooking-and-dining experience in a Jaipur home.

## Edit
- **Name, phone, WhatsApp message:** the `SITE` block at the top of `script.js`. Page titles and meta tags in the HTML are static, so search for "The Rajput Table" to change those too.
- **Menu:** `menu.html`, each dish is a `<div class="dish">`.
- **Photos:** the gradient boxes (`class="ph"`) are placeholders. Replace each with `<img src="assets/your-photo.webp" alt="..." loading="lazy" width="..." height="...">` (keep under 200 KB, prefer WebP).
- Search for `TODO` to find everything that needs real details (address, Maps link, timings, hosts' story, photos).

## Images
No AI-generated or stock photos are included; the site uses CSS/SVG placeholders. Replace them with real photos of the family's kitchen and dishes. (If AI-generated placeholder images are ever added, they are not photos of the actual home or food.)

## Preview locally
Open `index.html` in a browser, or run `python -m http.server` in this folder and visit http://localhost:8000.
All paths are relative, so it works on GitHub Pages at `https://<username>.github.io/<repo>/`.
