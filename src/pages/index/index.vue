<template>
    <div>
        <!-- 轮播图部分 -->
        <div class="swiperSecond">
            <div class="safeContent">
                <!-- 轮播图 -->
                <swiper-banner ref="swiper"></swiper-banner>
                <!-- 秒杀部分 -->
                <second-buy></second-buy>
            </div> 
        </div>
        <!-- 促销部分 -->
        <sale></sale>
        <!-- 楼层分割线 -->
        <div class="flooerSpace">
            <h1>为你推荐</h1>
        </div>
        <!-- 推荐部分 -->
        <div class="safeContent recommend">
            <!-- 推荐部分 -->
            <recommand></recommand>
            <!-- 服务条款 -->
        </div>
    </div>
</template>
<script>
import SwiperBanner from './c-pages/SwiperBanner'
import SecondBuy from './c-pages/SecondBuy' 
import Recommand from './c-pages/Recommand'
import Sale from './c-pages/Sale'

export default {
    components: {
        SwiperBanner,
        SecondBuy,
        Recommand,
        Sale
        
    },
    data() {
        return {
            
        }
    }
}
</script>
<style scoped lang='scss'>
    @import '../../assets/scss/index.scss';

</style>