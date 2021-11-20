<template>
    <div>
        <detail-header :title="detail.title">
            <template v-slot:buy>
                <button @click="addCart">加入购物车</button>
            </template>
        </detail-header>
        <div class="detailContent">
            <div class="safeContent content">
                <div class="leftContent">
                    <img :src="detail.imgUrl" alt="">
                </div>
                <div class="rightContent">
                    <div class="detail">
                        <div class="detailTitle">
                            <h2>{{detail.title}}</h2><br>
                            <p style="line-height:18px">相机全新升级 / 120HZ屏幕刷新率 / 手持超级夜景 / 骁龙888Plus处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
                            <h4>京东自营（达达利亚小组）</h4>
                            <div style="margin-top:14px">
                            <span>{{detail.price}}元 </span><em style="text-decoration: line-through;margin-left:10px">2999元</em>
                        </div>
                        </div>
                        <div class="adress">
                            <div style="display:flex">
                                <svg t="1636198963321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4100" width="16" height="16"><path d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z" fill="#eb685f" p-id="4101"></path></svg>
                                
                                <input type="text" disabled value="北京 北京市 朝阳区 安定门街道" style="margin-left:20px">    
                                <span style="margin-left:20px;line-height: 22px">修改</span>
                            </div>
                            <span style="margin-left:40px;margin-top:10px;display:block">
                                有现货
                            </span>
                        </div>
                        <h2 style="margin:20px 0 0 0">选择版本</h2>
                        <div class="version">
                            <div class="version-box" v-for="(item,index) in versionInfo" :key=index @click="choose(item,index)" :class="{'version-shadow':version==index}" >
                                <span>{{item.version}} {{item.dataV}}</span> {{item.price}}元
                            </div>
                        
                        </div>
                        <h2 style="margin:20px 0 20px 0">选择颜色</h2>
                        <div class="color">
                            <div class="color-box"></div>
                            深空灰
                        </div> 
                        
                        <div class="total" >
                            <span style="">{{detail.name}}</span>
                            <div v-if="this.total.length===0">请选择商品属性</div>
                            <div v-else class="total-version-money">
                            <div class="choose-version-color" v-for="(item,index) in versionInfo" :key=index :style="version!==index?'display:none':''" >
                                {{version === index ? item.version+item.dataV +" 深空灰":''}}
                            </div>
                            <p>总计: {{this.total.price}} 元</p>
                            </div>
                        </div>

                        <div class="detail-btn">                      
                            <button  @click="GoOrderConfrim"> 立即购买</button>
                            <div class="btn-like">
                                喜欢
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
    </div>
</template>
<script>
import DetailHeader from '../components/DetailHeader.vue'
import Comment from '@/components/Comment'
export default {
    mounted() {
       this.detail = this.$route.query.detail
    },
    components: {
        DetailHeader,
        Comment
    },
    data() {  
        return {
            message: '产品详情',
            detail: {},
            version: 6,
            total: [],
             versionInfo:[{
                    version:'6G+128GB',
                    dataV:'移动4G',
                    price:1099,
                },{
                    version:'8G+128GB',
                    dataV:'全网通',
                    price:1299,
                },{
                    version:'12G+256GB',
                    dataV:'全网通',
                    price:2099,
                }],   
        }
    },
    methods: {
        addCart(){
                // this.axios.post('/carts',{
                //     productId:this.$route.params.id,
                //     selected: true
                // }).then((res)=>{
                //     this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
                //     this.$router.push('/cart');
                // })
                this.$router.push('/myCart');
        },
        choose(item,index){
                console.log(this.total.length);
                this.version=index;
                this.total=item;     
        },
        GoOrderConfrim() {
            this.$router.push('/order/confirm')
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
                        width: 200px;
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
                        font-size: 16px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        border: 1px solid #e5e5e5;
                        translate:  all 0.6s;
                        span{
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
                        display: inline-block;
                        background-color: #BBBBBB;
                        text-align: center;
                        height: 54px;
                        line-height: 54px;
                        width: 150px;
                        color: #ffffff;
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