/* ═══════════════════════════════════════════════════════════
   EXPLORE.JS — ITG
   Explore page: filter · search · render · URL params
═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  let activeCategory = 'all';
  let searchQuery    = '';

  const grid       = document.getElementById('exploreGrid');
  const countEl    = document.getElementById('resultCount');
  const searchEl   = document.getElementById('exploreSearch');
  const filterBtns = document.querySelectorAll('.filter-pill');

  /* ── Read URL params ─────────────────────────────────── */
  const params = new URLSearchParams(window.location.search);
  const urlCat    = params.get('category');
  const urlSearch = params.get('search');

  if (urlCat && ['adventure','culture','food','nature'].includes(urlCat)) {
    activeCategory = urlCat;
  }
  if (urlSearch) {
    searchQuery = urlSearch;
    if (searchEl) searchEl.value = urlSearch;
  }

  /* ── Set active filter pill ──────────────────────────── */
  filterBtns.forEach(btn => {
    const cat = btn.dataset.category;
    btn.classList.toggle('active', cat === activeCategory);

    btn.addEventListener('click', () => {
      activeCategory = cat;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid();
      updateURL();
    });
  });

  /* ── Search input ────────────────────────────────────── */
  if (searchEl) {
    searchEl.addEventListener('input', () => {
      searchQuery = searchEl.value.trim();
      renderGrid();
      updateURL();
    });
  }

  /* ── Render grid ─────────────────────────────────────── */
  function renderGrid() {
    if (!grid) return;

    /* Filter */
    let results = activeCategory === 'all'
      ? [...destinations]
      : destinations.filter(d => d.category === activeCategory);

    /* Search */
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.location.toLowerCase().includes(q) ||
        d.shortDesc.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q)
      );
    }

    /* Update count */
    if (countEl) {
      countEl.innerHTML = `<strong>${results.length}</strong> destination${results.length !== 1 ? 's' : ''} found`;
    }

    /* Render */
    if (results.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1">
          <div class="empty-state__icon">✦</div>
          <p class="empty-state__title">No destinations found</p>
          <p class="empty-state__sub">Try a different category or search term</p>
        </div>`;
      return;
    }

    grid.innerHTML = results.map((dest, i) => createCard(dest, i)).join('');

    /* Re-attach reveal observer */
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => {
        const obs = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08 });
        obs.observe(el);
      }, i * 60);
    });
  }

  /* ── Create card HTML ────────────────────────────────── */
  function createCard(dest, index) {
    const delay = Math.min(index * 0.08, 0.4);
    return `
      <article
        class="dest-card reveal"
        style="transition-delay:${delay}s"
        onclick="showDestination(${dest.id})"
        role="button"
        tabindex="0"
        aria-label="View details for ${dest.name}"
        onkeydown="if(event.key==='Enter')showDestination(${dest.id})"
      >
        <div class="dest-card__image-wrap">
          <img
            class="dest-card__image"
            src="${dest.image}"
            alt="${dest.name} — ${dest.location}"
            loading="lazy"
            onerror="this.style.display='none'"
          />
          <div class="dest-card__badge">
            <span class="badge badge--${dest.category}">
              ${dest.category.charAt(0).toUpperCase() + dest.category.slice(1)}
            </span>
          </div>
        </div>
        <div class="dest-card__body">
          <h3 class="dest-card__name">${dest.name}</h3>
          <div class="dest-card__meta">
            <span class="stars">${getStars(dest.rating)}</span>
            <span>${dest.rating}</span>
            <span class="dest-card__meta-sep">·</span>
            <span>${dest.location}</span>
          </div>
          <p class="dest-card__desc">${dest.shortDesc}</p>
          <div class="dest-card__footer">
            <div class="dest-card__fee">
              Entry: <span>${dest.entryFee}</span>
            </div>
            <div class="dest-card__arrow">&#8599;</div>
          </div>
        </div>
      </article>`;
  }

  /* ── Update URL without reload ───────────────────────── */
  function updateURL() {
    const p = new URLSearchParams();
    if (activeCategory !== 'all') p.set('category', activeCategory);
    if (searchQuery) p.set('search', searchQuery);
    const newUrl = `${window.location.pathname}${p.toString() ? '?' + p.toString() : ''}`;
    window.history.replaceState({}, '', newUrl);
  }

  /* ── Initial render ──────────────────────────────────── */
  renderGrid();

});
