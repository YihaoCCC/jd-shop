<template>
    <div class="header">
        <div class="headerContent">
            <div class="left">
                <div class="backToIndex" v-if="showBack" >
                    <svg fill='#E1251B' t="1634893366875" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3855" width="16" height="16"><path d="M394.666667 755.626667a29.44 29.44 0 1 1-58.88 0v-160.853334a98.133333 98.133333 0 0 1 27.306666-67.413333 91.733333 91.733333 0 0 1 65.706667-27.733333H597.333333a92.586667 92.586667 0 0 1 65.706667 27.733333 97.706667 97.706667 0 0 1 26.88 67.413333v256a112.213333 112.213333 0 0 1-31.146667 78.08 106.24 106.24 0 0 1-75.946666 32.426667h-298.666667a124.586667 124.586667 0 0 1-90.026667-38.4 131.413333 131.413333 0 0 1-37.12-92.16v-311.893333H50.773333a29.44 29.44 0 0 1-29.44-29.866667 30.293333 30.293333 0 0 1 11.946667-24.32l462.506667-393.813333a29.013333 29.013333 0 0 1 38.4 0l457.813333 394.24a29.866667 29.866667 0 0 1-18.773333 52.906666h-104.106667v360.96a80.213333 80.213333 0 0 1-23.04 59.733334 76.8 76.8 0 0 1-55.04 23.466666h-7.68a29.44 29.44 0 0 1-29.013333-30.293333 29.44 29.44 0 0 1 29.013333-29.866667h7.68a18.346667 18.346667 0 0 0 13.653333-5.973333 21.333333 21.333333 0 0 0 5.973334-14.08v-392.96a29.44 29.44 0 0 1 29.013333-30.293333h53.333333l-378.453333-325.546667-384 325.546667h53.76a29.44 29.44 0 0 1 29.013333 30.293333v341.333333a69.546667 69.546667 0 0 0 20.48 49.493334 66.986667 66.986667 0 0 0 48.213334 20.906666h298.666666a48.64 48.64 0 0 0 34.56-14.933333 49.493333 49.493333 0 0 0 14.506667-35.413333v-256a34.56 34.56 0 0 0-10.24-24.746667 32.426667 32.426667 0 0 0-23.893333-10.24h-166.826667a34.133333 34.133333 0 0 0-24.32 10.24 35.84 35.84 0 0 0-9.813333 24.746667v160.853333z" p-id="3856"></path></svg>
                    <span @click="backIndex">回到主页</span>
                </div>
                <svg t="1634892411032" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2835" width="16" height="16"><path d="M895.616384 347.812188q0 10.22977-0.511489 19.436563t-1.534466 19.436563q-9.206793 84.907093-37.338661 163.164835t-71.096903 150.377622-99.228771 138.613387-121.734266 127.872128q-9.206793 11.252747-23.528472 11.252747-15.344655 0-24.551449-11.252747-65.470529-61.378621-122.245754-128.895105t-100.251748-141.170829-71.608392-152.935065-36.315684-165.210789q0-8.183816-0.511489-15.344655t-0.511489-15.344655q0-71.608392 28.131868-135.032967t76.211788-110.481518 113.038961-74.677323 138.613387-27.62038 138.101898 27.62038 112.527473 74.677323 76.211788 110.481518 28.131868 135.032967zM540.643357 507.396603q33.758242 0 63.424575-12.787213t51.66034-34.26973 34.781219-50.637363 12.787213-61.89011-12.787213-61.89011-34.781219-50.637363-51.66034-34.26973-63.424575-12.787213-63.424575 12.787213-52.171828 34.26973-35.292707 50.637363-12.787213 61.89011 12.787213 61.89011 35.292707 50.637363 52.171828 34.26973 63.424575 12.787213z" p-id="2836"
                 fill="#E1251B"></path>
                 </svg>
                
                <span >天津</span>
            </div>
            <div class="right">
                <span @click="toLogin" v-if="!userName">你好，请登录</span>
                <span  v-else class="username" >{{userName}} 
                    <div class="children">
                        <p @click="GoToProfile" > <svg t="1637891019599" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4047" width="20" height="20"><path d="M639.3 483.2c55.9-39.4 89.3-103.5 89.6-171.9-2.8-120.2-102.5-215.6-222.8-212.9-116.5 2.6-210.3 96.4-212.9 212.9 0.3 68.4 33.6 132.5 89.6 171.9-137.9 50.4-230 181.1-231.1 327.8 0.9 65.4 54.6 117.8 120 116.9h478.8c65.4 0.8 119.1-51.5 120-116.9-1.3-146.7-93.4-277.4-231.2-327.8zM358.4 311.4c-2.1-84.3 64.5-154.3 148.8-156.4 84.3-2.1 154.3 64.5 156.4 148.8S599.1 458 514.8 460.1H511c-83.1 1-151.4-65.6-152.6-148.7z m392 552.8H271.6c-29.7 0.5-54.2-23.2-54.7-53v-0.2c4.4-162.4 139.7-290.5 302.2-286.1 156.2 4.3 281.8 129.9 286.1 286.1-0.4 29.7-24.8 53.5-54.5 53.1-0.2 0.1-0.2 0.1-0.3 0.1z" p-id="4048"></path></svg>个人中心</p>
                        <p @click="LogOut"> <svg t="1637890961994" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3177" width="20" height="20"><path d="M662.016 247.6544a32 32 0 1 1 29.4912-56.832 390.4 390.4 0 1 1-359.0144 0 32 32 0 1 1 29.4912 56.832 326.4 326.4 0 1 0 300.032 0zM544 384a32 32 0 1 1-64 0v-256a32 32 0 1 1 64 0v256z" p-id="3178"></path></svg>退出登录</p>
                    </div>
                </span>
                <span @click="noneEvent">手机访问</span>
                <span @click="noneEvent">网站导航</span>
                <span @click="noneEvent">客户服务</span>
                <span @click="noneEvent">企业采购</span>
                <span @click="noneEvent">哒哒会员</span>
                <span @click="GoColloect">我的收藏</span>
                <span @click="GoToOrder">我的订单</span>
                <span @click="gotoCart">我的购物车</span>
                
            </div>
        </div>
        <model
            title="来自哒哒利亚的提示"
            content='是否确认退出登录'
            :btnType="3"
            @SureClick='out'
            @CancelClick='cancel'
            :IsShow="showLogOut"
        ></model>
    </div>
