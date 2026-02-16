# Biotech & Food Tech 2026 — static site (RU + EN)

This folder contains a **pure static** landing site for GitHub Pages:

- `index.html` — Russian (main)
- `en/index.html` — English
- `assets/` — CSS + images

## Upload to GitHub Pages (quick)

1. Create / open your repository (e.g., `biotech-congress`).
2. Upload **all files from this folder** to the repository root (so `index.html` is in the root).
3. Go to **Settings → Pages**:
   - Source: *Deploy from a branch*
   - Branch: `main`
   - Folder: `/ (root)`
4. Save.

Your site will appear at:

`https://<username>.github.io/<repo>/`

English page:

`https://<username>.github.io/<repo>/en/`

## Notes

- All paths are **relative**, compatible with GitHub Pages project sites.
- No build tools, no external JS/CSS dependencies.
