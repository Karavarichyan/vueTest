import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'email',
      component: () => import('../views/EmailView.vue'),
    },
    {
      path: '/otp',
      name: 'otp',
      component: () => import('../views/OtpView.vue'),
    },
  ]
})

export default router
