import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import router from './router'
import { Carousel,CarouselItem, Backtop, Icon, Message } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false


// Vue.component(Carousel.name, Carousel)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Backtop)
Vue.use(Icon)
Vue.prototype.$message = Message
// Vue.component(Message.name,Message);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
