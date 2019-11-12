<template>
  <div class="title">
   <router-link tag="a" to="/index">
      <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/logo_mtime.png" />
    </router-link>

  <router-link tag="a" v-for="item in tabbars" :key="item.id" :to="item.path">
      <li>{{item.text}}</li>
  </router-link>

     <router-link tag="a" to="/mine">
      <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/ico_my.png" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      tabbars: [{
          id:0,
          text:"首页",
          path:"/index"
      },{
          id:1,
          text:"购票",
          path:"/ticket"
      },{
          id:2,
          text:"商城",
          path:"/shopping"
      },]
    };
  }
};
</script>

<style>
.title {
  background: #1c2635;
  height: 3.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
}

.title a {
   
  color: white;
  height: 100%;
  line-height: 3.625rem;
    
}

.title a:nth-of-type(1) img {
  width: 4.1875rem;
  height: 1.34375rem;
}

.title a:nth-of-type(2) img {
  width: 1.04375rem;
  height: 1.34375rem;
}
 .router-link-active{
     box-sizing: border-box;
    border-bottom: 5px solid #eee;
}
.title a:first-child{
    border-bottom: none;
}
.title a:last-child{
    border-bottom: none;
    
}
.title a:last-child img{
    margin-top:.625rem;
}
</style>
