<template>
  <div id="app">
    <router-view></router-view>    
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
