<template>
   <div class="scroll_container">
       <div class="scroll_loading" v-if="flag">
        <i class="fa fa-spinner fa-pulse"></i></div>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
   </div>
</template>

<script>
import BScroll from "better-scroll"
    export default {
        name:"BscrollB",
        data(){
            return{
                flag:false,
                
            }
        },
       mounted(){
			this.scroll=new BScroll(this.$refs.wrapper,{
                probeType:1,
                //下拉刷新
                pullDownRefresh:{
                    threshold:50
                },
                //上拉加载更多
                pullUpLoad:true,
			})
					
        },
        methods:{
			handleScroll(){
				this.scroll.on("scroll",(pro)=>{
					if(pro.y>50){
                        this.flag=true;
                    }
				})
            },
            //下拉刷新获取数据
            handlepullingDown(callback){
                this.scroll.on("pullingDown",()=>{
                    
                    callback();
                    
                })
            },
            handleRefreshDown(){
                this.scroll.refresh();
                this.scroll.finishPullDown();
                this.flag=false;
            },
            handlepullingUp(callback){
                this.scroll.on("pullingUp",()=>{
                    callback();
                })
            },
            handlefinishPullUp(){
                this.scroll.finishPullUp();
                this.scroll.refresh();
                 this.flag=false;
            }
        }
    }
</script>

<style>
.wrapper,scroll_container{
    height: 500px;
    overflow: hidden;
}
.scroll_loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
}
</style>