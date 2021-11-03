import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import { Carousel,CarouselItem } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

axios.interceptors.response.use(function(){
  console.log('收到了请求')
})

// Vue.component(Carousel.name, Carousel)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.use(axios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
