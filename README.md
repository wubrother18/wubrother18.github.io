# WakuWaku Lab

一個使用 Next.js 14（App Router）+ TypeScript + Tailwind CSS 建置，支援靜態匯出的作品集網站範本。可直接部署到 GitHub Pages 或 Firebase Hosting。

## 技術棧
- Next.js 14（App Router）
- TypeScript
- Tailwind CSS
- 靜態匯出（`next export`）

## 專案結構
```
app/
  about/page.tsx
  contact/page.tsx
  layout.tsx
  page.tsx
  globals.css
components/
  Header.tsx
  Footer.tsx
public/
  app-ads.txt
  images/
    project1.png (請自行替換)
    project2.png (請自行替換)
    project3.png (請自行替換)
    og.png (請自行替換)
next.config.js
postcss.config.js
tailwind.config.js
tsconfig.json
```

## 本地開發
```bash
npm install
npm run dev
```
啟動後預設在 `http://localhost:3000`。

## 建置與靜態匯出
```bash
npm run build
npm run export
```
執行完成後會在 `out/` 目錄中產出可直接部署的靜態網站。

> 注意：範例圖片路徑為 `/public/images/`。目前僅放佔位檔案，請自行替換為實際圖片（`project1.png`、`project2.png`、`project3.png`、`og.png`）。

## 部署

### GitHub Pages
1. 將此專案推送到 GitHub。假設 repository 名稱為 `wakuwaku-lab`。
2. 在本機執行：
   ```bash
   npm run build && npm run export
   ```
3. 將 `out/` 目錄內容推送到 `gh-pages` 分支：
   ```bash
   git checkout --orphan gh-pages
   rm -rf *
   cp -r out/* .
   git add .
   git commit -m "Deploy"
   git push -u origin gh-pages --force
   ```
4. 到 GitHub 專案的 Settings → Pages，選擇 `gh-pages` 分支作為 Pages 來源。

或使用 GitHub Actions 自動化部署（可再加上 workflow）。

### Firebase Hosting
1. 安裝 Firebase CLI 並登入：
   ```bash
   npm install -g firebase-tools
   firebase login
   ```
2. 初始化（選擇 Hosting，public 目錄請填 `out`）：
   ```bash
   firebase init
   ```
3. 建置與匯出後部署：
   ```bash
   npm run build && npm run export
   firebase deploy
   ```

## SEO
- 已在 `app/layout.tsx` 設定 `metadata`（含 meta、Open Graph、Twitter）。
- 可替換 `openGraph.images` 與 `twitter.images` 的 `og.png`。

## 其他
- `public/app-ads.txt` 已新增以下內容：
  ```
  google.com, pub-9721082206081134, DIRECT, f08c47fec0942fa0
  ```
- `npm start` 會以 `serve` 在本機預覽 `out/` 目錄（請先完成 `npm run export`）。