export const capabilities = [
  { id: 'mindset', title: '事業認知與經營心態', icon: 'ti-bulb', short: '認識方向，建立信念與行動' },
  { id: 'service', title: '產品知識與專業服務', icon: 'ti-package', short: '理解產品，提供專業體驗' },
  { id: 'communication', title: '表達、見證與銷售', icon: 'ti-message-circle', short: '清楚分享，讓價值被理解' },
  { id: 'customer', title: '客戶開發與邀約', icon: 'ti-user-search', short: '拓展名單，開啟真實對話' },
  { id: 'operations', title: '事業運作與服務系統', icon: 'ti-settings', short: '建立流程，讓服務持續發生' },
  { id: 'leadership', title: '組織運作與團隊管理', icon: 'ti-chart-bar', short: '帶領夥伴，複製團隊成果' },
];

export const applications = [
  { id: 'foundation', title: '建立事業基礎', icon: 'ti-compass' },
  { id: 'customer', title: '開發客戶與分享', icon: 'ti-users' },
  { id: 'product', title: '產品與專業服務', icon: 'ti-heart-handshake' },
  { id: 'team', title: '團隊管理與複製', icon: 'ti-hierarchy-3' },
];

export const stages = [
  {
    id: 1,
    label: '一階',
    name: '自己會做',
    strapline: '打好基礎，建立正確觀念與基本能力',
    tone: 'sage',
  },
  {
    id: 2,
    label: '二階',
    name: '一起做',
    strapline: '強化實戰，學會運用並開始複製',
    tone: 'gold',
  },
  {
    id: 3,
    label: '三階',
    name: '帶夥伴做',
    strapline: '放大格局，帶領團隊創造更大影響力',
    tone: 'forest',
  },
];

