<template>
    <div>
        <header-bar></header-bar>
        <Header></Header>
        <router-view></router-view>
        <service-bar></service-bar>
        <Footer></Footer>
        
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import HeaderBar from '../components/HeaderBar.vue'
import Footer from '../components/Footer'
import ServiceBar from '../components/ServiceBar'
export default {
  components: { 
      HeaderBar,
      Header,
      Footer,
      ServiceBar
    },
  
    data() {
        return {
            
        }   
    },
    methods: {

    },
}
</script>
