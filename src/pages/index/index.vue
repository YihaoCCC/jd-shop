<template>
    <div>
        <!-- 轮播图部分 -->
        <div class="swiperSecond">
            <div class="safeContent">
                <!-- 轮播图 -->
                <swiper-banner></swiper-banner>
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
        <service-bar/>
        
    </div>
</template>
<script>
import SwiperBanner from './c-pages/SwiperBanner'
import SecondBuy from './c-pages/SecondBuy' 
import Recommand from './c-pages/Recommand'
import Sale from './c-pages/Sale'
import ServiceBar from '../../components/ServiceBar'
export default {
    components: {
        SwiperBanner,
        SecondBuy,
        Recommand,
        Sale,
        ServiceBar
    },
    data() {
        return {
            
        }
    },
    mounted() {
        this.yhRequest.get('https://api.muxiaoguo.cn/api/meinvtu',{
            params: {
                num: 10
            }
        })
    }
}
</script>
<style scoped lang='scss'>
    .swiperSecond{
        background: url('../../assets/imgs/bannerBg.webp') no-repeat center;
        height: 710px;
    }
    //分割楼层
   .flooerSpace {
       height: 45px;
       margin-top: 30px;
       h1{
           width: 210px;
           margin: auto;
           text-align: center;
           position: relative;
           &::before {
                width: 25px;
                height: 20px;
                background-size: 50px 20px;
                background-image: url('../../assets/imgs/floor.png');
                background-position: 0px 0px;
                left: 0px;
                content: "";
                position: absolute;
                top: 50%;
                margin-top: -10px;
           }
           &::after {
               width: 25px;
                height: 20px;
                background-size: 50px 20px;
                background-image: url('../../assets/imgs/floor.png');
                background-position: -25px 0px;
                right: 0px;
                content: "";
                position: absolute;
                top: 50%;
                margin-top: -10px;
           }
    }
   }
   
</style>