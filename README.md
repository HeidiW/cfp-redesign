# Handoff: Conor Foy Plaster — website redesign

## Overview

An eight-page marketing site for **Conor Foy Plaster** — a decorative plaster shop in New York, working since 2002 — plus **JobsOxo**, the job-management platform the business runs on (built by Heidi Williams-Foy, and opening to other trade companies in mid-September 2026).

Pages: Home, Work, Services, Consulting, JobsOxo, About, Trade Partners, Contact. Every page links to every other via the header and footer nav. There is also a `logo-directions.dc.html` reference page showing the chosen typographic logo direction (01).

## About the design files

The files in `design/` are **design references written in HTML** — prototypes that show intended look, copy, and behavior. They are not production code to lift wholesale.

The task is to **recreate these designs in the target codebase's own environment**, using its established framework, component library, routing, and conventions. If there is no codebase yet, choose the framework that fits the project (a static site generator such as Astro, Eleventy, or Next.js static export is a good fit — this is a marketing site with no application state) and implement the designs there.

The prototypes use a small in-house runtime (`design/support.js`) to render templates. **Ignore that runtime.** Read the markup and inline styles inside each `<x-dc>` body as the spec. `design/image-slot.js` is a drag-and-drop image placeholder used only for authoring; in production those slots become plain `<img>` elements.

## Fidelity

**High fidelity.** Colors, typography, spacing, copy, and responsive breakpoints are final and should be matched closely. Every value is either a literal in an inline `style` attribute or a CSS custom property defined in the page's `<style>` block (see Design tokens).

Two intentional stylistic choices to preserve:
- Body copy is **justified** (`text-align: justify`) at a comfortable measure on most prose blocks.
- Structure is drawn with **1px hairline rules**, not filled panels or heavy shadows. Buttons are outlined, never solid-filled.

## Design system

The prototypes consume the **Classical** design system (`design/_ds/classical-.../styles.css`, with its guide in the same folder). It is an editorial, book-like system: Cormorant Garamond headings over Lora body, hairline dividers, photographs matted in a `.plate` wrapper, outlined buttons.

Classes used from it, all defined in `styles.css`:

| Class | Use |
| --- | --- |
| `.btn` + `.btn-primary` / `.btn-secondary` | Actions. Primary is a 1px accent outline on transparent — **not** a fill. |
| `.tag` + `.tag-outline` / `.tag-accent` / `.tag-neutral` | Small labels (materials, project categories, job stages) |
| `.card` + `.card-kicker` / `.card-title` / `.card-body` | Bordered, unfilled content surfaces |
| `.nav` + `.nav-brand` | Header bar |
| `.table` | The JobsOxo jobs-board mock |
| `.field` + `.input` | Contact and waitlist forms |
| `.plate` | Wrapper on **every** content photograph — a warm archival grade inside a thin mat |
| `.hr` | Hairline rule |
| `.text-muted` | Secondary text color |

Recreate these as components in the target system, or port `styles.css` directly — it is a single self-contained stylesheet with no build step.

Interaction states are defined in `styles.css` and should not be re-styled per page: hover and pressed states come from the accent ramp, keyboard focus is `outline: 2px solid var(--color-accent); outline-offset: 2px`, `::selection` is an accent tint, disabled controls drop to 45% opacity. **Do not ship browser-default focus rings.**

## Design tokens

The site **overrides the design system's default palette** with a custom five-color palette. The override is a `:root` block at the top of each page's `<style>`; it must be applied globally in production. Full set:

### Roles
| Token | Value | Notes |
| --- | --- | --- |
| `--color-bg` | `#ebf2fa` | Alice Blue — the page ground |
| `--color-surface` | `#f7e2d7` | Warm tint for alternating section bands |
| `--color-text` | `#132a13` | Evergreen — all body and heading text |
| `--color-accent` | `#640d14` | Black Cherry — borders, kickers, rules, links |
| `--color-accent-2` | `#e5be9e` | Desert Sand |
| `--color-divider` | `color-mix(in srgb, #132a13 20%, transparent)` | Every hairline rule |

