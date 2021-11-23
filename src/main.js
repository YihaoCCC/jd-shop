import Vue from 'vue'
import cookie from 'vue-cookie'


import App from './App.vue'
import router from './router'
import { Carousel,CarouselItem, Backtop, Icon, Message, Rate, Radio, RadioGroup } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import yhRequest from './service';
import store from './store'


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
Vue.use(cookie)
Vue.prototype.$message = Message
// Vue.component(Message.name,Message);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
