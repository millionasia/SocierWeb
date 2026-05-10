# SocierWeb

這是 `社團法人臺北市三創協會` 的 Nuxt 3 + Tailwind CSS 賀民改版專案，用於快速展示網站首頁、最新消息、活動公告、協會介紹、理監事與花絮留影等版型與互動流程。

目前內容以 Mock Data 建置，資料集中在 `plugins/millionasia.js`，方便後續替換成 API、CMS 或正式資料來源。

## 技術棧

- Nuxt 3 / Vue 3
- Tailwind CSS
- Nuxt Icon
- Lucide icon set
- pnpm

## 主要功能

- 首頁形象區、統計資訊、最新消息、活動公告與精選花絮
- 最新消息與活動公告列表，每頁 6 筆分頁
- 最新消息與活動公告詳細頁
- 花絮留影列表，每頁 8 張，支援點選放大
- 協會理監事頁面，含示意頭像
- 響應式導覽列與頁尾 Navigation 連結

## 專案資料

主要 Mock 資料位於：

```text
plugins/millionasia.js
```

目前包含：

- 協會名稱與英文名稱
- 最新消息 15 筆
- 活動公告 17 筆
- 花絮照片 20 筆
- 理監事名單
- 協會介紹文字
- 頁尾品牌連結

## 常用指令

安裝依賴：

```bash
corepack pnpm install
```

啟動開發伺服器：

```bash
corepack pnpm dev
```

預設開發網址為：

```text
http://localhost:3000
```

如果 `3000` 已被占用，Nuxt 會自動改用其他可用 port。

建立正式版：

```bash
corepack pnpm build
```

本機預覽正式版：

```bash
corepack pnpm preview
```

產生靜態網站：

```bash
corepack pnpm generate
```

## Vercel 部署建議

在 Vercel 匯入 GitHub repository 時，可使用以下設定：

- Framework Preset: `Nuxt`
- Install Command: `pnpm install`
- Build Command: `pnpm build`
- Output Directory: 保持預設即可
- Root Directory: `./`

若 GitHub repository 設為 Public，Vercel Hobby 方案即可直接部署。

## 後續可替換項目

- 將 `plugins/millionasia.js` Mock Data 改接後台 API 或 CMS
- 將示意圖片替換為協會正式活動照片
- 將理監事示意頭像替換為正式授權照片
- 補上正式 SEO metadata 與社群分享圖片