### Named source palette
Desert Sand `#e5be9e` · Alice Blue `#ebf2fa` · Evergreen `#132a13` · Black Cherry `#640d14` · Peach Fuzz `#fad4c0`

### Ramps
Neutrals: `--color-neutral-100` `#f4f8fb`, `200` `#e6ecec`, `300` `#cfd8d1`, `400` `#aeb8b0`, `500` `#8b968d`, `600` `#6c766e`, `700` `#4f584f`, `800` `#33392f`, `900` `#1d2a1c`

Accent: `--color-accent-100` `#fdeee9`, `200` `#fad4c0`, `300` `#e5be9e`, `400` `#b85a52`, `500` `#8e2b2a`, `600` `#4c0810`, `700` `#640d14`, `800` `#4c0810`, `900` `#33060b`

Accent-2: `--color-accent-2-100` `#fdeee9`, `200` `#fad4c0`, `300` `#e5be9e`, `400` `#cfa279`, `500` `#b08556`, `600` `#8b6740`, `700` `#6b4e30`, `800` `#4a3520`, `900` `#2e2114`

**Contrast rule:** `--color-accent` on the light ground is tuned to ~3:1 — fine for icons, large text, and chrome, but **not** for paragraph-size text. Body-size accent text uses `--color-accent-700`. All uppercase kickers in the designs use `--color-accent-700`.

### Typography
- `--font-heading`: Cormorant Garamond. `--font-body`: Lora. Both loaded from Google Fonts.
- Bold is avoided. Headings set at `font-weight: 400`; the larger the text, the lighter it reads.
- Display sizes are fluid: `clamp(46px, 9vw, 104px)` for the home h1, `clamp(38px, 7vw, 76px)` for page h1s, `clamp(29px, 4.4vw, 46px)` for section h2s. Project titles 27–32px, sub-titles 19–24px.
- Body: 15–16.5px at `line-height: 1.75–1.85`. Secondary/meta: 13.5–14.5px. Kickers and eyebrows: 11px, `letter-spacing: 0.14–0.22em`, uppercase.
- Numbers set tabular via `font-feature-settings: 'tnum'` — used on every year, kicker numeral, table figure, and dollar amount. Running prose keeps default figures.

### Spacing, radius, shadow
Take `--space-*`, `--radius-*` (`--radius-sm` used on the logo mark), and `--shadow-sm/md/lg` from `styles.css` — density is 1.15× and base radius 4px. Section padding is `88px clamp(20px, 5vw, 48px)` at desktop; content max-widths are 1180px or 1280px, centered.

## Layout conventions

- Page shell: `header.nav` (brand mark left, nav links + accent CTA right) → sections → `footer`. Header and footer markup is near-identical across all eight pages — build it once.
- The header CTA carries an **inline accent color** to beat nav-link specificity; keep that when porting.
- Sections are separated by `border-top: 1px solid var(--color-divider)`, and alternate between `--color-bg` and `--color-surface` bands. No more than two background tones per page.
- Grids are explicit `grid-template-columns` with `gap`, never inline-flow or per-element margins. Sibling groups (tags, nav items, buttons) are flex + `gap`.
- Photographs: `<img class="plate">` with an explicit pixel `height` and `object-fit: cover`.

### Responsive
Two breakpoints, implemented as `!important` overrides on `data-rsp` / `data-cols` attribute selectors:

**≤1080px**
- `[data-rsp="cards"]` → 2 columns
- `[data-rsp="cells2"]` → 2 columns; `[data-rsp="cells1"]` → 1 column
- `[data-rsp="plates8"]` → `repeat(4, minmax(0, 1fr))`
- `[data-rsp="rows"]` → 1 column, gap 22px
- `header.nav` wraps with 14px row gap; nav links gap 18px

**≤720px**
- `[data-rsp="cards"]` → 1 column, gap 28px
- `[data-rsp="cells2"]` → 1 column
- `[data-rsp="plates8"]` → `repeat(2, minmax(0, 1fr))`
- `[data-cols="1"]` → `columns: 1`
- `header.nav > nav` → full width

Auto-fit grids deliberately collapse to **divisor counts** (8 → 4 → 2) so no orphan grey gaps appear in the photo strip. Preserve that.

