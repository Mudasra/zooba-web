# Zooba

I rebuilt a Zooba landing page from a Photoshop design.

It's a practice project. The goal was simple: take a finished design and turn it into a real website. Clean code, small components, close to the design.

The Zooba name, characters and art belong to their owners. This isn't affiliated with them.

## Run it

You need Node 18 or newer.

```bash
npm install
npm run dev
```

Open the link Vite prints. Usually `http://localhost:5173`.
You can get the live demo of working site at: `https://zooba-web.vercel.app/`

## How I built it

One section at a time. I looked at each one, built it, checked it, then moved on.

1. **Setup.** Vite, React and Tailwind v4. Colors, fonts and sizes live in `index.css`. The font is Bubblegum Sans, loaded from a local file.
2. **Header.** Logo pill, centered nav and three social circles. On small screens the nav turns into a menu button.
3. **Hero.** Big "NIX & MONKU" title, three pills and the trailer button. The fox hangs over the right side. Sizes scale with the screen width.
4. **TV Promo.** A white card that sits right on the blue and coral line. Four characters stand on a faded scene.
5. **Soon on TV.** The heading, the short text and the episode row with its blue arrow button.
6. **Battle Arena.** Almost the same card as TV Promo. So I pulled out `PromoCard` and `PromoContent` and reused them. Only the text and the image changed.
7. **Try Zooba.** Blue on the left, coral on the right, and the penguin standing on the line. It has the HD and Free bar, the TRY IT NOW button and the store buttons.
8. **Footer.** It reuse the header logo and the nav links.

## Folder map

```text
src/
├── components/
│   ├── Header/        logo, nav, menu button
│   ├── Hero/          title, pills, trailer, artwork
│   ├── TvPromo/       first white card
│   ├── ComingSoon/    "Soon on TV" and the episode row
│   ├── Footer/        Footer 
│   ├── BattleArena/   second white card
│   ├── TryZooba/      blue and coral call to action
│   └── ui/            shared bits: Container, PlayButton,
│                      PromoCard, PromoContent, SocialLinks
├── data/              text, links and image imports
├── assets/            font and images
├── index.css          colors, fonts, sizes
└── App.jsx            just puts the sections in order
```

A few rules I kept:

1. No component goes over 100 lines.
2. Text and links live in `data/`, not in the JSX.
3. Real links, real buttons, real text.
4. Reuse before rebuilding.

## Images it expects

All go in `src/assets/images/`. If one of yours has a different extension, change that one import line in the matching file in `src/data/`.

1. Hero: `hero-fox.png`, `hero-cloud.png`, `hero-apple-cloud.png`, `hero-star.png`
2. TV Promo: `BG1.png`, `BG2.png`, `cartoon1.png` to `cartoon4.png`
3. Battle Arena: `battle-arena.png`
4. Try Zooba: `cartoon5.png`, `credit-cards.png`, `android-logo.png`, `apple-black-logo.png`, `puma.png`
5. Footer: `footer-cloud.png`

## Good to know

1. The design is 1440px wide. I measured it and turned the sizes into fluid values. They scale smoothly instead of jumping.
2. Below `md`, the cards stack and the hero art moves around. That part is my decision, not the design's.
3. Bubblegum Sans has no italic. "FULL HD" and "FREE" use the browser's fake slant.

## Built with

React 19, Vite, Tailwind CSS v4, Lucide icons and Bubblegum Sans.