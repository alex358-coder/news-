/* ══════════════════════════════════════════════════════
   PULSENEWS — script.js
   Modular JavaScript for a professional news portal.
   ══════════════════════════════════════════════════════

   ──────────────────────────────────────────────────────
   API CONFIGURATION
   Replace YOUR_API_KEY with your NewsAPI.org key.
   Free key at: https://newsapi.org/register
   ────────────────────────────────────────────────────── */

const CONFIG = {
  API_KEY:      'cee13a8fdf96414d9d94b07f44706044',          // ← Paste your NewsAPI key here
  BASE_URL:     'https://newsapi.org/v2',
  PAGE_SIZE:    9,
  COUNTRY:      'us',                    // us | gb | in | au …
  USE_MOCK:     true,                    // Set to FALSE when you add a real API key
};

/* ══════════════════════════════════════════════════════
   MOCK DATA  (used when CONFIG.USE_MOCK = true)
   Gives a realistic preview without an API key.
   ══════════════════════════════════════════════════════ */
const MOCK_ARTICLES = [
  {
    title: "Global Leaders Convene for Historic Climate Summit in Geneva",
    description: "World leaders gathered in Geneva to address accelerating climate change, with dozens of nations pledging to reach net-zero emissions by 2045 in the most ambitious agreement of the decade.",
    url: "#",
    urlToImage: "https://picsum.photos/seed/climate/800/450",
    source: { name: "World Tribune" },
    publishedAt: new Date(Date.now() - 1*3600000).toISOString(),
    category: "world",
  },
  {
    title: "Apple Unveils AI-Powered MacBook Line With Unprecedented Battery Life",
    description: "The new MacBook lineup features Apple's M4 Ultra chip with on-device large language models, delivering 28-hour battery life and transformative AI capabilities for professionals.",
    url: "#",
    urlToImage: "https://picsum.photos/seed/apple/800/450",
    source: { name: "TechCrunch" },
    publishedAt: new Date(Date.now() - 2*3600000).toISOString(),
    category: "technology",
  },
  {
    title: "Federal Reserve Signals Rate Pause Amid Cooling Inflation Data",
    description: "Fed Chair Jerome Powell indicated the central bank may hold rates steady through the summer, citing encouraging progress on inflation while warning of ongoing labor market uncertainty.",
    url: "#",
    urlToImage: "https://picsum.photos/seed/finance/800/450",
    source: { name: "Financial Times" },
    publishedAt: new Date(Date.now() - 3*3600000).toISOString(),
    category: "business",
  },
  {
    title: "Scientists Discover New Species of Deep-Sea Bioluminescent Jellyfish",
    description: "Marine biologists at the Monterey Bay Aquarium Research Institute have identified 12 previously unknown species during a record-depth submersible expedition in the Pacific Ocean.",
    url: "#",
    urlToImage: "https://picsum.photos/seed/jellyfish/800/450",
    source: { name: "Nature Magazine" },
    publishedAt: new Date(Date.now() - 4*3600000).toISOString(),
    category: "science",
  },
  {
    title: "Premier League: Manchester City Clinch Title With Dramatic Last-Day Win",
    description: "A stunning 93rd-minute goal from Erling Haaland sealed a fifth consecutive league title for City, pipping Arsenal to the trophy by a single point in one of the most thrilling finishes in history.",
    url: "#",
    urlToImage: "https://picsum.photos/seed/soccer/800/450",
    source: { name: "BBC Sport" },
    publishedAt: new Date(Date.now() - 5*3600000).toISOString(),
    category: "sports",
  },
  {
    title: "WHO Approves Breakthrough Malaria Vaccine for Global Distribution",
    description: "The World Health Organization has approved a second-generation malaria vaccine showing 77% efficacy in clinical trials, a milestone that could save hundreds of thousands of children annually.",
    url: "#",
    urlToImage: "https://picsum.photos/seed/health/800/450",
    source: { name: "Reuters Health" },
    publishedAt: new Date(Date.now() - 6*3600000).toISOString(),
    category: "health",
  },
  {
    title: "Cannes Palme d'Or Goes to Debut Director in Unanimous Decision",
    description: "The jury at Cannes Film Festival awarded the prestigious Palme d'Or to a debut director's bold auteur debut, calling it 'the most original and fearless film in a generation.'",
    url: "#",
    urlToImage: "https://picsum.photos/seed/cannes/800/450",
    source: { name: "Variety" },
    publishedAt: new Date(Date.now() - 7*3600000).toISOString(),
    category: "entertainment",
  },
  {
    title: "SpaceX Starship Completes First Fully Successful Orbital Test Flight",
    description: "SpaceX's Starship completed its first fully successful orbital flight, landing both the Super Heavy booster and the spacecraft back at their launch site in a historic double catch maneuver.",
    url: "#",
    urlToImage: "https://picsum.photos/seed/spacex/800/450",
    source: { name: "Space.com" },
    publishedAt: new Date(Date.now() - 8*3600000).toISOString(),
    category: "science",
  },
  {
    title: "OpenAI Releases GPT-5 With Multimodal Reasoning Capabilities",
    description: "OpenAI's newest flagship model dramatically improves on complex reasoning tasks, coding benchmarks, and visual understanding, setting new records across 24 standardized AI evaluation suites.",
    url: "#",
    urlToImage: "https://picsum.photos/seed/openai/800/450",
    source: { name: "The Verge" },
    publishedAt: new Date(Date.now() - 9*3600000).toISOString(),
    category: "technology",
  },
  {
    title: "India's Economy Overtakes Japan to Become World's Third-Largest",
    description: "IMF data now places India as the world's third-largest economy by nominal GDP, a milestone driven by robust manufacturing growth, a thriving digital services sector, and surging domestic consumption.",
    url: "#",
    urlToImage: "https://picsum.photos/seed/india/800/450",
    source: { name: "Bloomberg" },
    publishedAt: new Date(Date.now() - 10*3600000).toISOString(),
    category: "business",
  },
  {
    title: "New Study Links Ultra-Processed Foods to Accelerated Cognitive Decline",
    description: "A landmark 15-year study following 72,000 participants found that those consuming the highest levels of ultra-processed food had a 28% faster rate of cognitive decline than those eating whole-food diets.",
    url: "#",
    urlToImage: "https://picsum.photos/seed/food/800/450",
    source: { name: "NEJM" },
    publishedAt: new Date(Date.now() - 11*3600000).toISOString(),
    category: "health",
  },
  {
    title: "Netflix's New Thriller Series Breaks Streaming Records in First Week",
    description: "The psychological thriller 'Dark Meridian' accumulated over 210 million viewing hours in its first seven days, smashing previous first-week records and prompting an immediate second season commission.",
    url: "#",
    urlToImage: "https://picsum.photos/seed/netflix/800/450",
    source: { name: "Entertainment Weekly" },
    publishedAt: new Date(Date.now() - 12*3600000).toISOString(),
    category: "entertainment",
  },
];

