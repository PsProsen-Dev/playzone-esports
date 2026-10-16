# PlayZone eSports — Design Plan (DESIGN.md)

**Role:** Designer specification for build workers.
**Scope:** Plan only — no code. Build workers implement `components/sections/*.tsx` exactly per contracts below.
**Project root:** `~/workspace/playzone-esports/`
**Logo:** `public/logo.png` (1202×1202 JPEG, black background, white stencil "PLAYZONE ESPORTS / A ESPORTS COMMUNITY"). Workers: the logo has a black background — always render it on a dark surface, never on white. It's square and text-heavy; use `object-contain` and small sizes (40–96px) so text stays crisp.

**Community facts to reference in copy (real):**
- Discord `https://discord.gg/fWuchPP` — PRIMARY community CTA; tournament/custom-room announcements happen here.
- YouTube `https://www.youtube.com/@playzoneesports`, Instagram `https://instagram.com/ig_playzone_esports`, Email `contact@playzoneesports.com`.
- Active since **12 Feb 2020**, based in **India**. Runs **free tournaments twice a week** + **paid T2/T3** tiers; custom rooms **live-streamed on YouTube**; sign-off **"|| Jai Hind ||"**.

---

## 1. Design Tokens Summary

### Colors
| Token | Value | Usage |
|---|---|---|
| `background` | `#050505` | Page background, near-black |
| `surface` | `#0D0D0D` / `#111111` | Cards, panels, alternating section fills |
| `border` | `rgba(255,255,255,0.10)` | Hairline borders everywhere |
| `foreground` | `#FFFFFF` | Primary text |
| `muted` | `#A1A1A1` | Secondary text, meta info |
| `accent` (amber) | `#FFB800` | CTAs, key highlights, active states |
| `accent-hover` | `#E6A600` | Amber hover state |
| `accent-dim` | `rgba(255,184,0,0.12)` | Amber-tinted fills (badges, icon chips) |

**Amber discipline:** Amber is reserved for *actions and achievements* — primary CTAs, prize-pool figures, winner names/trophies, active tab, live badges. Everything else stays white/gray. Never use amber for body text.

### Typography
- **Display / headings:** "Black Ops One" (Google Fonts via `next/font`), military stencil — section titles, hero headline, card titles, stat numbers. All-caps by convention.
- **Body / UI:** "Rajdhani", medium weight for body copy, semi-bold for labels/buttons. Use normal case for body; labels/eyebrows uppercase with letter-spacing.
- **Type scale:** Hero headline `clamp(2.5rem, 8vw, 6rem)`; section eyebrow `text-xs tracking-[0.3em]`; section title `text-4xl md:text-5xl`; card title `text-xl`; body `text-base/lg` in `muted`.

### Spacing rhythm
- Section shell: `py-20 md:py-28`, container `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Eyebrow → title → lead paragraph gap: `mb-4 / mb-6 / mb-12`.
- Card padding: `p-6 md:p-8`. Gap grid: `gap-6 md:gap-8`.
- Alternating section backgrounds: `#050505` → `#0D0D0D` to create rhythm down the page.

### Signature visual language ("military/stencil esports")
- **Angled clip-paths:** primary buttons and section-divider edges use `clip-path: polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)` (slanted corners). Apply to: primary CTAs, stat strip panels, tournament card headers.
- **Stencil headings:** Black Ops One headings get a subtle grunge feel via `letter-spacing` + an amber underline bar (short 64px, 4px tall, angled cut).
- **Scanline/grid textures (CSS-only):** hero + gallery placeholders use `background-image: repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 4px)` (scanlines) and `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)` with `background-size: 40px 40px` (grid). No external images.
- **Tape/strip motifs:** thin amber diagonal stripes (`repeating-linear-gradient(45deg, #FFB800 0 8px, transparent 8px 16px)`) as 4px-high accent strips on card tops / section dividers.
- **Dossier framing:** cards get corner ticks (small amber `::before`/`::after` L-shaped borders at two opposite corners) to feel like tactical dossier cards.

---

## 2. Per-Section Plans

Shared convention: each section starts with eyebrow (`text-amber-400 tracking-[0.3em] uppercase text-xs`) + Black Ops One title + amber underline bar + one lead paragraph in muted. Give each `<section>` a stable `id` (`#about`, `#tournaments`, `#teams`, `#gallery`, `#join`) for nav anchor links.

### 2.1 Hero — `components/sections/Hero.tsx`
**Layout:** full-viewport (`min-h-screen`) centered content, layered background:
1. Base `#050505` + scanline/grid overlay.
2. Radial amber glow: large soft `radial-gradient(circle at 50% 35%, rgba(255,184,0,0.10), transparent 60%)`.
3. Bottom fade to next section.

