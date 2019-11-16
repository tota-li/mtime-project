<template>
    <div class="fushi"> 
        <div class="nav">
			<v-touch @tap="handleBack()" class="bc"><span>
				&lt;
			</span></v-touch>
			<div>
				<input class="input" type="text" placeholder="正版电影周边">
					
				
				<i class="nav-right">
					
				</i>
			
		</div>	
		</div>
		
		
		<div class="banner">
        <div class="banner_left"><span>北京</span><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_city.png" alt=""></div>
        <div class="banner_right"><input type="text" placeholder="筛选影院"></div>
        <div class="banner-p"><p>搜索</p></div>
    </div> 
		
		
<!--content-->
	<BscrollB ref="scroll">
		<div class="content">
			<ul>
				<li v-for="(item,index) in goodsList" :key=index>
					<i style="background:#25ACBD; display: inline-block; color: #FFFFFF; " >{{item.iconText}}</i>
					<img :src="item.imageSrc"/>
					<p>
						<em>{{item.goodsTip}}</em>
						{{item.name}}
					
					<br/>
					<strong>
						￥{{item.minSalePrice | numFilter}}
					</strong></p>
				</li>
			
			</ul>
		</div>
		</BscrollB>
    </div>
</template>

<script>
import {xinpinlistApi} from "@api/xinpin"
import BScroll from "better-scroll"
    export default {
		name:"xinpin",
		data(){
			return{
				goodsList:[]
			}
		},
created(){
			this.handlegetList();
		
		},
		
		filters:{
		numFilter (value) {
    	// 截取当前数据到小数点后两位
    	let realVal =value/100
    	return realVal
  }

		},
		methods:{
			handleBack(){
				this.$router.back();
			},
			async handlegetList(){
			let data =await xinpinlistApi();
			this.goodsList=data.content.goods.goodsList
			}

		},
		
			
		
		watch:{
			goodsList(){
				this.$refs.scroll.handleRefreshDown();
				
			},
			goodsList(){
				this.$refs.scroll.handlefinishPullUp();
				
			},
		},
		mounted(){
			this.$refs.scroll.handleScroll()
			this.$refs.scroll.handlepullingDown(()=>{
				this.handlegetList();
			});
			this.$refs.scroll.handlepullingUp(()=>{
				this.handlegetList();
			})

		}
		
		
    }
</script>

<style lang="scss" scoped>
   li{
			list-style: none;
		}
			/*nav*/
			.nav {
				width: 100%;
				height: 54px;
				background: #333;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.nav div{
				margin-left: 15px;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
			}
			.input{
				font-size: 18px;
				width: 65%;
				height: 36px;
				line-height: 36px;
				padding:0 0 0 32px;
				border-radius: 5px;
				background: #fff url(//static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png) no-repeat 0.05rem center;
				background-size:20px 20px;
				position: relative;
				border: none;
			}
			.nav-right{
				background: url(//static1.mtime.cn/html5/20191022151144/images/2014/send.png) no-repeat center center;
    background-size: auto 26px;
    width: 25%;
    height: 100%;color: #eee;
			}
			.nav .bc{
				width: 15%;
				margin: 0;
			}
			.nav span{
				margin-left:10px;
				font-size:60px;
				font-family: 宋体;
				font-weight: 900;
				color: #eee;
			}
			
			/*nav2 */
			
.banner{
    height:50PX;
    width:100%;
    background:#f6f6f6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-shrink: 0;
}
.banner_left span{
    font-size:16PX
}
.banner_left img{
    width:10PX;
    height:5PX;
}
.banner_right input{
    height:34PX;
    width:100PX;
    outline: none;
    border-radius: 7PX;
    border:1px solid #ccc;
    background:url("http://static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png") no-repeat  0.04rem center;
    padding-left:24px;
    font-size: 16px;
    background-size: 18px;
}
.banner-p p{
    width:60px;
    height:30px;
    text-align:center;
    line-height:30px;
    border:1px solid #fff;
    border-radius: 5px;
}

			// .nav2{
			// 	width: 100%;
			// 	height: 40rem;
			// 	display: flex;
			// 	justify-content: space-between;
			// 	align-items: center;
			// }
			// .nav2 ul{
			// 	width: 100%;
			// 	height:100%;
			// 	display: flex;
			// 	justify-content: space-between;
			// 	align-items: center;
			// 	background: #fff;
			// }
			// .nav2 li{
			// 	width: 30%;
				
			// 	display: flex;
			// }
			// .nav2 li select{
			// 	width: 100%;
			// 	margin-left:18px;
			// 	border: none;
			// 	font-size: 40px;
			// 	border-right: 1px solid;
			// }
			// .nav2 li:nth-child(3) select{
			// 	border: none;
			// }
			// .nav2 li select option{
			// 	font-size:16px;
			// 	margin-right:18px;
				
			// 	}
				
				/*content*/
				.wrappers{
				width: 100%;
				height: 500px;
				overflow: hidden;
			
			}	
				
			.content{
				width: 100%;
				
				background: #eee;
				display: flex;
				padding-top: 10px;
			}
			.content ul{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
			}
			.content ul li {
				width: 49%;
				height: auto;
				position: relative;
				display: flex;
				flex-direction:column ;
				margin-bottom: 6px;
				position: relative;
			}
			.content ul li i{
				font-size:16px;
				position: absolute;
				top:2px;
				left: 2px;
				font-style: normal;
			}
			.content ul li img{
				width: 100%;
			}
			.content ul li p{
				height:70px;
				font-size: 14px;
				background: #FFFFFF;
			}
			.content ul li em{
				color: #ff8600;
				border: 1px solid #FF8600;
				border-radius: 2px;
				display: inline-block;
				margin-top: -2px;
				margin-right: 4px;
				margin-left: 3px;
				font-style: normal;
				text-align: center
			}
			.content ul li strong{
				font-weight: normal;
				color: #FF8600;
				margin-left: 3px;
				font-size:20px;
				position: absolute;
				left: 0px;
				bottom: 2px
			}
</style>