const TICKER_HEADLINES = [
  "Global climate summit reaches landmark net-zero agreement in Geneva",
  "Apple unveils M4 Ultra MacBook with 28-hour battery life",
  "Fed signals summer rate pause as inflation data cools",
  "SpaceX Starship lands both stages in historic double catch",
  "WHO approves second-generation malaria vaccine with 77% efficacy",
  "Premier League: Manchester City win fifth consecutive title",
  "OpenAI releases GPT-5 with advanced multimodal reasoning",
  "India's economy officially third-largest in the world",
  "Cannes Palme d'Or awarded to debut director in unanimous vote",
  "Deep-sea expedition discovers 12 new bioluminescent species",
];

const TAGS = [
  "AI", "Climate", "Markets", "Health", "Space", "Sports",
  "Politics", "Science", "Tech", "Films", "Economy", "Innovation",
  "Security", "Culture", "Energy"
];

/* ══════════════════════════════════════════════════════
   STATE
   ══════════════════════════════════════════════════════ */
const state = {
  category:    'general',
  query:       '',
  page:        1,
  articles:    [],
  allLoaded:   false,
  isLoading:   false,
  viewMode:    'grid',   // 'grid' | 'list'
};

/* ══════════════════════════════════════════════════════
   DOM REFERENCES
   ══════════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const DOM = {
  heroCard:       $('heroCard'),
  newsGrid:       $('newsGrid'),
  loadMoreBtn:    $('loadMoreBtn'),
  sectionTitle:   $('sectionTitle'),
  searchInput:    $('searchInput'),
  searchBtn:      $('searchBtn'),
  suggestions:    $('searchSuggestions'),
  darkToggle:     $('darkToggle'),
  themeIcon:      $('themeIcon'),
  hamburger:      $('hamburger'),
  mainNav:        $('mainNav'),
  navLinks:       document.querySelectorAll('.nav-link'),
  navDate:        $('navDate'),
  tickerContent:  $('tickerContent'),
  trendingList:   $('trendingList'),
  tagCloud:       $('tagCloud'),
  backToTop:      $('backToTop'),
  toast:          $('toast'),
  header:        document.querySelector('.site-header'),
  gridViewBtn:   $('gridView'),
  listViewBtn:   $('listView'),
};

/* ══════════════════════════════════════════════════════
   API  —  Fetch articles
   ══════════════════════════════════════════════════════ */
