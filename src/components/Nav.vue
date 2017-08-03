<template>
	<div id="pageNav">
		<nav>
			<ul>
				<li><router-link to="/index">首页</router-link><span></span></li>
				<li v-for="(item,index) in navData">
					<router-link v-if="!item.havesub" :to="'/index/catetory/'+item.link">{{item.name}}</router-link>
					<a v-else href="javascript:void(0)">{{item.name}}</a>
					<span></span>
					<ul v-if="item.havesub" class="sub">
						<li v-for="(sub,index) in item.sub"><router-link :to="'/index/catetory/'+sub.subLink">{{sub.subName}}</router-link></li>
					</ul>
				</li>
				
			</ul>
		</nav>
	</div>
</template>
<script>
export default{
	data : function(){
		return {
			navData : []
		}
	},
	methods : {
		getNav : function(){
			var _this = this;
			this.$http.get('/src/data/nav.data').then(function(res){
				_this.navData = res.data;
			}).catch(function(err){
				console.log('请求导航数据出错');
			})
		}
	},
	mounted : function(){
		this.getNav();
	}	
}
</script>
<style scoped>
	nav{width:740px;height:42px;position: absolute;bottom: 0;right: 0;}
	nav ul>li{width:74px;float:left;text-align: center;line-height: 42px;position:relative;color:white;}
	nav ul>li a{font-family:'Microsoft Yahei';font-size:14px;display: inline-block;color:white;text-decoration:none;}
	nav ul>li a:hover{text-decoration:none;}
	nav ul>li a:link{color:white;}
	nav ul>li span{transition: all 0.3s ease;display:block; position:absolute; left:50%; width:0px; height:0px; background-color:#000; top:39px; left:50%;}
	nav ul>li:hover span{height:3px; left:0; width:100%; right:0;}

	nav>ul>li .sub{transition: opacity .5s;position: absolute;display: none;height:auto;z-index: 10;}
	nav>ul>li .sub li{height:30px;line-height: 30px;background:#A80900;border-bottom: 1px dotted #000;}
	nav>ul>li:hover .sub{display:block;opacity: 1;}
	nav>ul>li .sub li:hover{background:#930400;}
</style>