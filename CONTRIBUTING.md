# Contributing & Working with the Source

This presentation is authored in Markdown using [Marp](https://marp.app/).

## Prerequisites

- [Node.js](https://nodejs.org/) 24+

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

Images and SVGs are automatically base64-inlined into `dist/index.html` via `postprocess.js` so the file can be opened offline or shared without external asset dependencies.

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

## Directory Structure

```
.
├── .github/workflows/ # GitHub Actions Pages deployment
├── assets/            # Images, diagrams, and logos
├── dist/              # Generated HTML & PDF output (gitignored)
├── package.json       # Build and dev scripts
├── postprocess.js     # HTML post-processing script
├── README.md          # Presentation overview & slide links
├── CONTRIBUTING.md    # Development & build guide
└── slides.md          # Marp slide source
```
