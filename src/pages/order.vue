<template>
    <div>
        <header-bar></header-bar>
        <order-header :HeaderTitle="title">
            <template v-slot:description>
                <span>{{message}}></span>
            </template>
        </order-header>
        <div class="safeContent">
            <router-view></router-view>
        </div>
        <service-bar></service-bar>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../components/Footer'
import HeaderBar from '../components/HeaderBar.vue'
import ServiceBar from '../components/ServiceBar.vue'
import OrderHeader from '../components/OrderHeader.vue'
 export default {
     components : {
         HeaderBar,
          Footer,
          ServiceBar,
          OrderHeader
     },
    data() {
         return {
             title: '订单确认',
             message: '请谨防钓鱼链接或诈骗电话，了解更多'
         }  
     },
     watch: {
         $route :{
             // 立即执行
            immediate: true,
            handler: function(val){
            if( val.fullPath === '/order/Pay' ) {
                this.title = '订单支付'
                this.message = '请在30分钟内完成付款，注意付款时间'
            } else if(val.fullPath === '/order/list'){
                this.title = '订单列表'
                this.message = '这里显示了您的所有订单'
            } else if(val.fullPath.includes( 'order/comment')){
                this.title = '订单评论'
                this.message = '快来发表您对购买宝贝的评论吧！'
            }
            },
            // 深度观察监听
            deep: true
         }
     }
 }
</script>