async function fetchArticles(reset = false) {
  if (state.isLoading) return;
  if (reset) {
    state.page      = 1;
    state.articles  = [];
    state.allLoaded = false;
  }

  state.isLoading = true;
  DOM.loadMoreBtn.classList.add('loading');

  // Show skeletons on first load
  if (state.page === 1) {
    showSkeletons();
  }

  try {
    let articles;

    if (CONFIG.USE_MOCK || CONFIG.API_KEY === 'YOUR_API_KEY') {
      // ── MOCK ────────────────────────────────────────
      await delay(800); // simulate network
      articles = filterMock(MOCK_ARTICLES, state.category, state.query);
    } else {
      // ── REAL API ────────────────────────────────────
      articles = await fetchFromAPI();
    }

    if (articles.length === 0 && state.page === 1) {
      renderNoResults();
    } else {
      appendArticles(articles, reset);
    }

    if (articles.length < CONFIG.PAGE_SIZE) {
      state.allLoaded = true;
      DOM.loadMoreBtn.style.display = 'none';
    } else {
      DOM.loadMoreBtn.style.display = '';
    }

    state.page++;

  } catch (err) {
    console.error('[PulseNews] Fetch error:', err);
    renderError();
    showToast('Failed to load news. Please try again.');
  } finally {
    state.isLoading = false;
    DOM.loadMoreBtn.classList.remove('loading');
  }
}

