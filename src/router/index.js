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
import shuma from "./shuma"
import fushi from "./fushi"
import jiaju from "./jiaju"
import manwei from "./manwei"
import quanbu from "./quanbu"
import xinpin from "./xinpin"
import xingzhan from "./xingzhan"

Vue.use(VueRouter);


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