**Key visual elements:**
- Centered logo (`public/logo.png`, ~96px, `object-contain`) above the headline — it anchors brand identity on load.
- Eyebrow: "A ESPORTS COMMUNITY — SINCE 12 FEB 2020" in amber, tracking wide.
- Headline (Black Ops One, all caps): "DROP IN. / SQUAD UP. / WIN." — three stacked lines, "WIN." in amber. (Short, stencil-shouting, BGMI-lobby energy.)
- Sub-copy (Rajdhani, muted): 1–2 lines — "Battle Royale & shooter tournaments for India's grind — free customs twice a week, paid T2/T3 prize pools, rooms streamed live on YouTube."
- **Dual CTAs:** primary amber angled button "JOIN OUR DISCORD" → `https://discord.gg/fWuchPP` (opens new tab); secondary ghost button "VIEW TOURNAMENTS" → `#tournaments`.
- Bottom row: mini-stat ticker — "FREE CUSTOMS ×2 / WEEK · PAID T2/T3 · LIVE ON YOUTUBE" as inline badges separated by amber slashes.
- Scroll cue at bottom: small amber chevron bouncing (respect reduced-motion).

**Premium feel:** glow + scanlines + huge stencil type = broadcast-lobby immersion; logo-on-top makes it unmistakably PlayZone, not generic esports.

### 2.2 About (+ stats strip) — `components/sections/About.tsx`
**Layout:** two-column on `md+` (copy left, visual right), single column stacked on mobile. Background `#0D0D0D`.

**Left — real copy block (~90 words), structured:**
- Eyebrow: "WHO WE ARE". Title: "THE COMMUNITY BEHIND THE COMBAT".
- Body (Rajdhani, muted, generous `leading-relaxed`): the channel description — official tournaments, FREE + PAID tiers (T2/T3), custom rooms live-streamed on YouTube, free tournaments twice a week. Keep paragraphs short (2–3 sentences each, 2 paragraphs max) so ~90 words never look like a wall.
- Sign-off line in amber, Black Ops One small: "|| JAI HIND ||".
- Facts row (badge chips): "EST. 12 FEB 2020" · "INDIA" · "BATTLE ROYALE / SHOOTER".

**Right — visual panel:** CSS-built "operations board": dark panel with grid texture, corner ticks, showing a stylized "weekly ops" mini-list (e.g., `MON — FREE CUSTOM ROOM`, `FRI — FREE CUSTOM ROOM`, `SUN — PAID T2/T3`) with amber status dots. Pure CSS/SVG, no images.

**Stats strip (below, full-width, `#050505` band with angled top/bottom edges via clip-path):** 4 stats in a row, Black Ops One numbers in white with amber suffix: "2020 EST.", "2× FREE CUSTOMS / WEEK", "T2/T3 PAID TIERS", "100% COMMUNITY RUN". (Use community-true claims only — no invented member counts.)

**Premium feel:** dossier-style ops board + angled stats band = "run like an operation, not a page".

### 2.3 Tournaments — `components/sections/Tournaments.tsx`
**Layout:** background `#050505`. Two sub-blocks: **Upcoming** cards grid + **Past results** list.

**Upcoming cards** (`grid sm:grid-cols-2 lg:grid-cols-3 gap-6`): sample data (3–4 cards). Each card:
- Top: 4px amber stripe + angled header chip with tier badge (`FREE CUSTOM` in amber-dim, `PAID T2`/`T3` in amber solid).
- Title (Black Ops One): e.g., "WEEKLY FREE CUSTOM — ERANGEL".
- Meta rows with Lucide icons: `CalendarDays` date, `Users` slots, `Trophy` prize pool (amber figure).
- CTA: "REGISTER ON DISCORD" ghost button → Discord link (all registration flows through Discord — no fake forms).
- Hover: border brightens to amber/40, card lifts `translate-y-[-4px]`, stripe glows.

**Past results** (below, `#0D0D0D` inset panel): compact rows — placement badge (🥇 styled as amber circle w/ `Crown` icon, no emoji), team name, event name, date, prize. 3–4 sample rows. Table-like on desktop, stacked rows on mobile.

**Premium feel:** tier color-coding (amber intensity = stakes) makes scanning instant; everything actionable routes to Discord — honest, no dead buttons.

### 2.4 Teams — `components/sections/Teams.tsx`
**Layout:** background `#0D0D0D`. Grid `sm:grid-cols-2 lg:grid-cols-4 gap-6`. Sample-data driven.

