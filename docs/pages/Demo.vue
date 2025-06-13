<template>
  <div class="demo">
    <div class="container">
      <h1 class="page-title">在线演示</h1>
      <p class="page-subtitle">体验LivePhoto组件的不同功能和模式</p>

      <!-- 控制面板 -->
      <div class="controls">
        <div class="control-group">
          <label>显示模式：</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" v-model="useApple" :value="false"> 自定义模式
            </label>
            <label class="radio-label">
              <input type="radio" v-model="useApple" :value="true"> Apple模式
            </label>
          </div>
        </div>

        <div class="control-group">
          <label class="checkbox-label">
            <input type="checkbox" v-model="muted"> 静音播放
          </label>
        </div>

        <div class="control-group">
          <label class="checkbox-label">
            <input type="checkbox" v-model="loop"> 循环播放
          </label>
        </div>

        <div class="control-group">
          <label>图片URL：</label>
          <input 
            type="url" 
            v-model="photoSrc" 
            placeholder="输入图片URL"
            class="url-input"
          >
        </div>

        <div class="control-group">
          <label>视频URL：</label>
          <input 
            type="url" 
            v-model="videoSrc" 
            placeholder="输入视频URL"
            class="url-input"
          >
        </div>
      </div>

      <!-- Live Photo 演示 -->
      <div class="demo-area">
        <div class="demo-container">
          <LivePhoto 
            :photo-src="photoSrc"
            :video-src="videoSrc"
            :use-apple="true"
            :muted="muted"
            :loop="loop"
          />
        </div>
        
        <div class="demo-info">
          <h3>当前配置</h3>
          <ul class="config-list">
            <li><strong>模式：</strong>{{ useApple ? 'Apple官方模式' : '自定义模式' }}</li>
            <li><strong>静音：</strong>{{ muted ? '是' : '否' }}</li>
            <li><strong>循环：</strong>{{ loop ? '是' : '否' }}</li>
            <li><strong>图片源：</strong>{{ photoSrc || '默认' }}</li>
            <li><strong>视频源：</strong>{{ videoSrc || '默认' }}</li>
          </ul>
        </div>
      </div>

      <!-- 代码示例 -->
      <div class="code-example">
        <h3>对应代码</h3>
        <div class="code-block">
          <pre><code>&lt;LivePhoto
  :photo-src="{{ photoSrc ? `"${photoSrc}"` : 'demoPhoto' }}"
  :video-src="{{ videoSrc ? `"${videoSrc}"` : 'demoVideo' }}"
  :use-apple="{{ useApple }}"
  :muted="{{ muted }}"
  :loop="{{ loop }}"
/&gt;</code></pre>
        </div>
      </div>

      <!-- 使用说明 -->
      <div class="instructions">
        <h3>使用说明</h3>
        <div class="instruction-grid">
          <div class="instruction-card">
            <h4>自定义模式</h4>
            <p>点击"LIVE"按钮播放/暂停视频，点击其他区域预览原图。适合大多数使用场景。</p>
          </div>
          <div class="instruction-card">
            <h4>Apple模式</h4>
            <p>使用Apple官方LivePhotosKit，提供与iOS设备相同的交互体验。长按触发播放。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LivePhoto from 'livephoto-vue'
import demoPhoto from '../assets/live.jpg'
import demoVideo from '../assets/live.mp4'

// 控制状态
const useApple = ref(false)
const muted = ref(true)
const loop = ref(false)
const photoSrc = ref(demoPhoto)
const videoSrc = ref(demoVideo)
</script>

<style scoped>
.demo {
  padding: 4rem 0;
  background: #f8f9fa;
  min-height: calc(100vh - 60px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.page-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
}

/* 控制面板 */
.controls {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.control-group label {
  font-weight: 600;
  color: #2c3e50;
}

.radio-group {
  display: flex;
  gap: 1rem;
}

.radio-label,
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 400 !important;
  cursor: pointer;
}

.url-input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
}

/* 演示区域 */
.demo-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.demo-container {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.demo-info {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.demo-info h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.config-list {
  list-style: none;
  padding: 0;
}

.config-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  color: #666;
}

.config-list li:last-child {
  border-bottom: none;
}

/* 代码示例 */
.code-example {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
}

.code-example h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.code-block {
  background: #2c3e50;
  color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* 使用说明 */
.instructions {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.instructions h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

.instruction-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.instruction-card {
  text-align: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.instruction-card h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.instruction-card p {
  color: #666;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-area {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .controls {
    grid-template-columns: 1fr;
  }
  
  .instruction-grid {
    grid-template-columns: 1fr;
  }
}
</style> 