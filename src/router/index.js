import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/three',
    name: 'three',
    component: () => import('../views/ThreeDemo.vue')
  },
  {
    path: '/cascader',
    name: 'cascader',
    component: () => import('../views/CascaderDemo.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router