In production, replace the attribute-selector hack with ordinary media queries or container queries on the real components — the hack exists only because the prototype has no stylesheet layer.

## Screens

### 1. Home — `home-plate-book.dc.html`
Purpose: establish the craft, show recent rooms, point at JobsOxo, capture newsletter signups.

Order of content:
1. **Header nav.**
2. **Hero.** Kicker row: "Venetian & custom plaster" — 40×1px accent rule — "New York, since 2002" (11px, `0.2em`, uppercase, `--color-accent-700`). Then h1 **"Rooms that hold light."** at `clamp(46px, 9vw, 104px)`, `line-height: 0.98`, `letter-spacing: -0.028em`, `text-wrap: balance`.
3. **Hero body row** — `[data-rsp="rows"]`, `grid-template-columns: 1fr 1.05fr`, `gap: 64px`, `align-items: stretch`. Left: justified intro paragraph (16.5px/1.8, max 50ch) + two buttons (`.btn-primary` "Request a consultation" → `#contact`, `.btn-secondary` "See the work" → `#work`), 14px, `padding: 12px 22px`. Right: `<figure>` as a flex column with `<img class="plate">` at `flex: 1 1 auto; min-height: 200px; object-fit: cover` and a 12px figcaption. **The stretch + flex figure is deliberate** — it makes the photo take its height from the text column so the two columns end level. An earlier version pinned the image height and left a visible void under the buttons.
4. **Photo strip.** `margin-top: 56px`, `padding-top: 28px`, `border-top` hairline. Header row: kicker "In the shop, on the wall" + a 12px muted note. Then `[data-rsp="plates8"]`: `repeat(8, minmax(0, 1fr))`, `gap: 12px`, each cell `aspect-ratio: 3/4; min-width: 0; overflow: hidden` showing a muted label by default; a slot with a photo has that `<img>` (`object-fit: cover`) absolutely positioned over the label, `opacity: 0` rising to `1` on cell `:hover`/`:focus-within` (shown outright under `hover: none`). Subjects, in order: sample panel (filled), mixing pigment, trowel detail, crew on site, gilding, tadelakt polished, restoration, finished room.
5. **Client strip.** Full-width band, hairline top and bottom, 22px padding: muted label "Recent rooms" then Maxime's · Friedman's · W 13th St Residence · Bobby Flay Residence · Moxy Williamsburg · Carver Steak (11px, `0.16em`, uppercase, flex + 40px gap).
6. **Featured projects.** Two large alternating `<article>` rows (`1fr 220px` / reversed) with a 560px and 520px plate, then a `[data-rsp="cards"]` 4-up grid of smaller projects with 210px plates. Each carries an `NN — YEAR` kicker, title, description, and outline tags. See Content below for the current data.
7. **JobsOxo teaser.** `1fr 1fr`, kicker "Our platform · Available mid-September 2026", h2 "JobsOxo", justified paragraph, `.btn-primary` "See JobsOxo →". Right column is a bordered hairline list of platform capabilities.
8. **Newsletter signup** and **footer** (brand mark, nav links, `© 2026 Conor Foy Plaster`).

### 2. Work — `work.dc.html`
Purpose: the full project index.

h1 **"Twenty-three years of interiors."** at `clamp(38px, 7vw, 76px)` with a justified intro paragraph. Below it, a hairline-topped flex row of category tags: Restaurants, Hotels, Residences, Private clubs, Restoration.

Then one hero `<article>` (`1fr 240px`, 600px plate) for Moxy, followed by `[data-rsp="cards"]` at 2 columns, `gap: 48px 40px`, each article: 340px plate → title row (`justify-content: space-between`: h2 27px, year 12px tabular) → 13.5px description → outline tags.

### 3. Services — `services.dc.html`
Finish catalogue plus a **"How a job runs"** section: h2 "Four steps, and none of them skipped.", a muted note that the job is managed in JobsOxo, and a hairline-ruled four-row list.

