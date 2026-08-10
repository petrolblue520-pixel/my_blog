---
title: CSS 卡通小人绘制小记
date: 2026-08-01
tags: [CSS, 动画, 设计]
---

用纯 CSS 画一个可爱的小人，比想象中有趣。不需要图片，全靠 `border-radius`、`box-shadow` 和 `transform` 拼出来。

## 让小人变可爱的几个细节

- **大眼睛 + 高光**：在黑色瞳孔里加一个白色小圆点，立刻有了神采
- **腮红**：两团淡粉色椭圆，萌度直接翻倍
- **呼吸动画**：身体用 `@keyframes` 做 2% 的缩放循环，看起来像活着一样
- **柔和配色**：薄荷绿 + 奶油白，比纯色更舒服

## 眼珠跟随鼠标

核心就是监听 `mousemove`，算出鼠标和眼睛中心的角度，然后把瞳孔往那个方向平移一点点。

```js
const angle = Math.atan2(deltaY, deltaX)
const distance = Math.min(Math.hypot(deltaX, deltaY) * 0.05, 8)
```

简简单单几行，小人就活过来了。
