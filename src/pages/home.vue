<template>
    <div>
        <header-bar></header-bar>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
        
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import HeaderBar from '../components/HeaderBar.vue'
import Footer from '../components/Footer'
export default {
  components: { 
      HeaderBar,
      Header,
      Footer
    },
  
    data() {
        return {
            
        }   
    },
    methods: {

    },
}
</script>
