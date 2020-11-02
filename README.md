# **Weather Model** - See through the future

> Provides weather information from specific locations.

| Statements                | Branches                | Functions                | Lines                |
| ------------------------- | ----------------------- | ------------------------ | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-51.6%25-red.svg) | ![Branches](https://img.shields.io/badge/Coverage-26.67%25-red.svg) | ![Functions](https://img.shields.io/badge/Coverage-41.82%25-red.svg) | ![Lines](https://img.shields.io/badge/Coverage-53.13%25-red.svg) |

---

## Table of Contents

- [Requirements](#requirements)
- [Quick Overview](#quick-overview)
- [Libraries](#libraries)
- [Todo](#Todo)
- [License](#license)

---

## Requirements

- Node version >= 12.0.0
- NPM version >= 6.9.0

---

## Quick Overview

Project built on top of [**Create React App**](https://github.com/facebook/create-react-app)

```bash
  git clone https://github.com/olavoparno/weather-model.git
  cd weather-model
  npm install
  npm start
```

Then one may open http://localhost:3000/ to see the app.
If the app should be production deployed, run `npm run build` instead.

The main reasons to why **CRA** is used here:

- ES6+ abilities such as spread operator.
- Easy to maintain devDependencies.
- Production ready bootstrap.
- Fast Refresh ready.
- Autoprefixed CSS.
- Jest ready.

---

## Libraries

Main used **dependency** libraries:

- **React** and its core dependencies (including **CRA** ones). 
- **Material-UI** (easy to use, pretty, people are used to it, sass like, powerful, **styled-components** compatible).
- **Zustand** (powerful state management solution contextless).
- **Axios** (powerful well known HTTP library with lots of background and abilities).
- **React-Leaflet** (makes integration with **Leaflet** bare bones easier e.g. hooks ready).
- **Prop-Types** (not a build time check up but a rather easier *on the run* check up).

Main used **devDependency** libraries:

- **ESLint and Prettier** (they work in a fine way maintaining code style and best practices together with ease).
- **Husky** (adds git hooks scripts such as pre-commit to enforce amongst other things testing and linting).
- **Commitlint** (enforce git commit convention, e.g. [**Angular Commit Convention**](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format)).
- **Istanbul-Badges-Readme** (shows testing coverage percentages in a visual way with ease without depending on tools like [**Coveralls**](https://coveralls.io/)).
- **Standard-Version** (keeps record of the git history and releases).

---

## Todo

- Increase unit testing coverage.

---

## License

**Weather Model** is [MIT licensed](./LICENSE).
