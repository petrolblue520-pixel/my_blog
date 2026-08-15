<script setup>
import { computed } from 'vue'
import { getPostBySlug } from '../utils/posts'
import HtmlEmbed from '../components/HtmlEmbed.vue'

const props = defineProps({
  slug: { type: String, required: true },
})

const post = computed(() => getPostBySlug(props.slug))
</script>

<template>
  <div class="page">
    <header class="topbar">
      <button class="back" @click="$router.push('/blog')">← 返回列表</button>
    </header>

    <article v-if="post" class="article">
      <!-- 文章封面图（frontmatter 里配了 cover 才显示） -->
      <div v-if="post.cover" class="cover">
        <img :src="post.cover" :alt="post.title" />
      </div>
      <h1>{{ post.title }}</h1>
      <div class="meta">
        <span class="date">📅 {{ post.date }}</span>
        <span class="tags" v-if="post.tags.length">
          <span class="tag" v-for="t in post.tags" :key="t">#{{ t }}</span>
        </span>
      </div>

      <!-- 按段渲染：md 段直接 v-html，html 段交给 HtmlEmbed 组件 -->
      <div class="markdown-body">
        <template v-for="(seg, i) in post.segments" :key="i">
          <div v-if="seg.type === 'md'" v-html="seg.html"></div>
          <HtmlEmbed v-else :file="seg.file" />
        </template>
      </div>
    </article>

    <div v-else class="not-found">
      <p>找不到这篇文章 😢</p>
      <button class="back" @click="$router.push('/blog')">回到列表</button>
    </div>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: #f7faf9;
  font-family: 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eef1f5;
}
.back {
  border: none;
  background: #f0f4f1;
  color: #2d3047;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}
.back:hover {
  background: #e3ebe5;
}

.article {
  max-width: 720px;
  margin: 0 auto;
  padding: 40px 32px 80px;
  background: #fff;
  min-height: 60vh;
  box-shadow: 0 4px 20px rgba(60, 80, 100, 0.06);
}
.article h1 {
  font-size: 30px;
  color: #2d3047;
  margin: 0 0 12px;
  line-height: 1.3;
}
.cover {
  margin: 0 0 24px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(60, 80, 100, 0.12);
}
.cover img {
  display: block;
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}
.meta {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 13px;
  color: #9aa3b5;
  margin-bottom: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f2f5;
}
.tags {
  display: inline-flex;
  gap: 6px;
}
.tag {
  color: #5bbf86;
  background: #eaf6ef;
  padding: 2px 8px;
  border-radius: 6px;
}

/* markdown 正文排版 */
.markdown-body {
  color: #3a3f51;
  font-size: 16px;
  line-height: 1.85;
}
.markdown-body :deep(h2) {
  font-size: 22px;
  color: #2d3047;
  margin: 32px 0 14px;
}
.markdown-body :deep(h3) {
  font-size: 18px;
  color: #2d3047;
  margin: 26px 0 10px;
}
.markdown-body :deep(p) {
  margin: 14px 0;
}
.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  margin: 14px 0;
  padding-left: 24px;
}
.markdown-body :deep(li) {
  margin: 6px 0;
}
.markdown-body :deep(code) {
  background: #f1f3f6;
  color: #d63384;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 14px;
  font-family: ui-monospace, Consolas, monospace;
}
.markdown-body :deep(pre) {
  background: #2d3047;
  color: #e8eaed;
  padding: 16px;
  border-radius: 10px;
  overflow-x: auto;
  margin: 18px 0;
}
.markdown-body :deep(pre code) {
  background: transparent;
  color: inherit;
  padding: 0;
}
.markdown-body :deep(blockquote) {
  border-left: 4px solid #5bbf86;
  background: #f4fbf6;
  margin: 18px 0;
  padding: 10px 16px;
  color: #5a6473;
}

.not-found {
  text-align: center;
  padding: 80px 20px;
  color: #9aa3b5;
}
.not-found .back {
  margin-top: 16px;
}
</style>