### 4. Consulting — `consulting.dc.html`
For finishing companies that have hit a ceiling. Two-column article: justified prose (ending in an inline link to the JobsOxo page) beside a `border-left` hairline list — estimating systems, job costing and reporting, workflow from inquiry to payment, JobsOxo setup and training. Then three `.card`s labeled First / Then / Throughout describing the engagement.

### 5. JobsOxo — `jobsoxo.dc.html`
Purpose: pre-launch product page. **Lighter in tone than the rest of the site** — centered hero, more surface bands.

- **Pill badge:** inline-flex, `border-radius: 999px`, 5px accent dot, text "Available mid-September 2026".
- h1 "JobsOxo" at `clamp(44px, 8.5vw, 92px)`; heading-font tagline "Run the whole job in one place."; muted 16px subhead. CTAs: `.btn-primary` "Join the waitlist" → `#demo`, `.btn-secondary` "See the workflow" → `#workflow`.
- **Jobs-board mock.** A window chrome row (three 9px circles, label "JobsOxo — Jobs board") over a `200px 1fr` split (sidebar + `.table` of jobs with columns Job / Stage / Crew / Contract / Invoiced, stage as `.tag`). `min-height: 460px`. ⚠️ **Known inconsistency:** the mock rows still name "Gramercy Hotel" and "Nobu Downtown," two projects replaced elsewhere on the site by Carver Steak and W 13th St Residence. Update the mock data when implementing.
- **Workflow** grid of numbered capability cells on `--color-bg` panels.
- **"Why it exists"** — h2 "We wrote it because nothing else fit." Two paragraphs; the second credits Heidi Williams-Foy and states the mid-September 2026 opening. Beside them, three `.card`s: Built for / Not built for / Runs on.
- **`#demo` section** — h2 "First look, mid-September 2026.", explanatory paragraph, `.hr`, `hello@jobsoxo.com`, and the line "A product of JobsOxo, LLC — New York". Right column is the waitlist form (see State).
- Footer credit line: `© 2026 Conor Foy Plaster · JobsOxo is a product of JobsOxo, LLC`.

### 6. About — `about.dc.html`
Two-column intro: headline and bio prose beside a `<figure>` with a 520px plate — currently a photo of Conor Foy beside a curved polished plaster wall, captioned "Conor Foy — curved polished plaster, on site."

