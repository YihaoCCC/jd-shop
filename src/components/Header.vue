<template>
    <div class="header">
        <div class="headerContent safeContent">
            <div class="leftLogo" @click="backToIndex">
                <img src="../assets/imgs/logo-desgin.png" alt="" title="点击回到主页">
            </div>
            <div class="center">
                <div class="centerTop">
                    <div class="searchLine">
                    <div class="input">
                        <div class="inputContent">
                            <input type="text" placeholder="联想小新" v-model="searchGoods">           
                        </div>
                        <div class="photo">
                                <svg t="1634904367349" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4886" width="18" height="19">
                                <path d="M269.44 256l23.296-75.381333A74.666667 74.666667 0 0 1 364.074667 128h295.850666a74.666667 74.666667 0 0 1 71.338667 52.618667L754.56
                                 256H821.333333c64.8 0 117.333333 52.533333 117.333334 117.333333v426.666667c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 
                                 0-117.333333-52.533333-117.333334-117.333333V373.333333c0-64.8 52.533333-117.333333 117.333334-117.333333h66.773333z m23.605333 64H202.666667a53.333333
                                  53.333333 0 0 0-53.333334 53.333333v426.666667a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V373.333333a53.333333 
                                  53.333333 0 0 0-53.333334-53.333333h-90.378666a32 32 0 0 1-30.570667-22.549333l-30.272-97.930667a10.666667 10.666667 0 0 0-10.186667-7.52H364.074667a10.666667 10.666667 
                                  0 0 0-10.186667 7.52l-30.272 97.92A32 32 0 0 1 293.045333 320zM512 725.333333c-88.362667 0-160-71.637333-160-160 0-88.362667 71.637333-160 160-160 88.362667 0 160 71.637333 160 160 0 88.362667-71.637333 
                                  160-160 160z m0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z" p-id="4887" fill="#999"></path></svg>
                            </div>
                        <div class="search" @click="search">
                                <svg t="1634904775831" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6036" width="20" height="20">
                                <path d="M965.02872 998.66083a83.553823 83.553823 0 0 1-119.867289 0l-171.301765-174.651086c-0.631464-0.631464-1.03253-1.365328-1.634127-2.035192-61.674438 34.884137-132.598975 54.88193-208.144295 54.88193C226.625058 
                                876.860748 34.135105 680.590543 34.135105 438.423974 34.135105 196.304339 226.625058 0 464.081244 0c237.473253 0 429.963206 196.304339 429.963206 438.423974 0 102.497753-34.751871 196.581671-92.535124 271.230994l163.515127 
                                166.753515c33.122011 33.732142 33.122011 88.481805 0.004267 122.252347zM464.098311 130.862448c-166.578582 0-301.609548 137.697623-301.609548 307.561526 0 169.898037 135.030966 307.565793 301.609548
                                 307.565793s301.630881-137.667756 301.630881-307.565793c0-169.863903-135.052299-307.561526-301.630881-307.561526z" p-id="6037" fill="#fff"></path></svg>
                        </div>
                    </div>
                    <div class="myCart" @click="GoToCart">
                        <svg style="margin-right: 3px" t="1634905227727" class="icon" viewBox="0 0 1028 1024" version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" p-id="7068" width="16" height="16"><path d="M332.8 790.528q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 
                        7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM758.784 792.576q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 
                        36.864-7.168zM930.816 210.944q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 
                        49.152 41.984 0 20.48-9.728 35.84t-38.4 14.336l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 
                        0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-12.288l103.424 0q20.48 0 32.768 6.144t19.456 15.36 10.24 18.944 5.12 16.896q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM892.928 302.08l-641.024-2.048 
                        35.84 185.344 535.552 1.024z" p-id="7069" fill="#E1251B"></path></svg>
                        <span>我的购物车</span>
                    </div>    
                    </div>
                    <div class="navBar">
                        <span>抢五折家具</span>
                        <span>自营电脑</span>
                        <span>满99减50</span>
                        <span>定金预售</span>
                        <span>电脑盛典</span>
                        <span>立减1000</span>
                        <span>5折家具</span>
                        <span>服饰预售</span>
                        <span>进口好物</span>
                    </div>
                </div>
               
                <div class="navItems">
                    <a>秒杀</a>
                    <a>优惠券</a>
                    <a>PLUS会员</a>
                    <a>品牌闪购</a>
                    <a>拍卖</a>
                    <a>哒哒家电</a>
                    <a>哒哒超市</a>
                    <a>哒哒生鲜</a>
                    <a>哒哒国际</a>
                    <a>哒哒云</a>
                </div>
                
               
                
            </div>
            <div class="rightCode">
                <div class="codeContent">
                    <img src="../assets/imgs/code.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchGoods: ''
        }
    },
    methods: {
        backToIndex() {
            this.$router.push('/')
        },
        GoToCart() {
            this.$router.push('/myCart')
        },
        search() {
            this.$router.push('/search')
        }
    }
}
</script>
<style scoped lang='scss'>
@import '../assets/scss/config.scss';
.header {
    width: 100%;
    box-shadow: 0px 0px 1px #e5e5e5;
    
    background-color: #fff;
    .headerContent {
        height: 140px;
        box-sizing: border-box;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
       .leftLogo {
            height: 100%;
            width: 210px; 
            img {
                width: 100%;
                height: 100%;
            }
            cursor: pointer;
        }
        .center {
            width: 780px;
            .centerTop{
                width: 700px;
                margin: auto;
                .searchLine{
                    margin-top: 20px;
                    display: flex;
                    width: 700px;
                    justify-content: space-between;
                        .input{
                            width: 546px;
                            height: 32px;
                            border: 2px solid $colorA;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            .inputContent{
                                width: 425px;
                                height: 100%;
                                padding: 2px 44px 2px 17px;
                                box-sizing: border-box;
                                input{
                                    font-size: 12px;
                                    width: 100%;
                                    height: 100%;
                                    border: none;
                                }
                                .photo {
                                    display: inline-block;
                                }
                            }
                            .search {
                                cursor: pointer;
                                width: 58px;
                                height: 32px;
                                background-color: $colorA;
                                text-align: center;
                                svg{
                                    margin-top: 5px;
                                    transition: all .5s;
                                    &:hover {
                                        transform: scale(1.2);
                                    }
                                }
                            }
                        }
                        .myCart{
                            width: 130px;
                            border: 1px solid #e5e5e5;
                            color: $colorA;
                            margin-left: 20px;
                            display: flex;
                            align-items: center;
                            box-sizing: border-box;
                            padding: 5px 15px;
                            &:hover{ 
                                border: 1px solid $colorA;
                            }
                        }
                }
                .navBar {
                    font-size: 12px;
                    margin-top: 8px;
                    span {
                        margin-right: 8px;
                        color: #999;
                        &:first-child {
                            color: $colorA;
                        }
                    }
                }
            }
            .navItems{
                margin-top: 18px;
                font-weight: 700;
                font-size: 15px;
                a {
                    cursor: pointer;
                    margin: 10px 13px;
                    &:first-child {
                        margin-left: 0;
                        color:  $colorA;
                    }
                    &:nth-child(2) {
                        color: $colorA;
                    }
                }
            }
        }
        .rightCode {
            width: 190px;
            text-align: right;
            .codeContent {
                display: inline-block;
                box-sizing: border-box;
                padding: 5px 5px;
                box-shadow: 0px 0px 10px #e5e5e5;
            }
        }
    }
}
</style>