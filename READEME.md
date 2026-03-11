# PulseNews — Professional News Portal

A modern, fully responsive news portal built with HTML, CSS, and vanilla JavaScript.
Ready for live NewsAPI integration out of the box.

---

## 🚀 Quick Start

1. Open `index.html` in your browser — it works immediately with mock data.
2. Add your NewsAPI key to enable live articles (see below).

---

## 🔑 Adding Your NewsAPI Key

1. Get a free key at **https://newsapi.org/register**
2. Open `script.js`
3. Find the `CONFIG` object at the top and update it:

```js
const CONFIG = {
  API_KEY:  'YOUR_ACTUAL_KEY_HERE',   // ← paste your key
  USE_MOCK: false,                    // ← set to false
  COUNTRY:  'us',                     // us | gb | in | au …
  // …
};
```

> ⚠️ NewsAPI free tier only allows `localhost` in development.
> For production, upgrade to a paid plan or use a backend proxy.

---

## 📁 File Structure

```
news-website/
├── index.html      — Main HTML page
├── style.css       — All styles (CSS variables, responsive grid, dark mode)
├── script.js       — All JavaScript (API, rendering, interactions)
├── components/     — (reserved for future component splits)
└── assets/         — (place custom images / icons here)
```

---

## ✨ Features

| Feature                     | Status |
|-----------------------------|--------|
| Sticky header + nav         | ✅     |
| Breaking news ticker        | ✅     |
| Hero featured article       | ✅     |
| Responsive 3-col news grid  | ✅     |
| Grid / List view toggle     | ✅     |
| Search with suggestions     | ✅     |
| Category filtering          | ✅     |
| Dark mode (with persistence)| ✅     |
| Loading skeletons           | ✅     |
| Trending sidebar            | ✅     |
| Tag cloud                   | ✅     |
| Newsletter widget           | ✅     |
| Load More / Pagination      | ✅     |
| Infinite scroll (optional)  | ✅     |
| Back-to-top button          | ✅     |
| Toast notifications         | ✅     |
| Mobile responsive           | ✅     |
| NewsAPI integration ready   | ✅     |

---

## 🔌 Enabling Infinite Scroll

In `script.js`, find the `INFINITE SCROLL` comment block and uncomment it.
Make sure to also hide the **Load More** button (`DOM.loadMoreBtn.style.display = 'none'`).

---

## 🎨 Customisation

All colours, fonts and spacing live in CSS variables at the top of `style.css`:

```css
:root {
  --accent:       #c0392b;   /* Brand red */
  --font-display: 'Playfair Display', serif;
  --font-body:    'Libre Franklin', sans-serif;
  /* … */
}
```

Change `--accent` to instantly re-brand the entire site.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout                  |
|------------|-------------------------|
| > 1100px   | 3-col grid + sidebar    |
| 860–1100px | 2-col grid + sidebar    |
| 640–860px  | 2-col grid, no sidebar  |
| < 640px    | 1-col, hamburger menu   |

---

## 🛠 Tech Stack

- **HTML5** — semantic, SEO-friendly markup  
- **CSS3** — custom properties, grid, flexbox, animations  
- **Vanilla JS** — no frameworks, no dependencies  
- **NewsAPI** — https://newsapi.org  
- **Google Fonts** — Playfair Display + Libre Franklin  
- **Font Awesome 6** — icons  
