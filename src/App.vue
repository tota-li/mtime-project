<template>
  <div id="app">
     <TabBar v-if="$route.meta.flag"/>
    <keep-alive exclude="moviepages">
    <router-view></router-view>
    </keep-alive>
    <Footer/>
  </div>
</template>
<script>
import TabBar from "@common/components/tabBar";
import Footer from "@common/components/Footer";
export default {
  name: "App",
  components: {
    TabBar,
    Footer
  }
};
</script>

<style>
 * {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    ul,
    li {
        list-style: none;
    }
  #app{
    height: 100%;
    width: 100%
  }
 *{overflow-x: hidden;}
</style>
