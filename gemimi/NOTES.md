# Gemimi site — React version

Drop these into the Vite project you scaffolded (`npm create vite@latest`).

## What goes where
Overwrite/add these paths inside your project folder:
- `index.html` (replace the scaffolded one)
- `vite.config.js` (replace it)
- `src/main.jsx`, `src/App.jsx`, `src/index.css` (replace the scaffolded ones —
  delete the default `App.css` if it's still there)
- `src/components/` (new folder — Header, Footer, Scene, TypedPronunciation)
- `src/pages/` (new folder — Home, AppPage)
- `src/hooks/` (new folder — usePrefersReducedMotion)

## One more install
```
npm install react-router-dom
```

## Before it's live
- In `src/pages/AppPage.jsx`, swap the four `href="#"` placeholders for your
  real GitHub Release asset URLs.
- In `vite.config.js`, set `base` to match your actual repo name (or `'/'`
  if this is a `<username>.github.io` root repo).
- Swap the bio copy in `src/pages/Home.jsx` for your own words.

## Run it
```
npm run dev
```
Then visit the App tab to see the "juh mee mee" typing loop.

## Deploy
```
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```
