<template>
  <div>
    <div class="banner">
      <div class="banner_right">
        <input type="text" placeholder="影片/影院/影人，任你搜" v-model="value"/>
      </div>
    </div>
    <div class="city">
      <div>热门城市:</div>
      <div></div>
    </div>
    <div class="body">
      <a v-for="(item,index) in hotCity" :key="index">{{item.nm}}</a>
      
    </div>
    <div v-for="(item,index) in cityList" :key="index">
    <div class="city">
      <div>{{item.index}}</div>
      <div></div>
    </div>
    <div class="body">
      <v-touch tag="a" @tap="hanleCityTo(child)" v-for="(child) in item.list" :key="child.id">{{child.nm}}</v-touch>
    </div>
    </div>

  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "City",
  data(){
    return{
      value:""
    }
  },
  created(){
    if (
      !(sessionStorage.getItem("cityList") && sessionStorage.getItem("hotCity"))
    ) {
      this.$store.dispatch("city/handleGetCityList");
    }
  },
  computed:{
   ...mapState({
      cityList: state => state.city.cityList,
      hotCity: state => state.city.hotCity
    })
  },
  methods:{
    hanleCityTo(city){
      this.$router.push("/tickets");
      this.$store.commit("city/handleUpdateCity",city)
    }
  },
  watch:{
    value(newVal){
      console(value,'该页面尚无搜索接口')
    }
  }
 
};
</script>

<style>
.city {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1.25rem;
  color: #777;
  font-size: 0.8125rem;
  background: #ebebeb;
  height: 2.25rem;
  flex-shrink: 0;
}
.body {
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding-top: 0.625rem;
  flex-wrap: wrap;
}
.body a {
  width: 25%;
  display: inline-block;
  text-align: center;
  height: 1.875rem;
  color: #333;
}
.banner {
  height: 3.125rem;
  width: 100%;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.banner_right input {
  height: 1.875rem;
  width: 14.375rem;
  outline: none;
  border-radius: 0.4375rem;
  border: 1px solid #ccc;
  background: #fff
    url("http://static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png")
    no-repeat 0.04rem center;
  padding-left: 1.5rem;
  font-size: 1rem;
  background-size: 1.125rem;
}
</style>