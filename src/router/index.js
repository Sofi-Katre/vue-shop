import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/TheHomeView.vue'
import Bokmarks from '@/views/TheBokmarks.vue'
import Bascet from '@/views/TheBascet.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Bokmarks',
      name: 'Bokmarks',
      component: Bokmarks,
    },
    {
      path: '/Basket',
      name: 'Basket',
      component: Bascet,
    },
  ],
})

export default router
