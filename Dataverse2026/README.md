# Portfolio App — Mobile & Web

This repository contains a small portfolio app built with React Native that runs on mobile and web. The app showcases degree, a research project, internships, and hobbies. It remains runnable with the existing Expo tooling included in the project.

## Portfolio content

- **Degree:** B.Tech in Food Technology
- **Research project:** Developed fortified biscuits using lotus stem powder and pearl millet flour
- **Internships:**
  - Quality Control — Excellent Bio Research Limited
  - Quality Assurance — Oceanic Foods Limited
  - Quality Assurance — Sanchi
- **Hobbies:** Art and craft
- **Social:** `@thedoodlekart` (corner badge opens the profile)

## Development — run locally

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm start
```

3. Options from the dev server

- Open on web: `npm run web`
- Open on Android emulator: `npm run android`
- Open on iOS simulator: `npm run ios`

> Note: This project kept the Expo tooling so it's easy to run across platforms. If you prefer to remove Expo packages later, I can help do that safely and keep the project runnable with plain React Native tooling.

## Build and deploy

- For a quick web preview, use `npm run web`.
- To create a static web build: `npm run build:web` — this outputs a `./web-build` directory that can be deployed to static hosts (Vercel, Netlify) or published as GitHub Pages.
- A GitHub Action (`.github/workflows/deploy_web.yml`) is included to automatically build and deploy the `./web-build` directory to GitHub Pages on push to `main`/`master`.
- For native production builds, use Expo Application Services (EAS) or an alternative native build system. See: https://docs.expo.dev/eas/

## Files to edit

- Main screen: `app/(tabs)/index.tsx` — contains the portfolio UI
- Explore screen: `app/(tabs)/explore.tsx`
- Navigation layout: `app/(tabs)/_layout.tsx`

## Next steps I can help with

- Remove unused Expo packages while keeping the app runnable ✅
- Tweak UI (fonts, spacing, icon style, avatar) 🎨
- Set up a web deployment (Vercel/Netlify) and/or EAS build for native apps 🚀

I removed several unused Expo packages from `package.json` to simplify the dependencies while keeping the project runnable with Expo.

After pulling these changes, run `npm install` (or `npm ci`) locally to update `package-lock.json` and actually remove the packages from your install.

If you'd like, I can also run through the uninstall steps for you or prepare a PR that removes the packages and updates the lockfile directly.
