# Deploy notes (Windows, GitHub already connected to Cowork)

Goal: get these files into a GitHub repo, turn on GitHub Pages, and end up with a public URL David opens on his iPhone.

## The fast path (let Cowork do it)
In a Cowork session inside this project, ask Claude to:
1. Create a new public GitHub repo (suggested name: `winco-run`).
2. Push every file in this project folder to the repo root. Approve the write when prompted.
3. Confirm the files are at the repo root, not inside a subfolder. GitHub Pages serves from the root here, and the app uses relative paths, so the files must sit at the top level.

Then David does the one manual step Pages requires:
4. In the repo on github.com, open Settings, then Pages.
5. Under Build and deployment, set Source to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
6. Wait about a minute. The public URL appears at the top of the Pages settings, in the form `https://USERNAME.github.io/winco-run/`.

## On the iPhone
1. Open that URL in Safari.
2. Tap the Share button, then "Add to Home Screen".
3. It now opens full screen like an app, with the green check icon.
4. Open it once on wifi at home so the service worker caches it. After that it works in the store even with no signal.

## When the list changes next week
Edit `shopping-data.md` and the `DATA` array in `index.html`, then in Cowork push the changes. Also bump the `CACHE` name in `sw.js` (for example `winco-run-v2`) so phones pull the new version instead of the cached old one.

## Notes
- GitHub Pages needs the repo to be public for a free account. If David wants it private, Pages requires a paid GitHub plan.
- Write access through the connector asks for approval each time, which is expected.
- No build step, no framework. It's plain files, so what you push is what loads.
