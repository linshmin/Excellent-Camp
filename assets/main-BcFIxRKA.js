(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))p(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&p(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function p(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();const I=[{id:"mindset",title:"事業認知與經營心態",icon:"ti-bulb",short:"建立方向、信念與持續行動"},{id:"service",title:"產品知識與專業服務",icon:"ti-package",short:"理解產品並提供專業服務"},{id:"communication",title:"表達、見證與銷售",icon:"ti-message-circle",short:"清楚分享，讓價值被理解"},{id:"customer",title:"客戶開發與邀約",icon:"ti-user-search",short:"拓展市場，開啟客戶對話"},{id:"operations",title:"事業運作與服務系統",icon:"ti-settings",short:"建立服務流程與事業節奏"},{id:"leadership",title:"組織運作與團隊管理",icon:"ti-chart-bar",short:"帶領夥伴，發展團隊"}],w=[{id:"sales",title:"銷售與客戶溝通",icon:"ti-message-circle",description:"需要介紹產品、分享見證或與客戶溝通時。"},{id:"market",title:"市場開發與邀約",icon:"ti-user-search",description:"需要開發新市場、邀約客戶或介紹事業時。"},{id:"service",title:"客戶服務與持續經營",icon:"ti-heart-handshake",description:"需要服務客戶、維護產品關係或建立服務節奏時。"},{id:"team",title:"組織發展與團隊管理",icon:"ti-hierarchy-3",description:"需要培育夥伴、發展組織或帶領團隊時。"}],h=[{id:1,label:"一階",name:"自己會做",strapline:"打好基礎，建立正確觀念與基本能力"},{id:2,label:"二階",name:"一起做",strapline:"強化實戰，學會運用並開始複製"},{id:3,label:"三階",name:"帶夥伴做",strapline:"放大格局，帶領團隊創造更大影響力"}],g=[{number:"01",stage:1,title:"認識事業及應具備的能力",focus:"認識事業角色與經營所需能力，串連分享、服務與追蹤。",practice:"盤點自己的優勢與待加強能力，完成一份 90 天行動計畫。"},{number:"02",stage:1,title:"事業經營的正確觀念與態度",focus:"主動行動、從拒絕中學習，辨識新手誤區並盤點經營能力。",practice:"完成能力盤點，和夥伴分享一項優勢與一項改善行動。"},{number:"03",stage:1,title:"三分鐘自我介紹",focus:"我是誰 → 人生故事 → 遇見蓓姿媞 → 改變與成長 → 未來願景。",practice:"完成三分鐘分享，練習讓故事自然連結到個人改變與願景。"},{number:"04",stage:1,title:"三分鐘產品介紹",focus:"從客戶問題開始，說明產品特色、見證與體驗邀請。",practice:"依照課程的時間分段，練習介紹一項產品並邀請對方體驗。"},{number:"05",stage:1,title:"邀約與列名單",focus:"邀約四步驟、A／B／C 名單、FORMHD 對話與 45 天追蹤。",practice:"整理一份名單，寫下一則邀約內容與後續行動日期。"},{number:"06",stage:1,title:"抗菌系列產品與銷售話術",focus:"認識抗菌系列產品，依客戶需求說明產品特色與價值。",practice:"練習先了解需求，再連結產品特色、案例與體驗邀請。"},{number:"07",stage:1,title:"產品維護及管理",focus:"掌握進貨、先進先出、分類標示、試穿後整理與定期檢查。",practice:"用庫存清單演練商品整理、出入順序與檢查流程。"},{number:"08",stage:2,title:"相信的力量",focus:"從理解、實踐與驗證建立信念，涵蓋自己、產品、系統與夥伴。",practice:"回顧一項親身經驗，整理成可持續執行的行動承諾。"},{number:"09",stage:2,title:"見證分享破冰技巧",focus:"先聽對方說，再接住對方的話，連結自己的經驗與見證。",practice:"兩人一組練習破冰、分享見證與給予具體回饋。"},{number:"10",stage:2,title:"三分鐘演練",focus:"學員親自上場練習自我介紹與產品分享；重點在演練，簡報是輔助。",practice:"輪流上台演練、收到回饋，再調整表達方式重練。"},{number:"11",stage:2,title:"體雕衣系列及銷售話術",focus:"以問、聽、選、說、約了解需求，推薦合適款式並邀請體驗。",practice:"練習依對方需求選擇產品，說明推薦理由並安排體驗。"},{number:"12",stage:2,title:"結合AI的拍背判背技巧",focus:"練習拍攝準備、角度、照片比對與現場服務協助。",practice:"使用示意素材練習流程；實際客戶影像須先取得同意並妥善管理。"},{number:"13",stage:2,title:"家庭聚會運作（啟動HP）",focus:"由主人、主持人、分享者與協助者分工，完成接待、分享、體驗與交流。",practice:"依邀請、認識、主題分享、產品體驗、問題交流五步驟排練。"},{number:"14",stage:3,title:"從會做，到做大",focus:"看見時間、暴富、消費與偽自由的陷阱，從個人成功走向團隊成功。",practice:"設定每月新客戶、新夥伴與分享／家庭聚會三項行動。"},{number:"15",stage:3,title:"銷售的最高殿堂－陌生開發",focus:"掌握高層次銷售思維與陌生開發，設定目標並追蹤人、進度與成果。",practice:"用每週行動表檢視陌生開發、客戶溝通、後續追蹤與服務。"},{number:"16",stage:3,title:"啟動事業的關鍵3S",focus:"透過 Share、Sponsor、Service 建立分享、培育與服務的事業節奏。",practice:"檢視小組現況，選定一項 3S 行動並約定追蹤方式。"},{number:"17",stage:3,title:"三分鐘公司介紹",focus:"用清楚架構介紹公司、市場、產品、實力、教育與願景。",practice:"整理一段三分鐘公司分享，讓對方聽懂公司特色與價值。"},{number:"18",stage:3,title:"三分鐘事業分享",focus:"分享健康產業與事業培育系統，說明機會並邀請對方深入了解。",practice:"練習從對方需求出發，完成事業分享與下一步邀請。"},{number:"19",stage:3,title:"一分鐘演練（五選一）",focus:"每位學員拿麥克風，從自我介紹、產品、見證、公司、事業五選一。",practice:"上台完成一分鐘分享；不預設未確認的評分規則。"},{number:"20",stage:3,title:"組織運作與團隊管理",focus:"角色轉換、行動數字、回報、固定交流、授權與團隊自主運作。",practice:"設計一週團隊節奏，安排關懷、肯定、輔導與行動回顧。"}],e=(n,i,r="")=>({numbers:[n],label:i,note:r}),v=(n,i,r)=>({numbers:n,label:i,note:r}),E=[{capabilityId:"mindset",items:[e("01","認識事業及應具備的能力"),e("02","事業經營的正確觀念與態度"),e("08","相信的力量"),e("14","從會做，到做大")]},{capabilityId:"service",items:[e("04","三分鐘產品介紹"),e("06","抗菌系列產品與銷售話術"),e("07","產品維護及管理"),e("11","體雕衣系列及銷售話術"),e("12","結合AI的拍背判背技巧")]},{capabilityId:"communication",items:[e("03","三分鐘自我介紹"),e("04","三分鐘產品介紹"),e("09","見證分享破冰技巧"),e("10","三分鐘演練"),v(["17","18"],"3分鐘公司及事業分享","對應首頁的「三分鐘公司介紹」與「三分鐘事業分享」兩個課程主題"),e("19","一分鐘演練（五選一）")]},{capabilityId:"customer",items:[e("05","邀約與列名單"),e("15","銷售的最高殿堂－陌生開發")]},{capabilityId:"operations",items:[e("13","家庭聚會運作（啟動HP）"),e("16","啟動事業的關鍵3S")]},{capabilityId:"leadership",items:[e("20","組織運作與團隊管理")]}],L=[{applicationId:"sales",items:[e("04","三分鐘產品介紹"),e("06","抗菌系列產品與銷售話術"),e("09","見證分享破冰技巧"),e("11","體雕衣系列及銷售話術")]},{applicationId:"market",items:[e("05","邀約與列名單"),e("03","三分鐘自我介紹"),e("15","銷售的最高殿堂－陌生開發"),v(["17","18"],"3分鐘公司及事業分享","對應首頁的「三分鐘公司介紹」與「三分鐘事業分享」兩個課程主題")]},{applicationId:"service",items:[e("07","產品維護及管理"),e("12","結合AI的拍背判背技巧"),e("13","家庭聚會運作（啟動HP）"),e("16","啟動事業的關鍵3S")]},{applicationId:"team",items:[e("08","相信的力量"),e("10","三分鐘演練"),e("14","從會做，到做大"),e("16","啟動事業的關鍵3S"),e("20","組織運作與團隊管理")]}],$=document.querySelector("#app"),m=document.body.dataset.page||"overview";function y(n){return`
    <header class="site-header">
      <a class="brand" href="./index.html#top" aria-label="回到課程總覽">課程學習工作站</a>
      <nav class="main-nav" aria-label="主選單">
        ${[{id:"overview",label:"課程總覽",href:"./index.html"},{id:"abilities",label:"六大能力",href:"./abilities.html"},{id:"applications",label:"事業應用",href:"./applications.html"}].map(r=>`<a href="${r.href}" ${n===r.id?'aria-current="page"':""}>${r.label}</a>`).join("")}
      </nav>
      <a class="header-cta" href="./index.html#courses">開始找課 <i class="ti ti-arrow-down-right" aria-hidden="true"></i></a>
    </header>
  `}function S(){return`
    <footer class="site-footer">
      <div class="footer-mark"><i class="ti ti-compass" aria-hidden="true"></i></div>
      <div>
        <strong>從學習到應用，串起能力，創造事業藍圖</strong>
        <p>卓越實戰營｜課程學習工作站</p>
      </div>
      <a href="./index.html#courses" class="back-top">回課程總覽 <i class="ti ti-arrow-up-right" aria-hidden="true"></i></a>
    </footer>
  `}function k(){$.innerHTML=`
    ${y("overview")}
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
    ${S()}
  `;const n=document.querySelector("#stage-grid"),i=document.querySelector("#course-search"),r=document.querySelector("#filter-status"),p=document.querySelector("#empty-state");function s(){const t=i.value.trim().toLocaleLowerCase(),o=g.filter(c=>{const a=h.find(d=>d.id===c.stage),l=`${c.title} ${(a==null?void 0:a.label)||""} ${(a==null?void 0:a.name)||""} ${c.focus} ${c.practice}`.toLocaleLowerCase();return!t||l.includes(t)});r.innerHTML=`<span>目前顯示 <strong>${o.length}</strong> / ${g.length} 堂課</span>${t?`<span class="active-filter">搜尋：${i.value}</span><button class="clear-search" type="button">清除搜尋</button>`:'<span class="all-courses-label">全部課程</span>'}`,n.innerHTML=h.map(c=>{const a=o.filter(l=>l.stage===c.id);return`
        <section class="stage-column stage-${c.id}" aria-labelledby="stage-${c.id}-title">
          <div class="stage-header">
            <div class="stage-number">${c.id}</div>
            <div class="stage-title-wrap"><h3 id="stage-${c.id}-title">${c.label} <span>｜${c.name}</span></h3><p>${c.strapline}</p></div>
            <span class="stage-count">${a.length} 堂</span>
          </div>
          <div class="course-list">
            ${a.length?a.map(l=>`
              <details class="course-item">
                <summary>
                  <span class="course-number">${l.number}</span>
                  <span class="course-title">${l.title}</span>
                  <i class="ti ti-chevron-down course-chevron" aria-hidden="true"></i>
                </summary>
                <div class="course-detail">
                  <p><strong>課程重點</strong>${l.focus}</p>
                  <p><strong>練習方向</strong>${l.practice}</p>
                </div>
              </details>
            `).join(""):'<p class="stage-empty">這個階段沒有符合的課程。</p>'}
          </div>
        </section>
      `}).join(""),p.hidden=o.length>0}r.addEventListener("click",t=>{t.target.closest(".clear-search")&&(i.value="",i.focus(),s())}),i.addEventListener("input",s),document.addEventListener("keydown",t=>{t.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)&&(t.preventDefault(),i.focus()),t.key==="Escape"&&document.activeElement===i&&(i.value="",s())}),s()}function C(n,i,r){const p=n.items,s=new Map(I.map(a=>[a.id,a])),t=new Map(w.map(a=>[a.id,a])),o=r==="abilities"?s.get(n.capabilityId):t.get(n.applicationId),c=r==="abilities"?`ABILITY ${String(i+1).padStart(2,"0")}`:`BUSINESS CASE ${String(i+1).padStart(2,"0")}`;return`
    <article class="mapping-card">
      <header class="mapping-card-head">
        <span class="mapping-icon"><i class="ti ${o.icon}" aria-hidden="true"></i></span>
        <div class="mapping-card-title">
          <p class="mapping-kicker">${c}</p>
          <h2>${o.title}</h2>
          ${o.description?`<p class="mapping-description">${o.description}</p>`:`<p class="mapping-description">${o.short}</p>`}
        </div>
      </header>
      <ul class="mapping-course-list">
        ${p.map(a=>{const l=g.filter(u=>a.numbers.includes(u.number)),d=h.find(u=>{var b;return u.id===((b=l[0])==null?void 0:b.stage)}),f=a.note||(l.length>1?`課程總覽：${l.map(u=>u.title).join("、")}`:"");return`
            <li class="mapping-course-item">
              <span class="stage-badge stage-${(d==null?void 0:d.id)||1}">${(d==null?void 0:d.label)||""}</span>
              <span class="mapping-course-copy"><strong>${a.label}</strong>${f?`<small>${f}</small>`:""}</span>
            </li>
          `}).join("")}
      </ul>
    </article>
  `}function A(n){const i=n==="abilities",r=i?"六大能力對應課程":"依事業情境找課程",p=i?"從想培養的能力出發，快速查看一階、二階與三階的對應主題。":"從眼前遇到的事業情境出發，直接查看推薦課程，不必再點開課程卡片。",s=i?"COURSE BY CAPABILITY":"COURSE BY BUSINESS SCENARIO",t=i?E:L;$.innerHTML=`
    ${y(n)}
    <main id="top">
      <section class="page-hero ${i?"ability-hero":"application-hero"}">
        <p class="eyebrow">${s}</p>
        <h1>${r}</h1>
        <p class="page-hero-description">${p}</p>
        <a class="hero-link" href="./index.html#courses">返回課程總覽 <i class="ti ti-arrow-right" aria-hidden="true"></i></a>
      </section>
      <section class="section mapping-section" aria-labelledby="mapping-title">
        <div class="section-heading">
          <div>
            <p class="section-kicker">${i?"SIX CAPABILITIES":"FOUR BUSINESS SCENARIOS"}</p>
            <h2 id="mapping-title">${i?"六大能力與對應主題":"遇到情境，就從這裡開始"}</h2>
          </div>
          <p class="section-intro">課程階段以標籤標示；本頁直接列出對應課程。</p>
        </div>
        <div class="mapping-grid ${i?"six-mapping":"four-mapping"}">
          ${t.map((o,c)=>C(o,c,n)).join("")}
        </div>
        <p class="mapping-note">${i?"「3分鐘公司及事業分享」在課程總覽中保留為「三分鐘公司介紹」與「三分鐘事業分享」兩個主題。":"公司介紹與事業分享的對應，合併呈現為「3分鐘公司及事業分享」。"}</p>
      </section>
    </main>
    ${S()}
  `}m==="abilities"||m==="applications"?A(m):k();
