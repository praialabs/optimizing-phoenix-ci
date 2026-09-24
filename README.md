# Lessons from Optimizing Phoenix Integration Tests

Presentation for the [Elixir Vienna Meetup](https://www.meetup.com/elixir-vienna/) (September 24, 2026).

## View the Slides

- **Interactive Slides (HTML):** [praialabs.github.io/optimizing-phoenix-ci](https://praialabs.github.io/optimizing-phoenix-ci/)
- **Download Deck (PDF):** [praialabs.github.io/optimizing-phoenix-ci/slides.pdf](https://praialabs.github.io/optimizing-phoenix-ci/slides.pdf)

## Overview

From 10-minute opaque black box to 3-minute transparent CI: A deep dive into optimizing the upstream Phoenix Framework integration test suite (`phoenixframework/phoenix`).

### Topics Covered

- ExUnit concurrency model and module-level scheduling
- Greedy interval scheduling for compact Gantt timelines
- In-memory `tmpfs` mounts and native host runners
- Upstream test database sharding (PostgreSQL, MySQL, MSSQL, SQLite3)
- Real CI observability with custom formatters

---

Presented by **Rodolfo Carvalho** ([@rhcarvalho](https://github.com/rhcarvalho)) · [Praia Labs](https://www.praialabs.com/)

_Authored with [Marp](https://marp.app/). For local preview, build scripts, and development instructions, see [CONTRIBUTING.md](CONTRIBUTING.md)._
