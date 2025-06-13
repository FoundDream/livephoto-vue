# LivePhoto Vue

一个强大的Vue 3 Live Photo组件库，支持Apple官方模式和自定义实现。

## 🌟 特性

- 🍎 **双模式支持** - Apple 官方 LivePhotosKit + 自定义实现
- 📱 **移动端优化** - 完美适配移动设备，支持触摸交互
- ⚡ **开箱即用** - TypeScript 支持，简单配置即可使用
- 🎨 **高度定制** - 支持自定义样式和交互行为
- 📦 **轻量级** - 最小化依赖，优化包体积

## 🚀 快速开始

### 安装

```bash
npm install livephoto-vue
```

### 使用

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

## 📚 文档

- [在线文档和演示](https://livephoto-vue.vercel.app/)
- [API 参考](/packages/livephoto-vue/README.md)

## 🏗️ 项目结构

```
livephoto-vue/
├── packages/
│   └── livephoto-vue/     # NPM组件包
├── docs/                  # 官网源码
├── examples/              # 使用示例
└── scripts/               # 构建脚本
```

## 🛠️ 开发

```bash
# 安装依赖
pnpm install

# 启动官网开发服务器
pnpm dev

# 构建组件库
pnpm build:lib

# 构建官网
pnpm build:docs

# 构建全部
pnpm build
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎贡献代码！请先阅读[贡献指南](CONTRIBUTING.md)。
