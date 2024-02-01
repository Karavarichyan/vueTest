import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/LayoutView.vue'),
      children: [
        {
          path: "", // route: /
          component: () => import('@/views/login/EmailView.vue'),
        },
        {
          path: "login", // route: /
          component: () => import('@/views/login/NewEmailView.vue'),
        },
        // {
        //   path: "info", // route: /
        //   component: () => import('@/views/login/InfoUserViuw.vue'),
        // },
        {
          path: "otp", // route: /otp
          component: () => import('@/views/login/OtpView.vue'),
        },
        {
          path: "test", // route: /test
          component: () => import('@/views/login/TestAxios.vue'),
        },
      ],
    },
    {
      path: '/dashboard',
      component: () => import('@/views/dashboard/LayoutView.vue'),
      children: [
        {
          path: "info", // route: /
          component: () => import('@/views/login/InfoUserViuw.vue'),
        },
        {
          path: "", // route: /dashboard
          component: () => import('@/views/dashboard/ComingSoonView.vue'),
        },
        {
          path: "profile", // route: /dashboard/profile
          component: () => import('@/views/dashboard/ProfileView.vue'),
        },
      ],
    },
  ]
})

export default router
