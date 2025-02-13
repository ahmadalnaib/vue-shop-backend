import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import RequestPasswordResetView from '../views/RequestPasswordResetView.vue'
import ResetPassword from '../views/ResetPasswordView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component: DashboardView
    },
    {
      path:'/login',
      name:'login',
      component: LoginView
    },
    {
      path:'/request-password-reset',
      name:'reqstue-password-reset',
      component: RequestPasswordResetView
    },
    {
      path:'/reset-password/:token',
      name:'reset-password',
      component: ResetPassword
    }
 
  ],
})

export default router
