// Main app — screen routing, sanskrit hover/rail, tweaks
(function () {
  const D = window.CONSTITUTION_DATA;
  const glossaryByTerm = new Map(D.glossary.map(t => [t.term.toLowerCase(), t]));
  // Allow diacritic variants
  const aliases = { 'ṛta': 'rta', 'ahiṃsā': 'ahimsa', 'dayā': 'daya' };

  // ———— State ————
  const state = {
    screen: 'landing', // landing | reader | glossary
    width: 'comfy',
    skMode: 'rail', // rail | popover | panel
    railTerms: [], // ordered unique terms scrolled past
  };

  function save() {
    try { localStorage.setItem('dharma-state', JSON.stringify({ screen: state.screen, width: state.width, skMode: state.skMode, theme: document.documentElement.dataset.theme })); } catch(e){}
  }
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem('dharma-state') || '{}');
      if (s.width)  state.width = s.width;
      if (s.skMode) state.skMode = s.skMode;
      if (s.theme)  document.documentElement.dataset.theme = s.theme;
    } catch(e){}
  }

  // ———— Screen routing ————
  function showScreen(name) {
    state.screen = name;
    document.querySelectorAll('.screen').forEach(s => s.classList.toggle('is-active', s.dataset.screen === name));
    document.querySelectorAll('[data-navto]').forEach(a => a.classList.toggle('active', a.dataset.navto === name));
    window.scrollTo(0, 0);
    if (name === 'reader') {
      // reset rail when entering
      state.railTerms = [];
      renderRail();
      setupScrollObserver();
      updateProgress();
    }
    save();
  }

  // ———— Sanskrit inline parser ————
  // Takes a string with {sanskrit:Term} markers and returns HTML.
  function parseSanskrit(text) {
    return text.replace(/\{sanskrit:([^}]+)\}/g, (m, term) => {
      const t = term.trim();
      return `<span class="sanskrit-inline" data-sk="${t}">${t}</span>`;
    });
  }

  function resolveTerm(key) {
    const k = key.toLowerCase();
    if (glossaryByTerm.has(k)) return glossaryByTerm.get(k);
    if (aliases[k] && glossaryByTerm.has(aliases[k])) return glossaryByTerm.get(aliases[k]);
    return null;
  }

  // ———— Popover ————
  const pop = document.getElementById('sk-popover');
  function showPopover(el) {
    if (state.skMode !== 'popover' && state.skMode !== 'rail') return; // rail also shows hover
    const term = resolveTerm(el.dataset.sk);
    if (!term) return;
    pop.innerHTML = `
      <div class="sk-pop-head">
        <span class="sk-pop-term">${term.term}</span>
        <span class="sk-pop-dev">${term.dev}</span>
      </div>
      <div class="sk-pop-mean">${term.meaning}</div>
      <div class="sk-pop-use">${term.use}</div>
    `;
    const r = el.getBoundingClientRect();
    let top = r.bottom + 8;
    let left = r.left;
    const vw = window.innerWidth, vh = window.innerHeight;
    if (left + 280 > vw - 16) left = vw - 296;
    if (left < 16) left = 16;
    if (top + 160 > vh - 10) top = r.top - 160 - 8;
    pop.style.top = top + 'px';
    pop.style.left = left + 'px';
    pop.classList.add('is-visible');
  }
  function hidePopover() { pop.classList.remove('is-visible'); }

  // ———— Right rail ————
  function renderRail() {
    const rail = document.getElementById('r-rail-body');
    if (!rail) return;
    if (state.railTerms.length === 0) {
      rail.innerHTML = `<div class="r-rail-empty"><span class="dev">ॐ</span>Sanskrit terms will appear here as you encounter them in the text. Hover any saffron word to preview; scroll past it to anchor it in this rail.</div>`;
      return;
    }
    rail.innerHTML = state.railTerms.map(t => `
      <div class="sk-card" data-rail-term="${t.term}">
        <div class="sk-card-head">
          <span class="sk-card-term">${t.term}</span>
          <span class="sk-card-dev">${t.dev}</span>
        </div>
        <div class="sk-card-mean">${t.meaning}</div>
        <div class="sk-card-use">${t.use}</div>
      </div>
    `).join('');
  }

  function addToRail(term) {
    const t = resolveTerm(term);
    if (!t) return;
    if (state.railTerms.find(x => x.term === t.term)) return;
    state.railTerms.push(t);
    renderRail();
  }

  // ———— Scroll observer: terms as they pass top of viewport fill rail ————
  let scrollObs = null;
  function setupScrollObserver() {
    if (scrollObs) scrollObs.disconnect();
    scrollObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const key = e.target.dataset.sk;
          addToRail(key);
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
    document.querySelectorAll('.reader-main .sanskrit-inline').forEach(el => scrollObs.observe(el));
  }

  // ———— Reading progress bar ————
  function updateProgress() {
    const main = document.querySelector('.reader-main');
    if (!main) return;
    const rect = main.getBoundingClientRect();
    const total = main.scrollHeight - window.innerHeight;
    const scrolled = Math.max(0, -rect.top);
    const pct = Math.min(100, Math.max(0, (scrolled / total) * 100));
    document.getElementById('r-progress-fill').style.width = pct + '%';
  }
  window.addEventListener('scroll', () => {
    if (state.screen === 'reader') updateProgress();
  }, { passive: true });

  // ———— Landing: render stats, pillars, structure ————
  function renderLanding() {
    // Stats
    document.getElementById('stats').innerHTML = D.stats.map(s => `
      <div class="stat">
        <div class="stat-n">${String(s.n).padStart(2,'0')}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');

    // Pillars
    document.getElementById('pillars-list').innerHTML = D.pillars.map(p => `
      <div class="pillar">
        <div class="pillar-n">${String(p.n).padStart(2,'0')}</div>
        <div class="pillar-body">
          <div class="pillar-main-l">
            <span class="pillar-roman">${p.roman}</span>
            <span class="pillar-dev">${p.dev}</span>
          </div>
          <div class="pillar-meaning">${p.meaning}</div>
          <div class="pillar-desc">${p.desc}</div>
        </div>
      </div>
    `).join('');

    // Structure grid
    const groups = [
      { cat: 'front-matter', label: 'Front Matter' },
      { cat: 'preface',      label: 'Philosophical Preface' },
      { cat: 'constitution', label: 'The Constitution' },
      { cat: 'appendix',     label: 'Appendices' },
    ];
    document.getElementById('structure-grid').innerHTML = D.parts.map(p => {
      const catClass = p.category === 'front-matter' ? 'is-frontmatter' : p.category === 'preface' ? 'is-preface' : p.category === 'appendix' ? 'is-appendix' : '';
      const catLabel = p.category === 'front-matter' ? 'Front Matter' : p.category === 'preface' ? 'Preface' : p.category === 'appendix' ? 'Appendix' : 'Constitution';
      const numLabel = p.num ? `PART ${p.num}` : '—';
      return `
        <a href="#" class="str-card ${catClass}" data-open-reader="${p.id}">
          <div class="str-card-num">
            <span>${numLabel}</span>
            <span class="str-card-cat">${catLabel}</span>
          </div>
          <div class="str-card-title">${p.title}</div>
          <div class="str-card-sub">${p.subtitle || ''}</div>
          ${p.story ? `<div class="str-card-story">→ ${p.story}</div>` : ''}
        </a>`;
    }).join('');
  }

  // ———— Reader: render index + main content (Part V as demo) ————
  function renderReader() {
    // Index (sidebar)
    const catLabels = { 'front-matter': 'Front Matter', 'preface': 'Philosophical Preface', 'constitution': 'The Constitution', 'appendix': 'Appendices' };
    const cats = ['front-matter','preface','constitution','appendix'];
    const current = D.partV.id;
    const sidebar = document.getElementById('r-index-body');
    sidebar.innerHTML = cats.map(cat => {
      const items = D.parts.filter(p => p.category === cat);
      return `
        <div class="r-index-cat">${catLabels[cat]}</div>
        ${items.map(p => `
          <a href="#" class="r-index-item ${p.id === current ? 'is-active' : ''}" data-part-id="${p.id}">
            <span class="r-index-num">${p.num || '·'}</span>
            <span class="r-index-title">${p.title}</span>
          </a>
        `).join('')}
      `;
    }).join('');

    // Main content
    const part = D.partV;
    const main = document.getElementById('r-main-body');

    const sectionsHTML = part.sections.map(s => {
      switch (s.kind) {
        case 'story': {
          const paras = s.body.map(b => `<p class="r-p">${parseSanskrit(b)}</p>`).join('');
          const pq = s.pullquote ? `<div class="pullquote">${parseSanskrit(s.pullquote)}</div>` : '';
          return `
            <div class="r-story-initial">
              <h2 class="r-section-heading">${s.heading}</h2>
              ${paras}
              ${pq}
            </div>`;
        }
        case 'body':
          return s.body.map(b => `<p class="r-p">${parseSanskrit(b)}</p>`).join('');
        case 'anchor':
          return `<div class="anchor ${s.flavor === 'vedic' ? 'vedic' : 'source'}">
            <span class="anchor-label">${s.flavor === 'vedic' ? 'Vedic Anchor' : 'Constitutional Source'}</span>
            ${parseSanskrit(s.body)}
          </div>`;
        case 'heading':
          return `<h2 class="r-section-heading">${s.heading}</h2>`;
        case 'article': {
          const body = s.body.map(b => `<p class="r-p">${parseSanskrit(b)}</p>`).join('');
          const meta = (s.meta || []).map(m => `
            <div class="art-meta-row">
              <div class="art-meta-label">${m.label}</div>
              <div class="art-meta-text">${parseSanskrit(m.text)}</div>
            </div>`).join('');
          const anchors = (s.anchors || []).map(a => `
            <div class="anchor ${a.flavor === 'vedic' ? 'vedic' : 'source'}">
              <span class="anchor-label">${a.flavor === 'vedic' ? 'Vedic Anchor' : 'Constitutional Source'}</span>
              ${parseSanskrit(a.text)}
            </div>`).join('');
          return `
            <div class="r-article">
              <div class="r-article-num">${s.number}</div>
              <h3 class="r-article-heading">${s.heading}</h3>
              ${body}
              ${meta ? `<div class="art-meta">${meta}</div>` : ''}
              ${anchors}
            </div>`;
        }
        default: return '';
      }
    }).join('');

    // Prev/next
    const idx = D.parts.findIndex(p => p.id === part.id);
    const prev = idx > 0 ? D.parts[idx-1] : null;
    const next = idx < D.parts.length-1 ? D.parts[idx+1] : null;

    main.innerHTML = `
      <div class="r-head">
        <div class="r-head-eyebrow">
          <span class="r-head-pill">Part ${part.num} <span class="dev">·</span> Constitution</span>
        </div>
        <h1 class="r-head-title">${part.title}</h1>
        <div class="r-head-sub">${part.subtitle}</div>
        <div class="r-head-story">
          <span class="r-head-story-label">Vedic Story</span>
          ${part.story} — ${part.storySubtitle}
        </div>
      </div>
      ${sectionsHTML}
      <div class="r-nav">
        ${prev ? `<a href="#" class="r-nav-btn prev" data-part-id="${prev.id}">
          <span class="label">← Previous</span>
          <span class="title">${prev.num ? 'Part '+prev.num+' · ' : ''}${prev.title}</span>
        </a>` : '<span></span>'}
        ${next ? `<a href="#" class="r-nav-btn next" data-part-id="${next.id}">
          <span class="label">Next →</span>
          <span class="title">${next.num ? 'Part '+next.num+' · ' : ''}${next.title}</span>
        </a>` : '<span></span>'}
      </div>
    `;

    applyWidthAndRailMode();
  }

  // ———— Glossary screen ————
  function renderGlossary() {
    const container = document.getElementById('glossary-body');
    const search = (document.getElementById('glossary-search-input').value || '').toLowerCase();
    const filtered = D.glossary.filter(t =>
      !search || t.term.toLowerCase().includes(search) || t.meaning.toLowerCase().includes(search) || t.use.toLowerCase().includes(search)
    );
    document.getElementById('glossary-count').textContent = `${filtered.length} terms`;

    // Group by first letter
    const byLetter = {};
    filtered.forEach(t => {
      const L = t.term[0].toUpperCase();
      (byLetter[L] = byLetter[L] || []).push(t);
    });
    const letters = Object.keys(byLetter).sort();

    container.innerHTML = letters.map(L => `
      <section class="glossary-group" id="gl-${L}">
        <div class="glossary-group-label">${L}</div>
        <div class="glossary-entries">
          ${byLetter[L].map(t => `
            <div class="gl-entry">
              <div class="gl-entry-head">
                <span class="gl-entry-term">${t.term}</span>
                <span class="gl-entry-dev">${t.dev}</span>
              </div>
              <div class="gl-entry-mean">${t.meaning}</div>
              <div class="gl-entry-use">${t.use}</div>
            </div>
          `).join('')}
        </div>
      </section>
    `).join('');

    // A-Z index
    const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const idxRoot = document.getElementById('glossary-index');
    idxRoot.innerHTML = allLetters.map(L => {
      const has = !!byLetter[L];
      return `<a class="glossary-letter ${has?'has-terms':''}" href="${has?'#gl-'+L:'#'}">${L}</a>`;
    }).join('');
  }

  // ———— Tweaks ————
  function applyWidthAndRailMode() {
    const r = document.querySelector('.reader');
    if (!r) return;
    r.dataset.width = state.width;
    r.dataset.railMode = state.skMode === 'rail' ? 'rail' : (state.skMode === 'popover' ? 'popover' : 'panel');
    // Rail visibility toggle
    const rail = document.querySelector('.r-rail');
    if (rail) rail.style.display = state.skMode === 'rail' ? 'block' : 'none';
    // Panel mode: show a footer panel (minimal impl — use rail as docked full)
    const panel = document.getElementById('sk-panel');
    if (panel) panel.classList.toggle('is-visible', state.skMode === 'panel');
  }

  function renderTweaksUI() {
    const tw = document.getElementById('tweaks');
    if (!tw) return;
    tw.querySelectorAll('[data-tweak]').forEach(btn => {
      const key = btn.dataset.tweak, val = btn.dataset.val;
      btn.classList.toggle('is-active',
        (key === 'width'  && val === state.width) ||
        (key === 'skMode' && val === state.skMode) ||
        (key === 'theme'  && val === (document.documentElement.dataset.theme || 'light'))
      );
    });
  }

  // ———— Event wiring ————
  function wire() {
    // Nav links
    document.body.addEventListener('click', (e) => {
      const nav = e.target.closest('[data-navto]');
      if (nav) { e.preventDefault(); showScreen(nav.dataset.navto); return; }

      const open = e.target.closest('[data-open-reader]');
      if (open) { e.preventDefault(); showScreen('reader'); return; }

      const part = e.target.closest('[data-part-id]');
      if (part) { e.preventDefault(); showScreen('reader'); return; }

      const tweakBtn = e.target.closest('[data-tweak]');
      if (tweakBtn) {
        const k = tweakBtn.dataset.tweak, v = tweakBtn.dataset.val;
        if (k === 'width')  state.width = v;
        if (k === 'skMode') state.skMode = v;
        if (k === 'theme')  { document.documentElement.dataset.theme = v; }
        applyWidthAndRailMode();
        renderTweaksUI();
        save();
        return;
      }

      if (e.target.closest('#tweaks-close')) {
        document.getElementById('tweaks').classList.remove('is-visible');
        return;
      }
      if (e.target.closest('#tweaks-open')) {
        document.getElementById('tweaks').classList.toggle('is-visible');
        renderTweaksUI();
        return;
      }

      if (e.target.closest('#theme-toggle')) {
        const cur = document.documentElement.dataset.theme || 'light';
        document.documentElement.dataset.theme = cur === 'light' ? 'dark' : 'light';
        save();
        return;
      }

      // Mobile index — open/close
      if (e.target.closest('#r-index-trigger')) {
        e.preventDefault();
        document.getElementById('r-index').classList.add('is-mobile-open');
        document.body.style.overflow = 'hidden';
        return;
      }
      if (e.target.closest('#r-index-close')) {
        e.preventDefault();
        document.getElementById('r-index').classList.remove('is-mobile-open');
        document.body.style.overflow = '';
        return;
      }
      // When a reader-index item is tapped on mobile, also close the overlay
      if (e.target.closest('.r-index-item') || e.target.closest('.r-index-back')) {
        const idx = document.getElementById('r-index');
        if (idx && idx.classList.contains('is-mobile-open')) {
          idx.classList.remove('is-mobile-open');
          document.body.style.overflow = '';
        }
      }
    });

    // Sanskrit hover
    document.body.addEventListener('mouseover', (e) => {
      const el = e.target.closest('.sanskrit-inline');
      if (el) showPopover(el);
    });
    document.body.addEventListener('mouseout', (e) => {
      const el = e.target.closest('.sanskrit-inline');
      if (el) hidePopover();
    });

    // Click a Sanskrit term — highlight in rail
    document.body.addEventListener('click', (e) => {
      const el = e.target.closest('.sanskrit-inline');
      if (el) {
        const term = resolveTerm(el.dataset.sk);
        if (term) {
          addToRail(term.term);
          document.querySelectorAll('.sk-card').forEach(c => c.classList.toggle('is-highlighted', c.dataset.railTerm === term.term));
          setTimeout(() => document.querySelectorAll('.sk-card').forEach(c => c.classList.remove('is-highlighted')), 1400);
          const card = document.querySelector(`.sk-card[data-rail-term="${term.term}"]`);
          if (card) card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      }
    });

    // Glossary search
    const gs = document.getElementById('glossary-search-input');
    if (gs) gs.addEventListener('input', renderGlossary);

    // Edit mode protocol
    window.addEventListener('message', (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') document.getElementById('tweaks').classList.add('is-visible');
      if (e.data.type === '__deactivate_edit_mode') document.getElementById('tweaks').classList.remove('is-visible');
    });
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch(e){}
  }

  // ———— Init ————
  document.addEventListener('DOMContentLoaded', () => {
    load();
    renderLanding();
    renderReader();
    renderGlossary();
    wire();
    applyWidthAndRailMode();
    renderTweaksUI();
    // Default screen
    showScreen(state.screen || 'landing');
  });
})();
