import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "./indexs"
import ticket from "./ticket"
import shopping from "./shopping"
import mine from "./mine"
import mowan from "./mowan"
import shuma from "./shuma"
import fushi from "./fushi"
import jiaju from "./jiaju"
import manwei from "./manwei"
import quanbu from "./quanbu"
import xinpin from "./xinpin"
import xingzhan from "./xingzhan"

Vue.use(VueRouter);

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new VueRouter({
  mode:"hash",
  routes:[
    {
      path:"/",
      redirect:"/index"
    },
    index,
    ticket,
    shopping,
    mowan,
    mine,
    shuma,
    fushi,
    jiaju,
    manwei,
    quanbu,
    xinpin,
    xingzhan
  ]
})

export default router
