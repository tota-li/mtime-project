<template>
  <div>
    <div class="banner">
      <div class="banner_left">
        <span>北京</span>
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
    <div class="body">
      <div class="pice">
        <span>金逸国际影城荟聚店</span>
        <b>44</b>
        <i>元起</i>
      </div>
      <div class="adress">
        <p>北京市大兴区欣宁大街15号7-03-122-C1</p>
      </div>
      <div class="box">
        <li>3D</li>
        <li>IMAX</li>
        <li>VIP</li>
      </div>
    </div>
  </div>
</template>

<script>
import { ticket } from "@api/movie";
export default {
  name: "tickets",
  methods: {},
  data() {
    return {
      cinema:[],
    };
  },
  async created() {
    // this.checkid = this.$route.params.id;
    // console.log(this.checkid);
    let data = await ticket();
    // this.cinema = data;
    console.log(data);
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