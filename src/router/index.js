import { createRouter, createWebHistory } from 'vue-router'
import memoryGame from '../views/games/memoryGame.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: memoryGame
    },
    {
      path: '/slider',
      name: 'Slider',
      component: () => import('../views/sliders/swiperSlider.vue')
    },
    {
      path: '/carusel2',
      name: 'carusel2',
      component: () => import('../views/sliders/carusel2.vue')
    },
    {
      path: '/filter',
      name: 'filter',
      component: () => import('../views/sliders/filterSlider.vue')
    },
    {
      path: '/table',
      name: 'Table',
      component: () => import('../views/platon/platonTable.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/platon/platonLogin.vue')
    },
    {
      path: '/diagram',
      name: 'Diagram',
      component: () => import('../views/charts/circularDiagram.vue')
    },
    {
      path: '/expert',
      name: 'Expert',
      component: () => import('../views/platon/expertMain.vue')
    },
    {
      path: '/courses',
      name: 'Expert Courses',
      component: () => import('../views/platon/expertCourses.vue')
    },
    {
      path: '/eco',
      name: 'Eco',
      component: () => import('../views/platon/ecoMain.vue')
    },
  ]
})

export default router
