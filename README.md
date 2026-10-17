# 卓越實戰營｜課程學習工作站

這份 ZIP 解壓縮後，根目錄就是可直接發布到 GitHub Pages 的靜態網站；`source/` 資料夾附有可編輯原始碼。

## 發布到 GitHub Pages

1. 解壓縮 ZIP。
2. 把解壓縮後的所有檔案上傳到 GitHub repository 根目錄，確認 `index.html`、`abilities.html`、`applications.html` 都在根目錄。
3. 前往 **Settings → Pages**，選擇 **Deploy from a branch**，設定預設分支（例如 `main`）與資料夾 **/(root)**，按 **Save**。
4. GitHub Pages 完成部署後，從 Pages 設定頁開啟網站。

根目錄包含已建置完成的頁面、圖片、Tabler 圖示字型與程式檔；第一次發布不需要安裝 Node.js 或重新建置。中文字體會載入 Noto Sans TC／Noto Serif TC，無法載入時會使用系統備援字體。

## 網站頁面

- `index.html`：課程總覽。列出三階全部 20 個主題，可搜尋課程，點開項目查看課程重點與練習方向。
- `abilities.html`：六大能力對應課程，依一階、二階、三階標示。
- `applications.html`：四種事業情境對應課程，直接列出課程主題。

一般課程文字已調整至約 16px，補充說明約 14–15px，並有手機版單欄版面。

## 編輯與重新建置

`source/` 是 Vite 原始碼專案。課程與對應分類在 `source/src/course-data.js`，頁面互動在 `source/src/main.js`，樣式在 `source/src/styles.css`。

```bash
cd source
npm install
npm run build
```

重新建置後，把 `source/dist/` 內所有檔案複製到 repository 根目錄，再提交更新即可。本網站是靜態網站，不需要後端或登入。

## 課程對應說明

六大能力與事業應用頁依網站提供的課程對應清單整理。首頁保留 20 個獨立課程主題；清單中的「3分鐘公司及事業分享」在兩個對應頁合併呈現，分別對應首頁的「三分鐘公司介紹」與「三分鐘事業分享」。