export const courses = [
  {
    number: '01', stage: 1, title: '認識蓓姿媞事業及應具備的能力', capability: 'mindset', application: 'foundation',
    focus: '五種事業角色、五項經營能力，將分享、服務與追蹤串成事業循環。',
    practice: '盤點自己的優勢與待加強能力，完成一份 90 天行動計畫。',
  },
  {
    number: '02', stage: 1, title: '事業經營的正確觀念與態度', capability: 'mindset', application: 'foundation',
    focus: '主動行動、從拒絕中學習，辨識新手誤區並盤點經營能力。',
    practice: '完成能力盤點，和夥伴分享一項優勢與一項改善行動。',
  },
  {
    number: '03', stage: 1, title: '三分鐘自我介紹', capability: 'communication', application: 'customer',
    focus: '我是誰 → 人生故事 → 遇見蓓姿媞 → 改變與成長 → 未來願景。',
    practice: '完成三分鐘分享，練習讓故事自然連結到個人改變與願景。',
  },
  {
    number: '04', stage: 1, title: '三分鐘產品介紹', capability: 'service', application: 'product',
    focus: '從客戶問題開始，說明產品特色、見證與體驗邀請。',
    practice: '依照課程的時間分段，練習介紹一項產品並邀請對方體驗。',
  },
  {
    number: '05', stage: 1, title: '邀約與列名單', capability: 'customer', application: 'customer',
    focus: '邀約四步驟、A／B／C 名單、FORMHD 對話與 45 天追蹤。',
    practice: '整理一份名單，寫下一則邀約內容與後續行動日期。',
  },
  {
    number: '06', stage: 1, title: '抗菌系列及銷售話術', capability: 'service', application: 'product',
    focus: '認識襪品、內著、護具與保健系列，依需求說明產品價值。',
    practice: '練習先了解需求，再連結產品特色、案例與體驗邀請。',
  },
  {
    number: '07', stage: 1, title: '產品維護與庫存管理', capability: 'operations', application: 'product',
    focus: '進貨原則、先進先出、分類標示、試穿後整理與定期檢查。',
    practice: '用庫存清單演練商品整理、出入順序與檢查流程。',
  },
  {
    number: '08', stage: 2, title: '相信的力量', capability: 'mindset', application: 'foundation',
    focus: '從理解、實踐與驗證建立信念，涵蓋自己、產品、系統與夥伴。',
    practice: '回顧一項親身經驗，整理成可持續執行的行動承諾。',
  },
  {
    number: '09', stage: 2, title: '見證分享與破冰技巧', capability: 'communication', application: 'customer',
    focus: '先聽對方說，再接住對方的話，連結自己的經驗與見證。',
    practice: '兩人一組練習破冰、分享見證與給予具體回饋。',
  },
  {
    number: '10', stage: 2, title: '三分鐘演練：自我介紹、產品', capability: 'communication', application: 'customer',
    focus: '學員親自上場練習自我介紹與產品分享；簡報是輔助。',
    practice: '輪流演練、收到回饋，再調整表達方式重練。',
  },
  {
    number: '11', stage: 2, title: '體雕衣系列及銷售話術', capability: 'service', application: 'product',
    focus: '以問、聽、選、說、約了解需求，推薦合適款式並邀請體驗。',
    practice: '練習依對方需求選擇產品，說明推薦理由並安排體驗。',
  },
  {
    number: '12', stage: 2, title: '結合 AI 的拍背判背技巧', capability: 'service', application: 'product',
    focus: '練習拍攝準備、角度、照片比對與現場服務協助。',
    practice: '使用示意素材練習流程；實際客戶影像須先取得同意並妥善管理。',
  },
  {
    number: '13', stage: 2, title: '家庭聚會運作（啟動 HP）', capability: 'operations', application: 'team',
    focus: '由主人、主持人、分享者與協助者分工，完成接待、分享、體驗與交流。',
    practice: '依邀請、認識、主題分享、產品體驗、問題交流五步驟排練。',
  },
  {
    number: '14', stage: 3, title: '從會做，到做大', capability: 'leadership', application: 'team',
    focus: '看見時間、暴富、消費與偽自由的陷阱，從個人成功走向團隊成功。',
    practice: '設定每月新客戶、新夥伴與分享／家庭聚會三項行動。',
  },
  {
    number: '15', stage: 3, title: '銷售最高殿堂', capability: 'leadership', application: 'team',
    focus: '經營個人狀態、辨識市場能量、設定目標，追蹤人、進度與成果。',
    practice: '以每週領導行動表檢視市場開發、銷售、聚會與售後跟進。',
  },
  {
    number: '16', stage: 3, title: '啟動事業的 3S', capability: 'operations', application: 'team',
    focus: '透過 Share、Sponsor、Service 建立分享、培育與服務的事業節奏。',
    practice: '檢視小組現況，選定一項 3S 行動並約定追蹤方式。',
  },
  {
    number: '17', stage: 3, title: '三分鐘公司介紹', capability: 'communication', application: 'customer',
    focus: '用清楚架構介紹公司、市場、產品、實力、教育與願景。',
    practice: '整理一段三分鐘公司分享，讓對方聽懂公司特色與價值。',
  },
  {
    number: '18', stage: 3, title: '三分鐘事業分享', capability: 'communication', application: 'customer',
    focus: '分享健康產業與事業培育系統，說明機會並邀請對方深入了解。',
    practice: '練習從對方需求出發，完成事業分享與下一步邀請。',
  },
  {
    number: '19', stage: 3, title: '一分鐘綜合演練', capability: 'communication', application: 'customer',
    focus: '每位學員拿麥克風，從自我介紹、產品、見證、公司、事業五選一。',
    practice: '上台完成一分鐘分享；本頁先不設定未確認的評分規則。',
  },
  {
    number: '20', stage: 3, title: '組織運作與團隊管理', capability: 'leadership', application: 'team',
    focus: '角色轉換、行動數字、回報、固定交流、授權與團隊自主運作。',
    practice: '設計一週團隊節奏，安排關懷、肯定、輔導與行動回顧。',
  },
];
