import Vue from 'vue'
import cookie from 'vue-cookie'


import App from './App.vue'
import router from './router'
import { Carousel,CarouselItem, Backtop, Icon, Message, Rate, Radio, RadioGroup, Form, Input, FormItem } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import yhRequest from './service';
import store from './store'

// 注册Vue全局组件，
import Model from '@/components/Model'
Vue.component('Model', Model)


Vue.config.productionTip = false

Vue.prototype.yhRequest = yhRequest

// Vue.component(Carousel.name, Carousel)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Backtop)
Vue.use(Icon)
Vue.use(Rate)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(cookie)
Vue.prototype.$message = Message
// Vue.prototype.$msgbox = MessageBox;
// Vue.component(Message.name,Message);
Vue.prototype.GoLogin = function() {
    router.push('/login')
}
Vue.prototype.GetAndRefreshUserInfo = function() {
  this.yhRequest.get(`/api/user/${this.$cookie.get('userId')}`).then((res)=>{
    this.$store.dispatch('saveUser',res)
  })
  console.log('刷新用户信息')
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
