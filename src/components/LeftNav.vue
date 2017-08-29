<template>
	<div id="leftNav">
		<aside class="left_nav fl">
			<div class="nav_title">
				<h3 class="fl"><a>{{topCatetory}}</a></h3>{{topCatetoryLink | toUpperCase}}
			</div>
			<ul>
				<li :class="{'active':value.subLink==curCatetory}" v-for="(value, index) in secCatetory" >
				<router-link :to="'/index/catetory/'+value.subLink">
					<span class="fl"></span>{{value.subName}}
				</router-link>
				</li>
			</ul>
		</aside>
	</div>
</template>
<script>
	export default{
		data : function(){
			return {
				allNavData : [],
				curCatetory : "",
				topCatetory : "",
				topCatetoryLink : "",
				secCatetory : []
			}
		},
		watch: {
    		// 如果路由有变化，会再次执行该方法
	    	'$route': 'updateLeftByUrl'
		},

		methods : {
			getLeftNav : function(){
				var _this = this;
				this.$http.get('/src/data/nav.data').then(function(res){
					_this.allNavData = res.data;
					_this.updateLeftByUrl();
				}).catch(function(err){
					console.log('请求左侧导航数据出错',err);
				})
			},
			updateLeftByUrl : function(){
				//首先清空有关左侧导航的数据
				this.curCatetory = "";
				this.topCatetory = "";
				this.topCatetoryLink = "";
				this.secCatetory = [];
				//根据导航中的参数来决定左侧导航中的内容
				this.curCatetory = this.$route.params.catetoryId;
				//由于知道最多二级导航，这里可以这么写,倘若有后台，可以传参直接请求对应数据
				for(var index in this.allNavData){
					//如果链接是一级栏目
					if(this.allNavData[index].link == this.curCatetory){
						this.topCatetory = this.allNavData[index].name;
						this.topCatetoryLink = this.allNavData[index].link;
					}
					//如果链接是二级栏目
					if(this.allNavData[index].havesub){
						for(var index2 in this.allNavData[index].sub){
							if(this.allNavData[index].sub[index2].subLink == this.curCatetory){
								this.secCatetory = this.allNavData[index].sub;
								this.topCatetory = this.allNavData[index].name;
								this.topCatetoryLink = this.allNavData[index].link;
							}
						}
					}
				}
				
			}
		},
		mounted : function(){
			this.getLeftNav();		
		}
	}
</script>
<style>	
	.left_nav{width:250px;}
	.left_nav .nav_title{height:78px;line-height:88px;background: url(/static/img/nav_title.png) no-repeat;font-size: 10px;color:#9C9C9C;}
	.left_nav .nav_title h3{line-height:78px;font-size:18px;margin: 0 10px 0 10px;}
	.left_nav .nav_title h3 a:hover{text-decoration: none;}
	.left_nav ul li{padding-left:119px;height:48px;line-height:48px;border-bottom:1px dotted #4B4B4B;}
	.left_nav ul li span{display:none;}
	.left_nav ul li a{display:inline-block;width:250px;height:48px;line-height: 48px;}
	.left_nav ul li a:hover{cursor: pointer;text-decoration: none;}
	.left_nav ul li.active{padding-left:0;border-bottom:none;background:#930400;}
	.left_nav ul li.active a{color:white;}
	.left_nav ul li.active span{display:block;width:10px;height:11px;background: url(/static/img/nav_arrow.png) no-repeat;margin:20px 15px 0 94px;}
</style>