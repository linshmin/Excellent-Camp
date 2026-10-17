const STAGES = [
  {id:"一階", number:"LEVEL 01", title:"基礎建立", description:"認識事業、建立觀念、掌握基本功。", color:"#43836a", hint:"建立個人基本功"},
  {id:"二階", number:"LEVEL 02", title:"實戰提升", description:"建立信任、強化體驗、整合服務。", color:"#3978a8", hint:"強化互動與服務"},
  {id:"三階", number:"LEVEL 03", title:"事業拓展", description:"拓展客源、整合事業方法、發展團隊。", color:"#b58b42", hint:"拓展市場與組織"}
];
const CAPABILITY_META = [
  {name:"事業認知與經營心態",icon:"✧",description:"理解事業、建立觀念，培養持續行動的基礎。"},
  {name:"產品知識與專業服務",icon:"◈",description:"掌握正式產品資訊，理解服務流程與專業溝通。"},
  {name:"表達、見證與銷售",icon:"↗",description:"練習自我介紹、產品說明、見證分享與短講。"},
  {name:"客戶開發與邀約",icon:"⌖",description:"從名單整理、邀約到陌生開發，拓展互動機會。"},
  {name:"事業運作與服務系統",icon:"⟳",description:"理解3S與家庭聚會等事業運作方法。"},
  {name:"組織運作與團隊管理",icon:"◎",description:"從個人執行走向夥伴陪練、合作與團隊帶領。"}
];
const APPLICATIONS = [
  {id:"sales",label:"銷售與客戶溝通",icon:"↗",description:"從產品理解、表達、見證到客戶溝通。",category:["表達、見證與銷售","產品知識與專業服務"],stages:["一階","二階","三階"]},
  {id:"market",label:"市場開發與邀約",icon:"⌖",description:"從名單、邀約、初次互動到陌生開發。",category:["客戶開發與邀約","表達、見證與銷售"],stages:["一階","二階","三階"]},
  {id:"service",label:"客戶服務與持續經營",icon:"⟳",description:"從產品維護、體驗服務到持續追蹤。",category:["產品知識與專業服務","事業運作與服務系統"],stages:["一階","二階","三階"]},
  {id:"organization",label:"組織發展與團隊管理",icon:"◎",description:"從個人能力、示範演練到團隊帶領。",category:["事業認知與經營心態","組織運作與團隊管理","事業運作與服務系統"],stages:["一階","二階","三階"]}
];
let allCourses = [];
let selectedStage = "";
let selectedCategory = "";
let selectedApplication = "sales";
let currentPage = "courses";
let selectedCapability = "";
const $ = (selector) => document.querySelector(selector);
const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const stageClass = (stage) => stage === "二階" ? "stage-two" : stage === "三階" ? "stage-three" : "";
const statusTag = (status) => `<span class="status-label">${esc(status || "建議補充")}</span>`;

