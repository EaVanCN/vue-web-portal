import Vue from 'vue'
import VueRouter from 'Vue-router'
import axios from 'axios'

import $ from './assets/jquery-vendor.js'

import './assets/libs/jquery.SuperSlide.2.1.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import store from './store/'
import App from './App.vue'

import filters from './filters/'
import routes from './router-config.js'

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
	routes,
	mode: 'history'
})

//Vue.filter(名字,函数)
Object.keys(filters).forEach((key)=>{
  Vue.filter(key,filters[key])
});
/*axios.interceptors.request.use(function(config){//配置发送请求的信息
	store.dispatch('showLoading')
	return config;
},function(error){
	return Promise.reject(error);
})

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});*/

Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
