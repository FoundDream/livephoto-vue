# LivePhoto Vue

一个强大的Vue 3 Live Photo组件，支持Apple官方模式和自定义实现。

## 特性

- 🍎 双模式支持：Apple官方LivePhotosKit + 自定义实现
- 📱 移动端优化：完美适配移动设备
- ⚡ 开箱即用：TypeScript支持，简单配置
- 🎨 高度定制：支持自定义样式和交互

## 安装

```bash
npm install livephoto-vue
```

## 使用

```vue
<script setup>
import { LivePhoto } from 'livephoto-vue'
</script>

<template>
  <LivePhoto 
    photo-src="path/to/photo.jpg"
    video-src="path/to/video.mp4"
    :use-apple="false"
    :muted="true"
  />
</template>
```

## API

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| photo-src | String | '' | 照片资源URL |
| video-src | String | '' | 视频资源URL |
| use-apple | Boolean | false | 是否使用Apple官方模式 |
| muted | Boolean | false | 是否静音播放 |
| loop | Boolean | false | 是否循环播放 |

## 模式说明

### 自定义模式 (use-apple=false)
- 显示"LIVE"标识按钮
- 点击按钮播放/暂停视频
- 点击其他区域预览原图
- 适合大多数使用场景

### Apple模式 (use-apple=true)
- 使用Apple官方LivePhotosKit
- 提供与iOS设备相同的交互体验
- 长按触发播放
- 需要符合Apple Live Photo格式

## 许可证

MIT
