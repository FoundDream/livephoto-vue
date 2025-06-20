import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 组件库构建配置
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './packages/livephoto-vue/src/index.ts',
      name: 'LivePhotoVue',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'livephotoskit'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          livephotoskit: 'LivePhotosKit'
        }
      }
    },
    outDir: 'packages/livephoto-vue/dist',
    emptyOutDir: true
  }
}) 