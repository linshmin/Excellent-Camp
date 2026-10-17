import '@tabler/icons-webfont/dist/tabler-icons.min.css';
import './styles.css';
import { applications, applicationMappings, capabilities, capabilityMappings, courses, stages } from './course-data.js';

const app = document.querySelector('#app');
const page = document.body.dataset.page || 'overview';

function header(activePage) {
  const links = [
    { id: 'overview', label: '課程總覽', href: './index.html' },
    { id: 'abilities', label: '六大能力', href: './abilities.html' },
    { id: 'applications', label: '事業應用', href: './applications.html' },
  ];
  return `
    <header class="site-header">
      <a class="brand" href="./index.html#top" aria-label="回到課程總覽">課程學習工作站</a>
      <nav class="main-nav" aria-label="主選單">
        ${links.map((link) => `<a href="${link.href}" ${activePage === link.id ? 'aria-current="page"' : ''}>${link.label}</a>`).join('')}
      </nav>
      <a class="header-cta" href="./index.html#courses">開始找課 <i class="ti ti-arrow-down-right" aria-hidden="true"></i></a>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-mark"><i class="ti ti-compass" aria-hidden="true"></i></div>
      <div>
        <strong>從學習到應用，串起能力，創造事業藍圖</strong>
        <p>卓越實戰營｜課程學習工作站</p>
      </div>
      <a href="./index.html#courses" class="back-top">回課程總覽 <i class="ti ti-arrow-up-right" aria-hidden="true"></i></a>
    </footer>
  `;
}

function renderOverview() {
  app.innerHTML = `
    ${header('overview')}
    <main id="top">
      <section class="hero overview-hero" aria-labelledby="overview-title">
        <div class="hero-copy">
          <p class="eyebrow">THE COMPLETE CURRICULUM</p>
          <h1 id="overview-title">三階完整課程總覽</h1>
          <p class="hero-description">從自己會做、一起做到帶夥伴做，依階段查看所有課程主題。</p>
          <a class="hero-link" href="#courses">前往課程總覽 <i class="ti ti-arrow-down" aria-hidden="true"></i></a>
        </div>
        <div class="hero-note">
          <span>學會・應用・帶動更多人</span>
          <strong>找到下一步，帶著課程去實踐</strong>
        </div>
      </section>
      <div class="hero-stats" aria-label="課程概覽">
        <div><strong>3</strong><span>個學習階段</span></div>
        <div><strong>20</strong><span>個課程主題</span></div>
        <div><strong>6</strong><span>大事業能力</span></div>
        <a class="stats-link" href="./abilities.html">依能力找課 <i class="ti ti-arrow-up-right" aria-hidden="true"></i></a>
        <a class="stats-link" href="./applications.html">依情境找課 <i class="ti ti-arrow-up-right" aria-hidden="true"></i></a>
      </div>
      <section class="section courses-section" id="courses" aria-labelledby="courses-title">
        <div class="section-heading courses-heading">
          <div>
            <p class="section-kicker">COURSE OVERVIEW</p>
            <h2 id="courses-title">所有課程主題</h2>
            <p class="section-intro">點開課程可查看重點與練習方向；也可搜尋課程名稱或內容。</p>
          </div>
          <label class="search-box">
            <i class="ti ti-search" aria-hidden="true"></i>
            <input id="course-search" type="search" placeholder="搜尋課程名稱或內容" autocomplete="off" aria-label="搜尋課程名稱或內容" />
            <kbd>/</kbd>
          </label>
        </div>
        <div class="filter-status" id="filter-status" aria-live="polite"></div>
        <div class="stage-grid" id="stage-grid"></div>
        <p class="empty-state" id="empty-state" hidden>找不到符合的課程，請換一組搜尋文字。</p>
      </section>
    </main>
    ${footer()}
  `;

  const stageGrid = document.querySelector('#stage-grid');
  const searchInput = document.querySelector('#course-search');
  const filterStatus = document.querySelector('#filter-status');
  const emptyState = document.querySelector('#empty-state');

  function renderCourses() {
    const needle = searchInput.value.trim().toLocaleLowerCase();
    const filtered = courses.filter((course) => {
      const stage = stages.find((item) => item.id === course.stage);
      const searchable = `${course.title} ${stage?.label || ''} ${stage?.name || ''} ${course.focus} ${course.practice}`.toLocaleLowerCase();
      return !needle || searchable.includes(needle);
    });

    filterStatus.innerHTML = `<span>目前顯示 <strong>${filtered.length}</strong> / ${courses.length} 堂課</span>${needle ? `<span class="active-filter">搜尋：${searchInput.value}</span><button class="clear-search" type="button">清除搜尋</button>` : '<span class="all-courses-label">全部課程</span>'}`;
    stageGrid.innerHTML = stages.map((stage) => {
      const stageCourses = filtered.filter((course) => course.stage === stage.id);
      return `
        <section class="stage-column stage-${stage.id}" aria-labelledby="stage-${stage.id}-title">
          <div class="stage-header">
            <div class="stage-number">${stage.id}</div>
            <div class="stage-title-wrap"><h3 id="stage-${stage.id}-title">${stage.label} <span>｜${stage.name}</span></h3><p>${stage.strapline}</p></div>
            <span class="stage-count">${stageCourses.length} 堂</span>
          </div>
          <div class="course-list">
            ${stageCourses.length ? stageCourses.map((course) => `
              <details class="course-item">
                <summary>
                  <span class="course-number">${course.number}</span>
                  <span class="course-title">${course.title}</span>
                  <i class="ti ti-chevron-down course-chevron" aria-hidden="true"></i>
                </summary>
                <div class="course-detail">
                  <p><strong>課程重點</strong>${course.focus}</p>
                  <p><strong>練習方向</strong>${course.practice}</p>
                </div>
              </details>
            `).join('') : '<p class="stage-empty">這個階段沒有符合的課程。</p>'}
          </div>
        </section>
      `;
    }).join('');
    emptyState.hidden = filtered.length > 0;
  }

  filterStatus.addEventListener('click', (event) => {
    if (!event.target.closest('.clear-search')) return;
    searchInput.value = '';
    searchInput.focus();
    renderCourses();
  });
  searchInput.addEventListener('input', renderCourses);
  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      renderCourses();
    }
  });
  renderCourses();
}

