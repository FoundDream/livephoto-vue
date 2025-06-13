import LivePhoto from './LivePhoto.vue'
import type { App } from 'vue'

// 组件类型
export type { LivePhotoProps } from './types'

// 单独导出组件
export { LivePhoto }

// 插件安装函数
export const install = (app: App) => {
  app.component('LivePhoto', LivePhoto)
}

// 默认导出
export default {
  install,
  LivePhoto
}

// 支持按需导入
export * from './types' 