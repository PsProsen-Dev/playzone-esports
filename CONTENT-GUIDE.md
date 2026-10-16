# PlayZone eSports — Content Guide

This guide tells you **exactly** what to replace in each data file when real
info arrives, how the WhatsApp join flow works, and what **not** to touch.
The site's build workers import these files — keep the exported shapes intact.

Data files live in `~/workspace/playzone-esports/data/`.

---

## ✅ ALREADY REAL — do NOT change these

| Field | Location | Value |
|---|---|---|
| Social links (Discord, YouTube, Instagram, Email) | `data/site.ts` → `siteConfig.socials` | Discord: https://discord.gg/fWuchPP · YouTube: https://www.youtube.com/@playzoneesports · Instagram: https://instagram.com/ig_playzone_esports · Email: mailto:contact@playzoneesports.com |
| Primary Discord CTA | `data/site.ts` → `siteConfig.discordUrl` | https://discord.gg/fWuchPP |
| Email | `data/site.ts` → `siteConfig.email` | contact@playzoneesports.com |
| About copy | `data/site.ts` → `siteConfig.about` | Official channel description (ends with `|| Jai Hind ||`) |
| Name / tagline | `data/site.ts` | "PlayZone eSports" / tagline |
| Stats strip | `data/site.ts` → `siteConfig.stats` | Real: 152 YouTube subscribers · 2 free/week · T2/T3 paid tiers · active since 12 Feb 2020 |

Discord is the **primary community CTA** — it is first in `socials` and also
exposed as `discordUrl`. All tournament/room announcements happen there.

---

## 🔧 STILL NEEDS FILLING — replace when you have the real values

### 1. WhatsApp number (⚠️ PLACEHOLDER)
- File: `data/site.ts` → `siteConfig.whatsappNumber`
- Current value: `"91XXXXXXXXXX"` (marked PLACEHOLDER in the file)
- Replace with: your real number, **digits only, no "+"**, e.g. `"918787654321"`
- Used by: the join/registration form (see "How the WhatsApp join flow works" below).

### 2. Tournaments (`data/tournaments.ts`)
- `upcomingTournaments` — 3 sample items ("PlayZone BGMI Showdown S1",
  "PlayZone Arena Clash #12", "PlayZone Mega T3 Qualifier"). Replace with real
  upcoming events: real name, date (e.g. "Saturday, 24 Oct 2026"), time
  ("7:00 PM IST"), prizePool ("₹10,000"), slotsTotal / slotsFilled numbers,
  entryFee ("Free Entry" / "₹50 per squad"), status ("upcoming"), description.
- `pastResults` — 3 sample results with winner/runner-up. Replace with real
  past tournament outcomes.
- Keep the field names exactly; only the values change.

### 3. Teams (`data/teams.ts`)
- 3 sample squads (Team Havoc THVK, Silent Strikers SSTK, Night Raiders NRDR),
  each with 4 players (real name → `name`, in-game name → `ign`, in-game role
  → `role`) and an `achievements` list.
- Replace with real community teams when confirmed; keep 4 players per team.

### 4. Gallery (`data/gallery.ts`)
- 6 items with event-photo-style titles/captions (e.g. "S1 Grand Finals —
  Erangel"). Update titles/captions to match real photos as they come in.
- `variant` must stay one of: `"amber" | "red" | "blue" | "green" | "purple" | "steel"`
  (the Gallery component renders CSS/SVG visuals from it — don't invent new variants).

### 5. Stats (`data/site.ts` → `siteConfig.stats`) — ✅ REAL
- Current (real channel stats, 16 Oct 2026): 152 YouTube subscribers · 2 free tournaments/week · Paid tiers T2/T3 · Active since 12 Feb 2020.
- Update values as the community grows (keep the labels unless design changes).

---

## 📲 How the WhatsApp join flow works

There is **no backend**. The flow is client-side only:

1. Visitor fills the join/registration form (name, BGMI/game ID, squad, tournament).
2. On submit, the site builds a pre-filled message from the form fields.
3. The site opens `https://wa.me/<whatsappNumber>?text=<url-encoded message>`
   in a new tab — this is WhatsApp's official click-to-chat link.
4. WhatsApp opens with the message ready to send to the PlayZone number.

⚠️ Until `whatsappNumber` is replaced with the real number, the form is
**disabled/hidden** by the build worker — it must never point at `91XXXXXXXXXX`.
Once you fill the real number, the form goes live automatically.

---

## 🚫 What NOT to touch

1. **The `about` text** — it's the official channel description (voice + "|| Jai Hind ||" included). Don't reword it.
2. **The 4 social links / email / discordUrl** — real and verified. Don't "fix" or reformat them.
3. **Field names and TypeScript shapes** in every data file (`Tournament`,
   `PastResult`, `Team`, `Player`, `GalleryItem`, `SiteConfig`) — components
   import these by name. Renaming a field breaks the build.
4. **No lorem ipsum** anywhere, ever. If you don't have the real value yet,
   leave the existing sample value and flag it as sample — don't blank it out.
5. **Gallery `variant` values** — only the 6 listed variants are supported by the component.
6. **No real phone numbers in `whatsappNumber` except the one you verify** —
   never guess or test with a made-up number.
