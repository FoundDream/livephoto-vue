<template>
  <div class="live-photo" @click="onClick">
    <!-- Apple模式 -->
    <div 
      v-if="useApple" 
      ref="applePlayerRef" 
      class="live-img"
    ></div>
    
    <!-- 自定义模式 -->
    <template v-else>
      <div
        class="live-trigger"
        @click="playVideo"
        :style="{ opacity: Number(videoReady) }"
      >
        <div
          class="trigger-icon"
          :style="{
            animationPlayState: videoRunning ? 'running' : 'paused',
          }"
        ></div>
        <span class="trigger-text">LIVE</span>
      </div>
      <img
        class="live-img"
        :src="photoSrc"
        @load="onImageLoad"
        :style="{ opacity: Number(imageReady) }"
      />
      <video
        ref="videoRef"
        class="live-video"
        :src="videoSrc"
        :style="{ opacity: Number(videoPlaying) }"
        :muted="muted"
        :loop="loop"
        playsinline
        webkit-playsinline
        @canplay="() => setVideoReady(true)"
        @loadedmetadata="() => setVideoReady(true)"
        @playing="() => setVideoRunning(true)"
        @pause="() => setVideoRunning(false)"
        @ended="() => setVideoPlaying(false)"
      ></video>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import * as LivePhotosKit from 'livephotoskit'
import type { LivePhotoProps } from './types'

const props = withDefaults(defineProps<LivePhotoProps>(), {
  photoSrc: '',
  videoSrc: '',
  muted: false,
  loop: false,
  useApple: false
})

// 响应式状态
const imageReady = ref(false)
const videoPlaying = ref(false)
const videoRunning = ref(false)
const videoReady = ref(false)

// URL参数状态
const photoSrc = ref('')
const videoSrc = ref('')
const muted = ref(false)
const loop = ref(false)
const useApple = ref(false)

// DOM引用
const videoRef = ref<HTMLVideoElement | null>(null)
const applePlayerRef = ref<HTMLDivElement | null>(null)

// Apple模式初始化
const initializeApplePlayer = async () => {
  if (useApple.value && applePlayerRef.value && photoSrc.value && videoSrc.value) {
    // 预加载图片获取尺寸    
    await nextTick()
    const player = LivePhotosKit.Player(applePlayerRef.value)
    player.photoSrc = photoSrc.value
    player.videoSrc = videoSrc.value
  }
}

// 视频播放控制
const playVideo = (e: Event) => {
  e.stopPropagation()
  if (!videoRef.value) return
  
  if (videoRunning.value) {
    videoRef.value.pause()
  } else {
    videoPlaying.value = true
    videoRef.value.play()
  }
}

// 预览功能
const openPreview = (url: string) => {
  window.top?.postMessage(url, window.location.origin)
}

// 点击事件处理
const onClick = (e: Event) => {
  const target = e.target as HTMLElement
  if (!/trigger/.test(target.className) && !videoPlaying.value) {
    openPreview(photoSrc.value)
  }
}

// 图片加载处理
const onImageLoad = () => {
  imageReady.value = true
  
  // 移动端兼容性处理
  if (
    /iphone/i.test(navigator.userAgent) &&
    /micromessenger/i.test(navigator.userAgent)
  ) {
    setTimeout(() => {
      setVideoReady(true)
    }, 500)
  }
}

// 视频状态设置函数
const setVideoReady = (ready: boolean) => {
  videoReady.value = ready
}

const setVideoRunning = (running: boolean) => {
  videoRunning.value = running
}

const setVideoPlaying = (playing: boolean) => {
  videoPlaying.value = playing
}

// URL参数解析
const parseUrlParams = () => {
  const urlParams = new URLSearchParams(window.location.search)
  
  // 支持多种参数名称
  const picUrl = urlParams.get('picUrl') || urlParams.get('photoSrc')
  const videoUrl = urlParams.get('videoUrl') || urlParams.get('videoSrc')
  const mutedParam = urlParams.get('muted')
  const loopParam = urlParams.get('loop')
  const useAppleParam = urlParams.get('useApple')
  
  if (picUrl) photoSrc.value = picUrl
  if (videoUrl) videoSrc.value = videoUrl
  if (mutedParam) muted.value = !!mutedParam
  if (loopParam) loop.value = !!loopParam
  if (useAppleParam) useApple.value = !!useAppleParam
  
  // 如果URL没有参数，使用props
  if (!picUrl && props.photoSrc) photoSrc.value = props.photoSrc
  if (!videoUrl && props.videoSrc) videoSrc.value = props.videoSrc
  if (!mutedParam) muted.value = props.muted
  if (!loopParam) loop.value = props.loop
  if (!useAppleParam) useApple.value = props.useApple
}

// 监听useApple变化，初始化Apple播放器
watch([useApple, photoSrc, videoSrc, applePlayerRef], () => {
  if (useApple.value) {
    initializeApplePlayer()
  }
}, { immediate: true })

// 组件挂载
onMounted(() => {
  parseUrlParams()
})
</script>

<style scoped>
.live-photo {
  position: relative;
  display: inline-block;
  cursor: pointer;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 3 / 4;

}

.live-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: opacity 0.3s ease;
}

.live-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.live-trigger {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 16px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.live-trigger:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.05);
}

.trigger-icon {
  width: 16px;
  height: 16px;
  border: 2px solid white;
  border-radius: 50%;
  position: relative;
  animation: pulse 2s infinite;
  animation-play-state: paused;
}

.trigger-icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.trigger-text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* 移动端优化 */
@media (max-width: 768px) {
  .live-photo {
    max-width: 100%;
    border-radius: 0;
    max-height: 80vh; /* 防止移动端过高 */
  }
  
  .live-trigger {
    top: 8px;
    left: 8px;
    padding: 4px 8px;
    font-size: 11px;
  }
  
  .trigger-icon {
    width: 14px;
    height: 14px;
  }
  
  .trigger-icon::before {
    width: 4px;
    height: 4px;
  }
}
</style> 