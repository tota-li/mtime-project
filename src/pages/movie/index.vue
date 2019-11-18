<template>
  <div>
    <div class="seach">
      <div>
        <router-link tag="b" :to="'/address/'">北京</router-link>
        <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_city.png" />
      </div>
      <div>
        <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png" />
        <input placeholder="影片/影院/影人，任你搜" />
      </div>
    </div>

    <div class="main">
      <router-link to="/hotlist" class="main_more">
        <b>正在热映({{comimgList.length}})</b>
        <img
          src="https://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png"
          style="transform:rotate(270deg);"
        />
      </router-link>
      <div class="movielist">

        <router-link tag="a" :to="'/moviepages/'+item.id+'/'+item.t" v-for="item in comimgList.slice(0,8)" :key="item.id">
          <img :src="item.img" />
          <p>{{item.t}}</p>
        </router-link>

    
      </div>
      <div>
        <router-link  to="/future" class="main_fut">
          <b>即将上映({{comingmove}})</b>
          <img
            src="https://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png"
            style="transform:rotate(270deg);"
          />
        </router-link>
      </div>
    </div>

    <div class="cin_line">
      <p></p>
      <p></p>
    </div>
    <img
      src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F31%2F143906.61810640.jpg&width=640&height=320&clipType=4"
      class="ad_img"
    />
    <div class="cin_line">
      <p></p>
      <p></p>
    </div>

    <div class="news">
      <h3>今日热点</h3>
     <News :newslist="newslist" />

  </div>
  </div>
</template>

<script>
import { movienowApi,newsnowApi } from "@api/movie";
import News from  "@compoents/indexAd";
export default {
  components:{
    News
  },
  name: "movie",
  data() {
    return {
      comimgList: [],
      comingmove:"",
      newslist:[]
    };
  },
  methods: {},
  async created() {
    let data = await movienowApi();
    let news = await newsnowApi();
    // console.log(data);
    
    this.comimgList = data.ms;
    this.comingmove = data.totalComingMovie;
    this.newslist = news.data.list;
    console.log(this.comimgList);
  }
};
</script>

<style>
.seach {
  border: #f6f6f6;
  padding: 0.8rem 1.5rem 0.75rem;
  border: 1px solid #d8d8d8;
  display: flex;
  box-sizing: border-box;
  height: 3.875rem;
  align-items: center;
  justify-content: space-around;
}

.seach div:nth-of-type(1) img {
  height: 0.375rem;
  width: 0.675rem;
}

.seach div:nth-of-type(2) img {
  height: 1.3rem;
  width: 1.5rem;
  position: relative;
  top: 0.3125rem;
  left: 0.1875rem;
}

.seach div:nth-of-type(2) {
  border: 1px solid #d8d8d8;
  border-radius: 30px;
  padding: 0 1.8rem 0 0;
  height: 2.335938rem;
  width: 12.625rem;
}

.seach input {
  border: none;
  height: 2.3rem;
  margin-left: 0.1875rem;
}

.main {
  padding: 0.5rem 1.5rem 1.5rem;
}

.main div:nth-of-type(1) {
  display: flex;
}

.movielist {
  display: flex;
  flex-wrap: wrap;
}

.movielist img {
  width: 4.75rem;
  height: 7.125rem;
  border: 1px solid #bbb;
}

.movielist a {
  text-align: center;
  width: 25%;
  height: 11rem;
}

.main_more img,
.main_fut img {
  width: 1.05rem;
  height: 0.59375rem;
  margin-top: 0.1875rem;
}

.main_more,
.main_fut {
  display: flex;
  justify-content: space-between;
  align-items: centers;
  margin-bottom: 0.3125rem;
}

.main_fut {
  border-top: 1px solid #bbb;
  padding-top: 0.5rem;
}
.footer_list {
  display: flex;
  justify-content: space-around;
  padding: 1.05rem 0;
}

.more {
  text-align: center;
}
.cin_line p:nth-of-type(1) {
  height: 0.5rem;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0.2rem 0.2rem rgba(51, 51, 51, 0.05);
}

.cin_line p:nth-of-type(2) {
  height: 1.2rem;
  background: #f6f6f6;
}

.cin_line {
  height: 1.7rem;
}

.ad_img {
  height: 11.71875rem;
  width: 23.4375rem;
}

.news_list {
  padding: 0.975rem 0;
  border-bottom: 1px solid #bbb;
}

.news {
  padding: 0.375rem 1.125rem 0 1.125rem;
}

.news_list img {
  width: 21.0625rem;
  height: 10.25rem;
}
</style>