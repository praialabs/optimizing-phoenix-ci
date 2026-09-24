# Lessons from Optimizing Phoenix Integration Tests

## Presentation for Elixir Vienna Meetup (Sep 24, 2026)

This presentation is authored using [Marp](https://marp.app/).

## Quick Start

### 1. Live Preview & Presenter Mode

To start a live-reloading preview server with speaker notes:

```bash
npm run dev
```

- Open your browser to the local server URL (e.g. `http://localhost:8080/slides.md`).
- Press **`P`** to toggle **Presenter View** (shows speaker notes, timer, next slide preview).
- Press **`F`** for Fullscreen presentation.

### 2. Export to Standalone HTML

Build a self-contained HTML presentation in `dist/index.html`:

```bash
npm run build:html
```

### 3. Export to PDF Slides

Generate a PDF deck (requires Chromium / Chrome installed):

```bash
npm run build:pdf
```

### 4. Build All (HTML & PDF)

```bash
npm run build
```

## GitHub Pages Deployment

Pushing to `main` automatically triggers the GitHub Actions workflow in `.github/workflows/deploy.yml` which builds both `index.html` and `slides.pdf` and deploys them to GitHub Pages.

To enable in the GitHub repository:
- Go to **Settings** $\rightarrow$ **Pages**
- Set **Source** to **GitHub Actions**

## Directory Structure

```
.
├── .github/workflows/ # GitHub Actions Pages deployment
├── assets/            # Images, diagrams, and logos
├── dist/              # Generated HTML & PDF output (gitignored)
├── package.json       # Build and dev scripts
├── postprocess.js     # HTML post-processing script
├── README.md          # Presentation guide
└── slides.md          # Marp slide source
```