**Roster cards:** each card:
- Avatar: CSS/SVG placeholder — angled square with grid texture + big Black Ops One initial letter + amber corner tick. No external images.
- Name (Black Ops One), role badge (`IGL`, `ASSAULTER`, `SNIPER`, `SUPPORT` via `badge.tsx`), 1-line tagline in muted.
- Footer row: `Crosshair` icon + "K/D" style sample stat in amber.
- Hover: avatar background shifts to amber-dim, name turns amber.

**Section note:** header copy frames it as "SQUADS TO WATCH" — community rosters, sample data labeled clearly in code comments (not visually).

**Premium feel:** uniform dossier cards with role badges feel like a pro-league roster page.

### 2.5 Gallery — `components/sections/Gallery.tsx`
**Layout:** background `#050505`. Masonry-ish grid: `grid-cols-2 md:grid-cols-4` with 2 feature tiles spanning 2 cols.

**CSS/SVG placeholder visuals** (zero external images) — 6–8 tiles, each a different generative treatment:
- "Match moment": layered scanlines + big Black Ops One text like "WINNER WINNER" + amber glow.
- "Livestream": SVG play-triangle + "LIVE ON YOUTUBE" label + red-dot pulse (amber instead of red for palette discipline).
- "Trophy lift": `Trophy` Lucide icon large in amber-dim panel.
- "Squad drop": SVG parachute/drop-zone diagram (simple shapes, dashed lines).
- "Zone map": SVG circle-in-circle "shrinking zone" graphic on grid background.
- "Scoreboard": mini CSS table rows with amber highlights.
- Each tile: caption bar at bottom (title + tag badge), hover zoom (`scale-105` on inner) + amber border glow.
- `role="img"` + `aria-label` per tile since they're meaningful visuals.

**Premium feel:** generative art direction — looks intentional and on-brand, not "images missing".

### 2.6 Join Us / Contact — `components/sections/JoinUs.tsx`
**Layout:** background `#0D0D0D`. Two-column `lg:grid-cols-2`: **Discord CTA panel (primary, left)** + **form panel (secondary, right)**.

**Left — Discord-first (high emphasis):**
- Big panel with amber border glow + scanline texture.
- `MessageCircle` / Discord-ish icon (use `MessagesSquare` from Lucide — no brand icon available) in amber chip.
- Title (Black Ops One): "YOUR SQUAD IS WAITING".
- Copy: "Tournament announcements, custom-room IDs & passwords, results — everything drops on Discord first."
- **Primary amber angled button: "JOIN OUR DISCORD" → `https://discord.gg/fWuchPP`** (new tab, `rel="noopener"`). Largest CTA on the page besides hero.
- Secondary row: social icon-links — YouTube (`Youtube` icon → `https://www.youtube.com/@playzoneesports`), Instagram (`Instagram` icon → `https://instagram.com/ig_playzone_esports`), Email (`Mail` icon → `mailto:contact@playzoneesports.com`).

**Right — join form (secondary, "or drop your details"):** fields via `input.tsx`: Name, In-Game ID, Phone. Submit button ghost/outline "SEND VIA WHATSAPP" (`Send` icon) — builds a pre-filled WhatsApp message (`https://wa.me/<number>?text=<encoded: name, game ID, phone + "I want to join PlayZone eSports">`) and opens it. **No backend.** Note under form: "No spam, no calls — just squad invites." (WhatsApp number to be supplied — leave a clearly-marked constant `WHATSAPP_NUMBER` in the component; do not invent one.)

**Premium feel:** Discord-first hierarchy respects how the community actually operates; the form is a genuine low-friction alternative, not a dead lead-capture box.

### 2.7 Footer — `components/sections/Footer.tsx`
**Layout:** background `#050505`, top border `white/10`. 4-column grid on desktop → stacked on mobile:
1. Brand: logo (48px) + one-line tagline + "|| Jai Hind ||" in amber small.
2. Navigate: anchor links (About, Tournaments, Teams, Gallery, Join).
3. Community: Discord (primary, amber text), YouTube, Instagram — with Lucide icons, real URLs.
4. Contact: `Mail` → contact@playzoneesports.com; note "Based in India · Active since 12 Feb 2020".
- Bottom bar: `© 2026 PlayZone eSports` + "A esports community" + tiny top-link (`ArrowUp`).

**Premium feel:** tight, complete, every link real — no dead socials.

---

## 3. Responsive Plan (375px mobile)

