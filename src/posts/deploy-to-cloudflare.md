---
title: 把网站免费发布到 Cloudflare Pages
date: 2026-08-05
tags: [部署, Cloudflare, 上线]
---

本地写完代码之后，下一步就是把它放到互联网上让所有人都能访问。这里记录一下用 Cloudflare Pages 免费托管的流程。

## 大致步骤

1. 把项目推送到 GitHub
2. 在 Cloudflare Pages 里连接这个仓库
3. 设置构建命令为 `npm run build`，输出目录为 `dist`
4. 等 Cloudflare 自动构建完成，就能拿到一个 `xxx.pages.dev` 的网址

## 小贴士

- 构建时 Node 版本要和本地一致
- 每次推代码到 main 分支，Cloudflare 会自动重新部署
- 免费额度对个人博客完全够用

下次上线之后，我就能把这个网址发给我的朋友们看了。
