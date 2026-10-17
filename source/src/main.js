import '@tabler/icons-webfont/dist/tabler-icons.min.css';
import './styles.css';
import { applications, capabilities, courses, stages } from './course-data.js';

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="回到課程工作站首頁">課程學習工作站</a>
    <nav class="main-nav" aria-label="主選單">
      <a href="#courses">課程總覽</a>
      <a href="#capabilities">六大能力</a>
      <a href="#applications">事業應用</a>
    </nav>
    <a class="header-cta" href="#courses">開始找課 <i class="ti ti-arrow-down-right" aria-hidden="true"></i></a>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">EXCELLENT CAMP · LEARNING STATION</p>
        <h1 id="hero-title">從自己會做<br /><span>到帶團隊做</span></h1>
        <p class="hero-description">三階完整課程地圖，依學習階段、六大能力與事業應用快速找課。</p>
        <a class="hero-link" href="#courses">瀏覽 20 個課程主題 <i class="ti ti-arrow-right" aria-hidden="true"></i></a>
      </div>
      <div class="hero-note">
        <span>學會・應用・帶動更多人</span>
        <strong>把每堂課，連結到真實事業行動</strong>
      </div>
    </section>

    <div class="hero-stats" aria-label="課程概覽">
      <div><strong>3</strong><span>個學習階段</span></div>
      <div><strong>20</strong><span>個課程主題</span></div>
      <div><strong>6</strong><span>大事業能力</span></div>
    </div>

    <section class="section capabilities-section" id="capabilities" aria-labelledby="capabilities-title">
      <div class="section-heading">
        <div>
          <p class="section-kicker">CAPABILITY MAP</p>
          <h2 id="capabilities-title">六大能力，串起事業基本功</h2>
        </div>
        <p class="section-intro">點選能力，快速篩出相關課程</p>
      </div>
      <div class="capability-grid" id="capability-grid"></div>
    </section>

    <section class="section applications-section" id="applications" aria-labelledby="applications-title">
      <div class="section-heading compact-heading">
        <div>
          <p class="section-kicker">BUSINESS IN PRACTICE</p>
          <h2 id="applications-title">也可以從事業應用開始找課</h2>
        </div>
        <p class="section-intro">依經營情境，找到下一步</p>
      </div>
      <div class="application-list" id="application-list"></div>
    </section>

    <section class="section courses-section" id="courses" aria-labelledby="courses-title">
      <div class="section-heading courses-heading">
        <div>
          <p class="section-kicker">THE COMPLETE CURRICULUM</p>
          <h2 id="courses-title">三階完整課程主題</h2>
          <p class="section-intro">從建立基本功，到帶領團隊持續成長</p>
        </div>
        <label class="search-box">
          <i class="ti ti-search" aria-hidden="true"></i>
          <input id="course-search" type="search" placeholder="搜尋課程名稱或能力" autocomplete="off" />
          <kbd>/</kbd>
        </label>
      </div>
      <div class="filter-status" id="filter-status" aria-live="polite"></div>
      <div class="stage-grid" id="stage-grid"></div>
      <p class="empty-state" id="empty-state" hidden>沒有符合條件的課程，請調整搜尋文字或篩選條件。</p>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-mark"><i class="ti ti-compass" aria-hidden="true"></i></div>
    <div>
      <strong>從學習到應用，串起能力，創造屬於你的事業藍圖</strong>
      <p>卓越實戰營｜課程學習工作站</p>
    </div>
    <a href="#top" class="back-top">回到頂端 <i class="ti ti-arrow-up-right" aria-hidden="true"></i></a>
  </footer>
`;

const capabilityGrid = document.querySelector('#capability-grid');
const applicationList = document.querySelector('#application-list');
const stageGrid = document.querySelector('#stage-grid');
const searchInput = document.querySelector('#course-search');
const filterStatus = document.querySelector('#filter-status');
const emptyState = document.querySelector('#empty-state');

const filters = { capability: '', application: '', search: '' };

capabilityGrid.innerHTML = capabilities.map((capability) => `
  <button class="capability-card" type="button" data-capability="${capability.id}" aria-pressed="false">
    <span class="capability-icon"><i class="ti ${capability.icon}" aria-hidden="true"></i></span>
    <span class="capability-copy"><strong>${capability.title}</strong><small>${capability.short}</small></span>
    <i class="ti ti-chevron-right capability-arrow" aria-hidden="true"></i>
  </button>
`).join('');

applicationList.innerHTML = applications.map((item) => `
  <button class="application-chip" type="button" data-application="${item.id}" aria-pressed="false">
    <i class="ti ${item.icon}" aria-hidden="true"></i><span>${item.title}</span><i class="ti ti-arrow-up-right chip-arrow" aria-hidden="true"></i>
  </button>
