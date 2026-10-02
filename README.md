# Olivier Mugisha Kwizera — Portfolio

A responsive portfolio built with React, TypeScript, Vite, and React Router.

## Pages

- `/` — Home, selected projects, skills, and contact links
- `/about` — Background and engineering interests
- `/resume` — Experience, projects, selected skills, and languages, with print styling

Typed React page components live in `src/App.tsx`. React Router handles client-side navigation, and `index.html` is the single HTML entry point.

## Run locally

Install dependencies, then start the development server:

```sh
npm install
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

Use Node.js 20.19+ or 22.12+. `npm run build` runs the TypeScript checker before creating the production build.

When hosting the built site, configure the host to serve `index.html` for client-side routes such as `/about` and `/resume`.

The site uses DM Serif Display, DM Sans, and DM Mono when Google Fonts is reachable, with local system font fallbacks.

## Selected projects

- [Phantom](https://github.com/oliviermugishak/phantom) — Open-source Rust/Linux utility for mapping keyboard and mouse input to Android touch events in Waydroid.
- [Tuma Delivery System](https://github.com/oliviermugishak/tuma-delivery-system) — Delivery-system monorepo. Its README labels the Rust server and Flutter customer app as V0 skeletons.

## Contact

- Email: <mailto:kwizeramugishaolivier0@gmail.com>
- GitHub: <https://github.com/oliviermugishak>
