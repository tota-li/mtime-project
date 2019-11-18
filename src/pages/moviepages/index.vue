<template>
  <div>
    <div class="title">
      <div class="moveback">
        <img
          src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F10%2F30%2F104105.16992052_1280X720X2.jpg&width=420&height=280&clipType="
        />
      </div>

      <div class="movie-main">
        <img
          :src="value.image"
        />
        <div>
          <h3>{{value.titleCn}}</h3>
          <p>{{value.titleEn}}</p>
          <p>113分钟</p>
          <p>{{value.type[0]}}/{{value.type[1]}}</p>
          <p>{{value.release.date.split('-')[0]}}年{{value.release.date.split('-')[1]}}月{{value.release.date.split('-')[2]}}日中国上映</p>
          <b>我想看</b>
          <b>我要评分</b>
        </div>
      </div>
      <div class="introdu">
        <h2>{{value.commonSpecial}}</h2>
      </div>
      <div
        class="movietext"
      >{{value.content}}</div>
    </div>
  </div>
</template>

<script>
import { moivepages } from "@api/movie"
export default {
  components: {},
  name: "moviepages",
  data() {
    return {
      checkid: "",
      value:[]
    };
  },
  methods: {},
  async created() {
    this.checkid = this.$route.params.id;
    console.log(this.checkid);
    let datab = await moivepages(this.checkid);
    this.value = datab
    console.log(datab)

    
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
html,
body {
  height: 100%;
}

a {
  text-decoration: none;
}

ul,
li {
  list-style: none;
}
img {
  vertical-align: middle;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem 0 1.4rem;
  margin-top: 0.625rem;
  z-index: 3;
  position: absolute;
  width: 92%;
}

header span img {
  height: 1.5rem;
  width: 1.5rem;
}

header div img {
  width: 1rem;
}

.title {
  width: 100%;
  margin: 0 auto;
}

.moveback {
  background: url("https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F10%2F30%2F104105.16992052_1280X720X2.jpg&width=420&height=280&clipType=")
    no-repeat;
  background-size: cover;

  border-bottom: 10px solid black;
}

.moveback img {
  filter: blur(15px);
  margin-top: -3.8rem;
  border: 0;
  width: 100%;
}

.nav-box {
  width: 100%;
  position: flxed;
}
.movie-main {
  display: flex;
  padding: 1.25rem;
}
.movie-main img {
  width: 8.5rem;
}
.movie-main div {
  margin-left: 1.875rem;
}
.movie-main p {
  line-height: 1.875rem;
}
.movie-main b {
  display: inline;
  padding: 0 1.25rem;
  margin-right: 0.25rem;
  border: 1px solid black;
  border-radius: 15px;
}
.introdu {
  text-align: center;
}
.movietext {
  padding: 0 1.25rem;
  line-height: 1.875rem;
  text-indent: 2.5rem;
}
</style>