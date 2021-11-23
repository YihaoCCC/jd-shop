<template>
  <div id="app">
    <router-view></router-view>
    <el-backtop ></el-backtop>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
     if(this.$cookie.get('userId')){
      this.getUser(this.$cookie.get('userId'));
    }
  },
  methods: {
    getUser(id){
      this.yhRequest.get(`/api/user/${id}`).then((res)=>{
            this.$store.dispatch('saveUser',res)
      })
    },
  }
 
}
</script>

<style lang='scss'>
@import './assets/scss/reset';
@import './assets/scss/config';
#app{
  background-color: #f7f8f9;
}
</style>
