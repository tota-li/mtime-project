import Vue from "vue"
import BScroll from "./BScroll"

let componentMap=[
    BScroll
]

componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})