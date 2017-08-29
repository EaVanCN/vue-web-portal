<template>
	<div id="pageheader">
		<header class="container">
			<div class="backsite fr">
				<a href="">首页</a>
				<a href="">返回首页</a>
			</div>
			<pageNav></pageNav>
	</header>
	</div>
</template>
<script>

	import Nav from './Nav.vue'
	export default{
		components : {
			'pageNav' : Nav
		}
	};
</script>
<style scoped>
	header{width:1200px;height:145px;background:url(/static/img/header_bg.png);position:relative;}
	header .backsite{height:18px;margin-top: 40px;margin-right:22px;}
	header .backsite a{ padding:0 8px;font-size: 13pxs;color: #666666;}
	header .backsite a:first-child{border-right:1px solid #930400;}
</style>