# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio for Kavish Khoodeeram (senior software engineer) — a single static HTML page. No
build step, no framework, no package.json, no dependencies. Just `index.html`, `styles.css`, `script.js`,
and `assets/`.

## Commands

There is no build/lint/test tooling. To preview changes, open `index.html` directly in a browser, or
serve the directory with any static file server (e.g. `python -m http.server`) and open it in a browser —
either way, verify visually since there are no automated checks.

## Architecture

- `index.html` — the entire page: nav, then `<main>` with sections `#home` (hero), `#about`, `#experience`
  (reverse-chronological work history timeline), `#work` (project cards), `#skills` (grouped skill lists +
  an infinite-scroll marquee of tech logos), `#contact`, then `<footer>`. All real content (bio, work
  history, projects, skills) lives inline in this file — there is no CMS or data layer.
- `styles.css` — all styling, organized as one flat file with `/* ---------- SECTION ---------- */` banner
  comments matching the HTML sections in order. Theme values (colors, fonts) are CSS custom properties on
  `:root` (`--bg`, `--text`, `--accent`, `--accent-2`, `--gradient`, `--mono`, `--sans`) — change the theme
  there, not by hardcoding colors in rules. Per-project/per-skill-group accent colors are set inline via a
  `style="--proj-accent:#..."` / `style="--cat-accent:#..."` attribute on the element rather than a CSS
  class.
- `script.js` — small, independent behaviors with no shared state: footer year, navbar `scrolled` class
  after 10px scroll, desktop-only cursor-glow follow (gated on `(pointer: fine)`), `IntersectionObserver`-
  driven `.reveal` scroll animations, animated stat count-up (reads `data-count` on `.stat-num`), and the
  mobile nav toggle.
- `spec.md` — the living spec/checklist for this site (purpose, structure, content placeholders still
  needing real data, non-goals, open questions). Check it before adding sections or content, and update its
  checklist when a placeholder gets filled in or a new one is introduced.

## Conventions

- Keep it a static, dependency-free site — no build tooling, no JS frameworks, no backend, no analytics,
  no contact form (mailto link only). This is a stated non-goal in `spec.md`, not an oversight.
- Fonts are loaded from Google Fonts (Space Grotesk for display/body, JetBrains Mono for labels/numbers via
  `var(--mono)`); tech logos in the skills marquee are loaded from `cdn.simpleicons.org`. Both are existing
  external dependencies — don't add new ones without a reason.
- New sections should follow the existing pattern: a `<section id="..." class="section">` with a
  `.section-inner > .section-tag` (numbered, e.g. "06 — ...") and `.section-title`, with `.reveal` on
  elements that should animate in on scroll.
