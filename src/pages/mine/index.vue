<template>
    <div>
        <div class="banner">
    <ul>
        <li class="img-one">
            <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_user.png" alt="">
            <input type="text" placeholder="登录邮箱/手机密码">
        </li>
        <li class="img-two">
            <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_password.png" alt="">
            <input type="password" placeholder="密码">
            <span class="pwd">显示密码</span>
        </li>
    </ul>
</div>
<div class="bod">
    <a class="body">登录</a>
</div>
<div class="bod-bottom">
    <a href="">免费注册</a>
    <a href="">找回密码</a>
    <div class="center">使用第三方登录</div>
</div>
<div class="foot">
    <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/o_sina.png" alt="">
    <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/o_qq.png" alt="">
</div>
    </div>
</template>

<script>
    export default {
        name:"mine"
    }
</script>

<style lang="scss" scoped>
 * {
  margin: 0;
  padding: 0;
}
li,ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
}
img {
  vertical-align: middle;
  border: none;
}
html,body {
  height: 100%;
  background:#f6f6f6;
}
body {
  display: flex;
  flex-direction: column;
}
.head{
    background:#1c2635;
    display:flex;
    height:2.75rem;
    width:100%;
    box-sizing: border-box;
    padding:0 .75rem
}
.head ul{
    height:2.75rem;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items: center;
}
.head ul li{
    display:flex;
    justify-content:center;
    align-items: center;
}
.head-img-one img{
    height:1.0625rem;
    width:52px
}
.head-img-two img{
    height:.9375rem;
    width:.625rem
}
.img-one img{
    width:1.25rem;
    height:1.5rem
}
.img-two img{
    width:1.25rem;
    height:1.5rem
}
.banner input{
    width:15.625rem;
    height:2.5rem;
    outline: none;
    border:0;
    font-size: .875rem;
    padding-left:.625rem
}
.banner li{
    border-bottom:1px solid #ccc
}
.pwd{
    position: absolute;
    display: inline-block;
    width:3.75rem;
    height:2.5rem;
    right:.4375rem;
    top:3.625rem;
    font-size: .875rem;
    color:#1e7dd7
}
.bod{
    height:3.75rem;
    background:#f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:.625rem
}
.body{
    height:2.5rem;
    width:80%;
    background:#1e7dd7;
    text-align: center;
    line-height: 2.5rem;
    color:#fff;
    font-size: .875rem;
    border-radius: 1.1875rem;
}
.bod-bottom{
    height:12.5rem;
    background:#f6f6f6;
    display: flex;
    justify-content:space-between;
    align-items: center;
    box-sizing: border-box;
    padding:0 1.25rem;
    font-size:.9375rem;
   border-bottom:1px solid #ccc;
   padding-bottom:3.125rem;
   flex-shrink: 0;
   position: relative;
}
.bod-bottom a{
    color:#1e7dd7;
    margin-top:1.875rem
}
.center{
    position:absolute;
    background:#f6f6f6;
    top:2.75rem;
    left:36%;
    font-size: .625rem;
    color:#ccc;
    padding:0 .625rem
}
.foot{
    display: flex;
    justify-content: center;
    align-items: center;
    height:6.25rem;
    box-sizing: border-box;
}
.foot img{
    width:3.75rem;
    height:3.75rem;
    margin:0 .625rem
}
</style>