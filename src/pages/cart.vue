<template>
    <div>
        <header-bar class="tipFixedTop"></header-bar>
        <order-header HeaderTitle="我的购物车">
                <template v-slot:description>
                    <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
                </template>  
        </order-header>
        <loading v-if="loading"></loading>
        <div class="cart" v-show="!loading" >
            <div class="safeContent nullSvg" v-if="List.length === 0">
                <img class=" " src="../assets/imgs/loadingSvg/undraw_shopping_app_flsj.svg" alt="" >
                <h1>购物车是空哒！快去主页加购吧</h1>
                <button @click='BackToIndex'>去主页选购</button>
            </div>
            <template v-else >

            <div class="cart-body">
                <ul class="cart-body-header">
                    <div class="checkbox " :class="{'checked':allCheck}" @click="selectAll"></div>
                    <li class="col-1">全选</li>
                    <li class="col-3">商品名称</li>
                    <li class="col-1">单价</li>
                    <li class="col-2">数量</li>
                    <li class="col-1">小计</li>
                    <li class="col-1">操作</li>
                </ul>
                <ul class="cart-body-list" v-for="(item,index) in List " :key="index">
                    <div class="checkbox" :class="{'checked':item.isChose }" @click="changeSelectedItem(item)"></div>
                    <li class="item-img">
                        <img :src="item.versionPhotoUrl"  alt="">
                    </li>
                    <li class="item-name">
                        <div class="name">
                            <p>{{item.goodsName}}</p>
                            <p>{{item.goodsVersionDetail}}</p>
                        </div>
                        
                    </li>
                    <li class="item-price">{{item.price}}元
                        <div v-show="item.promotionDetail" class="promotion">
                           {{item.promotionDetail}}
                        </div>
                        
                    </li>
                    <div class="item-num">
                        <div class="num-box">
                            <span @click="updataGoodsNum(item,1)" style="cursor: pointer" >-</span>
                            {{item.num}}
                            <span @click="updataGoodsNum(item,2)" style="cursor: pointer">+</span>
                        </div>
                    </div>
                    <li class="item-totalPrice" style="color: $colorA" >{{itemTotalPrice(item.num,item.price)}}元</li>
                    <li class="item-deleteAll" @click="showmodal(item)" >

                    </li>
                </ul>

            </div>
            <div class="cart-footer" >
                <div class="footer-left">
                    <span @click="goShopping" style="cursor: pointer;font-wight:bloder;color:#e1251b">继续购物</span>
                    <div style="display: inline-block;margin-left: 37px">共 <span class="num"> {{List.length}} </span> 件商品，已选择 <span class="num"> {{checkNum}} </span> 件</div>
                </div>
                <div class="footer-right">
                    <div class="footer-price">
                        <p class="lineThough" v-if="originPrice !== lastPrice">合计：<span>{{originPrice}}</span>元</p>
                        <p>总计：<span>{{lastPrice}}</span>元</p>
                    </div>
                    <button class="goPay" @click="goOrder" >
                        去结算
                    </button>
                </div>

            </div>
            </template>

        </div>
        <service-bar>   </service-bar>
        <Footer></Footer>
        <model
            content='是否从您的购物车中删除此商品？'
            SureText='确认删除'
            CancelText="我再想想"
            @SureClick='deleteOneList(item)'
            @CancelClick='showModal=false'
            :IsShow="showModal"
        >

        </model>
    </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import HeaderBar from '../components/HeaderBar.vue'
