<script setup>
import { computed } from 'vue'
import { getAllPosts } from '../utils/posts'
import BlogCard from '../components/BlogCard.vue'

const posts = getAllPosts()
const count = computed(() => posts.length)
</script>

<template>
  <div class="page">
    <!-- 顶部栏：返回 + 标题 -->
    <header class="topbar">
      <button class="back" @click="$router.push('/')">← 回到主页</button>
      <h1>我的博客</h1>
      <span class="count">共 {{ count }} 篇</span>
    </header>

    <!-- 卡片平铺网格，按时间倒序 -->
    <main class="grid">
      <BlogCard v-for="post in posts" :key="post.slug" :post="post" />
    </main>

    <p v-if="!posts.length" class="empty">
      还没有文章哦，去 <code>src/posts</code> 文件夹里新建一个 <code>.md</code> 试试吧～
    </p>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f7faf9, #eef4f8);
  font-family: 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  padding-bottom: 60px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.topbar h1 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #2d3047;
}
.count {
  font-size: 13px;
  color: #9aa3b5;
}

/* 平铺网格：自适应列数，类似视频网站 */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 22px;
  padding: 28px 32px 0;
  max-width: 1200px;
  margin: 0 auto;
}

.empty {
  text-align: center;
  color: #9aa3b5;
  margin-top: 60px;
  font-size: 15px;
}
.empty code {
  background: #eef1f5;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
}
</style>
