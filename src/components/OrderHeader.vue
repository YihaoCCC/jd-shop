<template>
    <div class="orderHeader">
        <div class="safeContent">
            <div class="logo" @click="GoToIndex">
                <img src="../assets/imgs/logo-banner-desgin.png" alt="" title="点击回到主页">
            </div>
            <div class="title">
                {{ HeaderTitle}}
            </div>
            <div class="description">
               <slot name='description'></slot>
            </div>
            <span>{{userName}}</span>
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
     computed: {
         userName: {
             get() {
                 return this.$store.state.user.userName
             }
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
    position: sticky;
    top: 0;
    z-index: 5;
    .safeContent {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo {
        width: 180px;
        height: 70px;
        cursor: pointer;
        margin-right: 20px;
        img {
            width: 100%;
            height: 100%;
        }
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
