<template>
	<div id="content" class="content">
		<div class="contentA container">
		<carousel></carousel>	
		</div>
		<div class="contentB container">
			<div class="left fl">
				<div class="title">
					<div class="title_name">
						<h3>通知公告</h3>
					</div>
					<div class="more"><a href="">MORE+</a></div>
				</div>
				<div class="main">
					<div class="focusBox2">
						<ul class="pic">
							<li v-for="index in 6"><a href="#"><img :src="tzgg[index+1].pic"/></a></li>
						</ul>
						<div class="txt-bg"></div>
						<ul class="num">
							<li v-for="index in 6"><a></a><span></span></li>
						</ul>
					</div>
					<div class="news">
						<div class="sec_title">
							<h4>{{tzgg[0].title}}</h4>
						</div>
						<div class="news_text">
							<p>{{tzgg[0].abstractContent}}
							<span class="xiangqing fr">【<a href="/index/catetory/aaa/article/bbb">详情</a>】</span>
							</p>
						</div>
					</div>
					<div class="news_list">
						<ul>
							<li v-for="index in 6">&gt;<a href="">{{tzgg[index+1].title}}</a><span>[{{tzgg[index+1].publicTime | normalTime}}]</span></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="right fr">
				<div class="title">
					<div class="title_name">
						<h3>用户登录</h3>
					</div>
				</div>
				<div class="login-info">
					<div class="login-form container">
						<form action="login" name="loginForm" id="loginForm" role="form">
							<label for="userName">用户账户</label>
							<div class="inputuser">
								<input type="text" id="userName" name="account" placeholder="请输入手机号"></br>
							</div>
							<label for="userPassword">输入密码</label>
							<div class="inputpwd">
								<input type="password" id="userPassword" name="password" placeholder="请输入密码">
							</div>
							<div class="remember">
								<div class="rememberme fl">
									<input class="fl" id="rememberMe" type="checkbox" value="true" name="rememberMe">
									<label class="fl" for="rememberMe">下次自动登录</label>
								</div>
								<div class="forget fr">
									<a href="#">忘记密码</a>
								</div>
							</div>
							<div class="buttons fl">
								<button class="login fl" type="submit"><span class="loginfor7">登 录</span><span class="arrow fr"><img src="../assets/img/login_icon.png"></span></button>
								<button class="prologin">专家登录<span class="arrow fr"><img src="../assets/img/login_icon.png"></span></button>
							</div>
							<div class="regist fr">
								<span>没有账号？<a href="">点击注册</a></span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="contentC container">
			<div class="left fl">
				<div class="title">
					<div class="title_name">
						<h3>中心介绍</h3>
					</div>
					<div class="more"><a href="">MORE+</a></div>
				</div>
				<div class="main">
					<div class="pic fl">
						<a href=""><img src="../assets/img/pic.png"></a>
						<div class="doc">
							<a class="docbtn fl" href="#">
								<div class="A"></div>
								<h4>支撑材料</h4>
							</a>
							<a class="docbtn fr" href="#">
								<div class="B"></div>
								<h4>申报书</h4>
							</a>
						</div>
					</div>
					<div class="txt fr">
						<p>
							首都经济贸易大学（Capital University of Economics and Business）简称“首都经贸”，坐	落于中国北京，是一所拥有经济学、管理学、法学、文学、理学和工学等六大学科，以经济学	 、管理学为重要特色和突出优势的财经类大学。
							学校创建于1956年，是由原北京经济学院和原北京财贸学院于1995年6月合并、组建的北京市属重点大学。
						</p>
						<p>
							截止2015年4月，学校共设21个教学单位，41个本科专业；学校在籍学生18664人，其中本科生9764人，硕士研究生2613人，博士研究生293人；
							<span class="xiangqing fr">【<a href="#">详情</a>】</span>
						</p>
					</div>
				</div>
			</div>
			<div class="right fr">
				<div class="title">
					<div class="title_name">
						<h3>中心视频</h3>
					</div>
				</div>
				<div class="videoparent">
					<div id="videoPlayer"></div>
				</div>
			</div>
		</div>
		<div class="contentD container">
			<div class="title">
				<div class="title_name">
					<h3>成果展示</h3>
				</div>
				<div class="more"><a href="">MORE+</a></div>
			</div>
			<div class="main">
				
			</div>
		</div>
		<div class="contentE container">
			<div class="title">
				<div class="title_name">
					<h3>校企合作</h3>
				</div>
				<div class="more"><a href="">MORE+</a></div>
			</div>
			<div class="main">
				<div class="cop cop1">
					<img src="../assets/img/cop.png" />
					<span class="pic_tit"><a href="">首都经济贸易大学</a></span>
				</div>
				<div class="cop cop2">
					<img src="../assets/img/cop.png" />
					<span class="pic_tit"><a href="">首都经济贸易大学</a></span>
				</div>
				<div class="cop cop3">
					<img src="../assets/img/cop.png" />
					<span class="pic_tit"><a href="">首都经济贸易大学</a></span>
				</div>
				<div class="cop cop4">
					<img src="../assets/img/cop.png" />
					<span class="pic_tit"><a href="">首都经济贸易大学</a></span>
				</div>
				<div class="cop cop5">
					<img src="../assets/img/cop.png" />
					<span class="pic_tit"><a href="">首都经济贸易大学</a></span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Carousel from './Carousel.vue'
	
	export default{
		data : function(){
			return {
				tzgg : []
			}
		},
		methods: {
			getTZGG : function(){
				var _this = this;
				this.$http.get('/src/data/catetory.data').then(function(res){
					_this.tzgg = res.data;
				}).catch(function(err){
					console.log('获取通知公告数据出错');
				})
			}
		},
		mounted : function(){
			this.getTZGG();
		},
		components : {
			carousel : Carousel
		},
		updated : function(){
			//增加jquery的操作,只有在updated之后，页面才被渲染出来，也才能使用jquery对样式绑定事件
			$(".cop").hover(function () {
			    $(this).find("span").stop().animate({
			        bottom: "0"
			    }, 150)
			}, function () {
			    $(this).find("span").stop().animate({
			        bottom: "-40px"
			    }, 150)
			});
			$(".focusBox2").slide({ titCell:".num li", mainCell:".pic",effect:"fold", autoPlay:true,trigger:"click",interTime:4000,
				});
		}
	};
