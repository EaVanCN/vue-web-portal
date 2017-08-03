<template>
	<div id="article" class="content3 container">
		<leftNav></leftNav>
		<div class="contentArt fr">
			<div class="catetorytitle">
				<h2 class="fl">校园新闻</h2>
				<div class="breadcrumb fr">
					<a href="">首页</a>&gt;<a href="">中心概况</a>&gt;<a href="">校园新闻</a>&gt;<a href="">首都经贸</a>
				</div>
			</div>
			<article>
				<div class="article_title container">
					<h4>{{article.title}}</h4>
				</div>
				<span v-html="article.content"></span>
			</article>
		</div>
	</div>
</template>
<script>
	import leftNav from './LeftNav.vue'
	export default{
		data : function(){
			return {
				article : {}
			}
		},
		components : {
			'leftNav' : leftNav
		},
		methods : {
			getArticle : function(){
				var _this = this;
				this.$http.get('/src/data/article.data').then(function(res){
					_this.article = res.data;
					console.log(_this.article.abstractContent);
				}).catch(function(err){
					console.log('请求文章出错');
				})
			}
		},
		mounted : function(){
			this.getArticle();
		}
	}
</script>
<style scoped>
	/* 三级页面 */
	.content3{width:1200px;min-height:650px;margin-top: 38px;}
	.contentArt{width:890px;margin-top:10px; margin-right: 10px;}
	.article_title{height:70px;line-height:70px;font-size: 18px;text-align: center;border-bottom:1px dotted #999;margin-bottom: 15px;}
	.article_title h4{font-size: 20px;}
	article span{text-indent: 2em;}
	article span p{line-height: 25px;letter-spacing: 2px;}
</style>