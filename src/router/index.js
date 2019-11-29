import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Toasted from 'vue-toasted'; 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

Vue.use(Toasted, {
  router
});

export default router