</script>
<style scoped>

.contentA{width:1200px;height:320px;border:1px solid #999;margin-top:17px;}
.focusBox {position: relative; width:1180px; height:310px;  padding-top: 5px;z-index:1;}
.focusBox .pic{ position:relative; z-index:0; }
.focusBox .pic img { width:1180px; height:310px; display: block; }
.focusBox .hd {background: url(../assets/img/slider_bg.png) no-repeat;margin:0 auto;position:absolute;left:550px;bottom:0;text-align: center; font-size:0; z-index:1; height:30px;width:120px; *+bottom:0;}
.focusBox .hd li{margin: 7px 5px; background: url(../assets/img/white.png) no-repeat; width:15px; height: 15px;cursor: pointer;display:inline-block; *display:inline; zoom:1;  _background: url(../assets/img/white.png) no-repeat;}
.focusBox .hd li.on{background: url(../assets/img/black.png) no-repeat;}
.focusBox .prev{ width: 40px; height: 40px; background: url(../assets/img/left.png) no-repeat 0 0; position: absolute; top: 45%; left:-10px; z-index: 10; cursor: pointer; text-indent: -9999px; filter:alpha(opacity=50);opacity:0.5;  }
.focusBox .next { width: 40px; height: 40px; background: url(../assets/img/right.png) no-repeat 0 0; position: absolute; top: 45%; right:-10px; z-index: 10; cursor: pointer; text-indent: -9999px; filter:alpha(opacity=50);opacity:0.5;  }
.focusBox .prev:hover,
.focusBox .next:hover { filter:alpha(opacity=80) !important;opacity:0.8 !important;}

.title{height:36px;border-bottom:3px solid #B40E02;}
.title .title_name{float:left;width:120px;height:36px;background:url(../assets/img/title_bg.png);color:#fff;line-height:36px;}
.title .title_name h3{display:block; margin-left:40px;font-size: 17px;font-family:'Microsoft Yahei';}
.title .more{float:right;width:45px;height:15px;margin-top:16px;margin-right:20px;}
.title .more a{font-size: 12px;color:#999;}

.contentB{width:1200px;height:350px;margin-top:30px;}
.contentB .left{width:825px;height:350px;}
.contentB .left .main{height:290px;margin-top:20px;}

.focusBox2 {float:left;position: relative; width: 370px; height: 180px; overflow: hidden; font: 12px/1.5 Verdana, Geneva, sans-serif; text-align: left; background: white; }
.focusBox2 .pic img { width: 370px; height: 180px; display: block; }
.focusBox2 .txt-bg { position: absolute; bottom: 0; z-index: 1; height: 20px; width:100%;  background: #000; filter: alpha(opacity=50); opacity: 0.5; overflow: hidden; }
.focusBox2 .num {position: absolute; z-index: 3; bottom: 5px; right: 8px; }
.focusBox2 .num li{ background:url(../assets/img/dot_hui.png)  no-repeat; float: left; position: relative; width: 8px; height: 8px;overflow: hidden; text-align: center; margin-right:5px; cursor: pointer; }
.focusBox2 .num li a,.focusBox .num li span { position: absolute; z-index: 2; display: block; color: white; width: 100%; height: 100%; top: 0; left: 0; text-decoration: none;}
.focusBox2 .num li span { z-index: 1; background: black; filter: alpha(opacity=50); opacity: 0.5; }
.focusBox2 .num li.on,.focusBox .num a:hover{ background:url(../assets/img/dot_white.png) no-repeat;}

.xiangqing{font-size: 15px;color:red;*margin-top:-30px;color:#950600;}
.xiangqing a{color:#950600;}

.contentB .left .news{float:right;width:410px;height:180px;}
.sec_title{height:27px;width:300px;border-bottom: 1px solid #ddd;line-height: 27px;}
.sec_title h4{font-size: 16px;font-family:'Microsoft Yahei';}
.contentB .left .news_text p{text-indent: 2em; margin-top:5px;line-height: 30px;font-size: 14px;font-family:'宋体';}
.news_list{margin-top: 10px;float:left;width:100%;height:95px;}
.news_list ul{font-size: 15px;border-top: 1px solid #ddd;}
.news_list ul li{margin-right:40px;height:32px;line-height: 32px; float:left;width:45%;border-bottom: 1px dotted #666;}
.news_list ul li a{margin-left:13px; font-family: "宋体";}
.news_list ul li:hover a{color:#B80C00;text-decoration:none;}
.news_list ul li span{float:right;*margin-top:-34px;}

.contentB .right{width:346px; height:350px;}
.contentB .right .login-info{width:345px;height:280px;border:1px solid #ccc;border-radius: 8px;margin-top: 20px;}
.login-form{width:240px;}
.login-form label{display: block;height:30px;line-height:30px;}
.inputuser,.inputpwd{width:240px;height:34px;line-height:34px;position:relative;}
.inputuser{background:url(../assets/img/login_user.png);}
.inputpwd{background:url(../assets/img/login-pwd.png);}
#userName,#userPassword{position:absolute;left:37px;top:2px;width:200px;height:30px;border:none;height:25px\9;top:6px\9;}
.remember{margin-top: 17px;}
.rememberme{width:140px;}
#rememberMe{height:28px;}
.forget{height:28px;line-height: 28px;margin-right:27px;}
.login-form a{color:#188FED;}
.buttons button{margin-top:20px;height:35px; background-color: #FF8E01;border:1px solid #CECECE;border-radius: 5px;color:#fff;*border:none;}
.buttons button span{*display: inline;*margin-left:10px;}
.buttons button .loginfor7{*margin-right:17px;}
.buttons button .arrow{width:16px;height:16px;margin-right:10px;margin-top:2px;*margin-top:-17px;}
.buttons .login{width:85px;}
.buttons .prologin{width:115px;margin-left:35px;}
.regist{width:154px;heihgt:18px;margin-top:18px;}

.contentC{width:1200px;height:320px;margin-top:30px;}
.contentC .left{width:825px;height:320px;}
.contentC .left .main{margin-top:20px;}
.contentC .left .main .pic{width:380px;height:260px;}
.contentC .left .main .pic img{width:380px;height:168px;}
.doc{width:270px;height:80px;margin:10px 0 0 20px;}
.doc .docbtn{display: block; text-align:center;width:120px;height:80px;border:1px solid #7C7D7F;border-radius: 5px;}
.doc .docbtn:hover{text-decoration:none;}
.doc .docbtn div{display: inline-block; width:46px;height:46px;margin:5px 0;}
.doc .docbtn .A{background:url(../assets/img/icon_zhicheng_hui.png)}
.doc .docbtn:hover .A{background:url(../assets/img/icon_zhicheng_red.png)}
.doc .docbtn .B{background:url(../assets/img/icon_shenbao_hui.png)}
.doc .docbtn:hover .B{background:url(../assets/img/icon_shenbao_red.png)}
.contentC .left .main .txt{width:415px;height:260px;}
.contentC .left .main .txt p{text-indent: 2em; line-height: 30px;font-size: 14px;font-family:'宋体';}

.contentC .right{width:345px;height:320px;}
.contentC .right .videoparent{margin-top:20px;}

.contentD{width:1200px;height:260px;margin-top:20px;}
.contentD .main{width:1200px;}
.ladyScroll{width:1150px;height:200;position:relative;margin-top: 20px;}
.ladyScroll .prev{width:23px;height:40px;position:absolute;top:75px; left:-23px; z-index:100; cursor:pointer; background:url(../assets/img/2340left.png) no-repeat;}
.ladyScroll .next{width:26px;height:46px;position:absolute;top:75px; right:-26px; z-index:100; cursor:pointer; background:url(../assets/img/2646right.png) no-repeat;}
.ladyScroll .prev:hover{filter:alpha(opacity=90) !important;opacity:0.9 !important;}
.ladyScroll .next:hover{filter:alpha(opacity=90) !important;opacity:0.9 !important;}
.ladyScroll .scrollWrap{width:1150px;overflow:hidden;position:absolute;}
.ladyScroll dl{float:left;width:260px;position:relative;margin-right:34px;border:1px solid #666;border-radius: 10px;overflow: hidden;}
.ladyScroll span{display:block;width:260px;height:45px;position:absolute;bottom:-45px;background:#000;filter:alpha(opacity=70);opacity:0.70;border-radius:8px;/* transition:bottom 0.2s ease-in-out;-moz-transition:bottom 0.2s ease-in-out; Firefox 4-webkit-transition:bottom 0.2s ease-in-out; Safari and Chrome-o-transition:bottom 0.2s ease-in-out; Opera */}
.ladyScroll dt{width:260px;overflow:hidden;}
.ladyScroll img{display:block;width:260px;height:200px;}
.ladyScroll dd{display:block;width:260px;height:45px;line-height:45px;font-size:16px;color:#fff;overflow:hidden;position:absolute;bottom:-45px;text-align: center;/* transition:bottom 0.2s ease-in-out;-moz-transition:bottom 0.2s ease-in-out; Firefox 4-webkit-transition:bottom 0.2s ease-in-out; Safari and Chrome-o-transition:bottom 0.2s ease-in-out; Opera */}
.ladyScroll dd a{color:#fff;}
.ladyScroll dd .xiangqing{color:red;}
.ladyScroll dd a:hover{ text-decoration:none;}

.contentE{width:1200px;height:217px;margin-top:30px;}
.contentE .main{margin-top:20px; position: relative;}
.contentE .cop{width:233px;height:155px;border:1px solid #7C7D7F;border-radius: 9px; position: relative;overflow: hidden;}
.contentE .cop img{width:233px;height:155px;}
.contentE .cop1{ position:absolute;left:0}
.contentE .cop2{ position:absolute;left:241px;}
.contentE .cop3{ position:absolute;left:482px;}
.contentE .cop4{ position:absolute;left:723px;}
.contentE .cop5{ position:absolute;right:0}
.pic_tit{width: 233px;height: 40px;text-align: center;line-height: 30px;position: absolute;bottom:-40px;left: 0px;background:rgba(0,0,0,0.7); filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#4C000000,endcolorstr=#4C000000);}
.pic_tit a{display:block;width: inherit;height: inherit;font-size: 14px;font-weight: 600;color: #ffffff;}

</style>