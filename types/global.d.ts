/// <reference types="vite/client" />

// 静态资源模块声明
declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.mp4' {
  const src: string
  export default src
}

declare module '*.mov' {
  const src: string
  export default src
}

declare module '*.webm' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

// Vue单文件组件类型声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// LivePhoto Vue组件模块声明
declare module '@livephoto-vue/LivePhoto.vue' {
  import type { DefineComponent } from 'vue'
  import type { LivePhotoProps } from '@livephoto-vue/types'
  const component: DefineComponent<LivePhotoProps>
  export default component
}

declare module '@livephoto-vue/types' {
  export interface LivePhotoProps {
    photoSrc?: string
    videoSrc?: string
    muted?: boolean
    loop?: boolean
    useApple?: boolean
  }
} 