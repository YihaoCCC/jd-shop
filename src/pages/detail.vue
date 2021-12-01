<template>
    <div>
        <detail-header :title="detail.goodsName">
            <template v-slot:buy>
                <button @click="GoOrderConfrim">立即购买</button>
            </template>
        </detail-header>
        <div class="detailContent">
            <div class="safeContent content">
                <div class="leftContent">
                    <img v-if="choosedItem.length ===0" :src="detail.photoUrl" alt="">
                    <img v-else :src="choosedItem.versionPhotoUrl" alt="">
                </div>
                <div class="rightContent">
                    <div class="detail">
                        <div class="detailTitle">
                            <h2>{{detail.goodsName}}</h2><br>
                            <p style="line-height:18px;">{{detail.goodsDetail}}</p>
                            <svg t="1637745152505" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2332" width="30" height="30"><path d="M627.94 474.05c-54.819 0-99.511-50.64-99.511-112.693v-37.618h199.022v37.618c0 62.214-44.692 112.693-99.511 112.693zM64.343 361.356v-37.618h199.022v37.618c0 62.054-44.692 112.693-99.511 112.693s-99.511-50.478-99.511-112.693zM495.408 73.336v225.387H305.71l49.836-225.387z" fill="#F3797D" p-id="2333"></path><path d="M668.291 73.336l49.836 225.387H528.429V73.336zM296.386 323.899h199.022v37.457c0 62.054-44.692 112.693-99.511 112.693s-99.511-50.64-99.511-112.693v-37.457zM760.311 323.899h199.022v37.457c0 62.054-44.692 112.693-99.511 112.693-54.82 0-99.511-50.64-99.511-112.693v-37.457z" fill="#3A5CAC" p-id="2334"></path><path d="M938.917 298.723h-185.84L703.241 73.336h136.004z" fill="#F3797D" p-id="2335"></path><path d="M184.27 73.336h136.165l-49.836 225.387H84.759zM97.203 495.368c10.771 2.411 21.864 3.697 33.117 3.697 54.176 0 101.194-13.737 132.628-75.236 30.223 45.656 78.451 75.236 132.628 75.236s102.405-29.58 132.628-75.236c22.934 50.221 59.088 67.269 99.511 71.378v454.471H97.203v-454.31z" fill="#3A5CAC" p-id="2336"></path><path d="M909.786 950H644.37V495.368c40.512-9.324 75.558-35.367 99.511-71.378 30.223 45.656 78.451 75.236 132.628 75.236 11.414 0 22.346-1.286 33.117-3.697V950h0.16z" fill="#F3797D" p-id="2337"></path><path d="M793.685 686.995c0 20.738-14.79 37.618-33.117 37.618-18.327 0-33.117-16.88-33.117-37.618 0-20.738 14.79-37.618 33.117-37.618 18.326 0 33.117 16.88 33.117 37.618z" fill="#FFFFFF" p-id="2338"></path></svg>
                            <h4 style="display:inline-block;margin-left: 20px">京东自营（达达利亚小组）</h4>
                            <div class="promotion" v-show="detail.promotionDetail">
                                {{detail.promotionDetail}}
                            </div>
                            <div style="margin-top:14px">
                            <span>{{detail.goodsPrice | price}}元 </span><em style="text-decoration: line-through;margin-left:10px">2999元</em>
                        </div>
                        </div>
                        <div class="adress">
                            <div style="display:flex">
                                <svg t="1636198963321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4100" width="16" height="16"><path d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z" fill="#eb685f" p-id="4101"></path></svg>
                                
                                <input type="text" disabled value="天津 天津市 西青区 天津市大学软件学院" style="margin-left:20px">    
                                <span style="margin-left:20px;line-height: 22px">修改</span>
                            </div>
                            <span style="margin-left:40px;margin-top:10px;display:block">
                                有现货
                            </span>
                            <span style="margin-left:40px;margin-top:10px;display:block;font-size:12px;color:#999">库存   <em style="color: #E1251B">{{detail.goodsInvn}} </em>件</span>
                        </div>
                        <h2 style="margin:20px 0 0 0">选择版本</h2>
                        <div class="version">
                            <div class="version-box" v-for="(item,index) in versionDetail" :key=index @click="choose(item,index)" :class="{'version-shadow':version==index}" >
                                <span>{{item.goodsVersionDetail}}</span> 
                            </div>
                        
                        </div>
                        <h2 style="margin:20px 0 20px 0">配送方式</h2>
                        <div class="color">
                            <div class="color-box"></div>
                            平台默认配送
                        </div> 
                        
                        <div class="total" >
                            <span style="">{{detail.name}}</span>
                            <div v-if="choosedItem.length===0">请选择商品属性</div>
                            <div v-else class="total-version-money">
                            <div class="choose-version-color" v-for="(item,index) in versionDetail" :key=index :style="version!==index?'display:none':''" >
                                {{version === index ? item.goodsVersionDetail:''}}
                            </div>
                            <p>总计: {{this.choosedItem.goodsPrice}} 元</p>
                            </div>
                        </div>

                        <div class="detail-btn">                      
                            <button  @click="addCart"> 加入购物车</button>
                            <div class="btn-like" @click="addCollect">
                                加入收藏夹
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
            <div class="userComment safeContent">
                <div class="commentHeader">
                    商品评价
                </div>
                <comment v-for="item in 4" :key="item" ></comment>
            </div>
        </div>
        <model
            :IsShow="isShow"
            :btnType="1"
            content="添加购物车成功！"
            SureText="查看购物车"
            @CancelClick='cancel()'
            @SureClick ='GoCart()'
        ></model>
        <model
            :IsShow="isShowCollect"
            :btnType="1"
            content="添加收藏夹成功！"
            SureText="查看我的收藏夹"
            @CancelClick='cancel()'
            @SureClick='GoCollect()'
        >

        </model>
    </div>
