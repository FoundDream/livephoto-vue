<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">LivePhoto Vue</h1>
          <p class="hero-subtitle">
            一个强大的Vue 3 Live Photo组件，支持Apple官方模式和自定义实现
          </p>
          <div class="hero-actions">
            <router-link to="/demo" class="btn btn-primary">立即体验</router-link>
            <router-link to="/docs" class="btn btn-secondary">查看文档</router-link>
          </div>
        </div>
        <div class="hero-demo">
          <LivePhoto 
            :photo-src="demoPhoto"
            :video-src="demoVideo"
            :use-apple="false"
            :muted="true"
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">主要特性</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🍎</div>
            <h3>双模式支持</h3>
            <p>支持Apple官方LivePhotosKit和自定义实现，适应不同需求场景</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>移动端优化</h3>
            <p>完美适配移动设备，支持触摸交互和响应式设计</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>开箱即用</h3>
            <p>TypeScript支持，简单配置即可快速集成到你的Vue项目</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>高度定制</h3>
            <p>支持自定义样式和交互行为，满足各种设计需求</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Installation Section -->
    <section class="installation">
      <div class="container">
        <h2 class="section-title">快速开始</h2>
        <div class="install-steps">
          <div class="step">
            <h3>1. 安装</h3>
            <div class="code-block">
              <code>npm install livephoto-vue</code>
            </div>
          </div>
          <div class="step">
            <h3>2. 导入</h3>
            <div class="code-block">
              <code>import { LivePhoto } from 'livephoto-vue'</code>
            </div>
          </div>
          <div class="step">
            <h3>3. 使用</h3>
            <div class="code-block">
              <code>&lt;LivePhoto photo-src="..." video-src="..." /&gt;</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import LivePhoto from '../../packages/livephoto-vue/src/LivePhoto.vue'
import demoPhoto from '../assets/live.jpg'
import demoVideo from '../assets/live.mp4'
</script>

<style scoped>
.home {
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: #fff;
  color: #667eea;
}

.btn-primary:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.btn-secondary:hover {
  background: #fff;
  color: #667eea;
}

.hero-demo {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Features Section */
.features {
  padding: 6rem 0;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* Installation Section */
.installation {
  padding: 6rem 0;
  background: #fff;
}

.install-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.step {
  text-align: center;
}

.step h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.code-block {
  background: #2c3e50;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9rem;
  margin-top: 1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .install-steps {
    grid-template-columns: 1fr;
  }
}
</style> 