/* Fetch from real NewsAPI */
async function fetchFromAPI() {
  const endpoint = state.query
    ? `${CONFIG.BASE_URL}/everything`
    : `${CONFIG.BASE_URL}/top-headlines`;

  const params = new URLSearchParams({
    apiKey:   CONFIG.API_KEY,
    pageSize: CONFIG.PAGE_SIZE,
    page:     state.page,
    language: 'en',
  });

  if (state.query) {
    params.set('q', state.query);
  } else {
    params.set('country', CONFIG.COUNTRY);
    if (state.category !== 'general') {
      params.set('category', state.category);
    }
  }

  const res = await fetch(`${endpoint}?${params}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data.articles || [];
}

/* Filter mock data by category + query */
function filterMock(all, category, query) {
  let filtered = all;
  if (category !== 'general') {
    filtered = filtered.filter(a => a.category === category);
  }
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(a =>
      a.title.toLowerCase().includes(q) ||
      (a.description || '').toLowerCase().includes(q)
    );
  }
  // Simulate pagination
  const start = (state.page - 1) * CONFIG.PAGE_SIZE;
  return filtered.slice(start, start + CONFIG.PAGE_SIZE);
}

/* ══════════════════════════════════════════════════════
   RENDER — Hero
   ══════════════════════════════════════════════════════ */
function renderHero(article) {
  const img   = article.urlToImage || 'https://picsum.photos/seed/news/1200/600';
  const cat   = (article.category || state.category || 'news').toUpperCase();
  const date  = formatDate(article.publishedAt);

  DOM.heroCard.innerHTML = `
    <img class="hero-img" src="${img}" alt="${escHtml(article.title)}" loading="eager"
         onerror="this.src='https://picsum.photos/seed/fallback/1200/600'" />
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <span class="hero-category">${cat}</span>
      <h1 class="hero-title">${escHtml(article.title)}</h1>
      <p class="hero-desc">${escHtml(article.description || '')}</p>
      <div class="hero-meta">
        <span class="source"><i class="fas fa-newspaper"></i> ${escHtml(article.source?.name || 'Unknown')}</span>
        <span>${date}</span>
      </div>
      <a href="${article.url}" target="_blank" rel="noopener" class="btn-hero">
        Read Full Story <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  `;
}

/* ══════════════════════════════════════════════════════
   RENDER — Cards
   ══════════════════════════════════════════════════════ */
function appendArticles(articles, reset) {
  if (reset) DOM.newsGrid.innerHTML = '';

  // Set hero on first load
  if (state.page === 1 && articles.length > 0) {
    renderHero(articles[0]);
    articles = articles.slice(1); // rest go to grid
  }

  articles.forEach((article, i) => {
    const card = buildCard(article, i);
    DOM.newsGrid.appendChild(card);
  });

  // Update trending if first load
  if (state.page <= 2) {
    renderTrending(state.articles.slice(0, 8));
  }
}

function buildCard(article, delay = 0) {
  const img   = article.urlToImage || `https://picsum.photos/seed/${Math.random()}/400/225`;
  const cat   = (article.category || state.category || 'news').toUpperCase();
  const date  = formatDate(article.publishedAt);
  const title = escHtml(article.title || 'Untitled');
  const desc  = escHtml(article.description || 'No description available.');
  const src   = escHtml(article.source?.name || 'Unknown');
  const url   = article.url || '#';

  const el = document.createElement('article');
  el.className = 'news-card';
  el.style.animationDelay = `${delay * 60}ms`;
  el.innerHTML = `
    <div class="card-img-wrap">
      <img class="card-img" src="${img}" alt="${title}" loading="lazy"
           onerror="this.src='https://picsum.photos/seed/placeholder/400/225'" />
      <span class="card-category">${cat}</span>
    </div>
    <div class="card-body">
      <h2 class="card-title">${title}</h2>
      <p class="card-desc">${desc}</p>
      <div class="card-meta">
        <span class="card-source"><i class="fas fa-circle-dot"></i> ${src}</span>
        <span class="card-date"><i class="far fa-clock"></i> ${date}</span>
      </div>
      <a href="${url}" target="_blank" rel="noopener" class="btn-read-more">
        Read More <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  `;
  return el;
}

function showSkeletons(count = 6) {
  DOM.newsGrid.innerHTML = Array.from({ length: count }, () => `
    <div class="skeleton-card">
      <div class="skel skel-img"></div>
      <div class="skel-body">
        <div class="skel skel-line h-16 w-90"></div>
        <div class="skel skel-line h-16 w-70"></div>
        <div class="skel skel-line w-50"></div>
        <div class="skel skel-line h-8 w-30"></div>
      </div>
    </div>
  `).join('');
  DOM.heroCard.innerHTML = '<div class="hero-skeleton"></div>';
}

function renderNoResults() {
  DOM.newsGrid.innerHTML = `
    <div class="no-results">
      <i class="fas fa-newspaper"></i>
      <h3>No stories found</h3>
      <p>Try a different keyword or category.</p>
    </div>
  `;
  DOM.heroCard.innerHTML = '<div class="hero-skeleton"></div>';
}

function renderError() {
  DOM.newsGrid.innerHTML = `
    <div class="no-results">
      <i class="fas fa-triangle-exclamation"></i>
      <h3>Could not load news</h3>
      <p>Check your API key or network connection.</p>
    </div>
  `;
}

/* ══════════════════════════════════════════════════════
   RENDER — Ticker
   ══════════════════════════════════════════════════════ */
function renderTicker() {
  // Duplicate headlines for seamless loop
  const all = [...TICKER_HEADLINES, ...TICKER_HEADLINES];
  DOM.tickerContent.innerHTML = all.map(h =>
    `<span class="ticker-item">${escHtml(h)}</span>`
  ).join('');
}

/* ══════════════════════════════════════════════════════
   RENDER — Trending
   ══════════════════════════════════════════════════════ */
function renderTrending(articles) {
  const items = articles.length
    ? articles
    : MOCK_ARTICLES.slice(0, 7);

  DOM.trendingList.innerHTML = items.slice(0, 7).map((a, i) => `
    <li class="trending-item" onclick="window.open('${a.url}','_blank')">
      <span class="trending-num">${String(i+1).padStart(2,'0')}</span>
      <div>
        <div class="trending-title">${escHtml(a.title)}</div>
        <div class="trending-meta">${escHtml(a.source?.name || '')} · ${formatDate(a.publishedAt)}</div>
      </div>
    </li>
  `).join('');
}

/* ══════════════════════════════════════════════════════
   RENDER — Tag Cloud
   ══════════════════════════════════════════════════════ */
function renderTagCloud() {
  DOM.tagCloud.innerHTML = TAGS.map(tag => `
    <span class="tag-item" data-tag="${tag.toLowerCase()}">${tag}</span>
  `).join('');

  DOM.tagCloud.querySelectorAll('.tag-item').forEach(el => {
    el.addEventListener('click', () => {
      state.query = el.dataset.tag;
      DOM.searchInput.value = el.dataset.tag;
      updateSectionTitle(`Results for "${el.dataset.tag}"`);
      fetchArticles(true);
      showToast(`Showing stories tagged: ${el.dataset.tag}`);
    });
  });
}

/* ══════════════════════════════════════════════════════
   RENDER — Nav Date
   ══════════════════════════════════════════════════════ */
function renderDate() {
  const now = new Date();
  DOM.navDate.textContent = now.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}

/* ══════════════════════════════════════════════════════
   INTERACTIONS — Category nav
   ══════════════════════════════════════════════════════ */
DOM.navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    DOM.navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    state.category = link.dataset.category;
    state.query    = '';
    DOM.searchInput.value = '';

    const label = link.textContent.trim();
    updateSectionTitle(state.category === 'general' ? 'Top Stories' : label);
    fetchArticles(true);

    // Close mobile nav
    if (window.innerWidth < 640) {
      DOM.mainNav.classList.remove('open');
      DOM.hamburger.classList.remove('open');
    }
  });
});