async function init(){
  try {
    const response = await fetch("data/courses.json");
    if(!response.ok) throw new Error("課程資料讀取失敗");
    const data = await response.json();
    allCourses = data.courses || [];
    renderStageCards();
    renderCategoryOptions(data.categories || []);
    renderCapabilities(data.categories || []);
    renderApplicationTabs();
    renderCourses();
    renderApplicationPanel();
    bindEvents();
    showPage((location.hash === "#capabilities" ? "capabilities" : location.hash === "#application-paths" ? "applications" : "courses"), false);
  } catch(error) {
    $("#resultCount").textContent = "課程資料載入失敗";
    $("#courseGrid").innerHTML = `<div class="empty-state"><h3>無法載入課程資料</h3><p>請確認網站根目錄有 data/courses.json，並透過 GitHub Pages 或本機伺服器開啟。</p></div>`;
    console.error(error);
  }
}
function renderStageCards(){
  $("#stageCards").innerHTML = STAGES.map(stage => {
    const count = allCourses.filter(c => c.stage === stage.id).length;
    return `<button type="button" class="stage-card ${selectedStage===stage.id?"active":""}" style="--stage:${stage.color}" data-stage="${stage.id}" aria-pressed="${selectedStage===stage.id}">
      <div class="stage-top"><span class="stage-number">${stage.number}</span><span class="stage-count">${count} 堂課</span></div>
      <h3>${stage.id}・${stage.title}</h3><p>${stage.description}</p><span class="stage-arrow" aria-hidden="true">↗</span>
    </button>`;
  }).join("");
}
function renderCategoryOptions(categories){
  $("#categoryFilter").innerHTML = `<option value="">所有能力分類</option>` + categories.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join("");
}
function renderCourses(){
  const q = $("#searchInput").value.trim().toLowerCase();
  const list = allCourses.filter(c => {
    const searchable = [c.title,c.category,c.stage,...(c.skills||[]),c.learningPurpose?.text,c.expectedAbility?.text].join(" ").toLowerCase();
    return (!selectedStage || c.stage===selectedStage) && (!selectedCategory || c.category===selectedCategory) && (!q || searchable.includes(q));
  });
  $("#resultCount").textContent = `顯示 ${list.length} / ${allCourses.length} 堂課程`;
  $("#courseGrid").innerHTML = list.map(c=>`
    <button type="button" class="course-card" data-course="${c.id}">
      <div class="card-meta"><span class="stage-pill ${stageClass(c.stage)}">${c.stage} · ${STAGES.find(s=>s.id===c.stage)?.title || ""}</span><span class="category-pill">${esc(c.category)}</span></div>
      <h3>${esc(c.title)}</h3>
      <div class="card-bottom"><span>${esc((c.skills||[]).slice(0,2).join(" · "))}</span><span aria-hidden="true">↗</span></div>
    </button>`).join("");
  $("#emptyState").classList.toggle("hidden",list.length>0);
  $("#courseGrid").classList.toggle("hidden",list.length===0);
  $("#stageCards").querySelectorAll(".stage-card").forEach(btn=>{btn.classList.toggle("active",btn.dataset.stage===selectedStage);btn.setAttribute("aria-pressed",String(btn.dataset.stage===selectedStage));});
}
function renderCapabilities(categories){
  $("#capabilityGrid").innerHTML = CAPABILITY_META.map((cap,i)=>{
    const count=allCourses.filter(c=>c.category===cap.name).length;
    return `<button type="button" class="capability-card" data-capability="${esc(cap.name)}"><span class="capability-icon" aria-hidden="true">${cap.icon}</span><span><h3>${esc(cap.name)}</h3><p>${esc(cap.description)}</p><span class="cap-count">${count} 堂主要對應課程 · 點擊查看 →</span></span></button>`;
  }).join("");
}
function renderCapabilityDetail(name){
  selectedCapability = name;
  const cap = CAPABILITY_META.find(item=>item.name===name);
  if(!cap) { $("#capabilityDetail").classList.add("hidden"); return; }
  const matched = allCourses.filter(c=>c.category===name || (c.skills||[]).includes(name));
  $("#capabilityDetail").innerHTML = `<div class="capability-detail-heading"><div><p class="eyebrow">CAPABILITY DETAIL</p><h3>${esc(cap.name)}</h3><p>${esc(cap.description)}</p></div><button type="button" class="reset-button" id="clearCapabilityDetail">清除選擇 ×</button></div><p class="capability-detail-intro">以下為與此能力相關的課程：</p><div class="path-courses">${matched.length ? matched.map((c,i)=>`<button type="button" class="path-course" data-course="${c.id}"><span class="path-number">${String(i+1).padStart(2,"0")}</span><strong>${esc(c.title)}</strong><span class="path-arrow" aria-hidden="true">↗</span></button>`).join("") : `<p class="capability-empty">目前沒有直接對應的課程資料，可依正式教材再補充關聯。</p>`}</div>`;
  $("#capabilityDetail").classList.remove("hidden");
  $("#capabilityGrid").querySelectorAll("[data-capability]").forEach(btn=>btn.classList.toggle("active",btn.dataset.capability===name));
}
function showPage(page, updateHash=true){
  currentPage = page;
  const pageClass = page === "capabilities" ? "page-capabilities" : page === "applications" ? "page-applications" : "page-courses";
  document.querySelectorAll("main > .page-section").forEach(section=>section.classList.toggle("hidden", !section.classList.contains(pageClass)));
  $("#courseDetailView").classList.add("hidden");
  $(".top-nav").classList.remove("hidden");
  $(".site-footer").classList.remove("hidden");
  document.querySelectorAll(".top-nav [data-page]").forEach(link=>{
    const active = link.dataset.page===page;
    link.classList.toggle("active",active);
    if(active) link.setAttribute("aria-current","page"); else link.removeAttribute("aria-current");
  });
  if(updateHash){
    const hash = page === "capabilities" ? "#capabilities" : page === "applications" ? "#application-paths" : "#learning-map";
    history.replaceState(null,"",hash);
  }
  window.scrollTo({top:0,behavior:"smooth"});
}
function renderApplicationTabs(){
  $("#applicationTabs").innerHTML = APPLICATIONS.map(app=>`<button type="button" role="tab" aria-selected="${selectedApplication===app.id}" class="application-tab ${selectedApplication===app.id?"active":""}" data-app="${app.id}"><span aria-hidden="true">${app.icon}</span>${esc(app.label)}</button>`).join("");
}
function renderApplicationPanel(){
  const app=APPLICATIONS.find(a=>a.id===selectedApplication)||APPLICATIONS[0];
  let matched=allCourses.filter(c=>app.category.includes(c.category));
  if(app.id==="sales") matched=allCourses.filter(c=>["三分鐘產品介紹","抗菌系列產品與銷售話術","體雕衣系列及銷售話術","見證分享破冰技巧","三分鐘演練","3分鐘公司及事業分享"].includes(c.title));
  if(app.id==="market") matched=allCourses.filter(c=>["邀約與列名單","見證分享破冰技巧","家庭聚會運作(啟動HP)","銷售的最高殿堂-陌生開發","3分鐘公司及事業分享"].includes(c.title));
  if(app.id==="service") matched=allCourses.filter(c=>["產品維護及管理","結合AI的拍背判背技巧","家庭聚會運作(啟動HP)","啟動事業的關鍵 3S"].includes(c.title));
  if(app.id==="organization") matched=allCourses.filter(c=>["從會做，到做大","啟動事業的關鍵 3S","一分鐘演練(自我介紹 產品 見證 公司 事業 五選一)","組織運作與團隊管理","事業經營的正確觀念與態度"].includes(c.title));
  $("#applicationPanel").innerHTML=`<p class="eyebrow">SUGGESTED LEARNING PATH</p><h3>${esc(app.label)}</h3><p>${esc(app.description)}以下為依課程名稱與初步分類整理的建議課程，實際順序可依教材與學員需求調整。</p><div class="path-courses">${matched.map((c,i)=>`<button type="button" class="path-course" data-course="${c.id}"><span class="path-number">${String(i+1).padStart(2,"0")}</span><strong>${esc(c.title)}</strong><span class="path-arrow" aria-hidden="true">↗</span></button>`).join("")}</div>`;
}
function openCourse(id){
  const c=allCourses.find(course=>course.id===id); if(!c) return;
  const app=c.applications||{};
  const sections=[
    ["01","學習目的",c.learningPurpose?.text,c.learningPurpose?.status],
    ["02","預期學會的能力",c.expectedAbility?.text,c.expectedAbility?.status],
    ["03","銷售與客戶溝通",app.sales?.text,app.sales?.status],
    ["04","市場開發與邀約",app.market?.text,app.market?.status],
    ["05","組織發展與團隊管理",app.organization?.text,app.organization?.status],
    ["06","建議實際練習",c.practice?.text,c.practice?.status]
  ];
  $("#detailViewContent").innerHTML=`<div class="dialog-content-inner course-detail-inner">
    <p class="eyebrow">COURSE DETAIL / ${esc(c.id)}</p><span class="stage-pill ${stageClass(c.stage)}">${esc(c.stage)} · ${esc(STAGES.find(s=>s.id===c.stage)?.title||"")}</span><h2>${esc(c.title)}</h2><p class="dialog-category">${esc(c.category)}　·　${esc((c.skills||[]).join(" / "))}</p>
    <div class="source-notice"><strong>內容來源說明</strong><br>課程名稱依提供的原始課程清單整理；下方學習目的、能力與應用內容目前均為「建議補充」，尚待依正式教材審閱確認。</div>
    ${sections.map(([n,title,text,status])=>`<section class="detail-section"><h3><span class="detail-index">${n}</span>${esc(title)}${statusTag(status)}</h3><p>${esc(text||"待依正式教材補充。")}</p></section>`).join("")}
    <section class="detail-section"><h3><span class="detail-index">07</span>學習成果自我檢核${statusTag(c.selfCheck?.status)}</h3><div class="check-list">${(c.selfCheck?.items||[]).map((item,i)=>`<label><input type="checkbox" aria-label="${esc(item)}"> <span>${esc(item)}</span></label>`).join("")}</div><p style="font-size:10px;color:#8a958d;margin-top:10px">此檢核僅在目前瀏覽器頁面暫時生效，重新載入後不會保存。</p></section>
    <section class="detail-section"><h3><span class="detail-index">08</span>建議關聯能力</h3><div class="dialog-related">${(c.skills||[]).map(skill=>`<span class="related-chip">${esc(skill)}</span>`).join("")}</div></section>
  </div>`;
  document.querySelectorAll("main > *").forEach(section=>section.classList.toggle("hidden",section.id!=="courseDetailView"));
  $("#courseDetailView").classList.remove("hidden");
  $(".top-nav").classList.add("hidden");
  $(".site-footer").classList.add("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
}
function closeCourse(){
  showPage(currentPage, false);
}
function bindEvents(){
  $("#stageCards").addEventListener("click",e=>{const b=e.target.closest("[data-stage]");if(!b)return;selectedStage=selectedStage===b.dataset.stage?"":b.dataset.stage;renderCourses();});
  $("#searchInput").addEventListener("input",renderCourses);
  $("#categoryFilter").addEventListener("change",e=>{selectedCategory=e.target.value;renderCourses();});
  $("#resetFilters").addEventListener("click",()=>{selectedStage="";selectedCategory="";$("#searchInput").value="";$("#categoryFilter").value="";renderCourses();});
  $("#courseGrid").addEventListener("click",e=>{const b=e.target.closest("[data-course]");if(b)openCourse(b.dataset.course);});
  $("#capabilityGrid").addEventListener("click",e=>{const b=e.target.closest("[data-capability]");if(!b)return;renderCapabilityDetail(b.dataset.capability);});
  $("#capabilityDetail").addEventListener("click",e=>{const course=e.target.closest("[data-course]");if(course){openCourse(course.dataset.course);return;}if(e.target.closest("#clearCapabilityDetail")){selectedCapability="";$("#capabilityDetail").classList.add("hidden");$("#capabilityGrid").querySelectorAll("[data-capability]").forEach(btn=>btn.classList.remove("active"));}});
  $(".top-nav").addEventListener("click",e=>{const link=e.target.closest("[data-page]");if(!link)return;e.preventDefault();showPage(link.dataset.page);});
  document.querySelectorAll("[data-page]").forEach(link=>{if(link.closest(".top-nav"))return;link.addEventListener("click",e=>{e.preventDefault();showPage(link.dataset.page);});});
  $("#applicationTabs").addEventListener("click",e=>{const b=e.target.closest("[data-app]");if(!b)return;selectedApplication=b.dataset.app;renderApplicationTabs();renderApplicationPanel();});
  $("#applicationPanel").addEventListener("click",e=>{const b=e.target.closest("[data-course]");if(b)openCourse(b.dataset.course);});
  $("#backToCourses").addEventListener("click",closeCourse);
  window.addEventListener("hashchange",()=>{const hash=location.hash;showPage(hash==="#capabilities"?"capabilities":hash==="#application-paths"?"applications":"courses",false);});
  document.addEventListener("keydown",e=>{if(e.key==="/" && !["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)){e.preventDefault();if(currentPage==="courses")$("#searchInput").focus();}});
}
init();
