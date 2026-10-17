# 卓越實戰營｜課程學習工作站

這份 ZIP 解壓縮後，根目錄就是可直接發布到 GitHub Pages 的靜態網站；`source/` 資料夾附有可編輯原始碼。

## 快速發布到 GitHub Pages

1. 解壓縮 ZIP。
2. 把解壓縮後的**所有檔案**上傳到 GitHub repository 的根目錄（`index.html` 要直接在根目錄）。
3. 到 **Settings → Pages**，選擇 **Deploy from a branch**，設定你的預設分支（例如 `main`）與資料夾 **/(root)**，再按 **Save**。
4. 等 GitHub Pages 完成部署後，從 Pages 設定頁開啟網站。

根目錄已附上編譯好的 `index.html`、`assets/` 與 `.nojekyll`，第一次發布不需要安裝 Node.js 或重新建置。圖片、Tabler 圖示字型和程式檔都已包含在 ZIP 裡；中文字體會優先載入 Noto Sans TC / Noto Serif TC，無法連線時會使用裝置上的備援字體。

## 編輯課程內容或網站

`source/` 是 Vite 原始碼專案。修改 `source/src/course-data.js` 的課程與分類，或編輯 `source/src/main.js`、`source/src/styles.css` 後，在 `source/` 內執行：

```bash
npm install
npm run build
```

再把 `source/dist/` 內的檔案複製到 repository 根目錄，提交更新即可。課程搜尋、六大能力篩選、事業應用篩選和課程內容展開皆由靜態 JavaScript 運作，不需要後端或登入。

## 課程與分類

網站收錄 20 個課程主題，分為一階 7 堂、二階 6 堂、三階 7 堂。六大能力及四個事業應用入口是根據目前整理的課程資料編排；如需符合正式課綱命名，可直接修改 `source/src/course-data.js`。

目前清單與課程摘要請以正式課綱及原始簡報核對後再發布；先前資料摘要曾出現 19 堂與 20 堂兩種數字，第三階部分領導課程摘要也應對照原始教材確認。四個事業應用入口是初步分類，可依正式名稱調整。
