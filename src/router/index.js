import Vue from 'vue'
import VueRouter from 'vue-router'
import movie from './movie'
import tickets from './tickets'
import shop from './shop'
import mine from './mine'
import hotlist from './hotlist'
import future from './future'
import moviepages from './moivepage'
import shopping from "./shopping"
import mowan from "./mowan"
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path:"/",
      redirect:"/movie"
    },
    movie,
    tickets,
    shop,
    mine,
    hotlist,
    future,
    shopping,
    mowan,
  ]
})

// const router = new VueRouter({
//   router
// })

export default router
