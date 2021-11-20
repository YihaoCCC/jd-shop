import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Carousel,CarouselItem, Backtop, Icon, Message, Rate } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import yhRequest from './service';



Vue.config.productionTip = false

Vue.prototype.yhRequest = yhRequest

// Vue.component(Carousel.name, Carousel)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Backtop)
Vue.use(Icon)
Vue.use(Rate)
Vue.prototype.$message = Message
// Vue.component(Message.name,Message);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
