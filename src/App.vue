<template>
  <div id="app">
    <TabBar v-if="$route.meta.flag"/>
   <keep-alive>
     <router-view>
       
     </router-view>
   </keep-alive>
   
  </div>
</template>

<script>
import TabBar from "@common/tabBar"
export default {
  name:"App",
  components:{
    TabBar
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none
}
#app{
  height: 100%;
}

</style>
