<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import index from './components/Index.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>
@import '/static/css/common.css';
@import '/static/css/normalize.css';
</style>
