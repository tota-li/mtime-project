<template>
  <div class="footer">
    <div class="footer_other">
      <router-link tag="li" v-for="item in footer" :key="item.id" :to="item.path">
          {{item.text}}
      </router-link>
    </div>
    <div class="copy">
      <img src="https://static1.mtime.cn/html5/20191022151144/images/2014/fot_logo.png" />
      <p>Copyright 2006-2019 Mtime.com Inc. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
    export default {
        name : "Footer",
        data(){
            return{
    footer:[{
                    id:0,
                    text:"PC版",
                    path:"/#"
            },{
                    id:1,
                    text:"客户端",
                    path:"/#"
            },{
                    id:2,
                    text:"意见反馈",
                    path:"/#"
            },{
                    id:3,
                    text:"帮助中心",
                    path:"/#"
            }]
    }
        }
    }
</script>

<style>
.footer{
  width: 100%;
 position: relative;
 
}
.footer_other {
  height: 3.3125rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  background: rgb(246, 246, 246);
}
.footer_other li {
  width: 24%;
  font-size: 0.875rem;
  padding: 1.2375rem 1.125rem;
}
.copy {
  background: rgb(246, 246, 246);
  text-align: center;
  font-size: 0.75rem;
  color: #cdcdcd;
  padding-bottom: 1rem;
}
.copy img {
  width: 4.5rem;
  height: 1.5rem;
}

.footer_other li{
    border-bottom: none;
    font-size: .75rem
}
</style>