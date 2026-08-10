import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/blog',
    name: 'blog',
    // 按需加载，进入博客页才打包这部分代码
    component: () => import('../views/BlogListView.vue'),
  },
  {
    path: '/blog/:slug',
    name: 'post',
    component: () => import('../views/BlogPostView.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 切换页面后滚回顶部
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
