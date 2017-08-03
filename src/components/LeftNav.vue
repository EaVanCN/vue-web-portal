<template>
	<div id="leftNav">
		<aside class="left_nav fl">
			<div class="nav_title">
				<h3 class="fl"><a>中心概况</a></h3>YUN FENG
			</div>
			<ul>
				<li class="active"><a href=""><span class="fl"></span>校园新闻</a></li>
				<li><a href=""><span class="fl"></span>校园动态</a></li>
				<li><a href=""><span class="fl"></span>校园生活</a></li>
				<li><a href=""><span class="fl"></span>公告信息</a></li>
				<li><a href=""><span class="fl"></span>院校刊物</a></li>
				<li><a href=""><span class="fl"></span>院校掠影</a></li>
			</ul>
		</aside>
	</div>
</template>
<script>
	export default{

	}
</script>
<style>	
	.left_nav{width:250px;}
	.left_nav .nav_title{height:78px;line-height:88px;background: url(../assets/img/nav_title.png) no-repeat;font-size: 10px;color:#9C9C9C;}
	.left_nav .nav_title h3{line-height:78px;font-size:18px;margin: 0 10px 0 10px;}
	.left_nav .nav_title h3 a:hover{text-decoration: none;}
	.left_nav ul li{padding-left:119px;height:48px;line-height:48px;border-bottom:1px dotted #4B4B4B;}
	.left_nav ul li span{display:none;}
	.left_nav ul li a{display:inline-block;width:250px;height:48px;line-height: 48px;}
	.left_nav ul li a:hover{cursor: pointer;text-decoration: none;}
	.left_nav ul li.active{padding-left:0;border-bottom:none;background:#930400;}
	.left_nav ul li.active a{color:white;}
	.left_nav ul li.active span{display:block;width:10px;height:11px;background: url(../assets/img/nav_arrow.png) no-repeat;margin:20px 15px 0 94px;}
</style>