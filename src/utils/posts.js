import MarkdownIt from 'markdown-it'

// 创建一个 markdown 解析器实例
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

// 用 import.meta.glob 把 src/posts 下所有 .md 文件以原始文本形式加载进来
// eager: true 表示构建时就打包好，运行时直接拿到内容
const postFiles = import.meta.glob('/src/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

// 加载 needed_file_code_picture_video 下的 html 文件，用于文章内嵌入展示
const htmlFiles = import.meta.glob('/src/needed_file_code_picture_video/*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
})

// 加载 needed_file_code_picture_video 下的图片，拿到 vite 打包后的真实 URL
// 注意：这里用 import: 'default'（不加 ?raw），vite 会把图片处理成可访问的 URL
const imageFiles = import.meta.glob('/src/needed_file_code_picture_video/*.{jpg,jpeg,png,gif,webp,svg}', {
  import: 'default',
  eager: true,
})

// 按文件名取 html 文件内容（找不到返回 null）
export function getHtmlFile(name) {
  const entry = Object.entries(htmlFiles).find(([path]) => path.endsWith('/' + name))
  return entry ? entry[1] : null
}

// 按文件名取图片 URL（找不到返回 null）
// 兼容两种写法：纯文件名（cover: xxx.jpg）或相对路径（cover: ../needed_file_code_picture_video/xxx.jpg）
// 内部统一取路径最后一段文件名去匹配图片文件夹
export function getImageUrl(name) {
  if (!name) return null
  const fileName = decodeURIComponent(String(name).split('/').pop())
  const entry = Object.entries(imageFiles).find(([path]) => path.endsWith('/' + fileName))
  return entry ? entry[1] : null
}

// 改写 markdown-it 的图片渲染规则：把 md 里写的相对路径自动换成打包后的真实 URL
// 这样作者写 ![alt](../needed_file_code_picture_video/xxx.jpg) 就能正常显示
md.renderer.rules.image = (tokens, idx, options, _env, self) => {
  const token = tokens[idx]
  const src = token.attrGet('src') || ''
  // 取出文件名（最后一段），去查 vite 打包好的 URL
  const fileName = decodeURIComponent(src.split('/').pop())
  const realUrl = getImageUrl(fileName)
  if (realUrl) {
    token.attrSet('src', realUrl)
  }
  return self.renderToken(tokens, idx, options)
}

// 从一段 markdown 文本里解析出 frontmatter（--- 包裹的部分）和正文
// 兼容 BOM 头 和 Windows 的 CRLF / 老 Mac 的 CR 换行
function parseFrontmatter(raw) {
  // 去掉开头的 BOM，统一换行符为 \n，避免 CRLF 导致正则失配
  const text = raw.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n')
  const match = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  if (!match) {
    return { meta: {}, body: text }
  }

  const frontmatterText = match[1]
  const body = match[2]
  const meta = {}

  // 简单逐行解析 key: value 形式
  frontmatterText.split('\n').forEach((line) => {
    const m = line.match(/^(\w+)\s*:\s*(.*)$/)
    if (!m) return
    const key = m[1]
    let value = m[2].trim()

    // 处理 [a, b, c] 这种数组写法
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    }
    meta[key] = value
  })

  return { meta, body }
}

// 从文件路径里取出文章的 slug，作为访问标识
// 例如 /src/posts/hello-blog.md -> hello-blog
function pathToSlug(path) {
  const fileName = path.split('/').pop()
  return fileName.replace(/\.md$/, '')
}

// 把正文按 {{html:文件名}} 标记拆成若干段
// 独占一行的 {{html:xxx.html}} 会被替换成一个 html 嵌入段，其余按 markdown 渲染
function buildSegments(body) {
  const segments = []
  const re = /^{{html:\s*([\w.\-]+)\s*}}$/gm
  let lastIndex = 0
  let m
  while ((m = re.exec(body)) !== null) {
    const before = body.slice(lastIndex, m.index)
    if (before.trim()) {
      segments.push({ type: 'md', html: md.render(before) })
    }
    segments.push({ type: 'html', file: m[1].trim() })
    lastIndex = re.lastIndex
  }
  const tail = body.slice(lastIndex)
  if (tail.trim()) {
    segments.push({ type: 'md', html: md.render(tail) })
  }
  return segments
}

// 取卡片预览文本：前 N 个字 + 省略号
export function getExcerpt(text, length = 30) {
  if (!text) return ''
  return text.length > length ? text.slice(0, length) + '…' : text
}

// 把所有文章整理成结构化数据
const posts = Object.entries(postFiles).map(([path, raw]) => {
  const { meta, body } = parseFrontmatter(raw)
  const slug = pathToSlug(path)
  const segments = buildSegments(body)

  // 卡片预览用的纯文本：把所有 md 段拼起来、去标签、压缩空白
  const plainText = segments
    .filter((s) => s.type === 'md')
    .map((s) => s.html)
    .join('')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  return {
    slug,
    title: meta.title || slug,
    date: meta.date || '1970-01-01',
    tags: Array.isArray(meta.tags) ? meta.tags : [],
    cover: meta.cover ? getImageUrl(meta.cover) || '' : '', // 卡片封面图（文件名→URL）
    segments, // 详情页按段渲染
    excerpt: getExcerpt(plainText, 30), // 卡片预览
  }
})

// 按日期倒序排列（新的在前）
posts.sort((a, b) => new Date(b.date) - new Date(a.date))

// 获取所有文章（列表用，只给展示需要的字段）
export function getAllPosts() {
  return posts.map(({ segments, ...rest }) => rest)
}

// 根据 slug 取单篇文章详情
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null
}