</template>
<script>
import DetailHeader from '../components/DetailHeader.vue'
import Model from '../components/Model.vue'
import Comment from '@/components/Comment'
export default {
    components: {
        DetailHeader,
        Comment,
        Model
    },
    mounted() {
        this.getGoodsDetail()
    },
    computed: {
        isChoose() {
            return this.version <= this.detail.goodsVersions.length ? true : false
        },
        userName () {
            return this.$store.state.user.userId
        }
    },
    filters: {
        price(price) {
                price =  Number(price)
             return `￥${price.toFixed(2)}`
        }
    },
    

    data() {  
        return {
            message: '产品详情',
            detail: {},
            version: 6,
            choosedItem: [],
            versionDetail: [],
            isShow: false,
            isShowCollect: false   
        }
    },
    methods: {
        getGoodsDetail() {
            this.yhRequest.get(`/api/goods/goodsDetail/${this.$route.params.id}`).then((res) => {
                // 给当前页面的详情数据赋值
                this.detail = res
                // 另外给版本详情赋值
                this.versionDetail = res.goodsVersions
                // 当前的版本号一定比版本数量大 在加入或者购买前判断是否已经选择了商品的某个版本，未选中则不允许进行下一步操作
                this.version = this.detail.goodsVersions.length + 1
            })
        },
        addCart(){
            if(this.userName) {
                if(this.isChoose) {
                // 发送请求
                this.yhRequest.post('/api/shoppingCart/addOnce',{
                   
                        userId: this.$store.state.user.userId,
                        goodsId: this.choosedItem.goodsId,
                        goodsVersionId: this.choosedItem.goodsVersionId, 
                        goodsPrice: this.choosedItem.goodsPrice, //double
                        goodsNumber: 1 //int
                    
                }).then((res) => {
                    if(res) {
                        this.isShow = true
                    } else {
                        return Promise(res)
                    }
                })
                } else {
                    this.$message.error('请选择商品属性')
                }
            } else {
                console.log('未登录')
                this.$store.dispatch('changeIsShow', true)
            }
            
                
        },
        addCollect() {
            if(this.userName) {
                this.yhRequest.post('/api/collection/add', {
                    userId: this.$store.state.user.userId,
                    goodsId: this.detail.goodsId
                }).then((res) => {
                    if(res) {
                        this.isShowCollect = true
                    } else {
                        this.$message.info('该商品已在收藏夹啦！')
                    }
                })
            } else {
                this.$store.dispatch('changeIsShow', true)
            }     
        },
        choose(item,index){
                this.version=index;
                this.choosedItem=item; 
        
        },
        cancel() {
            this.isShow = false
            this.isShowCollect = false
        },
        GoCart() {
            this.$router.push('/myCart')
        },
        GoCollect() {
            this.$router.push('/collect')
        },
        GoOrderConfrim() {
            if(this.userName) {
                if(this.isChoose) {
                    this.$router.push('/order/confirm')
                } else {
                    this.$message.error('请选择商品属性')
                }
            } else {
                this.$store.dispatch('changeIsShow' ,true)
            }
        }
    }
}
</script>
<style scoped lang='scss'>
@import '../assets/scss/config.scss';
button {
    width: 100px;
    height: 40px;
    background-color: $colorA;
    color: #fff;
    font-size: 14px;
    border: none;
    &:hover {
        border: 1px solid #fff;
    }
}
.detailContent {
    background-color: #fff;
    .content {
        display: flex;
        justify-content: space-between;
        padding: 30px 0 0 0;
        
    }
    .leftContent {
        width: 450px;
        height: 450px;   
        img {  
            top: 10px;
            width: 100%;
            height: 100%;
        }
    }
    .rightContent {
        p {
            margin-top: 5px;
            font-weight: bolder;
            color: #666;
            font-size: 16px;
        }
        .detail {
                width: 579px;
                .detailTitle{
                    padding-bottom: 20px;
                    border-bottom: 1px solid #E5E5E5;
                    p{
                    color:#BBBBBB; 
                    }
                    h4{
                        margin-top: 16px;
                        font-size: 16px;
                        color: $colorA;
                    }
                    span{
                        font-size:20px;
                        color: $colorA;
                    }
                }
                .adress{
                    width: 100%;
                    height: 108px;
                    margin-top:20px;
                    vertical-align: middle;
                    background-color: #FAFAFA;
                    border: 1px solid #E5E5E5;
                    box-sizing: border-box;
                    padding: 20px 20px;
                    
                    img{
                        width: 20px;
                        height: 22px;
                    }
                    input{
                        width: 240px;
                        border: none;
                        color: #999;
                    }
                    span{
                        font-weight:bold;
                        color: $colorA;
                    }
                }
                .version{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap:wrap;       
                    .version-box{
                        margin-top: 20px;
                        cursor: pointer;
                        width: 268px;                    
                        line-height: 50px;
                        border: 1px solid #e5e5e5;
                        padding: 0 5px;
                        box-sizing: border-box;
                        translate:  all 0.6s;
                        span{
                            font-size: 14px;
                            display: block;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            width: 100%;
                            color:$colorA;
                        }
                    }
                    .version-shadow{
                        border: 1px solid $colorA;
                    }
                }
                .color{
                width: 268px;
                        font-size: 16px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        border: 1px solid $colorA;
                    .color-box{
                        display: inline-block;
                        width: 14px;
                        height: 16px;
                        background-color: #666666;
                        margin-right: 5px;
                        transform: translateY(2px);
                    }
                }
                .total{
                    margin: 30px 0 20px 0;
                    width: 100%;
                    height: 108px;
                    vertical-align: middle;
                    background-color: #FAFAFA;
                    border: 1px solid #E5E5E5;
                    box-sizing: border-box;
                    padding: 20px 20px 20px 20px;
                    .choose-version-color {
                        width: 390px;
                    }
                    .total-version-money{
                        display: flex;
                        justify-content: space-between;
                        p{
                            line-height: 23px;
                            color: $colorA;
                            margin-top: 20px;
                            font-size: 24px;              
                        }
                    }
                    span{
                        font-size:20px;
                        font-weight:bold;
                        margin-bottom:10px;
                        display:block
                    }

                }
                .detail-btn{
                    display: flex;
                    align-items: center;
                    margin-bottom: 40px;
                    button {
                        width: 260px;
                        height: 54px;
                    }
                    .btn-like{
                        margin-left: 20px;
                        cursor: pointer;
                        display: inline-block;
                        background-color: #BBBBBB;
                        text-align: center;
                        border: 2px solid #e5e5e5;
                        height: 54px;
                        line-height: 54px;
                        width: 150px;
                        color: #ffffff;
                        &:hover {
                            border: 2px solid #fff;
                        }
                    }
                }

            }
    }
    .userComment {
        padding-bottom: 20px;

        .commentHeader {
            height: 45px;
            border: 1px solid #e5e5b9;
            background-color: #e5e5e5;
            line-height: 45px;
            color: #666;
            font-size: 15px;
            padding: 0 20px;
            box-sizing: border-box;
            font-weight: bolder;
        }
    }
   
}
</style>