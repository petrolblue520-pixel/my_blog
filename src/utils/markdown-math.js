// 让 posts 下的 markdown 支持 LaTeX 数学公式
// 解析交给 markdown-it-texmath，渲染交给 KaTeX
//
// 支持四种写法（可混用）：
//   行内：  $E = mc^2$        或  \(E = mc^2\)
//   独占一行/独立成块：  $$ ... $$   或  \[ ... \]
//   多行公式环境： \begin{aligned} ... \end{aligned}（写在 $$ 或 \[ 里）
import katex from 'katex'
import texmath from 'markdown-it-texmath'
// KaTeX 的样式（含字体），由 Vite 打包，无需外网 CDN
import 'katex/dist/katex.min.css'

const katexOptions = {
  // 公式写错时用红字标出错误内容，而不是抛异常让整篇文章渲染失败
  throwOnError: false,
  errorColor: '#cc0000',
  // 允许公式里出现中文等非 ASCII 字符（例如 \text{补} 之外直接写汉字），
  // 设为 'ignore' 避免在控制台刷 unicodeTextInMathMode 警告
  strict: 'ignore',
  // 同时输出 MathML，方便复制/无障碍阅读
  output: 'htmlAndMathml',
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function renderTex(tex, displayMode) {
  try {
    return katex.renderToString(tex, { ...katexOptions, displayMode })
  } catch (err) {
    // 兜底：极端情况下 KaTeX 仍可能抛错，这里原样显示公式源码，方便定位问题
    return `<code class="math-error">${escapeHtml(tex)}</code>`
  }
}

/**
 * 给一个 markdown-it 实例装上数学公式能力。
 * @param {import('markdown-it')} md
 * @returns {import('markdown-it')} 同一个实例（方便链式调用）
 */
export function applyMath(md) {
  md.use(texmath, {
    // dollars → $...$ 与 $$...$$；brackets → \(...\) 与 \[...\]
    delimiters: ['dollars', 'brackets'],
    katexOptions,
  })

  // 用自定义模板替换 texmath 自带的 <eq>/<eqn>/<section>，
  // 输出更好控制样式的结构（并让过宽的公式可以横向滚动）
  md.renderer.rules.math_inline = (tokens, idx) =>
    `<span class="math-inline">${renderTex(tokens[idx].content, false)}</span>`

  md.renderer.rules.math_inline_double = (tokens, idx) =>
    `<div class="math-block">${renderTex(tokens[idx].content, true)}</div>`

  md.renderer.rules.math_block = (tokens, idx) =>
    `<div class="math-block">${renderTex(tokens[idx].content, true)}</div>`

  // 带编号的公式：$$ ... $$ (1) 或 \[ ... \] (1)
  md.renderer.rules.math_block_eqno = (tokens, idx) =>
    `<div class="math-block math-block-eqno">${renderTex(tokens[idx].content, true)}` +
    `<span class="math-eqno">(${escapeHtml(tokens[idx].info || '')})</span></div>`

  return md
}
