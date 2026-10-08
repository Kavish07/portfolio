# Portfolio Site — Spec

## Purpose
Personal portfolio for Kav Khood (software & web developer) to showcase projects, skills, and
provide a way for recruiters/clients to get in touch.

## Stack
- Static site: plain HTML, CSS, vanilla JS (no build step, no framework, no dependencies).
- Fonts: Google Fonts — Space Grotesk (display/body), JetBrains Mono (labels/numbers).
- Files: `index.html`, `styles.css`, `script.js`.

## Structure (single page, anchor-linked nav)
1. **Nav** — fixed header, logo, links to each section, "Let's talk" CTA, mobile hamburger menu.
2. **Hero (`#home`)** — name/status line, headline, subcopy, primary CTAs (view work / download résumé),
   social icons (GitHub, LinkedIn, email).
3. **About (`#about`)** — short bio, animated stat counters (years experience, projects shipped, clients).
4. **Work (`#work`)** — grid of project cards (title, description, tech tags, live/source links).
5. **Skills (`#skills`)** — grouped skill lists (Frontend / Backend / Infra & Tools / Currently learning)
   plus a scrolling marquee of tech keywords.
6. **Contact (`#contact`)** — pitch line, mailto link, social links.
7. **Footer** — copyright with auto-updating year, back-to-top link.

## Behavior (script.js)
- Auto-fill current year in footer.
- Navbar gets a `scrolled` style after 10px scroll.
- Cursor-follow glow effect on fine-pointer (desktop) devices only; disabled on touch.
- Scroll-triggered reveal animations via `IntersectionObserver` (`.reveal` elements).
- Animated count-up for stat numbers when scrolled into view.
- Mobile nav toggle shows/hides links as an absolutely-positioned dropdown.

## Known placeholders — need real content before launch
- [x] `resume.pdf` — generated from `ASTEK_CV_KAVISH_KHOODEERAM.docx` (Word COM → PDF); linked from the
      hero "Download résumé" button. Regenerate this file if the source `.docx` is updated.
- [x] GitHub → `https://github.com/Kavish07`, LinkedIn → `https://www.linkedin.com/in/kavish-khoodeeram-38909ba9/`
      (hero socials + contact section).
- [x] Twitter/X link removed (no account to link).
- [x] Work section now has 1 real project (Multicomm-Ensemble — pulled from GitHub) + 2 cards
      explicitly marked "write-up coming soon" (dimmed, no fake tags/links) instead of fabricated
      projects. Replace the "coming soon" cards as real projects are ready to add.
- [x] New **Experience (`#experience`)** section added between About and Work: a reverse-chronological
      timeline pulled from the ASTEK CV (iQera, AGA, Softway Medical, ASTEK Mauritius, Conduent, Orange,
      plus earlier roles condensed into one entry). Update this section directly when the CV changes —
      it's hand-translated from the French source, not auto-synced.
- [x] About bio, stats (10 years / 9 clients / 5 industries) and Skills section now reflect the real
      CV (Java/Spring Boot backend focus, in-progress AI Master's) instead of placeholder/generic text.
- [x] Email is live: `kav.khood@gmail.com`.
- [ ] Only 1 non-empty public repo exists on the linked GitHub (`Kavish07/webcup` is an empty 2017 repo,
      excluded). Add more repos/projects to GitHub (or list private/non-GitHub work here) to fill the
      remaining project slots.

## Non-goals
- No CMS, no backend, no analytics/tracking, no contact form (mailto only) — keep it static and dependency-free.

## Open questions
- Hosting target (GitHub Pages, Netlify, Vercel, custom domain)?
