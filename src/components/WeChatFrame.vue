<template>
    <transition name="test-modal">
    <div class="weChat"  v-show="showTranslate"  >
        <!-- //遮罩层 -->
        <div class="weChat__Back"></div> 
        <div class="weChat__Box" >
            <img src="../assets/imgs/pay/icon-scan.png" alt="" >
            <div class="weChat__Box__Code "  >
                <div class="codeHeader">
                    <span>
                        微信支付
                    </span>
                    <svg @click="$emit('cancel')" t="1627278288945" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="809" width="14" height="14">
                        <path d="M585.412525 512.594747L973.601616 124.418586c19.600808-19.600808 19.600808-51.898182 0-71.49899l-2.120404-2.120404c-19.600808-19.600808-51.898182-19.600808-71.49899 0L511.793131 439.518384 123.61697 50.799192c-19.600808-19.600808-51.898182-19.600808-71.49899 0l-2.120404 2.120404c-20.11798 19.600808-20.11798 51.898182 0 71.49899l388.189091 388.189091L49.997576 900.783838c-19.587879 19.600808-19.587879 51.898182 0 71.49899l2.120404 2.120404c19.600808 19.600808 51.898182 19.600808 71.49899 0L511.793131 586.214141l388.189091 388.176162c19.600808 19.600808 51.898182 19.600808 71.49899 0l2.120404-2.120404c19.600808-19.600808 19.600808-51.898182 0-71.49899L585.412525 512.594747z m0 0" p-id="810"></path>
                    </svg>
                </div>
                <img :src="imgUrl" alt="">
                <p>
                    请使用<span>微信</span>扫一扫
                </p>
                <p>二维码完成支付</p><p style="color: #FF6600;font-weight: bold">二维码为个人付款码，仅做演示使用，不会改变虚拟商城订单状态</p>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
    export default {
        name: "WeChatFrame",
        props:{
          imgUrl:String,
            showTranslate:Boolean
        },

    }
</script>

<style lang="scss">
.weChat{
        position: fixed;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        z-index: 9;
        /*transition: all 1s ease;*/
    /*方法一*/
   /* &.test-modal-enter-active{
        top:0
    }
    &.test-modal-leave-active{
        top:-100%;
    }
    &.test-modal-enter{
        top:-100%
    }*/
    /*方法二*/
    &.test-modal-enter-active {
        animation: test-modal .8s;
    }

    &.test-modal-leave-active {
        animation: test-modal .8s reverse;
    }

    @keyframes test-modal {
        from {
            top:-100%
        }
        to {
            top:0
        }
    }
    .weChat__Back{
        position: fixed;
        width: 100%;
        height: 100%;
        top:0;
        background-color: #333333;
        opacity: 0.4;
        z-index: 6;
    }
   .weChat__Box{
       position: absolute;
       width: 500px;
       left: 50%;
       top: 50%;
       transform: translate(-50%,-50%) ;
       z-index: 6;
       display: flex;
       justify-content: space-between;
       align-items: center;
       transition: all 0.5s;

       /*animation: mymove  1s;
       @keyframes mymove{

           from {top:-50%;}
          to {top:50%; }
       }*/

       .weChat__Box__Code{
           background-color: #ffffff;
           width: 370px;
           height: 360px;
           text-align: center;//只能控制标签元素，不能控制div中的子div，子div要用margin：auto来控制水平居中
           .codeHeader{
               box-sizing: border-box;
               padding: 10px 15px;
               margin: auto;
               width: 100%;
               height: 40px;
               background-color: #f5f5f5;
               span{
                   font-size: 14px;
                   float: left;
               }
               svg{
                   float: right;
                   vertical-align: middle;
                   transition: all 0.6s;
                   &:hover{
                       transform: rotate(90deg);
                   }
               }
           }
           img{
               margin-top:10px ;
               width: 207px;
               height: 210px;
           }
           p{
               margin-top: 5px;
               span{
                   color: #FF6600;
               }
           }
       }
       img{
           width: 50%;
       }
   }
}
</style>