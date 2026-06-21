# Persist

A landing page for **Persist** — a Web3 continuity protocol that seals data
(text or files) to a wallet-bound condition instead of a custodian. Built
with Next.js (App Router) and Tailwind CSS v4.

This version takes its visual cue from **walrus.xyz** (the storage protocol
Persist is partly built on): a crisp white base, very large bold sans
headlines, an illustrated mascot, an interactive feature-tab block, and a
scrolling marquee — but rebuilt with Persist's own orange-and-cream palette,
its egg-capsule motif, and a more formal, mature register than a typical
crypto meme site.

The core idea, **one primitive, three guarantees**, is built on:

| Tool       | Role                        |
| ---------- | ---------------------------- |
| **Seal**   | How data is protected (client-side encryption, condition-gated key release) |
| **Walrus** | Where data lives (decentralized blob storage) |
| **Sui**    | What conditions are met (on-chain logic for time / inactivity / proof-of-life) |

## What changed from v1

- **Big, formal type.** The display face moved from a serif (which read as
  casual) to a heavy system sans stack set very large (`text-5xl` →
  `text-8xl` on headlines), closer to how walrus.xyz treats its hero copy.
- **Pure white, blended.** The page background is now white rather than
  cream. Cream and the orange family return inside sections, cards, and one
  deliberately inverted band — same hue family, different value, so the
  brand reads as one source shown in different light rather than two
  competing palettes.
- **A mascot, not just an icon.** `components/Mascot.tsx` gives the
  egg-capsule a face and a wax-seal crest and anchors the hero, the way
  Walrus's own mascot anchors theirs — friendly, but the seal keeps it
  grounded rather than cartoonish.
- **An interactive feature block.** `components/Primitives.tsx` is now a
  click-to-switch tab panel (Seal / Walrus / Sui / Privacy) instead of a
  static three-column grid, mirroring the tabbed "Power to the builder"
  pattern on walrus.xyz.
- **A marquee + an inverted CTA band.** `components/StackSection.tsx` adds a
  scrolling banner; `components/CTABand.tsx` flips the palette to a deep
  orange background with pure white text — the explicit "different tone,
  same source" moment requested.
- **Icons throughout.** Every section now pairs its copy with a `lucide-react`
  icon (lock, database, shield, fingerprint, key, eye, arrows) so the
  protocol's mechanics are legible at a glance, not just described in text.

## Project structure

```
persist/
├── app/
│   ├── layout.tsx        Root layout, page metadata
│   ├── page.tsx          Assembles the landing page sections
│   └── globals.css       Design tokens, keyframes, base styles
├── components/
│   ├── NavBar.tsx          Sticky white top bar: logo, nav links, wallet CTA
│   ├── Hero.tsx            Big headline + mascot + quick-fact icon row
│   ├── Mascot.tsx          Illustrated capsule character (hero signature)
│   ├── Primitives.tsx      Interactive Seal / Walrus / Sui / Privacy tabs
│   ├── UseCasePillars.tsx  Digital Inheritance / Agent Continuity / DAO
│   │                       Contingency cards ("#use-cases")
│   ├── VaultSection.tsx    Wallet-native identity vs. Web2 OAuth custody
│   ├── CTABand.tsx         Inverted deep-orange band, pure white type
│   ├── StackSection.tsx    "Part of the Sui stack" + scrolling marquee
│   ├── Footer.tsx          Footer + docs anchor ("#docs")
│   ├── EggCapsule.tsx      Small signature icon (logo, ambient motif)
│   └── Reveal.tsx          Scroll-triggered fade/slide-in wrapper
└── public/
```

### Navigation map

The top bar's links point to in-page anchors so the whole experience ships
as a single route today, but each anchor is a natural seam for a future
dedicated page:

| Nav label | Anchor          | Maps to                       |
| --------- | --------------- | ------------------------------ |
| Protocol  | `#protocol`     | Primitives section intro       |
| Seal      | `#how-it-works` | Seal / Walrus / Sui / Privacy tabs |
| Vault     | `#vault`        | Wallet-native identity section |
| Agent     | `#use-cases`    | Use-case pillar cards          |
| Docs      | `#docs`         | Footer / whitepaper links      |

To split any of these into a standalone route later, create
`app/<route>/page.tsx`, move the matching component(s) there, and swap the
anchor `href` in `components/NavBar.tsx` for the new path (e.g. `/vault`).
New top-level links can be appended directly to the `NAV_LINKS` array in
that same file.

## Design tokens (`app/globals.css`)

| Token          | Hex       | Role                                          |
| -------------- | --------- | ----------------------------------------------- |
| `white`        | `#FFFFFF` | Page base — the crisp, formal foundation        |
| `--paper`      | `#FFFAF0` | White blended one step toward cream             |
| `--cream`      | `#FBF3DC` | Section background, footer                      |
| `--cream-deep` | `#F6E9C2` | Card / tab background                           |
| `--ink`        | `#221408` | Primary text, dark UI elements                  |
| `--ink-soft`   | `#6B5A45` | Secondary / body text                           |
| `--yolk-pale`  | `#F6B36B` | Light tint — the white→orange blend step        |
| `--yolk`       | `#D9791C` | Primary accent (buttons, links, glyphs)         |
| `--yolk-deep`  | `#B85E10` | Hover / pressed state of the accent             |
| `--yolk-ink`   | `#7A3B0A` | Deep inverted band — pairs with pure white text |
| `--shell`      | `#EDDFB8` | Hairline borders, dividers                      |
| `--glow`       | `#FFB454` | Highlight glow (focus rings, accents)           |

Read top to bottom, `white → paper → cream → yolk-pale → yolk → yolk-deep →
yolk-ink` is one continuous ramp — the same source dialed from pure white
through cream to deep orange. Every section pulls from one point on that
ramp, which is what makes the white sections and the orange sections feel
like the same brand instead of two different ones.

Typography roles:

- **Display** (`--font-display`): a heavy system sans stack, set large
  (up to `text-8xl` in the hero). This is the change from v1 — the previous
  serif read as too casual for a protocol that's explaining custody and
  inheritance logic, so display type is now bold, large, and plain.
- **Body** (`--font-body`): a system sans stack for legibility at paragraph
  length.
- **Mono** (`--font-mono`): used for eyebrows, nav labels, and buttons —
  signals "this is protocol-level, machine-readable text," echoing the
  on-chain subject matter.

> Note: this build environment has no network access to Google Fonts, so
> the roles above resolve to high-quality system font stacks rather than
> `next/font/google` imports. If you want an exact match to a specific
> grotesk (e.g. Inter, General Sans, or Söhne — all close to what Walrus
> uses), swap it in via `next/font/google` or `next/font/local` in
> `app/layout.tsx` once you build somewhere with internet access.

## Motion & interactivity

- **Page load**: hero headline, mascot, subhead, and CTAs stagger in on
  mount.
- **Scroll reveal**: every section below the fold fades/slides in once via
  `components/Reveal.tsx` (Framer Motion `whileInView`).
- **Click-to-switch tabs**: the Seal / Walrus / Sui / Privacy panel
  (`Primitives.tsx`) swaps its detail copy and stat with an `AnimatePresence`
  cross-fade — this is the main "highly interactive" moment on the page.
- **Hover**: cards lift and gain a warm shadow; the egg capsule's shell
  cracks open; nav links draw an underline; stack pills lift; the mascot
  tilts slightly on hover.
- **Ambient**: an "aurora" radial-gradient blend sits behind the hero,
  dissolving white into the orange family; a continuous marquee scrolls
  through `StackSection.tsx`.
- All animation respects `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```
