<template>
  <div class="docs">
    <div class="container">
      <h1>文档</h1>
      <p>LivePhoto Vue 组件使用文档和API参考</p>
      
      <div class="doc-section">
        <h2>安装</h2>
        <div class="code-block">
          <code>npm install livephoto-vue</code>
        </div>
      </div>

      <div class="doc-section">
        <h2>基本使用</h2>
        <div class="code-block">
          <pre><code>&lt;script setup&gt;
import { LivePhoto } from 'livephoto-vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;LivePhoto 
    photo-src="path/to/photo.jpg"
    video-src="path/to/video.mp4"
  /&gt;
&lt;/template&gt;</code></pre>
        </div>
      </div>

      <div class="doc-section">
        <h2>API 参数</h2>
        <table class="api-table">
          <thead>
            <tr>
              <th>参数</th>
              <th>类型</th>
              <th>默认值</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>photo-src</td>
              <td>String</td>
              <td>''</td>
              <td>照片资源URL</td>
            </tr>
            <tr>
              <td>video-src</td>
              <td>String</td>
              <td>''</td>
              <td>视频资源URL</td>
            </tr>
            <tr>
              <td>use-apple</td>
              <td>Boolean</td>
              <td>false</td>
              <td>是否使用Apple官方模式</td>
            </tr>
            <tr>
              <td>muted</td>
              <td>Boolean</td>
              <td>false</td>
              <td>是否静音播放</td>
            </tr>
            <tr>
              <td>loop</td>
              <td>Boolean</td>
              <td>false</td>
              <td>是否循环播放</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.docs {
  padding: 4rem 0;
  background: #f8f9fa;
  min-height: calc(100vh - 60px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.doc-section {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.code-block {
  background: #2c3e50;
  color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin-top: 1rem;
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.api-table th,
.api-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.api-table th {
  background: #f8f9fa;
  font-weight: 600;
}
</style> 