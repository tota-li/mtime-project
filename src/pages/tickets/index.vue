<template>
  <div>
    <div class="banner">
      <div class="banner_left">
          <router-link tag="span" :to="'/address/'">{{this.$store.state.city.nm}}</router-link>
        <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_city.png" alt />
      </div>
      <div class="banner_right">
        <input type="text" placeholder="筛选影院" />
      </div>
      <div class="banner-p">
        <p>搜索</p>
      </div>
    </div>
    <div class="nav">
      <div>
        <a href>离我最近</a>
        <span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAAXNSR0IArs4c6QAAAJ5JREFUSA3N1ksOgCAMBFAbzkXisdiJO47lgnuhNTHxw6ctKE4y28lbDhhjbAhhGn4QAJiV937RWsPmGXuaEOOcswoRvVEHBi07qCfqjLmAeqDumAfoS1QMEwV9gUphkqA3UTlMFvQGqoQpglqiKBgSqAWKiiGDalAcDAskQXExbBAHJcGIQBSUFCMG5VA1mCpQDFWLwc0mwZOHbTG2AsaPc+rNNOCIAAAAAElFTkSuQmCC"
            alt
          />
        </span>
      </div>
      <div>
        <a href>全城</a>
        <span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAAXNSR0IArs4c6QAAAJ5JREFUSA3N1ksOgCAMBFAbzkXisdiJO47lgnuhNTHxw6ctKE4y28lbDhhjbAhhGn4QAJiV937RWsPmGXuaEOOcswoRvVEHBi07qCfqjLmAeqDumAfoS1QMEwV9gUphkqA3UTlMFvQGqoQpglqiKBgSqAWKiiGDalAcDAskQXExbBAHJcGIQBSUFCMG5VA1mCpQDFWLwc0mwZOHbTG2AsaPc+rNNOCIAAAAAElFTkSuQmCC"
            alt
          />
        </span>
      </div>
      <div>
        <a href>影厅特效</a>
        <span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAAXNSR0IArs4c6QAAAJ5JREFUSA3N1ksOgCAMBFAbzkXisdiJO47lgnuhNTHxw6ctKE4y28lbDhhjbAhhGn4QAJiV937RWsPmGXuaEOOcswoRvVEHBi07qCfqjLmAeqDumAfoS1QMEwV9gUphkqA3UTlMFvQGqoQpglqiKBgSqAWKiiGDalAcDAskQXExbBAHJcGIQBSUFCMG5VA1mCpQDFWLwc0mwZOHbTG2AsaPc+rNNOCIAAAAAElFTkSuQmCC"
            alt
          />
        </span>
      </div>
    </div>
    <div class="body" v-for="item in cinema" :key="item.id" >
      <div class="pice">
        <span>{{item.cinameName}}</span>
        <b>{{item.showtimeCount}}</b>
        <i>元起</i>
      </div>
      <div class="adress">
        <p>{{item.address}}</p>
      </div>
      <div class="box">
        <li v-show="item.feature.has3D==1">3D</li>
        <li v-show="item.feature.hasIMAX==1">IMAX</li>
        <li v-show="item.feature.hasVIP==1">VIP</li>
      </div>
    </div>
  </div>
</template>

<script>
import { ticket } from "@api/movie";
import {mapState} from "vuex";
export default {
  name: "tickets",
  methods: {},
  data() {
    return {
      cinema:[],
    };
  },
   created() {
     this.handleGetMovieList(this.$store.state.city.cityId)
  },
  activated() {
    this.handleGetMovieList(this.$store.state.city.cityId)
  },
  methods:{
    async handleGetMovieList(cityId){
    let data = await ticket(cityId);
    this.cinema = data.data.cinemaList;
    }
  }
};
</script>

<style>
.banner {
  height: 3.125rem;
  width: 100%;
  background: #f6f6f6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
}
.banner_left span {
  font-size: 1rem;
}
.banner_left img {
  width: 0.625rem;
  height: 0.3125rem;
}
.banner_right input {
  height: 2.125rem;
  width: 10.25rem;
  outline: none;
  border-radius: 0.4375rem;
  border: 1px solid #ccc;
  background: url("http://static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png")
    no-repeat 0.04rem center;
  padding-left: 0.875rem;
  font-size: 1rem;
  background-size: 1.125rem;
}
.banner-p p {
  width: 3.75rem;
  height: 1.875rem;
  text-align: center;
  line-height: 1.875rem;
  border: 1px solid black;
  border-radius: 0.3125rem;
}
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2.5rem;
  flex-shrink: 0;
  box-sizing: border-box;
  color: #777;
  font-size: 1rem;
  border-bottom: 1px solid #ccc;
}
.nav div span img {
  height: 0.5rem;
  width: 0.5rem;
  margin-left: 0.1875rem;
}
.body {
  box-sizing: border-box;
  margin-left: 0.625rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
}
.box {
  display: flex;
}
.box div {
  height: 1.6875rem;
  line-height: 1.125rem;
}
.box li {
  margin: 0.3125rem 0.125rem;
  border: 1px solid #6d8297;
  font-size: 0.5rem;
  color: #6d8297;
}
.pice {
  font-size: 0.8125rem;
  line-height: 1.25rem;
  margin-top: 0.625rem;
}
.pice b {
  color: #ff8600;
  margin-left: 1.3rem;
}
.pice i {
  color: #ff8600;
  font-size: 0.625rem;
}
.adress {
  font-size: 0.625rem;
  color: #555;
  line-height: 1.25rem;
}
</style>