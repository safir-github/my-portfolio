import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import pdf from '../components/pdf.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },

    {
      path: '/pdf',
      name: 'pdf',
      component: pdf
    }

    
  ]
})

export default router
