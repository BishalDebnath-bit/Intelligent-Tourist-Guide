/* ═══════════════════════════════════════════════════════════
   MODAL.JS — ITG
   Destination detail modal: render + open + close
═══════════════════════════════════════════════════════════ */

/**
 * Populate and open the modal with destination data
 * @param {number|Object} destOrId - destination id or object
 */
function showDestination(destOrId) {
  const dest = typeof destOrId === 'object' ? destOrId : getById(destOrId);
  if (!dest) return;

  const modal = document.getElementById('destModal');
  if (!modal) return;

  /* ── Render image ── */
  const imgEl = modal.querySelector('.modal__image');
  if (imgEl) {
    imgEl.src = dest.image;
    imgEl.alt = dest.name;
    imgEl.onerror = () => {
      imgEl.style.display = 'none';
    };
  }

  /* ── Badge ── */
  const badgeEl = modal.querySelector('.modal__badge');
  if (badgeEl) {
    badgeEl.className = `badge badge--${dest.category} modal__badge`;
    badgeEl.textContent = dest.category.charAt(0).toUpperCase() + dest.category.slice(1);
  }

  /* ── Name ── */
  const nameEl = modal.querySelector('.modal__name');
  if (nameEl) nameEl.textContent = dest.name;

  /* ── Meta ── */
  const metaEl = modal.querySelector('.modal__meta');
  if (metaEl) {
    metaEl.innerHTML = `
      <span class="stars">${getStars(dest.rating)}</span>
      <span>${dest.rating}</span>
      <span class="modal__meta-sep">·</span>
      <span>${dest.location}</span>
    `;
  }

  /* ── Description ── */
  const descEl = modal.querySelector('.modal__desc');
  if (descEl) descEl.textContent = dest.fullDesc;

  /* ── Info grid ── */
  const feeEl      = modal.querySelector('.modal__fee-val');
  const timeEl     = modal.querySelector('.modal__time-val');
  const locEl      = modal.querySelector('.modal__loc-val');
  const categoryEl = modal.querySelector('.modal__cat-val');
  if (feeEl)      feeEl.textContent      = dest.entryFee;
  if (timeEl)     timeEl.textContent     = dest.bestTime;
  if (locEl)      locEl.textContent      = dest.location;
  if (categoryEl) categoryEl.textContent = dest.category.charAt(0).toUpperCase() + dest.category.slice(1);

  /* ── Map ── */
  const mapWrap = modal.querySelector('.modal__map-wrap');
  if (mapWrap && dest.mapEmbed) {
    mapWrap.innerHTML = `
      <iframe
        src="${dest.mapEmbed}"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Map of ${dest.name}">
      </iframe>`;
  }

  /* ── Nearby spots ── */
  const nearbyWrap = modal.querySelector('.modal__nearby');
  if (nearbyWrap && dest.nearby && dest.nearby.length > 0) {
    nearbyWrap.innerHTML = dest.nearby.map(id => {
      const n = getById(id);
      if (!n) return '';
      return `<button class="modal__nearby-chip" onclick="showDestination(${n.id})">${n.name}</button>`;
    }).join('');
  } else if (nearbyWrap) {
    nearbyWrap.innerHTML = '<span style="color:var(--clr-text-muted);font-size:0.85rem">No nearby spots listed.</span>';
  }

  /* ── Open ── */
  openModal();

  /* ── Scroll modal to top ── */
  const modalEl = modal.querySelector('.modal');
  if (modalEl) modalEl.scrollTop = 0;
}
