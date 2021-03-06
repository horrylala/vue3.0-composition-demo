import Vue from 'vue'
import VueRouter, { RouterOptions } from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/About.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
} as RouterOptions)

export default router
