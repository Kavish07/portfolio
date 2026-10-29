# Portfolio Site — Spec

## Purpose
Personal portfolio for Kav Khood (software & web developer) to showcase projects, skills, and
provide a way for recruiters/clients to get in touch.

## Stack
- Static site: plain HTML, CSS, vanilla JS (no build step, no framework, no dependencies).
- Fonts: Google Fonts — Space Grotesk (display/body), JetBrains Mono (labels/numbers).
- Files: `index.html`, `styles.css`, `script.js`.

## Structure (single page, anchor-linked nav)
1. **Nav** — fixed header, logo, links to each section, "Let's talk" CTA, EN/FR language toggle, mobile
   hamburger menu.
2. **Hero (`#home`)** — name/status line, headline, subcopy, primary CTAs (view work / download résumé),
   social icons (GitHub, LinkedIn, email).
3. **About (`#about`)** — short bio, animated stat counters (years experience, projects shipped, clients).
4. **Work (`#work`)** — grid of project cards (title, description, tech tags, live/source links).
5. **Skills (`#skills`)** — grouped skill lists (Languages & Frameworks / Databases & Infra / Methods &
   Tools / AI & Automation) plus a scrolling marquee of tech keywords.
6. **Education (`#education`)** — reverse-chronological timeline of degrees/courses, reusing the
   `.timeline` markup from Experience.
7. **Contact (`#contact`)** — pitch line, mailto link, social links.
8. **Footer** — copyright with auto-updating year, back-to-top link.

## Behavior (script.js)
- Auto-fill current year in footer.
- Navbar gets a `scrolled` style after 10px scroll.
- Cursor-follow glow effect on fine-pointer (desktop) devices only; disabled on touch.
- Scroll-triggered reveal animations via `IntersectionObserver` (`.reveal` elements).
- Animated count-up for stat numbers when scrolled into view.
- Mobile nav toggle shows/hides links as an absolutely-positioned dropdown.
- EN/FR language toggle: translatable elements carry a `data-fr` attribute (full inner-HTML string,
  original English markup cached into `data-en` on load); clicking a `.lang-btn` swaps every tagged
  element's content, updates `<html lang>`, and persists the choice in `localStorage`. aria-labels use
  the parallel `data-fr-aria` / `data-en-aria` pair. Tech terms, proper nouns, and official qualification
  names (e.g. the Bac+2/Bac+3 diploma titles, which are already in French) are intentionally left
  untranslated in both languages.

## Known placeholders — need real content before launch
- [x] `assets/resume.pdf` — a 2-page résumé generated from the content already in `index.html` (summary,
      experience, projects, skills, education), not from the old CV docx. Linked from the hero's
      "Download résumé" button. Regenerate it by hand from current page content if that content changes
      significantly — there's no build step wiring this up automatically.
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
- [x] About bio, stats (12 years / 10 clients / 5 industries) and Skills section now reflect the real
      CV (Java/Spring Boot backend focus, in-progress AI Master's) instead of placeholder/generic text.
- [x] Email is live: `kav.khood@gmail.com`.
- [x] Work section now has 3 real projects: Multicomm-Ensemble, Mauresto, and OnlineHealthSystem (a
      legacy Java hospital-management web app — raw Servlets/JSP/JSTL, JDBC, MySQL, jQuery — currently
      mid-migration to Spring Boot). No "coming soon" slots left; add a new card if another project ships.
- [x] New **Education (`#education`)** section added between Skills and Contact: Master's in AI
      (University of Mauritius, completed Oct 2026), an Arduino/mechatronics course (2021), and the two
      earlier Bac+3/Bac+2 diplomas from Université des Mascareignes (2016/2014).
- [x] Bilingual EN/FR support added site-wide (nav toggle, client-side swap, no page duplication). French
      copy for CV-derived sections (About/Experience/Education) is sourced from the original French CV
      (`ASTEK_CV_KAVISH_KHOODEERAM.docx`) rather than re-translated from the English site text, where that
      CV covers the entry; newer roles not in the CV (2024 onward) are translated fresh from the English
      copy. Update both `data-fr` and the visible English text together when editing content going forward.

## Non-goals
- No CMS, no backend, no analytics/tracking, no contact form (mailto only) — keep it static and dependency-free.

## Open questions
- None currently. Hosting target settled: GitHub Pages, deployed from `main`, no custom domain for now.
