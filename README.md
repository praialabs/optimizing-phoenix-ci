# Lessons from Optimizing Phoenix Integration Tests
### Presentation for Elixir Vienna Meetup (Sep 24, 2026)

This presentation is authored using [Marp](https://marp.app/) and lives in an untracked workspace directory (`testing-slides/`, excluded via `.git/info/exclude`).

---

## Quick Start

### 1. Live Preview & Presenter Mode
To start a live-reloading preview server with speaker notes:
```bash
npm run dev
# or
npx @marp-team/marp-cli -s . --html -p
```
* Open your browser to the local server URL (e.g. `http://localhost:8080/slides.md`).
* Press **`P`** to toggle **Presenter View** (shows speaker notes, timer, next slide preview).
* Press **`F`** for Fullscreen presentation.

### 2. Export to Standalone HTML
Build a self-contained HTML presentation in `dist/index.html`:
```bash
npm run build:html
```

### 3. Export to PDF Slides
Generate a high-quality PDF deck (requires Chromium / Chrome installed):
```bash
npm run build:pdf
```

---

## Directory Structure

```
testing-slides/
├── assets/
│   ├── xkcd_303_compiling.png           # XKCD #303: Compiling
│   ├── xkcd_1319_automation.png         # XKCD #1319: Automation
│   └── xkcd_2928_software_testing_day.png # XKCD #2928: Software Testing Day
├── dist/                                # Built HTML & PDF output
├── package.json                         # npm scripts for Marp CLI
├── README.md                            # Presentation guide & tips
└── slides.md                            # Marp slide source (24 slides)
```

---

## Key Highlights in the Deck

1. **Test Taxonomy & History**: Distinguishing `installer/test`, `test/mix/tasks`, and `integration_test`, plus Aaron Renner's 2020/2021 groundwork and the 2024 Earthly deprecation (PR #5817).
2. **The Observability Wall**: Unbuffered stdout buffering in CI (10-minute empty spinner) and the trap of `mix test --slowest` forcing `--trace` / serial execution.
3. **ExUnit Scheduling Model**: Why `async: true` parallelizes modules but executes tests serially within each module, and how 7 monolithic suites starved 3 out of 4 vCPUs.
4. **AST Comparison (`CompareSuites`)**: Automated verification of 53 test bodies byte-for-byte using `Code.string_to_quoted!/1`.
5. **Greedy Interval Scheduling**: Packing 33 async modules into 4 virtual worker lanes for compact Mermaid Gantt charts in `$GITHUB_STEP_SUMMARY`.
6. **Infrastructure & Sharding**: Host runner, `tmpfs` RAM disks, and comparing `mix test --test-partition 4` against service-aware database sharding (PR #6836).
7. **The Payoff**: Real GitHub Actions run metrics showing wall-clock time drop from ~10m down to **3m 35s**.
8. **AI Pair Programming Reflection**: Blessing (rapid prototyping, AST matchers) vs Curse (subtle bugs, vigilance).
9. **Speaker Notes**: Presenter notes (`<!-- ... -->`) on every slide with timing cues and anecdotes.
