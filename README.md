# 卓越實戰營學習地圖（第一版）

一個可部署到 GitHub Pages 的繁體中文靜態網站。無需後端、無需登入、不保存個人學習紀錄。

## 功能
- 一階、二階、三階課程地圖
- 依課程名稱、能力分類與關鍵字搜尋
- 六大事業經營能力分類
- 依銷售、市場開發、客戶服務、組織管理情境找課程
- 點選課程查看學習目的、能力、應用建議與自我檢核
- 手機與桌面響應式版面

## 檔案結構
```text
excellent-training-camp-learning-map/
├── index.html
├── .nojekyll
├── css/style.css
├── js/app.js
└── data/courses.json
```

## 本機預覽
網站使用 `fetch()` 讀取 `data/courses.json`，請用本機 HTTP 伺服器預覽，不要直接雙擊 `index.html`。

若電腦已安裝 Python：
```bash
python -m http.server 8000
```
然後在瀏覽器開啟 `http://localhost:8000`。

## 部署到 GitHub Pages
1. 在 GitHub 建立一個新的 Repository，例如 `excellent-training-camp-learning-map`。
2. 將本資料夾內的所有檔案上傳至 Repository 根目錄。
3. 進入 Repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 中選擇 **Deploy from a branch**。
5. Branch 選 `main`，資料夾選 `/(root)`，按 **Save**。
6. 等待部署完成，再從 Pages 頁面開啟網站網址。

GitHub Pages 的專案網站網址通常會是：
`https://你的GitHub帳號.github.io/excellent-training-camp-learning-map/`

## 如何新增或修改課程
編輯 `data/courses.json` 的 `courses` 陣列。每堂課包含：
- `id`：唯一識別碼
- `stage`：一階、二階或三階
- `title`：原始課程名稱
- `category`：主要能力分類
- `skills`：關鍵能力標籤
- `learningPurpose`、`expectedAbility`：學習目的與能力描述
- `applications.sales`：銷售應用
- `applications.market`：市場開發應用
- `applications.organization`：組織應用
- `practice`、`selfCheck`：練習與自我檢核

## 內容治理原則
- 課程名稱依使用者提供的原始清單保留。
- 學習目的、能力、應用情境、練習及自我檢核目前皆標示為「建議補充」，需由課程負責人依正式教材審閱確認。
- 產品、AI評測與健康相關描述應以正式教材、核准產品資料及工具使用規範為準，避免誇大或將評測說成醫療診斷。
- 原始三階清單重複列出的「組織運作與團隊管理」在網站總覽只呈現一次，避免重複卡片；名稱本身未改寫。
- 課程詳情中的自我檢核不會儲存；重新載入頁面後會重設。

## 第一版限制
- 沒有登入、後端、資料庫、管理後台或跨裝置學習紀錄。
- 字體使用 Google Fonts；若無網路，會退回系統字體。


## 網站定位與品牌使用
- 網站名稱使用「卓越實戰營」及「Excellent Training Camp」。
- 本網站為學員學習整理用途，非任何公司官方網站或官方發布內容。
- 為避免將原始課程名稱中的公司名稱帶入網站，第一堂課顯示為「認識事業及應具備的能力」。
