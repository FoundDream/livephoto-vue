import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 官网构建配置
export default defineConfig({
  plugins: [vue()],
  root: './docs',
  build: {
    outDir: '../dist/docs',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': new URL('./docs', import.meta.url).pathname.replace(/\/$/, '')
    }
  }
}) 