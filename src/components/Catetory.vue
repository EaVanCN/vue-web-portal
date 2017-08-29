<template>
	<div id="catetory" class="content2 container">
		<leftNav></leftNav>	
		<div class="contentLi fr">
			<div class="catetorytitle">
				<h2 class="fl">校园新闻</h2>
				<div class="breadcrumb fr">
					<a href="">首页</a>&gt;<a href="">中心概况</a>&gt;<a href="">校园新闻</a>
				</div>
			</div>
			<div class="group_buying">
				<ul>
					<li v-for="(item,index) in catetoryList">
	            		<p class="tit"><span class="point fl"></span><a :href="'/index/catetory/aaa/article/'+item.id">{{item.title}}</a><span class="date">{{item.publicTime | normalTime}}</span></p>
	            		<div class="lang fl"></div>
	          		</li>
				</ul>
			</div>
			<div class="splitPage">
				 <p>共{{tottleArticleNum}}篇（<font color="red">{{pageNum}}</font>/{{pageCount}}）
				 <a @click="jumpNewPage(-4)" href="javascript:void(0)">首页</a>&nbsp;&nbsp;
				 <a @click="!(pageNum == 1) && jumpNewPage(-3)" :class="[(pageNum == 1) ? 'disabled-link' : '']" href="javascript:void(0)">上一页</a>
				  &emsp;<span v-for="index in pageCount" @click="jumpNewPage(index)" :class="[(pageNum == index) ? 'cur-page' : '']" >{{index}}</span>&emsp;
				 <a @click="!(pageNum == pageCount) && jumpNewPage(-2)" :class="[(pageNum == pageCount) ? 'disabled-link' : '']" href="javascript:void(0)">下一页</a>&nbsp;&nbsp;
				 <a @click="jumpNewPage(-1)" href="javascript:void(0)">尾页</a></p>
			</div>
		</div>
	</div>
</template>
<script>
	import leftNav from './LeftNav.vue'
	export default{
		data : function(){
			return {
				catetoryList : [],
				pageSize : 10,			//每页显示几篇文章，默认10篇
				pageCount : 0,			//总计多少页
				tottleArticleNum : 0,	//文章总数
				isAvailable : true
			}
		},
		computed : {
			pageNum : function(){
			  return this.$store.getters.pageNum
			}
		},
		methods : {
			jumpNewPage : function(pageState){
				/*旧的判定是否还有更前页的方法
				if(pageState == -3 && this.pageNum == 1){
					alert('当前是第一页，没有更前了');
					return;
				};
				if(pageState == -2 && this.pageNum == this.pageCount){
					alert('当前是最后一页了，没有更后了');
					return;
				};
				*/
				switch (pageState){		//-4表示首页，-3表示上一页，-2表示下一页，-1表示末页
					case -4:
						this.$store.dispatch('pageNumberReset');
				        break;
					case -3:
						this.$store.dispatch('pageNumberSub');
				        break;
				    case -2:
						this.$store.dispatch('pageNumberAdd');
				        break;
				    case -1:
						this.$store.dispatch('pageNumberLast',this.pageCount);
				        break;
 					default:
 						this.$store.dispatch('pageNumberchange',pageState);
				};
				this.getCatetory();
			},
			getCatetory : function(){
				var _this = this;
				this.$http.get('/src/data/catetory.data').then(function(res){
					_this.tottleArticleNum = res.data.length;
					_this.pageCount =Math.ceil(res.data.length/_this.pageSize);
					var catetpryStartIndex = (_this.pageNum-1)*_this.pageSize;
					var i = 0;
					_this.catetoryList = [];
					while(i < _this.pageSize && res.data[catetpryStartIndex]){
						_this.catetoryList.push(res.data[catetpryStartIndex]);
						catetpryStartIndex++;
						i++;
					}
				}).catch(function(err){
					console.log('获取页面文章列表出错',err);
				})
			}
		},
		mounted : function(){
			this.getCatetory();
		},
		components : {
			'leftNav' : leftNav
		}
	}
</script>
<style scoped>
	/* 二级页面开始 */
	.content2{width:1200px;min-height: 575px;margin-top: 38px;}
	
	.contentLi{width:890px;margin-top:10px; margin-right: 10px;min-height: 575px;position: relative;}
	.catetorytitle{height:43px;border-bottom: solid 1px #ccc;}
	.catetorytitle h2 {font-family: "微软雅黑"; line-height:43px; color: #333; font-size: 18px; font-weight: bold; }
	.breadcrumb{margin-top: 22px;line-height: 18px;font-size: 12px;}
	.breadcrumb a{padding:0 5px;color:#A0A0A0;width:30px;}
	.breadcrumb a:last-child{color:#666666;}

	.group_buying{width:890px;font-family:Arial; }
	.group_buying ul { margin: 0 10px 0; zoom:1; }
	.group_buying ul li {border-bottom:1px dotted #ccc;position: relative; height: 36px; line-height:36px;}
	.group_buying ul li img { width: 315px; height:237px; vertical-align:middle; }
	.group_buying .pic_r { position: absolute; left: 345px; top:0; line-height: 24px }
	.group_buying .pic_r em { color: #c00; display: block; font-style:normal; }
	.group_buying .pic_r i { font-style: normal; display: block }
	.group_buying ul li .tit {height: 40px;line-height: 40px; overflow: hidden;}
	.group_buying ul li .abstract{display: none;width:500px;height:205px;padding:0 20px;text-indent: 2em;color:#525252;}
	.group_buying ul li p .point{display:inline-block;width:7px;height:6px; background:url(/static/img/point.png) no-repeat;margin:17px 10px 13px 5px;}
	.group_buying ul li a { float:left;font-size: 15px;}
	.group_buying ul li .date{ float: right;font-size: 13px;color:#A0A0A0;}
	.group_buying ul li .lang{display: none; width:890px;height:10px;background: url(/static/img/lang.png) no-repeat;}
	.group_buying .dis_pi { display: none;}
	.group_buying .dis_pi a{ display:block;border:1px solid #999;width: 325px;height: 247px;}
	.group_buying .dis_pi img{margin: 5px;}
	.group_buying ul .last{border-bottom:0;}
	.group_buying ul li.on {height:260px;position:relative; line-height: 30px; margin-top: 10px;}
	.group_buying ul li.on .tit {text-indent: 1em; font-size: 14px;font-weight:bold; height: 40px;line-height: 40px; overflow: hidden;}
	.group_buying ul li.on .abstract{display:inline-block;}
	.group_buying ul li.on p .point{display: none;}
	.group_buying ul li.on{display:block;border-bottom:none;margin-bottom:24px;}
	.group_buying .on .lang{display: block;margin-top: 12px;}
	.group_buying .on .dis_pi {display:block;} 

	.splitPage{width:100%;height:68px;line-height:68px;text-align:center;position: absolute;bottom:0;}
	.splitPage span{display:inline-block;width:16px;text-align: center;cursor: pointer;}
	.splitPage span.cur-page{color:red;}
	a.disabled-link{cursor: not-allowed;color:#aaa;}
	a.disabled-link:hover{text-decoration: none;}
</style>