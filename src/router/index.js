import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/three",
    name: "three",
    component: () => import("../views/ThreeDemo.vue"),
  },
  {
    path: "/cascader",
    name: "cascader",
    component: () => import("../views/CascaderDemo.vue"),
  },
  {
    path: "/dialog",
    name: "dialog",
    component: () => import("../views/DialogDemo.vue"),
  },
  {
    path: "/classTable",
    name: "classTable",
    component: () => import("../views/ClassTableDemo.vue"),
  },
  {
    path: "/formDemo",
    name: "formDemo",
    component: () => import("../views/FormDemo.vue"),
  },
  {
    path: "/checkDemo",
    name: "checkDemo",
    component: () => import("../views/Demo/CheckDemo.vue"),
  },
  {
    path: "/typeDemo",
    name: "typeDemo",
    component: () => import("../views/Demo/TypeDemo.vue"),
  },
  {
    path: "/compareDemo",
    name: "compareDemo",
    component: () => import("../views/Demo/CompareDemo.vue"),
  },
  {
    path: "/axiosDemo",
    name: "axiosDemo",
    component: () => import("../views/AxiosDemo.vue"),
  },
  {
    path: "/pagDemo",
    name: "pagDemo",
    component: () => import(`../views/Demo/PagDemo.vue`),
  },
  {
    path: "/ImgDemo",
    name: "ImgDemo",
    component: () => import("../views/Demo/ImgDemo.vue"),
  },
  {
    path: "/tagDemo",
    name: "tagDemo",
    component: () => import("../views/CheckDemo/CheckDemo.vue"),
  },
  {
    path: '/rolePage',
    name: 'rolePage',
    component: () => import('../views/RolePage.vue')
  },
  {
    path: '/SelectDropdown',
    name: 'SelectDropdown',
    component: () => import('../views/CheckDemo/SelectDropdown.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router
