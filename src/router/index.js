import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../components/HomeView.vue'
import AboutView from '../components/AboutView.vue'
import ResumeView from '../components/ResumeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/resume', component: ResumeView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
