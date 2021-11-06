<template>
    <div class="detail-header">
        <div class="container safeContent">
            <div class="pro-title">
                {{title}}
            </div>
            <div class="pro-param">
                <div class="test">
                    <a href="">概述</a>
                    <a href="">参数</a>
                    <a href="">用户评价</a>
                </div>
                <slot name="buy"> 
                </slot>    
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    props:{
        title: String,
    },
    data() {
        return {
            message: '我是头部吸顶'
        }
    }
}
</script>
<style scoped lang='scss'>
.detail-header{
    position: sticky;
    top: 0px;
    height: 70px;
    line-height: 70px;
    border-top:0.6px solid  #e5e5e5;
    background: #ffffff;
    box-shadow: 0 5px 5px #e5e5e5;
    .container{
        display: flex;
        justify-content:space-between;
        .pro-title{
                font-size: 16px;
                font-weight: bold;
            }
        .pro-param{
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            a{
                color: #666666;
                &:after{
                    content: '|';
                    margin: 0 10px;
                }
                &:last-of-type::after{
                    content: '';
                }
            }
            
        }
    }
    
}
</style>
