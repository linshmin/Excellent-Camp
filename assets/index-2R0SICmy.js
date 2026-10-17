(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(i){if(i.ep)return;i.ep=!0;const c=s(i);fetch(i.href,c)}})();const u=[{id:"mindset",title:"事業認知與經營心態",icon:"ti-bulb",short:"認識方向，建立信念與行動"},{id:"service",title:"產品知識與專業服務",icon:"ti-package",short:"理解產品，提供專業體驗"},{id:"communication",title:"表達、見證與銷售",icon:"ti-message-circle",short:"清楚分享，讓價值被理解"},{id:"customer",title:"客戶開發與邀約",icon:"ti-user-search",short:"拓展名單，開啟真實對話"},{id:"operations",title:"事業運作與服務系統",icon:"ti-settings",short:"建立流程，讓服務持續發生"},{id:"leadership",title:"組織運作與團隊管理",icon:"ti-chart-bar",short:"帶領夥伴，複製團隊成果"}],h=[{id:"foundation",title:"建立事業基礎",icon:"ti-compass"},{id:"customer",title:"開發客戶與分享",icon:"ti-users"},{id:"product",title:"產品與專業服務",icon:"ti-heart-handshake"},{id:"team",title:"團隊管理與複製",icon:"ti-hierarchy-3"}],g=[{id:1,label:"一階",name:"自己會做",strapline:"打好基礎，建立正確觀念與基本能力",tone:"sage"},{id:2,label:"二階",name:"一起做",strapline:"強化實戰，學會運用並開始複製",tone:"gold"},{id:3,label:"三階",name:"帶夥伴做",strapline:"放大格局，帶領團隊創造更大影響力",tone:"forest"}],v=[{number:"01",stage:1,title:"認識蓓姿媞事業及應具備的能力",capability:"mindset",application:"foundation",focus:"五種事業角色、五項經營能力，將分享、服務與追蹤串成事業循環。",practice:"盤點自己的優勢與待加強能力，完成一份 90 天行動計畫。"},{number:"02",stage:1,title:"事業經營的正確觀念與態度",capability:"mindset",application:"foundation",focus:"主動行動、從拒絕中學習，辨識新手誤區並盤點經營能力。",practice:"完成能力盤點，和夥伴分享一項優勢與一項改善行動。"},{number:"03",stage:1,title:"三分鐘自我介紹",capability:"communication",application:"customer",focus:"我是誰 → 人生故事 → 遇見蓓姿媞 → 改變與成長 → 未來願景。",practice:"完成三分鐘分享，練習讓故事自然連結到個人改變與願景。"},{number:"04",stage:1,title:"三分鐘產品介紹",capability:"service",application:"product",focus:"從客戶問題開始，說明產品特色、見證與體驗邀請。",practice:"依照課程的時間分段，練習介紹一項產品並邀請對方體驗。"},{number:"05",stage:1,title:"邀約與列名單",capability:"customer",application:"customer",focus:"邀約四步驟、A／B／C 名單、FORMHD 對話與 45 天追蹤。",practice:"整理一份名單，寫下一則邀約內容與後續行動日期。"},{number:"06",stage:1,title:"抗菌系列及銷售話術",capability:"service",application:"product",focus:"認識襪品、內著、護具與保健系列，依需求說明產品價值。",practice:"練習先了解需求，再連結產品特色、案例與體驗邀請。"},{number:"07",stage:1,title:"產品維護與庫存管理",capability:"operations",application:"product",focus:"進貨原則、先進先出、分類標示、試穿後整理與定期檢查。",practice:"用庫存清單演練商品整理、出入順序與檢查流程。"},{number:"08",stage:2,title:"相信的力量",capability:"mindset",application:"foundation",focus:"從理解、實踐與驗證建立信念，涵蓋自己、產品、系統與夥伴。",practice:"回顧一項親身經驗，整理成可持續執行的行動承諾。"},{number:"09",stage:2,title:"見證分享與破冰技巧",capability:"communication",application:"customer",focus:"先聽對方說，再接住對方的話，連結自己的經驗與見證。",practice:"兩人一組練習破冰、分享見證與給予具體回饋。"},{number:"10",stage:2,title:"三分鐘演練：自我介紹、產品",capability:"communication",application:"customer",focus:"學員親自上場練習自我介紹與產品分享；簡報是輔助。",practice:"輪流演練、收到回饋，再調整表達方式重練。"},{number:"11",stage:2,title:"體雕衣系列及銷售話術",capability:"service",application:"product",focus:"以問、聽、選、說、約了解需求，推薦合適款式並邀請體驗。",practice:"練習依對方需求選擇產品，說明推薦理由並安排體驗。"},{number:"12",stage:2,title:"結合 AI 的拍背判背技巧",capability:"service",application:"product",focus:"練習拍攝準備、角度、照片比對與現場服務協助。",practice:"使用示意素材練習流程；實際客戶影像須先取得同意並妥善管理。"},{number:"13",stage:2,title:"家庭聚會運作（啟動 HP）",capability:"operations",application:"team",focus:"由主人、主持人、分享者與協助者分工，完成接待、分享、體驗與交流。",practice:"依邀請、認識、主題分享、產品體驗、問題交流五步驟排練。"},{number:"14",stage:3,title:"從會做，到做大",capability:"leadership",application:"team",focus:"看見時間、暴富、消費與偽自由的陷阱，從個人成功走向團隊成功。",practice:"設定每月新客戶、新夥伴與分享／家庭聚會三項行動。"},{number:"15",stage:3,title:"銷售最高殿堂",capability:"leadership",application:"team",focus:"經營個人狀態、辨識市場能量、設定目標，追蹤人、進度與成果。",practice:"以每週領導行動表檢視市場開發、銷售、聚會與售後跟進。"},{number:"16",stage:3,title:"啟動事業的 3S",capability:"operations",application:"team",focus:"透過 Share、Sponsor、Service 建立分享、培育與服務的事業節奏。",practice:"檢視小組現況，選定一項 3S 行動並約定追蹤方式。"},{number:"17",stage:3,title:"三分鐘公司介紹",capability:"communication",application:"customer",focus:"用清楚架構介紹公司、市場、產品、實力、教育與願景。",practice:"整理一段三分鐘公司分享，讓對方聽懂公司特色與價值。"},{number:"18",stage:3,title:"三分鐘事業分享",capability:"communication",application:"customer",focus:"分享健康產業與事業培育系統，說明機會並邀請對方深入了解。",practice:"練習從對方需求出發，完成事業分享與下一步邀請。"},{number:"19",stage:3,title:"一分鐘綜合演練",capability:"communication",application:"customer",focus:"每位學員拿麥克風，從自我介紹、產品、見證、公司、事業五選一。",practice:"上台完成一分鐘分享；本頁先不設定未確認的評分規則。"},{number:"20",stage:3,title:"組織運作與團隊管理",capability:"leadership",application:"team",focus:"角色轉換、行動數字、回報、固定交流、授權與團隊自主運作。",practice:"設計一週團隊節奏，安排關懷、肯定、輔導與行動回顧。"}],$=document.querySelector("#app");$.innerHTML=`
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
`;const f=document.querySelector("#capability-grid"),y=document.querySelector("#application-list"),L=document.querySelector("#stage-grid"),l=document.querySelector("#course-search"),S=document.querySelector("#filter-status"),E=document.querySelector("#empty-state"),e={capability:"",application:"",search:""};f.innerHTML=u.map(t=>`
  <button class="capability-card" type="button" data-capability="${t.id}" aria-pressed="false">
    <span class="capability-icon"><i class="ti ${t.icon}" aria-hidden="true"></i></span>
    <span class="capability-copy"><strong>${t.title}</strong><small>${t.short}</small></span>
    <i class="ti ti-chevron-right capability-arrow" aria-hidden="true"></i>
  </button>
`).join("");y.innerHTML=h.map(t=>`
  <button class="application-chip" type="button" data-application="${t.id}" aria-pressed="false">
    <i class="ti ${t.icon}" aria-hidden="true"></i><span>${t.title}</span><i class="ti ti-arrow-up-right chip-arrow" aria-hidden="true"></i>
  </button>
`).join("");function A(){const t=e.search.trim().toLocaleLowerCase();return v.filter(a=>{const s=u.find(o=>o.id===a.capability),n=!e.capability||a.capability===e.capability,i=!e.application||a.application===e.application,c=`${a.title} ${(s==null?void 0:s.title)||""} ${a.focus} ${a.practice}`.toLocaleLowerCase();return n&&i&&(!t||c.includes(t))})}function d(){var s,n;const t=A(),a=[];e.capability&&a.push(((s=u.find(i=>i.id===e.capability))==null?void 0:s.title)||"能力分類"),e.application&&a.push(((n=h.find(i=>i.id===e.application))==null?void 0:n.title)||"事業應用"),e.search&&a.push(`搜尋：${e.search}`),S.innerHTML=`
    <span>目前顯示 <strong>${t.length}</strong> 堂課</span>
    ${a.length?`<span class="active-filters">${a.map(i=>`<em>${i}</em>`).join("")}</span><button class="clear-filters" type="button">清除篩選</button>`:'<span class="all-courses-label">全部課程</span>'}
  `,L.innerHTML=g.map(i=>{const c=t.filter(o=>o.stage===i.id);return`
      <section class="stage-column stage-${i.id} ${c.length?"":"is-empty"}" aria-labelledby="stage-${i.id}-title">
        <div class="stage-header">
          <div class="stage-number">${i.id}</div>
          <div class="stage-title-wrap"><h3 id="stage-${i.id}-title">${i.label} <span>| ${i.name}</span></h3><p>${i.strapline}</p></div>
          <span class="stage-count">${c.length} 堂</span>
        </div>
        <div class="course-list">
          ${c.map(o=>{const b=u.find(m=>m.id===o.capability),r=h.find(m=>m.id===o.application);return`
              <details class="course-item">
                <summary>
                  <span class="course-number">${o.number}</span>
                  <span class="course-title">${o.title}<small>${(b==null?void 0:b.title)||""}</small></span>
                  <i class="ti ti-chevron-down course-chevron" aria-hidden="true"></i>
                </summary>
                <div class="course-detail">
                  <span class="application-tag"><i class="ti ${(r==null?void 0:r.icon)||"ti-compass"}" aria-hidden="true"></i>${(r==null?void 0:r.title)||"事業應用"}</span>
                  <p><strong>課程重點</strong>${o.focus}</p>
                  <p><strong>練習方向</strong>${o.practice}</p>
                </div>
              </details>
            `}).join("")||'<p class="stage-empty">目前篩選條件沒有這一階的課程</p>'}
        </div>
      </section>
    `}).join(""),E.hidden=t.length>0,document.querySelectorAll(".clear-filters").forEach(i=>i.addEventListener("click",k))}function p(t,a,s){document.querySelectorAll(t).forEach(n=>{const i=n.getAttribute(a)===s&&s!=="";n.classList.toggle("is-active",i),n.setAttribute("aria-pressed",String(i))})}function k(){e.capability="",e.application="",e.search="",l.value="",p("[data-capability]","data-capability",""),p("[data-application]","data-application",""),d()}f.addEventListener("click",t=>{const a=t.target.closest("[data-capability]");if(!a)return;const s=a.dataset.capability;e.capability=e.capability===s?"":s,e.application="",p("[data-capability]","data-capability",e.capability),p("[data-application]","data-application",""),d(),document.querySelector("#courses").scrollIntoView({behavior:"smooth",block:"start"})});y.addEventListener("click",t=>{const a=t.target.closest("[data-application]");if(!a)return;const s=a.dataset.application;e.application=e.application===s?"":s,e.capability="",p("[data-application]","data-application",e.application),p("[data-capability]","data-capability",""),d(),document.querySelector("#courses").scrollIntoView({behavior:"smooth",block:"start"})});l.addEventListener("input",()=>{e.search=l.value,d()});document.addEventListener("keydown",t=>{t.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)&&(t.preventDefault(),l.focus()),t.key==="Escape"&&document.activeElement===l&&(l.value="",e.search="",d())});d();
