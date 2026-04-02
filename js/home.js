/* ═══════════════════════════════════════════════════════════
   HOME.JS — ITG
   Homepage: category counts · hero search · hero parallax
═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Inject category spot counts ─────────────────────── */
  const categories = ['adventure', 'culture', 'food', 'nature'];
  categories.forEach(cat => {
    const el = document.getElementById(`count-${cat}`);
    if (el) {
      const count = getCategoryCount(cat);
      el.textContent = `${count} spot${count !== 1 ? 's' : ''}`;
    }
  });

  /* ── Hero search form ────────────────────────────────── */
  const heroForm = document.getElementById('heroSearchForm');
  if (heroForm) {
    heroForm.addEventListener('submit', e => {
      e.preventDefault();
      const query = document.getElementById('heroSearch').value.trim();
      if (query) {
        window.location.href = `explore.html?search=${encodeURIComponent(query)}`;
      } else {
        window.location.href = 'explore.html';
      }
    });
  }

  /* ── Subtle hero parallax ────────────────────────────── */
  const heroBg = document.querySelector('.hero__bg-image');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const offset = window.scrollY;
      if (offset < window.innerHeight) {
        heroBg.style.transform = `scale(1.05) translateY(${offset * 0.15}px)`;
      }
    }, { passive: true });
  }

  /* ── Animate hero stats count-up ────────────────────── */
  const statEls = document.querySelectorAll('.hero__stat-num[data-target]');
  if (statEls.length) {
    const countUp = (el, target, suffix) => {
      let current = 0;
      const step = target / 50;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current) + suffix;
      }, 30);
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el     = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          countUp(el, target, suffix);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statEls.forEach(el => observer.observe(el));
  }

});