/* ══════════════════════════════════════════════════════
   INTERACTIONS — Search
   ══════════════════════════════════════════════════════ */
let searchTimeout;
DOM.searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  const val = DOM.searchInput.value.trim();

  if (val.length < 2) {
    DOM.suggestions.classList.remove('open');
    return;
  }

  searchTimeout = setTimeout(() => {
    const results = MOCK_ARTICLES
      .filter(a => a.title.toLowerCase().includes(val.toLowerCase()))
      .slice(0, 5);

    if (results.length) {
      DOM.suggestions.innerHTML = results.map(a => `
        <div class="suggestion-item" data-url="${a.url}">
          <i class="fas fa-search"></i>
          ${escHtml(a.title.substring(0, 60))}…
        </div>
      `).join('');
      DOM.suggestions.classList.add('open');

      DOM.suggestions.querySelectorAll('.suggestion-item').forEach(el => {
        el.addEventListener('click', () => {
          DOM.searchInput.value = '';
          DOM.suggestions.classList.remove('open');
          window.open(el.dataset.url, '_blank');
        });
      });
    } else {
      DOM.suggestions.classList.remove('open');
    }
  }, 300);
});

function doSearch() {
  const q = DOM.searchInput.value.trim();
  if (!q) return;
  state.query    = q;
  state.category = 'general';
  DOM.navLinks.forEach(l => l.classList.remove('active'));
  DOM.suggestions.classList.remove('open');
  updateSectionTitle(`Results for "${q}"`);
  fetchArticles(true);
}

DOM.searchBtn.addEventListener('click', doSearch);
DOM.searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') doSearch();
  if (e.key === 'Escape') DOM.suggestions.classList.remove('open');
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrap')) {
    DOM.suggestions.classList.remove('open');
  }
});

