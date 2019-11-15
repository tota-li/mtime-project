<template>
  <div>
    <div class="titlelist">
      <v-touch class="backimg" @tap="handleBack()">
        <img src="https://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png" />
      </v-touch>

      <div class="head-box">
        <router-link tag="li" to="/hotlist">正在热映</router-link>
        <router-link tag="li" to="/future">即将上映</router-link>
      </div>
    </div>

    <div v-for="item in atten" :key="item.id">
    <div class="kong"> 
      <b>最受欢迎</b>
      <b class="ong">({{atten.length}}部)</b>
    </div>
    <div class="nav">
      <span class="float">9月20日</span>
      <div class="nav-left">
       <img
          :src="item.image"
        />
      </div>
      <div class="nav-right">
        <div class="nav-q">{{item.title}}</div>
        <div class="nav-porper">
          <i>{{item.wantedCount}}</i>
          <span>人想看 - {{item.type}}</span>
        </div>
        <div>导演：{{item.director}}</div>
        <div>演员：{{item.actor1}},{{item.actor2}}</div>
        <div class="nav-car">预告片</div>
      </div>
    </div>
    </div>


    <div class="box"></div>



    <div class="kong1">
      <b>即将上映</b>
      <b class="ong1">({{movie.length}}部)</b>
      <p class="time">9月</p>
    </div>




    <div class="body"  v-for="item in movie" :key="item.id">
      <span class="left-left">{{item.rDay}}日</span>
      <div class="body-left">
         <img
          :src="item.image"
        />
      </div>
      <div class="body-right">
        <div class="body-q">{{item.title}}</div>
        <div class="body-porper">
          <i>{{item.wantedCount}}</i>
          <span>人想看 - 剧情</span>
        </div>
        <div>导演：{{item.director}}</div>
        <div class="body-car">预告片</div>
      </div>
    </div>
   
  </div>
</template>

<script>
import { moivefuture } from "@api/movie";
export default {
    
  name: "future",
  data() {
    return {
      atten: [],
      movie:[]
    };
  },
  methods: {
    handleBack() {
      this.$router.back();
    }
  },
  async created() {
       let data = await moivefuture();
    this.atten = data.attention;
    this.movie = data.moviecomings;
    console.log(this.atten);
  }
};
</script>

<style lang="scss" scoped>
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
.head-box .router-link-active {
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

.kong{
    font-size: 1.125rem;
    margin: .9375rem
}
.nav{
     display: flex;
    box-sizing: border-box;
    margin:.0625rem 1.0625rem;
    position:relative;
    padding-top:.875rem;
    border-right:1px solid #ccc;
    border-top:1px solid #ccc
}
.nav div{
    margin:.25rem 0;
    font-size:.75rem
}
.nav-left img{
    width:5rem;
    height:7.75rem
}
.box{
    height:.625rem;
    background:#f6f6f6;
    display: flex;
    flex-shrink: 0;
}
.kong1{
    height:3.125rem;
    box-sizing: border-box;
    margin-left:1.0625rem;
    line-height:2.5rem;
    flex-shrink: 0;
    font-size: 1.125rem;

}
.body{
    display: flex;
    box-sizing: border-box;
    margin-left: 1.0625rem;
    position:relative;
    padding:.1rem 0 .625rem 1.875rem;
    border-bottom:1px solid #ccc;
    margin-right:0
}
.body-left img{
    width:3.75rem;
    height:6.25rem
}
.body .body-right{
    margin-left:1rem
}
.body .body-car{
    width:5rem;
    height:1.75rem;
    border:1px solid #659c0d;
    color:#659c0d;
    border-radius: 1.0625rem;
    text-align: center;
    line-height:1.75rem;
    margin-top:1rem
}
</style>