- **Hero:** headline `clamp()` scales down; logo 72px; CTAs stack full-width (`w-full sm:w-auto`); ticker wraps; scanline/glow retained (cheap CSS).
- **About:** columns stack; ops board below copy; stats strip becomes 2×2 grid (smaller numbers, keep Black Ops One).
- **Tournaments:** cards single column; past-results rows stack (badge + names, meta wraps); meta icon-rows wrap cleanly.
- **Teams:** 2-column grid at 375px (cards stay compact), 1-column only if cramped — prefer 2-col with smaller type.
- **Gallery:** 2-col grid; feature tiles span 2 cols; captions truncate with `line-clamp-1`.
- **JoinUs:** Discord panel first (it's the primary CTA), form below; inputs `text-base` minimum (prevents iOS zoom); WhatsApp button full-width.
- **Footer:** stacks; link columns become 2-col; bottom bar centered.
- **Global:** section padding drops to `py-16`; angled clip-paths reduce to 8px cuts (avoid clipping text at small widths); horizontal overflow guarded (`overflow-x-clip` on body/main).

## 4. Accessibility Notes

- **Contrast:** white on `#050505` = 21:1; muted `#A1A1A1` on black ≈ 7:1 — body-safe. Amber `#FFB800` on black ≈ 10:1 — safe for text/badges. Never place amber text on white (n/a — dark site).
- **Focus states:** every interactive element gets `focus-visible:outline-2 outline-amber-400 outline-offset-2` (or ring via button variants). Skip-link "Skip to content" at top.
- **Semantics:** one `<h1>` (hero headline); each section title `<h2>`; card titles `<h3>`; nav/footer use `<nav>`/`<footer>` landmarks; form fields have real `<label>`s.
- **Alt text:** logo `alt="PlayZone eSports logo"`; gallery tiles are CSS art → `role="img"` with descriptive `aria-label`; decorative textures `aria-hidden="true"`.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables bounce/zoom/transition animations globally; scroll-reveal (below) becomes instant-visible.
- **Touch:** tap targets ≥ 44px; Discord/WhatsApp CTAs full-width on mobile.

## 5. Micro-interactions

**No heavy libs — CSS-only + one tiny IntersectionObserver hook.**

- **Scroll reveal:** single reusable hook (e.g., `useReveal` in `lib/` or inline per section) — adds `.is-visible` when the section enters viewport (threshold 0.15, `once: true`). CSS: `.reveal { opacity:0; translate:0 24px; transition: opacity .6s ease, translate .6s ease }` → `.is-visible` resets. Stagger children with `transition-delay` via inline style (`--d: 0/1/2`).
- **Buttons:** primary amber — hover `#E6A600` + `translate-y-[-2px]` + shadow `0 8px 24px rgba(255,184,0,0.25)`; active `translate-y-0`. Ghost — hover border-amber/60 + text-amber.
- **Cards:** hover lift + border glow (amber/40); tournament card top-stripe brightens; team card avatar tint shifts.
- **Gallery tiles:** inner `scale-105` on hover with `overflow-hidden`; caption slides up 4px.
- **Nav (if a header is added):** sticky, `backdrop-blur`, border appears on scroll; mobile menu = simple toggle panel.
- **Live touches:** pulsing amber dot on "LIVE"-style badges (`animate-pulse` is fine); hero chevron gentle bounce — both disabled under reduced-motion.

---

## Build-worker contracts (quick reference)

| File | Default export | Notes |
|---|---|---|
| `components/sections/Hero.tsx` | `Hero` | Full-viewport, logo, 3-line headline, dual CTAs (Discord primary) |
| `components/sections/About.tsx` | `About` | ~90-word real copy + ops board + angled stats strip |
| `components/sections/Tournaments.tsx` | `Tournaments` | Upcoming cards (sample) + past results (sample), register → Discord |
| `components/sections/Teams.tsx` | `Teams` | Roster cards (sample), CSS avatar placeholders |
| `components/sections/Gallery.tsx` | `Gallery` | CSS/SVG generative tiles, `role="img"` + labels |
| `components/sections/JoinUs.tsx` | `JoinUs` | Discord CTA primary + WhatsApp form secondary, `WHATSAPP_NUMBER` constant |
| `components/sections/Footer.tsx` | `Footer` | 4-col, real socials, `contact@playzoneesports.com` |
| `components/ui/button.tsx` | shadcn-style, `cva` variants incl. `angled` clip-path | amber primary, ghost secondary |
| `components/ui/card.tsx`, `badge.tsx`, `input.tsx` | shadcn-style | dark defaults, `cn()` from `lib/utils.ts` |
| `app/page.tsx` | assembles sections in order | Hero → About → Tournaments → Teams → Gallery → JoinUs → Footer |

**Fonts:** load via `next/font/google` — `Black_Ops_One` (weight 400) as `--font-display`, `Rajdhani` (400,500,600,700) as `--font-body`; set in root layout, expose as Tailwind font families.
