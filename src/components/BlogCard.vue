<script setup>
import { computed } from 'vue'

const props = defineProps({
  post: { type: Object, required: true },
})

// 卡片顶部的封面：
// - 如果 frontmatter 里指定了 cover（图片文件名），就用图片当封面
// - 否则 fallback 到渐变色 + emoji
const cover = computed(() => {
  if (props.post.cover) {
    return {
      backgroundImage: `url(${props.post.cover})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  }
  const palettes = [
    ['#a8e6cf', '#56c596'],
    ['#ffd6a5', '#ff9b71'],
    ['#c1e8ff', '#7cb9e8'],
    ['#ffd3e6', '#ff9bb0'],
    ['#e0c3fc', '#a18cd1'],
    ['#ffe9a8', '#f6c453'],
  ]
  let hash = 0
  for (const ch of props.post.title) {
    hash = (hash * 31 + ch.charCodeAt(0)) >>> 0
  }
  const [from, to] = palettes[hash % palettes.length]
  return { background: `linear-gradient(135deg, ${from}, ${to})` }
})

// 根据 tags 选一个 emoji 当封面图标
const emoji = computed(() => {
  const tagMap = {
    Vue: '🌿', 前端: '⚡', 学习: '📚', 部署: '🚀', Cloudflare: '☁️',
    上线: '🌐', CSS: '🎨', 动画: '✨', 设计: '🖌️', 生活: '☕',
    随笔: '✍️', 开始: '🌱',
  }
  for (const t of props.post.tags) {
    if (tagMap[t]) return tagMap[t]
  }
  return '📝'
})

const excerpt = computed(() => props.post.excerpt || '')
</script>

<template>
  <article class="card" @click="$router.push(`/blog/${post.slug}`)">
    <!-- 封面 -->
    <div class="cover" :style="cover">
      <span v-if="!post.cover" class="cover-emoji">{{ emoji }}</span>
    </div>

    <!-- 正文区 -->
    <div class="content">
      <h3 class="title">{{ post.title }}</h3>

      <div class="meta">
        <span class="date">📅 {{ post.date }}</span>
      </div>

      <div class="tags" v-if="post.tags.length">
        <span class="tag" v-for="t in post.tags" :key="t">#{{ t }}</span>
      </div>

      <p class="excerpt">{{ excerpt }}</p>

      <span class="read-more">阅读全文 →</span>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(60, 80, 100, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid #eef1f5;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(60, 80, 100, 0.18);
}

.cover {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.cover::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), transparent 60%);
}
.cover-emoji {
  font-size: 46px;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15));
  z-index: 1;
}

.content {
  padding: 16px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.title {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  color: #2d3047;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.meta {
  font-size: 12px;
  color: #9aa3b5;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tag {
  font-size: 12px;
  color: #5bbf86;
  background: #eaf6ef;
  padding: 2px 8px;
  border-radius: 6px;
}

.excerpt {
  font-size: 13px;
  color: #6b7280;
  line-height: 1.6;
  margin: 4px 0 0;
}

.read-more {
  margin-top: auto;
  padding-top: 8px;
  font-size: 13px;
  color: #5bbf86;
  font-weight: 600;
}
</style>
