<template>
    <div class="profile">
        <header-bar></header-bar>
        <order-header HeaderTitle="个人中心">
            <template v-slot:description>
                <div style="text-align: right">                    
                    <button class="cartButton" @click="GoToCart"> 
                        <svg style="margin-right: 3px" t="1634905227727" class="icon" viewBox="0 0 1028 1024" version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" p-id="7068" width="16" height="16"><path d="M332.8 790.528q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 
                        7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM758.784 792.576q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 
                        36.864-7.168zM930.816 210.944q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 
                        49.152 41.984 0 20.48-9.728 35.84t-38.4 14.336l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 
                        0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-12.288l103.424 0q20.48 0 32.768 6.144t19.456 15.36 10.24 18.944 5.12 16.896q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM892.928 302.08l-641.024-2.048 
                        35.84 185.344 535.552 1.024z" p-id="7069" fill="#E1251B"></path></svg>我的购物车</button>
                </div>
            </template>
        </order-header>
        <div class="profileContent safeContent">
            <div class="leftNav">
                <h3>个人信息</h3>
                    <span @click="GoMyInfo" :class="{active: nowPage===1}">我的资料</span>
                <h3>我的关注</h3>
                <span @click="GoCollect" :class="{active: nowPage===2}">我的收藏</span>
            </div>
            <div class="rightContent">
                <router-view></router-view>
            </div>
        </div>
        <service-bar></service-bar>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../../components/Footer.vue'
import HeaderBar from '../../components/HeaderBar.vue'
import OrderHeader from '../../components/OrderHeader.vue'
import ServiceBar from '../../components/ServiceBar.vue'
    export default {
        components: {
            HeaderBar,
            ServiceBar,
            Footer,
            OrderHeader  
        },
        data() {
            return {
                index: 1,
                nowPage: 1
            }
        },
        watch: {
            $route: {
                deep: true,
                immediate: true,
                handler(val) {
                    if(val.fullPath=== '/myInfo') {
                        this.nowPage = 1
                    } else {
                        this.nowPage = 2
                    }
                }
            }
        },
        methods: {
            GoMyInfo() {
                this.nowPage = 1
                this.$router.push('/profile')
            },
            GoCollect() {
                this.nowPage = 2
                this.$router.push('collect')
            },
            GoToCart() {
                this.$router.push('/myCart')
            }
        }
    }
</script>
<style scoped lang='scss'>
@import '../../assets/scss/config.scss';
.profile {
    height: 1000px;
    background-color: #F0F3EF;
    .cartButton {
        width: 110px;
        height: 40px;
        margin: 0 50px;
        border: 1px solid #e5e5e5;
        background-color: #fff;
        cursor: pointer;
        padding: 0 5px;
        color: #999;
        svg {
            path {
                fill: #666;
            }
        }
        &:hover {
            border: 1px solid  $colorA;
            color: $colorA;
            svg {
                path {
                    fill: #E1251B;
                }
            }
        }
    }
    .profileContent {
        display: flex;
        justify-content: space-between;
        .leftNav {
            width:180px;
            height: 600px;
            background-color: #fff;
            padding: 15px 20px;
            box-sizing: border-box;
            .active {
                color: $colorA;
            }
            h3 {
                margin-top: 15px;
            }
            span {
                display: block;
                margin-top: 10px;
            }
        }
        .rightContent {
            margin-top: 20px;
            width: 995px;
            box-sizing: border-box;
            background-color: #fff;
            padding: 20px 20px;
           

        }
    }
}
</style>
