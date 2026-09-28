# Jairihs Salvador — CV website

A single-page, responsive CV built with plain HTML, CSS, and a small script for the client feedback carousel and experience counter. Feedback advances automatically, can be paused, and respects reduced-motion preferences. It has no build step and uses relative asset paths, so it works as either a GitHub Pages user site or a project site.

## Preview locally

Open `index.html` in a browser, or run a local server from this folder:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Published site

[salvadorjhai.github.io](https://salvadorjhai.github.io/) is published from the `main` branch root with GitHub Pages. Push changes to `main` to update it. No package install or build command is needed.

The `.gitignore` file allows only the reviewed site files into the repository. The original screenshots and other local files stay outside the published source.

## Edit the CV

Update the text and links in `index.html`. Adjust colors and spacing in `styles.css`. The page also includes a print layout for saving as a PDF from your browser.
