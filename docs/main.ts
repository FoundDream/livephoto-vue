import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import Demo from './pages/Demo.vue'
import Docs from './pages/Docs.vue'
import Examples from './pages/Examples.vue'

// 路由配置
const routes = [
  { path: '/', component: Home },
  { path: '/demo', component: Demo },
  { path: '/docs', component: Docs },
  { path: '/examples', component: Examples }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app') 