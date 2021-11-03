<template>
    <div class="BannerContent">
        <div class="swiperSecond">
            <div class="safeContent">
                <swiper-banner></swiper-banner>
                <second-buy></second-buy>
            </div> 
        </div>
        <div class="safeContent recommend">
            <recommand></recommand>
        </div>
        
    </div>
</template>
<script>
import SwiperBanner from './c-pages/SwiperBanner'
import SecondBuy from './c-pages/SecondBuy' 
import Recommand from './c-pages/Recommand'
export default {
    components: {
        SwiperBanner,
        SecondBuy,
        Recommand
    },
    data() {
        return {
            
        }
    }
}
</script>
<style scoped lang = 'scss'>
    .swiperSecond{
        background: url('../../assets/imgs/bannerBg.webp') no-repeat center;
        height: 710px;
    }
</style>