</template>
<script>
import Model from './Model.vue'

export default {
    components: {
        Model 
    },
    data() {
      
        return {
            message: '我是headerBar',
            showBack: false,
            showLogOut: false,// 退出登录弹框
        }
    },
    computed: {
        userName: {
            get() {
                return this.$store.state.user.userName
            }
        }
    },
    mounted(){
       
    },
    watch:{
        $route: {
            immediate: true,
            handler: function(val){
            if( val.fullPath === '/index' ) {
                this.showBack = false
            } else {
                this.showBack = true
            }
            },
            // 深度观察监听
            deep: true   
        }
    },
    methods: {
        gotoCart() {
            if(this.userName) {
                this.$router.push('/myCart')
            } else {
                this.$store.dispatch('changeIsShow', true) 
            }
        },
        backIndex() {
            this.$router.push('/')
        },
        toLogin() {
            this.GoLogin()
        },
        GoToOrder() {
            if(this.userName) {
                this.$router.push('/order/list')
            } else {
                this.$store.dispatch('changeIsShow', true) 
            }
        },
        GoColloect() {
            if(this.userName) {
                this.$router.push('/collect')
            } else {
                this.$store.dispatch('changeIsShow', true) 
            }
        },
        GoToProfile() {
            if(this.userName) {
                this.$router.push('/profile')
            } else {
                this.$store.dispatch('changeIsShow', true) 
            }
        },
        LogOut() {
            this.showLogOut = true
        },
        out() {
            this.$cookie.set('userId','',{expires:'-1'});
            this.$store.dispatch('saveUser', {})
            this.showLogOut = false
            this.$router.push('/').then(() => {
                history.go(0)
            })
            this.$message.warning('你已成功退出登录')
        },
        cancel() {
            this.showLogOut = false
        },
        noneEvent() {
            this.$message.warning('该功能暂未开放')
        }
    }
}
</script>
<style scoped lang='scss'>
    @import '../assets/scss/config';
    .header{
        width: 100%;
        background-color: #e5e5e5;
        .headerContent {
            width: $width;
            margin: auto;
            height: 30px;
            display: flex;
            justify-content: space-between;
            line-height: 30px;
            color: #999;
            font-size: 12px;
            .left{ 
                display: flex;
                align-items: center;
                .backToIndex {
                    display: flex;
                    align-items: center;
                    margin-right: 5px;
                }
                
            }   
            .right {
                display: flex;
                align-items: center;
                .username {
                    font-weight: bolder;
                    position: relative;
                    &:hover {
                        color: $colorA;
                        .children {
                            height: 78px;
                        }
                    }
                    .children {
                        position: absolute;
                        transition: all 0.5s;
                        overflow: hidden;
                        top: 30px;
                        left: -40px;
                        width: 120px;
                        height: 0px;
                        padding: 0px 21px;
                        box-sizing: border-box;
                        background-color: #e5e5E1;
                        border-bottom-left-radius: 20px;
                        border-bottom-right-radius: 20px;
                        z-index: 100;
                        p {
                            border-bottom: 1px solid #999;
                            color: #666;
                            display: flex;
                            svg {
                                path {
                                    fill: #666;
                                }
                            }
                            align-items: center;
                            &:hover {
                                color: $colorA;
                                svg {
                                    path {
                                        fill: $colorA
                                    }
                                }
                            }
                            &:last-child {
                                border:none;
                                
                            }
                        }
                    }
                }

                span{
                    margin: 0 10px;
                    &::after {
                        content: '|';
                        margin-left: 10px ;
                    }
                    &:last-child {
                        margin: 0;
                        &::after{
                         content: ' ';
                        }
                    }
                }
            }
        }
    }
</style>