Then a **timeline**: rows of `grid-template-columns: 90px 1fr`, `gap: 32px`, `padding: 22px 0`, hairline bottom border, `align-items: baseline`. Year in heading font at 22px in `--color-accent-700` with tabular figures; event text at 14.5px/1.75. Current rows: 2002, 2016, 2019, 2022 (Moxy), 2025 (Maxime's — largest single job to date), 2026 (JobsOxo in daily use, opening mid-September).

### 7. Trade Partners — `trade-partners.dc.html`
For architects, designers, and GCs. Three numbered `--color-bg` panels (01/02/03) — the third is "Run your shop on JobsOxo" with a link reading "JobsOxo — available mid-September 2026 →". Below, a hairline list of what partners get (`230px 1fr` rows), including daily logs and photos filed from site.

### 8. Contact — `contact.dc.html`
Contact details column — including a "JobsOxo enquiries" block linking to "Join the JobsOxo waitlist" — beside an inquiry form. Newsletter signup also appears here.

## Interactions & behavior

Deliberately minimal — this is a marketing site.

- **Navigation:** plain links between pages; in-page anchors (`#work`, `#contact`, `#demo`, `#jobsoxo`, `#workflow`). No client-side router needed.
- **Forms:** on submit, prevent default and swap the button label to a confirmation. JobsOxo waitlist: `"Join the waitlist"` → `"Thank you — we'll be in touch"`. The contact and newsletter forms behave the same way. No real backend is wired — connect these to whatever the codebase uses (a form service, an API route, an email provider list).
- **Hover / focus / pressed:** inherited from `styles.css`; do not override per page.
- **No scroll animations, carousels, parallax, or reveal-on-scroll.** Nothing moves that the user didn't move.

## State management

Almost none. Per-form boolean `sent` flags drive the label swap — local component state is sufficient. No global store, no data fetching in the design. The only real integration points are the three form endpoints (contact inquiry, newsletter signup, JobsOxo waitlist).

## Assets

All photographs are in `design/uploads/` and are the client's own; they ship with the site.

| File | Used for |
| --- | --- |
| `IMG_6113.jpg` | Maxime's — hero on Work and Home |
| `IMG_0707.jpg` | Friedman's |
| `Screenshot 2026-09-01 at 6.21.33 PM.jpg` | W 13th St Residence |
| `IMG_8614.jpg` | Bobby Flay Residence |
| `assets-1788224004596-jq8l.png` | Moxy Hotel, Williamsburg |
| `IMG_7514.jpg` | Carver Steak |
| `IMG_4105.jpg` | About — Conor Foy on site |
| `assets-1788224033372-mz8e.png` | Home hero — gold leaf over lime plaster, studio sample |

Rename these to descriptive slugs on the way in, and generate responsive sizes — several are full-resolution phone photos being displayed at a few hundred pixels tall. Portrait-orientation shots are cropped by `object-fit: cover` in landscape frames; keep the `object-position` where one is specified.

The eight home-page strip slots have **no images yet** and need art from the client.

Icons: the design system specifies **Lucide**. The current pages use almost none — geometric marks are drawn with borders and background color instead.

Logo: direction 01, a typographic mark — a 34px square with a 1px accent border and `--radius-sm` containing the initial, set beside "Conor Foy Plaster" in the heading font with "New York · Est. 2002" beneath at 9px `0.22em` uppercase. See `logo-directions.dc.html`.

## Content

The copy in the prototypes is final unless noted. Project data as it currently stands:

| Project | Year | Location | Materials |
| --- | --- | --- | --- |
| Moxy Hotel | 2023 | Williamsburg, Brooklyn | Venetian, Hotel |
| Maxime's | 2025 | Midtown | Hand painted, Faux marble, Private club |
| Friedman's | 2024 | — | Gold leaf, Restaurant |
| W 13th St Residence | 2026 | — | Polished plaster, Residential |
| Bobby Flay Residence | 2025 | — | Lime plaster, Residential |
| Carver Steak | 2026 | — | Polished plaster, Ceilings, Restaurant |

Two things to confirm with the client before launch: the JobsOxo dollar figures in the jobs-board mock are illustrative, and the About bio and timeline dates were drafted rather than dictated.

## Files

In `design/`:

- `home-plate-book.dc.html` — Home
- `work.dc.html` — Work
- `services.dc.html` — Services
- `consulting.dc.html` — Consulting
- `jobsoxo.dc.html` — JobsOxo
- `about.dc.html` — About
- `trade-partners.dc.html` — Trade Partners
- `contact.dc.html` — Contact
- `logo-directions.dc.html` — logo reference
- `_ds/classical-.../styles.css` — the design system stylesheet (tokens + components). **Read this first.**
- `_ds/classical-.../readme.md` — the design system's own guide
- `_ds/classical-.../_ds_bundle.js` — design system component bundle (only needed to run the prototypes)
- `support.js`, `image-slot.js` — prototype runtime and the authoring image placeholder. Not part of the production site.
- `uploads/` — photography

To view a prototype, open any `.dc.html` file directly in a browser.

In `screenshots/` — full-page reference captures of all eight pages at desktop width (`1-home.png` … `8-contact.png`). Use them to check overall rhythm and section order; take exact values from the HTML and `styles.css`, not from the images.

## Getting started with Claude Code

1. Put this folder inside (or beside) the repo you want the site built in.
2. From the repo root, run `claude`.
3. Open with a prompt along these lines:

   > Read `design_handoff_cfp_website/README.md` and the HTML prototypes in `design_handoff_cfp_website/design/`. They are design references, not production code. Build the eight-page site in this repo using its existing conventions. Start with the shared shell — tokens, header, footer, section band pattern — then the Home page, and stop for review before continuing.

4. Ask it to port `_ds/classical-.../styles.css` (plus the `:root` palette override in the Design tokens section above) as the global stylesheet before building any page — that gets tokens and interaction states right for free.
5. Build page by page, reviewing each against the matching screenshot, rather than asking for all eight at once.
