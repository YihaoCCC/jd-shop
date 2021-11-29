<template>
  <div id="app">
    <router-view></router-view>
    <el-backtop ></el-backtop>
    <model
      content="当前未登录，是否跳转至登录界面？（全局提示组件）"
      SureText="确认"
      CancelText="稍后登录"
      @SureClick='GoToLogin'
      @CancelClick='cancel'
      :IsShow="isShowGoToLogin"
    >
    </model>
  </div>
</template>

<script>
import Model from './components/Model';
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {
    Model
  },
  // 全局的计算属性 用来判断是否登录
  computed: {
      GetUserName: {
        get() {
          return this.$store.state.user.userName
        }
      },
      ...mapState(['isShowGoToLogin'])
  },
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
    GoToLogin() {
      this.$store.dispatch('changeIsShow', false)
      console.log(13232)
      this.GoLogin() //全局方法
    },
    cancel() {
      this.$store.dispatch('changeIsShow', false)
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
