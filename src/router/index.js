import Vue from 'vue'
import VueRouter from 'vue-router'
import movie from './movie'
import tickets from './tickets'
import shop from './shop'
import mine from './mine'
import hotlist from './hotlist'
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
    hotlist
  ]
})

// const router = new VueRouter({
//   router
// })

export default router
