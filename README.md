# Portfolio

A modern, responsive single-page portfolio built with **React** and **Vite**. It features a filterable project gallery, a working contact form powered by Formspree, a dark/light theme toggle, and lightweight Lottie animations — ready to be customized and deployed to any static host.

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-12-ea580c?logo=framer&logoColor=white)
![License: Private](https://img.shields.io/badge/License-Private-blue)

---

## Features

- **Dark / Light theme** — toggle between themes with one click; your choice is saved in `localStorage` and restored on the next visit.
- **Filterable project gallery** — browse projects by category (All, HTML & CSS, Javascript, React & MUI, Node & Express) with smooth layout animations powered by [Motion](https://motion.dev).
- **Contact form** — sends messages through [Formspree](https://formspree.io) with validation, a loading state, and a success animation.
- **Fully responsive** — desktop navigation, mobile slide-in menu (modal), and fluid layouts for all screen sizes.
- **Lottie animations** — animated hero and contact illustrations loaded from local JSON files via `lottie-react`.
- **Scroll-to-top button** — appears after scrolling and returns you to the top of the page.

---

## Screenshots

```md
![Portfolio preview](./screenshot.PNG)
```

---

## Tech Stack

| Layer       | Technology                                      |
| ----------- | ----------------------------------------------- |
| Framework   | [React](https://react.dev) 19                    |
| Build tool  | [Vite](https://vite.dev) 8                       |
| Animations  | [Motion](https://motion.dev) 12                  |
| Lottie      | [lottie-react](https://www.npmjs.com/package/lottie-react) |
| Contact     | [@formspree/react](https://www.npmjs.com/package/@formspree/react) |
| Linting     | ESLint 10 with `react-hooks` & `react-refresh`   |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) **18+** (Vite 8 requires a recent LTS)
- npm (bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ayaabduljawad750-cyber/Portfolio
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser. The dev server features Hot Module Replacement (HMR), so edits to your components appear instantly.

---

## Available Scripts

| Command            | Description                                   |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Start the development server with HMR         |
| `npm run build`    | Build the app for production into `dist/`     |
| `npm run preview`  | Preview the production build locally          |
| `npm run lint`     | Run ESLint across the project                 |

---

## Project Structure

```
portfolio/
├── public/
│   ├── images/          # Project card images (1.jpg – 9.jpg)
│   ├── icons/           # Icon font stylesheet
│   ├── me.png           # Author avatar
│   └── favicon.svg
├── src/
│   ├── animations/      # Lottie JSON animations
│   │   ├── heroAnimation.json
│   │   ├── emailAnimation.json
│   │   └── doneAnimation.json
│   ├── components/
│   │   ├── header/      # Navigation bar + theme toggle
│   │   ├── hero/        # Intro section with avatar + animation
│   │   ├── main/        # Project gallery + category filters (projects.js)
│   │   ├── cardProject/ # Individual project card
│   │   ├── contact/     # Contact form (Formspree)
│   │   ├── footer/      # Footer with links
│   │   └── modal/       # Mobile navigation overlay
│   ├── App.jsx          # Main app shell (sections + scroll-to-top)
│   ├── main.jsx         # React entry point
│   ├── App.css
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## Customization

### Contact form

The form is wired to a Formspree endpoint using the form ID `xeebjdje` in `src/components/contact/ContactUs.jsx`:

```jsx
const [state, handleSubmit, reset] = useForm("xeebjdje");
```

**Replace this ID with your own Formspree form ID** (create a free form at [formspree.io](https://formspree.io)) before going live.

### Projects

Add or edit projects in `src/components/main/projects.js`. Each entry requires:

```js
{
  id: getNewId(),
  title: "Project Title",
  categories: ["react", "css"], // must match a filter button
  imagePath: "/images/1.jpg",
}
```

### Theme

- Default theme is `dark`, set in `src/App.jsx`.
- The user's choice is stored in `localStorage` under the key `theme`.
- Toggle logic lives in `src/components/header/Header.jsx`.

---

## Deployment

The build output goes to the `dist/` folder, so the app can be deployed to any static host:

```bash
npm run build
```

**Recommended hosts:** [Netlify](https://www.netlify.com), [Vercel](https://vercel.com), or [GitHub Pages](https://pages.github.com). All of them detect Vite projects automatically — just point them at your repository root.

---

## Acknowledgments

- Built on the [Vite + React template](https://vite.dev)
- Contact form powered by [Formspree](https://formspree.io)
- Illustrations are Lottie animations from [LottieFiles](https://lottiefiles.com)
