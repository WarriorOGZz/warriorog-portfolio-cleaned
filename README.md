<div align="center">

# WarriorOG — Developer Portfolio

A personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Motion.

[Live website](https://warriorog.in) · [GitHub profile](https://github.com/WarriorOGZz)

</div>

---

## Overview

WarriorOG is a responsive personal portfolio for showcasing development work, technical skills, project repositories, and live Discord activity. The interface uses a paper-inspired visual style, a dark-first color palette, subtle motion, and a compact layout that adapts to mobile and desktop screens.

## Features

- **About** — introduction, education, and experience.
- **Skills** — technology and tooling overview.
- **Live presence** — Discord status, activity, and Spotify playback through the [Lanyard API](https://lanyard.rest/).
- **Featured projects** — horizontally animated project cards linked to their repositories.
- **Theme switcher** — dark mode by default, with a light theme option persisted in local storage.
- **Responsive layout** — mobile navigation and layouts for smaller screens.
- **Motion-aware interactions** — entrance and scroll animations respect the user's reduced-motion preference.
- **Contact links** — direct links to the portfolio and contact channels.

## Tech stack

| Technology | Purpose |
| --- | --- |
| React 19 | UI components |
| TypeScript | Type safety |
| Vite | Development server and production bundler |
| Tailwind CSS 4 | Styling utilities |
| Motion | UI and scroll animations |
| Lucide React | Interface icons |

## Getting started

### Requirements

- Node.js 20.19+ or 22.12+
- npm (or another Node.js package manager)

### Installation

```bash
git clone https://github.com/WarriorOGZz/WarXFolio.git
cd WarXFolio
npm install
```

### Run locally

```bash
npm run dev
```

Vite prints the local development URL in the terminal (the project is configured to use port `3000`).

### Production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Type-check

```bash
npm run lint
```

## Project structure

```text
.
├── public/
│   ├── fonts/              # Local font files
│   ├── portrait.jpg        # Portfolio portrait
│   ├── warrior.jpg         # Additional image asset
│   ├── icon.png            # Site icon
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── FadeIn.tsx      # Reusable entrance animation
│   │   ├── Header.tsx      # Navigation and theme switcher
│   │   ├── Presence.tsx    # Discord and Spotify presence
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── App.tsx             # Main page composition
│   ├── index.css           # Theme tokens and global styles
│   └── main.tsx            # Application entry point
├── index.html
├── package.json
└── vite.config.ts
```

## Live Discord presence

The presence card reads public Discord presence data from Lanyard. The Discord user ID is configured in `src/components/Presence.tsx` using `DISCORD_USER_ID`.

To show another account's presence, update that value to the account's Discord user ID and make sure the account is opted into Lanyard. The card falls back to a REST request if the WebSocket connection is unavailable.

## Customization

- **Profile content:** edit `src/App.tsx`.
- **Skills and icons:** edit the `skills` list in `src/components/SkillsSection.tsx`.
- **Project cards:** edit the `projects` list in `src/components/ProjectsSection.tsx`.
- **Navigation and theme behavior:** edit `src/components/Header.tsx`.
- **Colors and typography:** update the CSS variables in `src/index.css`.
- **Presence account:** update `DISCORD_USER_ID` in `src/components/Presence.tsx`.
- **Metadata and social previews:** edit the tags in `index.html`.

## Deployment

The production build is generated in `dist/`. Deploy that directory to any static hosting provider that supports single-page applications. Configure the host to serve `index.html` for application routes.

## Notes

- Discord presence requires an active internet connection and a working Lanyard service.
- External profile images and activity artwork are served by Discord and Spotify CDNs.
- The theme preference is stored in the browser's local storage under `warriorog_theme`.
- Replace the sample profile and project content with your own details before publishing a fork.

## License

No license is currently specified. If you intend to make this repository reusable, add a `LICENSE` file with the terms you want to apply.

---

<div align="center">

Made with care by **[WarriorOG](https://github.com/WarriorOGZz)**.

</div>