/* ══════════════════════════════════════════════════════
   INTERACTIONS — Dark mode
   ══════════════════════════════════════════════════════ */
function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  DOM.themeIcon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('pn-theme', dark ? 'dark' : 'light');
}

DOM.darkToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  applyTheme(!isDark);
});

// Restore saved theme
const savedTheme = localStorage.getItem('pn-theme');
if (savedTheme) applyTheme(savedTheme === 'dark');
else if (window.matchMedia('(prefers-color-scheme: dark)').matches) applyTheme(true);

/* ══════════════════════════════════════════════════════
   INTERACTIONS — Hamburger
   ══════════════════════════════════════════════════════ */
DOM.hamburger.addEventListener('click', () => {
  DOM.hamburger.classList.toggle('open');
  DOM.mainNav.classList.toggle('open');
});

/* ══════════════════════════════════════════════════════
   INTERACTIONS — View toggle
   ══════════════════════════════════════════════════════ */
DOM.gridViewBtn.addEventListener('click', () => {
  state.viewMode = 'grid';
  DOM.newsGrid.classList.remove('list-mode');
  DOM.gridViewBtn.classList.add('active');
  DOM.listViewBtn.classList.remove('active');
});

DOM.listViewBtn.addEventListener('click', () => {
  state.viewMode = 'list';
  DOM.newsGrid.classList.add('list-mode');
  DOM.listViewBtn.classList.add('active');
  DOM.gridViewBtn.classList.remove('active');
});

/* ══════════════════════════════════════════════════════
   INTERACTIONS — Load More
   ══════════════════════════════════════════════════════ */
DOM.loadMoreBtn.addEventListener('click', () => {
  if (!state.allLoaded) fetchArticles(false);
});

/* ══════════════════════════════════════════════════════
   INTERACTIONS — Scroll (sticky header shadow + back-to-top)
   ══════════════════════════════════════════════════════ */
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const y = window.scrollY;
      DOM.header.classList.toggle('scrolled', y > 40);
      DOM.backToTop.classList.toggle('visible', y > 500);
      ticking = false;
    });
    ticking = true;
  }
});

DOM.backToTop.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

/* ══════════════════════════════════════════════════════
   INFINITE SCROLL (optional — replaces Load More button)
   Uncomment the block below to enable infinite scroll.
   ══════════════════════════════════════════════════════ */
/*
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !state.allLoaded) {
    fetchArticles(false);
  }
}, { rootMargin: '200px' });
observer.observe(DOM.loadMoreBtn);
*/

/* ══════════════════════════════════════════════════════
   UTILITIES
   ══════════════════════════════════════════════════════ */

/** Format ISO date string to relative or short date */
function formatDate(iso) {
  if (!iso) return '';
  const d    = new Date(iso);
  const diff = Date.now() - d;
  const mins = Math.floor(diff / 60000);
  if (mins < 1)  return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24)  return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7)  return `${days}d ago`;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/** Update section heading */
function updateSectionTitle(text) {
  DOM.sectionTitle.textContent = text;
}

/** HTML entity escape */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Async delay helper */
function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

/** Toast notification */
let toastTimer;
function showToast(msg) {
  DOM.toast.textContent = msg;
  DOM.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => DOM.toast.classList.remove('show'), 3000);
}

/* ══════════════════════════════════════════════════════
   NEWSLETTER SUBSCRIBE
   ══════════════════════════════════════════════════════ */
document.querySelector('.btn-subscribe')?.addEventListener('click', function() {
  const input = this.previousElementSibling;
  const email = input?.value?.trim();
  if (!email || !email.includes('@')) {
    showToast('Please enter a valid email address.');
    return;
  }
  showToast(`✓ Subscribed! Welcome to PulseNews.`);
  if (input) input.value = '';
});

/* ══════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════ */
function init() {
  renderDate();
  renderTicker();
  renderTagCloud();
  renderTrending([]);
  fetchArticles(true);
}

document.addEventListener('DOMContentLoaded', init);
