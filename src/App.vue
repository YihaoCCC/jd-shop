<template>
  <div id="app">
    <router-view></router-view>
    <el-backtop ></el-backtop>
  </div>
</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style lang='scss'>
@import './assets/scss/reset';
@import './assets/scss/config';
#app{
  background-color: #f7f8f9;
}
</style>
