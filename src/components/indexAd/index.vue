<template>
  
<div>
    <div class="body_title">
      <a class="body_title_top">
        <h2>正在热映</h2>
      </a>
    </div>


<div v-for="item in newslist" :key='item'>

    <div class="bo" :key="item.id" v-if="item.styleType==2">
      <div class="img_box">
        <a href>
          <img :src="item.images[0].imgUrl"
            alt
          />
          <h3>{{item.title}}</h3>
          <time>27分钟前</time>
        </a>
      </div>
    </div>
   
  
    <div class="img_left" :key="item.id" v-if="item.styleType==1">
      <ul class="img_left-ul">
        <div class="img_left_img">
          <a href>
           <img :src="item.images[0].imgUrl"
            alt
          />
          </a>
        </div>
        <div class="img_left_size">
          <a href>{{item.title}}</a>
          <p>
            <span></span>
          </p>
          <p>
            <time>13小时前</time>
          </p>
        </div>
      </ul>
    </div>
    
    <!-- <div class="body_small">
      <div class="body_small-title" :key="item.id" v-if="item.styleType==3">
        <p>{{item.title}}</p>
      </div>
      <div class="body_small-img">
       <img :src="item.images[0].imgUrl"
            alt
          />
       <img :src="item.images[1].imgUrl"
            alt
          />
       <img :src="item.images[2].imgUrl"
            alt
          /> 
      </div>
      <div class="body_small-p">
        <time>17小时前</time>
      </div>
    </div> -->
    </div>

    </div>

</div>
</template>

<script>
    export default {
        props:{
          newslist:{
            type:Array,
            required:true
          }
        },
         created(){
          console.log(this.newslist);
          var timestamp=new Date().getTime();
          console.log(timestamp)

        }
    }
</script>

<style>
.img_box{
  border-bottom: 1px solid #d8d8d8;
  padding: 1.3rem 0 1.3rem 0;
}
time{
  font-size: .875rem;
  color:#999999
}

.img_left {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
}
.img_left-ul {
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
   padding: 1.3rem 0 1.3rem 0;
}
.img_left_size p:nth-of-type(2){
  font-size: .875rem;
  color:#999999
}
.body_small-img{
  display: flex;
  justify-content: space-between;
}
.body_small{
   padding: 1.3rem 0 1.3rem 0;
}
.body_small-img img{
  width: 30%;
}
.img_box img{
  width:23.3125rem;
}
.img_left_img img{
  width:9.0625rem;
}
</style>