`).join('');

function visibleCourses() {
  const needle = filters.search.trim().toLocaleLowerCase();
  return courses.filter((course) => {
    const capability = capabilities.find((item) => item.id === course.capability);
    const matchesCapability = !filters.capability || course.capability === filters.capability;
    const matchesApplication = !filters.application || course.application === filters.application;
    const searchable = `${course.title} ${capability?.title || ''} ${course.focus} ${course.practice}`.toLocaleLowerCase();
    return matchesCapability && matchesApplication && (!needle || searchable.includes(needle));
  });
}

function renderCourses() {
  const filtered = visibleCourses();
  const activeLabels = [];
  if (filters.capability) activeLabels.push(capabilities.find((item) => item.id === filters.capability)?.title || '能力分類');
  if (filters.application) activeLabels.push(applications.find((item) => item.id === filters.application)?.title || '事業應用');
  if (filters.search) activeLabels.push(`搜尋：${filters.search}`);

  filterStatus.innerHTML = `
    <span>目前顯示 <strong>${filtered.length}</strong> 堂課</span>
    ${activeLabels.length ? `<span class="active-filters">${activeLabels.map((label) => `<em>${label}</em>`).join('')}</span><button class="clear-filters" type="button">清除篩選</button>` : '<span class="all-courses-label">全部課程</span>'}
  `;

  stageGrid.innerHTML = stages.map((stage) => {
    const stageCourses = filtered.filter((course) => course.stage === stage.id);
    return `
      <section class="stage-column stage-${stage.id} ${stageCourses.length ? '' : 'is-empty'}" aria-labelledby="stage-${stage.id}-title">
        <div class="stage-header">
          <div class="stage-number">${stage.id}</div>
          <div class="stage-title-wrap"><h3 id="stage-${stage.id}-title">${stage.label} <span>| ${stage.name}</span></h3><p>${stage.strapline}</p></div>
          <span class="stage-count">${stageCourses.length} 堂</span>
        </div>
        <div class="course-list">
          ${stageCourses.map((course) => {
            const capability = capabilities.find((item) => item.id === course.capability);
            const application = applications.find((item) => item.id === course.application);
            return `
              <details class="course-item">
                <summary>
                  <span class="course-number">${course.number}</span>
                  <span class="course-title">${course.title}<small>${capability?.title || ''}</small></span>
                  <i class="ti ti-chevron-down course-chevron" aria-hidden="true"></i>
                </summary>
                <div class="course-detail">
                  <span class="application-tag"><i class="ti ${application?.icon || 'ti-compass'}" aria-hidden="true"></i>${application?.title || '事業應用'}</span>
                  <p><strong>課程重點</strong>${course.focus}</p>
                  <p><strong>練習方向</strong>${course.practice}</p>
                </div>
              </details>
            `;
          }).join('') || '<p class="stage-empty">目前篩選條件沒有這一階的課程</p>'}
        </div>
      </section>
    `;
  }).join('');

  emptyState.hidden = filtered.length > 0;
  document.querySelectorAll('.clear-filters').forEach((button) => button.addEventListener('click', clearFilters));
}

function setPressed(selector, attribute, value) {
  document.querySelectorAll(selector).forEach((button) => {
    const active = button.getAttribute(attribute) === value && value !== '';
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function clearFilters() {
  filters.capability = '';
  filters.application = '';
  filters.search = '';
  searchInput.value = '';
  setPressed('[data-capability]', 'data-capability', '');
  setPressed('[data-application]', 'data-application', '');
  renderCourses();
}

capabilityGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-capability]');
  if (!button) return;
  const value = button.dataset.capability;
  filters.capability = filters.capability === value ? '' : value;
  filters.application = '';
  setPressed('[data-capability]', 'data-capability', filters.capability);
  setPressed('[data-application]', 'data-application', '');
  renderCourses();
  document.querySelector('#courses').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

applicationList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-application]');
  if (!button) return;
  const value = button.dataset.application;
  filters.application = filters.application === value ? '' : value;
  filters.capability = '';
  setPressed('[data-application]', 'data-application', filters.application);
  setPressed('[data-capability]', 'data-capability', '');
  renderCourses();
  document.querySelector('#courses').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

searchInput.addEventListener('input', () => {
  filters.search = searchInput.value;
  renderCourses();
});

document.addEventListener('keydown', (event) => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === 'Escape' && document.activeElement === searchInput) {
    searchInput.value = '';
    filters.search = '';
    renderCourses();
  }
});

renderCourses();
