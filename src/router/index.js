import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "./indexs"
import ticket from "./ticket"
import shopping from "./shopping"
import mine from "./mine"
import mowan from "./mowan"

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
    mine
    
  ]
})

export default router
