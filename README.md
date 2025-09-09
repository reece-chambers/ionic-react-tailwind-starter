# Ionic React Tailwind Starter

A minimal yet batteries-included starter template for building **Ionic** mobile & web apps with **React 19**, **Tailwind CSS 4**, **Vite 5** and **Capacitor 7**.

> Fork or use this repo as a GitHub template to kick-start your next project.

## Tech Stack

| Tool | Version | Purpose |
| ---- | ------- | ------- |
| [Ionic](https://ionicframework.com/) | 8.5.x | UI components & theming |
| [React](https://react.dev/) | 19.x | Front-end framework |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.x | Utility-first styling |
| [Vite](https://vitejs.dev/) | 5.2.x | Lightning-fast build tooling |
| [Capacitor](https://capacitorjs.com/) | 7.4.x | Native runtime (iOS / Android / PWA) |

## Quick Start

```bash
# 1. Create a new project from this template
npx degit your-github/ionic-react-tailwind-starter my-app
cd my-app

# 2. Install dependencies (uses pnpm by default)
pnpm install

# 3. Run the dev server
pnpm dev

# 4. Build for production (web)
pnpm build

# 5. Add native platforms (optional)
# iOS
pnpm cap add ios
# Android
pnpm cap add android

# 6. Open the native IDEs
pnpm cap open ios   # Xcode
pnpm cap open android # Android Studio
```

> **Note** Node 18+ and pnpm 8+ are recommended.

## Folder Structure

```
.
├─ public/          # Static assets served as-is
├─ src/             # Application source code
│  ├─ pages/        # Ionic pages (Tab1/Tab2/Tab3)
│  ├─ components/   # Shared React components
│  ├─ theme/        # CSS variables
│  └─ tailwind.css  # Tailwind entry
├─ cypress/         # E2E tests (Cypress 13)
├─ capacitor.config.ts # Capacitor configuration
├─ vite.config.ts   # Vite configuration
└─ ...
```

## Configuration

| File | What to change |
| ---- | -------------- |
| `capacitor.config.ts` | `appId` & `appName` to match your bundle id & title |
| `package.json` | `name`, `description`, author fields |
| `ionic.config.json` | Project display name |

## Scripts

| Command | Description |
| ------- | ----------- |
| `pnpm dev` | Start Vite dev server with HMR |
| `pnpm build` | Type-check & build production assets |
| `pnpm preview` | Preview built site |
| `pnpm test.unit` | Run Vitest unit tests |
| `pnpm test.e2e` | Run Cypress tests |
| `pnpm lint` | ESLint code quality |
| `pnpm cap <cmd>` | Shortcut for `npx cap <cmd>` (sync, add, open, etc.) |

## Updating Dependencies

This template pins versions to avoid breaking changes. To update, run:

```bash
pnpm up --latest
```

and resolve any issues.

## License

MIT © Your Name
