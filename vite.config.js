import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      // 忽略 picture_ 等非源码文件夹，避免 Windows 文件锁导致监听崩溃
      ignored: ['**/picture_/**', '**/.git/**', '**/node_modules/**'],
    },
  },
})
