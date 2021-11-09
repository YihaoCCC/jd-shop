<template>
    <div>
        <header-bar></header-bar>
        <order-header></order-header>
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
          ServiceBardata() {
         return {

         }
     }
 }
</script>