function mappingCard(item, index, kind) {
  const refs = item.items;
  const capabilitiesById = new Map(capabilities.map((entry) => [entry.id, entry]));
  const applicationsById = new Map(applications.map((entry) => [entry.id, entry]));
  const meta = kind === 'abilities' ? capabilitiesById.get(item.capabilityId) : applicationsById.get(item.applicationId);
  const kicker = kind === 'abilities' ? `ABILITY ${String(index + 1).padStart(2, '0')}` : `BUSINESS CASE ${String(index + 1).padStart(2, '0')}`;
  return `
    <article class="mapping-card">
      <header class="mapping-card-head">
        <span class="mapping-icon"><i class="ti ${meta.icon}" aria-hidden="true"></i></span>
        <div class="mapping-card-title">
          <p class="mapping-kicker">${kicker}</p>
          <h2>${meta.title}</h2>
          ${meta.description ? `<p class="mapping-description">${meta.description}</p>` : `<p class="mapping-description">${meta.short}</p>`}
        </div>
      </header>
      <ul class="mapping-course-list">
        ${refs.map((entry) => {
          const matchedCourses = courses.filter((course) => entry.numbers.includes(course.number));
          const stage = stages.find((candidate) => candidate.id === matchedCourses[0]?.stage);
          const note = entry.note || (matchedCourses.length > 1 ? `課程總覽：${matchedCourses.map((course) => course.title).join('、')}` : '');
          return `
            <li class="mapping-course-item">
              <span class="stage-badge stage-${stage?.id || 1}">${stage?.label || ''}</span>
              <span class="mapping-course-copy"><strong>${entry.label}</strong>${note ? `<small>${note}</small>` : ''}</span>
            </li>
          `;
        }).join('')}
      </ul>
    </article>
  `;
}

function renderMappingPage(kind) {
  const isAbilities = kind === 'abilities';
  const title = isAbilities ? '六大能力對應課程' : '依事業情境找課程';
  const subtitle = isAbilities
    ? '從想培養的能力出發，快速查看一階、二階與三階的對應主題。'
    : '從眼前遇到的事業情境出發，直接查看推薦課程，不必再點開課程卡片。';
  const kicker = isAbilities ? 'COURSE BY CAPABILITY' : 'COURSE BY BUSINESS SCENARIO';
  const mappings = isAbilities ? capabilityMappings : applicationMappings;
  app.innerHTML = `
    ${header(kind)}
    <main id="top">
      <section class="page-hero ${isAbilities ? 'ability-hero' : 'application-hero'}">
        <p class="eyebrow">${kicker}</p>
        <h1>${title}</h1>
        <p class="page-hero-description">${subtitle}</p>
        <a class="hero-link" href="./index.html#courses">返回課程總覽 <i class="ti ti-arrow-right" aria-hidden="true"></i></a>
      </section>
      <section class="section mapping-section" aria-labelledby="mapping-title">
        <div class="section-heading">
          <div>
            <p class="section-kicker">${isAbilities ? 'SIX CAPABILITIES' : 'FOUR BUSINESS SCENARIOS'}</p>
            <h2 id="mapping-title">${isAbilities ? '六大能力與對應主題' : '遇到情境，就從這裡開始'}</h2>
          </div>
          <p class="section-intro">課程階段以標籤標示；本頁直接列出對應課程。</p>
        </div>
        <div class="mapping-grid ${isAbilities ? 'six-mapping' : 'four-mapping'}">
          ${mappings.map((item, index) => mappingCard(item, index, kind)).join('')}
        </div>
        <p class="mapping-note">${isAbilities ? '「3分鐘公司及事業分享」在課程總覽中保留為「三分鐘公司介紹」與「三分鐘事業分享」兩個主題。' : '公司介紹與事業分享的對應，合併呈現為「3分鐘公司及事業分享」。'}</p>
      </section>
    </main>
    ${footer()}
  `;
}

if (page === 'abilities' || page === 'applications') renderMappingPage(page);
else renderOverview();
