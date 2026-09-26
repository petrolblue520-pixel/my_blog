# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## 写文章（src/posts 下的 .md）

每篇文章是一个带 frontmatter 的 md 文件，frontmatter 用 `---` 包裹：

```markdown
---
title: 文章标题
date: 2026-08-14
tags: [标签1, 标签2]
cover: ../needed_file_code_picture_video/封面图.jpg   # 可选
---
```

- `cover`（可选）：文章封面图。把图片放进 `src/needed_file_code_picture_video/` 文件夹，
  然后填**相对路径**（如 `../needed_file_code_picture_video/xxx.jpg`）或**纯文件名**（如 `xxx.jpg`）都可以。
- 不写 `cover` 时，卡片封面会自动用「渐变色 + emoji」（按 tags 匹配）。
- 正文里要插图片，也把图片放进 `needed_file_code_picture_video/`，然后写
  `![描述](../needed_file_code_picture_video/xxx.jpg)`。
- 正文里要内嵌 html 演示文件，把文件放进 `needed_file_code_picture_video/`，独占一行写 `{{html:文件名.html}}`。

## 写数学公式（LaTeX）

正文支持 LaTeX，由 KaTeX 渲染（样式和字体随站点一起打包，不依赖外网 CDN）。
下面四种写法都可以用，也可以混着用：

| 写法 | 说明 |
| --- | --- |
| `$E = mc^2$` | 行内公式 |
| `\(E = mc^2\)` | 行内公式（和上面等价） |
| `$$ ... $$` | 独占一行的公式块 |
| `\[ ... \]` | 独占一行的公式块（和上面等价） |

多行推导写在 `$$` 或 `\[` 里，用 `aligned` 等环境，换行写 `\\`：

```markdown
$$
\begin{aligned}
a &= b + c \\
  &= d
\end{aligned}
$$
```

- 公式太长时不会撑破正文宽度，会自动出现横向滚动条。
- 公式写错时该处会标红显示错误，不影响文章其余部分渲染。
- 行内 `$` 不能贴着空格写（`$ x $` 不会被当成公式）；行内代码和代码块里的 `$` 不会被误判成公式。

