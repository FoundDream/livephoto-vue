<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <h1>LivePhoto Vue</h1>
        </div>
        <ul class="nav-menu">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/demo">演示</router-link></li>
          <li><router-link to="/docs">文档</router-link></li>
          <li><router-link to="/examples">示例</router-link></li>
          <li>
            <a href="https://github.com/FoundDream/livephoto-vue" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- 主要内容 -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-container">
        <p>&copy; 2024 LivePhoto Vue. Made with ❤️</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑
</script>

<style>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 导航栏样式 */
.navbar {
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav-brand h1 {
  color: #2c3e50;
  font-size: 1.5rem;
  font-weight: 600;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu a {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-menu a:hover,
.nav-menu a.router-link-active {
  color: #3498db;
}

/* 主要内容 */
.main-content {
  flex: 1;
  padding: 0;
}

/* 页脚 */
.footer {
  background: #f8f9fa;
  padding: 2rem 0;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  color: #666;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }
  
  .nav-menu {
    gap: 1rem;
  }
  
  .nav-menu a {
    font-size: 0.9rem;
  }
}
</style> 