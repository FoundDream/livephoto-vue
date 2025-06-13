<template>
  <div class="examples">
    <div class="container">
      <h1>使用示例</h1>
      <p>不同场景下的LivePhoto组件使用示例</p>
      
      <div class="example-grid">
        <div class="example-card">
          <h3>基础示例</h3>
          <div class="code-block">
            <pre><code>&lt;LivePhoto 
  photo-src="photo.jpg"
  video-src="video.mp4"
/&gt;</code></pre>
          </div>
        </div>

        <div class="example-card">
          <h3>Apple模式</h3>
          <div class="code-block">
            <pre><code>&lt;LivePhoto 
  photo-src="photo.jpg"
  video-src="video.mp4"
  :use-apple="true"
/&gt;</code></pre>
          </div>
        </div>

        <div class="example-card">
          <h3>静音循环</h3>
          <div class="code-block">
            <pre><code>&lt;LivePhoto 
  photo-src="photo.jpg"
  video-src="video.mp4"
  :muted="true"
  :loop="true"
/&gt;</code></pre>
          </div>
        </div>

        <div class="example-card">
          <h3>URL参数</h3>
          <div class="code-block">
            <pre><code>// URL: ?photoSrc=...&videoSrc=...&useApple=true
&lt;LivePhoto /&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.examples {
  padding: 4rem 0;
  background: #f8f9fa;
  min-height: calc(100vh - 60px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.example-card {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.code-block {
  background: #2c3e50;
  color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin-top: 1rem;
}
</style> 