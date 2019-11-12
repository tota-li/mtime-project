<template>
<div class="shop">
    <!--导航-->
		<div class="nav">
			<div>
				<input class="input" type="text" placeholder="正版电影周边">
					
				
				<i class="nav-right">
					
				</i>
			</div>
			
			<!--<form>
				<span>
				<img src="https://static.easyicon.net/preview/119/1191766.gif"/>
			</span>
			<input type="text" placeholder="影片/影院/影人"/>
			<p><img src="https://goss.veer.com/creative/vcg/veer/800water/veer-134978099.jpg"/></p>
			</form>-->
</div>			
			
			<!--content-->
			<div class="content">
				<ul>
					<router-link tag="a" to="/mowan"><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161133.99290860.jpg"/><p>模玩</p></router-link>
					<li><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161141.82690725.jpg"/><p>数码</p></li>
					<li><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161148.25620959.jpg" alt="" /><p>服饰</p></li>
					<li><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161155.82939104.jpg"/><p>家居</p></li>
					<li><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161224.10155577.jpg"/><p>星战</p></li>
					<li><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F23%2F142033.71638312.jpg"/><p>漫威</p></li>
					<li><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161315.97010262.jpg"/><p>新品</p></li>
					<li><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161342.70896250.jpg"/><p>全部</p></li>
				</ul>
			</div>
		
		<!--content2-->
		<div class="content2">
			<div><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F08%2F19%2F141732.33138431.jpg&width=375&height=450&clipType=4"/></div>
			<div>
				<img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F03%2F174012.80503273.jpg&width=750&height=223&clipType=4"/>
			</div>
			<div>
				<img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F09%2F19%2F104402.67521002.jpg&width=374&height=224&clipType=4"/>
			</div>
			<div>
				<img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F03%2F174427.96016382.jpg&width=374&height=225&clipType=4"/>
			</div>
		</div></div>
</template>

<script>
    export default {
        name:"Shopping"
    }
</script>

<style lang="scss" scoped>
html {
    font-size: 16px;
}
.shop{
    width: 100%;
    height: auto;
}
.nav {
				width: 100%;
				height: 54px;
				background: #eee;
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
				background-size: 20px 20px;
				position: relative;
				border: none;
			}
			.nav-right{
				background: url(//static1.mtime.cn/html5/20191022151144/images/2014/i_h_shopping01.png) no-repeat center center;
    background-size: auto 26px;
    width: 25%;
    height: 50px;
			}
			
			/*content*/
			.content{
				width: 100%;
				height: 200px;
				
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				margin-top: 0.2rem;
			}
			.content ul{
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
			}
			.content li{
				width:25%;
				height:50%;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				flex-direction: column;
				justify-content: center;
			}
			.content p{
				font-size: 16px;
				
			}
            .content ul  img{
                width: 60%;
            }
			
			/*content2*/
			.content2{
				width: 100%;
				height: 291px;
				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				
			}
			
			.content2 div:nth-child(1) {
				width: 160px;
				height: 192px;
			}
			.content2 div:nth-child(2) {
				width: 50%;
				height:96px;
			}
			.content2 div:nth-child(3) {
				width: 160px;
				height: 96px;
			}
			.content2 div:nth-child(4){
				width: 50%;
				height: 33%;
			}
			.content2 img{
				width: 100%;
			}
</style>