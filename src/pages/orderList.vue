<template>
    <div class="OrderList">
        <template v-if="orderList.length">
            <div class="OrderItem" v-for="item in orderList" :key="item.orderId" >
                <div class="ItemHeader">
                    <div class="orderNo">
                        订单号：<span style="color:#fff">{{item.orderId}}</span>   
                    </div>
                    <div class="time">
                        下单时间： 
                        <span style="color:#fff">{{item.orderTime}}</span>
                    </div>
                </div>
                <div class="ItemContent" >
                    <div class="rightContent" >
                        <div class="ItemList" v-for="jtem in item.orderDetails" :key="jtem.goodsId">
                            <img :src="jtem.versionPhotoUrl" alt="">
                            <div class="nameInfo">
                                <p>{{jtem.goodsName}}</p>
                                <span>{{jtem.goodsVersionDetail}}</span>
                            </div>
                            <div class="number">
                                <svg t="1638445849716" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2390" width="26" height="26"><path d="M706.574 234.574l-474 474c-23.432 23.431-23.432 61.42 0 84.852 23.431 23.432 61.42 23.432 84.852 0l474-474c23.432-23.431 23.432-61.42 0-84.852-23.431-23.432-61.42-23.432-84.852 0z" fill="#e1251b" p-id="2391"></path><path d="M791.426 708.574l-474-474c-23.431-23.432-61.42-23.432-84.852 0-23.432 23.431-23.432 61.42 0 84.852l474 474c23.431 23.432 61.42 23.432 84.852 0 23.432-23.431 23.432-61.42 0-84.852z" fill="#e1251b" p-id="2392"></path></svg>
                                {{jtem.number }}
                            </div>
                            <div class="price">
                                <em v-if='jtem.oriPrice !== jtem.realPrice'>单价：{{jtem.oriPrice}}</em>
                                <p><span style="color:#666">{{ jtem.oriPrice !== jtem.realPrice ? '实付：' : '单价：'}}</span>{{jtem.realPrice}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="leftContent">
                        <div class="totalPrice">
                            总价<span style="color:#e1251b">{{item.realAmount}}</span>
                        </div>
                        <div class="address">
                            <p style="font-size: 20px">{{item.address.name}}</p>
                            <p>{{item.address.phone}}</p>
                            <p>{{item.address.province}}{{item.address.city}}{{item.address.area}}{{item.address.addressDetail}}</p>
                        </div>
                        <div class="GoPay">
                            <button v-if="item.orderStatus === '待付款'"  @click="GoPay(item.orderId)">
                                <div class="svg-wrapper-1">
                                    <div class="svg-wrapper ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                    </div>
                                </div>
                                <span >去付款</span>
                            </button>
                            <div v-else class="success">{{item.orderStatus}}</div>
                        </div>
                    </div>
                    <div class="orderStatus">
                    <!-- 实现印章效果 -->

                    </div>
                </div>
            </div>
        </template>
        <div class="NoData" v-else>
            <img src="../assets/imgs/loadingSvg/order-null.svg" alt="">
            <h2>暂时未查询到您的订单数据</h2>
        </div>
        <loading v-show="isLoading" ></loading>
        <end-data v-show="isEnd"></end-data>
        <div v-if="orderList.length" class="rightButtons">
            <button  :class="{'active' : type === 1}" @click="fliterOrderList(1)">
                <div class="svg-wrapper-1">
                    <div class="svg-wrapper ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                    </div>
                </div>
                <span>全部</span>
            </button>
            <button  :class="type === 2 ? 'active': '' "  @click="fliterOrderList(2)">
                <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                    </div>
                </div>
                <span>待付款</span>
            </button>
            <button :class="type===3 ? 'active' : '' " @click="fliterOrderList(3)">
                <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                    </div>
                </div>
                <span>已完成</span>
            </button>
        </div>
    </div>
</template>

<script>
import Loading from '@/components/Loading'
import EndData from '@/components/EndData'
export default {
    components: {
        Loading,
        EndData
    },
    data() {
        return {
            orderList: [],
            AllList: [],
            isLoading: false,
            isEnd: false,
            orderListElement: '',
            pageNum: 1,
            listLenght: 4,
            type: 1,             // 订单类型，1代表全部订单，2代表未完成订单，3代表已完成订单
            status: '全部'
        }
    },
    mounted() {
        window.addEventListener('scroll', this.getOrderList)
        this.orderListElement = document.getElementsByClassName('OrderList')[0]
        this.getFirstData()
    },
    methods: {
        getFirstData() {
            this.yhRequest.get(`/api/order/queryAll/${this.$store.state.user.userId}/${this.pageNum}/${this.status}`).then((res) => {
                console.log(res)
                this.orderList  = res
            })
        },
        getOrderList() {
            // order/queryAll/ userId/pageNum
            let distance = this.orderListElement.getBoundingClientRect().bottom
            console.log(window.innerHeight)
            console.log('OrderContent距离底部'+distance)
            if(!this.isLoading && !this.isEnd && distance <= 712 ) { //距离屏幕底部715时候开始请求数据
                this.isLoading = true
                
                console.log('OrderContent距离底部'+distance)

                    console.log('请求数据')
                    setTimeout(() => {
                    this.listLenght = this.listLenght + 2
                    this.isLoading = false
                    if(this.listLenght >= 8) { //没有数据时，设置isEnd为True，永远不会进入请求
                        this.isEnd = true
                    }
                },1000)
            }
        },
        fliterOrderList(type) {
            this.type = type  
        },
        GoPay(orderNo) {
            this.$router.push({
                path: '/order/pay',
                query: {
                    orderNo:orderNo
                }
            })
        }
    }
}
</script>


<style scoped lang='scss'>
.OrderList {
    position: relative;
    .OrderItem {
        width: 100%;
        background-color: #fff;
        border-radius: 30px;
        margin-top: 30px;
        transition: all .5s;
        .ItemHeader {
            border-top-right-radius: inherit;
            border-top-left-radius: inherit;
            padding: 15px 30px;
            box-sizing: border-box;
            height: 45px;
            width: 100%;
            background-color: #D86D81;
            display: flex;
            justify-content: space-between;
        }
        .ItemContent {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            .rightContent {
                display: flex;
                flex-direction: column;
                .ItemList {
                    height: 130px;
                    display: flex;
                    align-items: center;
                    margin: 10px 10px 10px 30px;
                    border-bottom: 1px solid #999;
                    img {
                        width: 100px;
                        height: 100px;
                    }
                    .nameInfo {
                        display: flex;
                        flex-wrap: wrap;
                        width: 400px;
                        text-align: center;
                        margin: 0 40px;
                        span {
                            display: block;
                            margin: 10px auto;
                            color: #999;
                        }
                    }
                    .number {
                        display: flex;
                        align-items: center;
                        svg {
                            margin-right: 6px;
                        }
                        span {
                            font-weight: 24px;
                            font-family: inherit;
                        }
                    }
                    .price {
                        margin: 0 20px;
                        em {
                            text-decoration: line-through;
                        }
                        p {
                            color: #e1251b;
                        }
                    }
                }
            }
            .leftContent {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 20px;
                width: 400px;
                box-sizing: border-box;
                .totalPrice {
                    font-size: 20px;
                    width: 60px;
                    text-align: center;
                }
                .address {
                    p {
                        margin: 8px 0;
                    }
                    width: 140px;
                    text-align: center;
                }
                .GoPay {
                    margin: 0 0 0 10px;
                    button {
                        margin: 0;
                    }
                    .success {
                        color: #998;
                    }
                }
            }
            .orderStatus {
                position: absolute;
                top: 10px;
                right: 30px;
                font-size: 20px;
                color: #666;

            }
        }
        &:hover {   
            transform: scale(1.05);
        }
        &:hover:active {
            transform: scale(1.02);
        }   
    }
    .rightButtons {
        position: absolute;
        left: -150px;
        top: 0px;
        display: flex;
        flex-wrap: wrap;
        width: 150px;
        
    }
    button {
            width: 120px;
            margin-top: 20px;
            font-family: inherit;
            font-size: 16px;
            background: #99989E;
            color: white;
            padding: 0.7em 1em;
            padding-left: 0.9em;
            display: flex;
            align-items: center;
            border: none;
            border-radius: 16px;
            overflow: hidden;
            transition: all 0.2s;
        }
        .active {
            background-color: #E2626C;
            span {
                display: none;
            }
            svg {
                 transform: translateX(1.2em) rotate(45deg) scale(1.1);
            }
        }
            button span {
                display: block;
                margin-left: 0.3em;
                transition: all 0.3s ease-in-out;
            }

            button svg {
                display: block;
                transform-origin: center center;
                transition: transform 0.3s ease-in-out;
            }
          
            button:hover .svg-wrapper {
                animation: fly-1 0.6s ease-in-out infinite alternate;
            }

            button:hover svg {
                transform: translateX(1.2em) rotate(45deg) scale(1.1);
            }

            button:hover span {
                transform: translateX(5em);
            }

            button:active {
                transform: scale(0.95);
            }

            @keyframes fly-1 {
            from {
                transform: translateY(0.1em);
            }

            to {
                transform: translateY(-0.1em);
            }
        }
    .NoData {
        
        text-align: center;
        img {
            width: 400px;
            height: 300px;
            margin: 30px 0 ;
        }
    }
}

</style>