import Loading from '../components/Loading.vue'
// import Model from '../components/Model.vue'  // 改用全局组件
import OrderHeader from '../components/OrderHeader.vue'
import ServiceBar from '../components/ServiceBar.vue'
export default {
  components: { HeaderBar, OrderHeader, Loading, ServiceBar,Footer },
    
    data() {
        return {
            message: '我是购物车界面',
            List: [],           // 购物车数据
            showModal:false,    // 控制弹框
            item:{},            // 弹框时候的ID中转站
            loading: true,      // 页面加载的loading组件
            originPrice: 0,
            lastPrice: 0
        }
    },
    mounted() {
        setTimeout(() => {
            this.getCartList()
        },500)
    },
    computed: {
        itemTotalPrice() {
            return function(num,price) {
                return num*price
            }
        },
        allCheck() {
            return this.List.every((item) => {
                return  item.isChose === 1
            })
        },
        checkNum() {
            return this.List.filter((i)=> i.isChose).length;
        },
        cartTotalPrice() {
           
            let total = this.List.filter((item) => item.isChose === 1).reduce((total,i) => total+i.price*i.num,0)
            
            return total
        }

    },
    methods: {
        showmodal(item){
              this.item=item ;
              this.showModal=true;
            },
            goShopping(){
              this.$router.push('/index')
            },

            getCartList() {
                this.yhRequest.get(`/api/shoppingCart/queryByUserId/${this.$store.state.user.userId}`).then((res)=>{
                   this.randerData(res)
                   this.loading = false
                })
            },
            //全部选中
            selectAll(){
                // let isSelectAll = this.List.filter((i) => {
                //    return i.isChecked === true
                // }) 
                // if(isSelectAll.length<this.List.length) { //先判断是不是只有一部分被选中了，如果是就先全部选择中
                //     this.List.map((item) => {
                //         return item.isChecked = true
                //     })
                // } else {
                //     this.List.map((item) => {
                //         item.isChecked = !item.isChecked
                //     })
                // }
                this.yhRequest.get(`/api/shoppingCart/chooseAll/${this.$store.state.user.userId}`).then((res) => {
                    this.randerData(res)
                })
                
            },
            //重新渲染数据函数
            randerData(res){
                // let newResList = res.map((item) => {
                //     // item.isChecked = false // 添加新的isChecked属性
                //     // this.$set(item, 'promotion', 1)
                //     return item
                // }) 
                this.List = res.goodsList
                this.originPrice = res.oriTotal
                this.lastPrice = res.total
            },
            changeSelectedItem(item){
                item.isChose = item.isChose ? 0 : 1
                 this.yhRequest.post('/api/shoppingCart/modify',{
                        userId: this.$store.state.user.userId,
                        goodsId: item.goodsId,
                        goodsVersionId: item.goodsVersionId,
                        goodsPrice: item.price,
                        goodsNumber: item.num,
                        isChose: item.isChose
                    }).then((res) => {
                        this.randerData(res)
                })
            },
            //修改商品加购数量
            updataGoodsNum(item,type){
                if( type === 1 ) {
                    if( item.num === 1 ) {
                        this.$message.warning("商品数量不能小于1"); 
                    } else {
                        item.num--
                    }
                } else {
                    item.num++
                }
                this.yhRequest.post('/api/shoppingCart/modify',{
                        userId: this.$store.state.user.userId,
                        goodsId: item.goodsId,
                        goodsVersionId: item.goodsVersionId,
                        goodsPrice: item.price,
                        goodsNumber: item.num,
                        isChose: item.isChose
                    }).then((res) => {
                        this.randerData(res)
                })
            },
            //删除此列所有商品
            deleteOneList(item){
                this.yhRequest.post('/api/shoppingCart/delete', {  
                    userId: this.$store.state.user.userId,
                    goodsId: item.goodsId,
                    goodsVersionId: item.goodsVersionId
                }).then((res)=>{
                     this.randerData(res)
                }).then(()=>{this.showModal=false;
               }).then(()=>
                    this.$message.success("商品删除成功！"))
            }, 
            //跳转到订单界面 去支付
            goOrder(){
                
                // let judgeStatus = this.List.every(item=>item.isChose === 0);//(和  （item=>!item.productSelected）作用相等)
                let judgeStatus = this.List.find(i => i.isChose===1)
                if(!judgeStatus){
                  this.$message.warning("请至少选择一件商品！")
                }
                else {
                    this.$router.push('/order/confirm')
                }
            },
            BackToIndex() {
                this.$router.push('/')
            }
    }
}
</script>
<style scoped lang='scss'>
@import '../assets/scss/config.scss';
.tipFixedTop {
    position: sticky;
    top: 0;
    z-index: 100;
}
.cart{
        box-sizing: border-box;
        background-color: #f5f5f5;
        padding-bottom:30px;
        text-align: center;
        .nullSvg {
            img {
                height: 400px;
                margin: 30px;
            }
            button {
                    margin-top: 30px;
                    font-size: 18px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    display: inline-block;
                    text-align: center;
                    font-weight: bold;
                    padding: 0.7em 2em;
                    border: 3px solid #FF0072;
                    border-radius: 2px;
                    position: relative;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
                    color: #FF0072;
                    text-decoration: none;
                    transition: 0.3s ease all;
                    z-index: 1;
                }

                button:before {
                    transition: 0.5s all ease;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    right: 50%;
                    bottom: 0;
                    opacity: 0;
                    content: '';
                    background-color: #FF0072;
                    z-index: -1;
                }

                button:hover, button:focus {
                    color: white;
                }

                button:hover:before, button:focus:before {
                    transition: 0.5s all ease;
                    left: 0;
                    right: 0;
                    opacity: 1;
                }

                button:active {
                    transform: scale(0.9);
                }
           
        }
        .cart-body{
            width: 1226px;
            box-sizing: border-box;
            margin: auto;
            transform: translateY(30px);
            background-color: white;
            padding: 0px 30px 0px 30px;
            .cart-body-header{
                display: flex;
                height: 75px;
                align-items: center;
                color: #666666;
                font-size: 16px;
                border-bottom:  1px solid #e5e5e5;
                text-align: center;
                .col-1{
                    flex: 1;
                }
                .col-2{
                    flex: 2;
                }
                .col-3{
                    flex: 3;
                    margin-left: 30px;
                }
                .checkbox{
                    width: 22px;
                    height: 22px;
                    margin:0 20px;
                    display: inline-block;
                    vertical-align: middle;
                    border: 1px solid #E5E5E5;
                    text-align: center;
                    cursor: pointer;
                    background-size: 16px 12px;
                    &.checked{
                        background: url("./../assets/imgs/icon-gou.png") $colorA no-repeat center;
                        background-size: 16px 12px;
                        border:none;
                    }
                }
            }
            .cart-body-list{
                &:last-child{
                    border-bottom: none;
                }
                height: 120px;
                display: flex;
                align-items: center;
                text-align: center;
                color: #333333;
                font-size: 18px;
                border-bottom: 1px solid #e5e5e5;

                .checkbox{
                    cursor: pointer;
                    width: 22px;
                    height: 22px;
                    margin:0 20px;
                    display: inline-block;
                    vertical-align: middle;
                    border: 1px solid #E5E5E5;
                    text-align: center;
                    background-size: 16px 12px;
                    &.checked{
                        background: url("./../assets/imgs/icon-gou.png") $colorA no-repeat center;
                        background-size: 16px 12px;
                    }
                }
                .item-img{
                    width: 150px;
                    height: 80px;
                   
                    img{
                        display: block;
                        margin: auto;
                        width: 80px;
                        height: 100%;
                    }
                }
                .item-name{
                    flex: 3;
                    font-size: 14px;
                    .name {
                        box-sizing: border-box;
                        padding: 0 20px;
                        width: 90%;
                        margin: auto;
                        p   {
                            color: #555;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: wrap;
                            word-break: break-all;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            &:last-child {
                                margin-top: 10px;
                                color: #666;
                                font-size: 12px;
                            }
                        }
                    }    
                }
                .item-price{
                    flex: 1;
                    flex-direction: column;
                    justify-content: center;
                }
                .item-num{
                    flex: 2;
                    justify-content: center;
                    .num-box{
                        margin:auto;
                        width: 150px;
                        height: 40px;
                        box-sizing: border-box;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border:  1px solid #e5e5e5;
                        span{
                            width: 60px;
                        }
                    }
                }
                .item-totalPrice{
                    flex: 1;
                }
                .item-deleteAll{
                    flex: 1;
                    width:14px;
                    height:12px;
                    background:url('./../assets/imgs/icon-close.png') no-repeat center;
                    background-size:contain;
                    cursor:pointer;
                }
            }

        }
        .cart-footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1226px;
            margin:30px auto 0 auto;
            height: 72px;
            color: #666666;
            font-size: 14px;
            .footer-left{
                .num{
                    font-size: 16px;
                    color: $colorA;
                }
            }
            .footer-right{
                color: $colorA;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .footer-price {
                    span {
                        font-weight: bold;
                        font-size: 20px;
                    }
                    .lineThough {
                            span {
                                font-size: 14px;
                                text-decoration: line-through;
                            }
                    }
                }
                .goPay{
                    width: 202px;
                    height: 50px;
                    color: #ffffff;
                    background-color: $colorA;
                    border: 2px solid #fff;
                    cursor: pointer;
                    font-size: 16px;
                    margin-left: 31px;
                    &:hover {
                        border: 2px solid $colorA;
                    }
                }
            }
        }
    }
</style>