import CartPage from '@/views/CartPage.vue'
import HomePage from '@/views/HomePage.vue'
import OrderPage from '@/views/OrderPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => HomePage,
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => CartPage,
    },
    {
      path: '/order-success',
      name: 'order-success',
      component: () => OrderPage,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
