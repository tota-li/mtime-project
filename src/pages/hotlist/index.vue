<template>
  <div>
    <div class="titlelist" >
      <v-touch class="backimg"  @tap="handleBack()">
        <img src="https://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png" />
      </v-touch>
      
      <div class="head-box">
         <router-link tag="li" to='/hotlist' >正在热映</router-link>
         <router-link tag="li" to='/future' >即将上映</router-link>
      </div>
    </div>

    <div class="body" v-for="item in hotList" :key="item.id">
      <div class="body-left">
        <img
          :src="item.img"
        />
      </div>
      <div class="body-right">
        <div class="body-right-hed">
          <b>{{item.t}}</b>
          <i>{{item.r}}</i>
        </div>
        <div class="body-right-two">
          <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_dot_01.png" alt />
          <span>{{item.commonSpecial}}</span>
        </div>
        <div class="body-right-img">
          <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/ia_cine_15.png" alt />
        </div>
        <div class="body-right-zi">
          <b>{{item.NearestCinemaCount}}家影院上映{{item.NearestShowtimeCount}}场</b>
          <a href>购票</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { moivefirst } from "@api/movie";
export default {
  name: "hotlist",
  data() {
    return {
      hotList: []
    };
  },
    methods:{
        handleBack(){
            this.$router.back();
        }
    },
  async created() {
    let data = await moivefirst();
    this.hotList = data.ms;
    console.log(this.hotList);
  },
};
</script>

<style>
.titlelist {
  background: #1c2635;
  height: 3.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.titlelist a {
  color: white;
}

.backimg:nth-of-type(1) img {
  width: 1rem;
}

.titlelist a:nth-of-type(2) img {
  width: 1.04375rem;
  height: 1.34375rem;
}
.head-box {
  color: #fff;
  display: flex;
  background: #000;
  width: 16.25rem;
  text-align: center;
  border-radius: 20px;
}
.head-box .router-link-active{
  border: none;
  background: #1c2635;
  border: 1px solid black;
  box-sizing: border-box;
  overflow: hidden;
}
.head-box li {
  width: 50%;
  border-radius: 20px;
  height: 2rem;
  line-height: 2rem;
}
.backimg {
  height: 4rem;
  width: 4rem;
  text-align: center;
  padding-top: 9%;
}
.body {
  display: flex;
  box-sizing: border-box;
  padding: 1.125rem;
}
.body-left img {
  height: 7.375rem;
  width: 4.875rem;
}
.body-left {
  margin-right: 1.5rem;
}
.body-right-hed b {
  font-size: 1.5rem;
}
.body-right-hed i {
  height: 1.5rem;
  width: 1.75rem;
  font-size: 0.875rem;
  margin-left: 0.5rem;
  background: #659d0e;
  color: white;
  font-size: 0.875rem;
}
.body-left-two {
  font-size: 1.0125rem;
  margin-top: 0.40625rem;
}
.body-right-img img {
  width: 3.5625rem;
}
.body-right-zi {
  height: 2.8125rem;
  display: flex;
  align-items: center;
}
.body-right-zi b {
  color: #999999;
  font-weight: normal;
}
.body-right-zi a {
  background: #ff8600;
  color: white;
  border: 1px solid #ff8600;
  font-size: 1rem;
  display: inline-block;
  padding: 0.3125rem 1.25rem;
  border-radius: 1.25rem;
}
</style>