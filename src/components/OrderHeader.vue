<template>
    <div class="orderHeader">
        <div class="safeContent">
            <div class="logo" @click="GoToIndex"></div>
            <div class="title">
                {{ HeaderTitle}}
            </div>
            <div class="description">
               <slot name='description'></slot>
            </div>
            <span>username</span>
        </div>
    </div>
</template>
<script>
 export default {
     props: {
         HeaderTitle:{
             type: String,
             default: '页面标题'
         },
         description: {
             type: String,
             default: '这是页面的描述文字'
         }
     },
     methods: {
         GoToIndex() {
             this.$router.push('/')
         }
     }
 }
</script>
<style scoped lang='scss'>
@import '../assets/scss/config.scss';
.orderHeader {
    background-color: #fff;
    height: 80px;
    padding: 5px 0;
    box-sizing: border-box;
    border-bottom: 2px solid $colorA;
    .safeContent {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo {
        width: 180px;
        height: 70px;
        background: url('../assets/imgs/logo-banner-desgin.png');
        background-size: cover;
        background-repeat: no-repeat;
        cursor: pointer;
        margin-right: 20px;
    }
    .title {
        font-size: 26px;
        color: #666;
    }
    .description {
            flex: 2;
            color: #999;
            margin: 7px 0 0 15px;
            span {
                  font-size: 12px;
            }
    }
    span {
        display: inline-block;
        font-size: 16px;
        margin-top: 5px;
        color: #888;
    }
}
</style>
