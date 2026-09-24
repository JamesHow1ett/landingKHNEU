# landingKHNEU

Promo landing page for SkoroForms. Built with Vite, Sass, ESLint and Prettier.

## Requirements

- Node.js >= 24 (pinned in `.tool-versions` for asdf)

## Scripts

```sh
npm install        # install scripts are disabled via .npmrc
npm run dev        # dev server on http://localhost:8080
npm run build      # production build to dist/
npm run preview    # serve dist/
npm run lint       # ESLint + Stylelint
npm run lint:fix
npm run format     # Prettier
npm run format:check
```

Styles (`src/styles/style.scss`) are linked from `<head>` in `index.html` and built into a separate CSS file, independent of the JS bundle (`src/index.js`).
