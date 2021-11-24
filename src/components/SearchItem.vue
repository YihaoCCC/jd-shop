<template>
    <div class="searchItem">
        <img :src="detail.imgUrl" alt="">
        <div class="info">
            <p>{{detail.price | price}}</p>
            <div class="title">
                {{detail.title}}
            </div>
            <span>{{detail.commentNum}}</span>
            <div class="shopName">
                <span>{{detail.shopName}}</span>
                <svg t="1637719596615" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2478" width="24" height="24"><path d="M646.8 628.1c2.9-2.9 5.6-5.8 8.3-8.8 4.1-4 6.7-9.5 6.7-15.7 0-12-9.8-21.8-21.8-21.8-5.5 0-10.5 2-14.3 5.4l-0.2-0.2c-3 3.6-6.1 7-9.4 10.3-27.8 27.8-64.7 43-103.9 43s-76.2-15.3-103.9-43c-2.2-2.2-4.3-4.5-6.4-6.8-0.6-0.8-1.2-1.5-1.9-2.2-0.6-0.7-1.2-1.5-1.8-2.2l-0.3 0.3c-3.7-2.9-8.3-4.6-13.3-4.6-12 0-21.8 9.8-21.8 21.8 0 5 1.7 9.7 4.6 13.3l-0.1 0.1c3.3 3.8 6.7 7.5 10.3 11.1 36 36 83.8 55.8 134.7 55.8 50.6 0 98.5-19.9 134.5-55.8zM383.6 437.6v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32c0 17.7 14.3 32 32 32 17.6 0 32-14.3 32-32z m288.5-64c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32c0-17.6-14.3-32-32-32z m-474.7 16.3c27.3-149 157.8-262 314.7-262 66.5 0 128.2 20.3 179.4 55 12.8 8.7 29.8 7.2 40.7-3.7 14.2-14.2 11.9-37.8-4.8-49.2C666 88.3 591.8 63.9 512 63.9c-183.4 0-336.8 128.6-374.9 300.5-40.2 1.8-72.5 35.3-72.5 75.9v76c0 41.8 34.2 76 76 76 5.1 0 10.1-0.5 14.9-1.5 23.3-4.7 42.8-20.1 53.1-40.8-10.8-32.1-16.6-66.4-16.6-102.1 0.1-19.8 1.9-39.2 5.4-58zM890 364.7v-0.2c-7-31.7-18-61.9-32.3-90.1-9.8-19.4-35.8-23.4-51.1-8-9.8 9.8-12.1 24.9-5.8 37.3 13.6 26.9 23.5 55.9 29.1 86.5 3.4 18.8 5.2 38.1 5.2 57.9 0 35.6-5.9 62.7-16.7 94.8v143.8h-0.6c0 96.8-46.7 176.7-135.6 189.7 3.1-9.4 4.7-19.4 4.7-29.8 0-52.9-43.1-96-96-96h-64c-52.9 0-96 43.1-96 96s43.1 96 96 96h62.7v0.1H655c141.3 0 225.8-114.4 226-255.7v-94.5c0.8 0 1.6 0.1 2.4 0.1 41.8 0 76-34.2 76-76v-76c0.2-39.9-30.5-72.6-69.4-75.9zM595.8 878h-6v0.4h-62.7c-17.6 0-32-14.4-32-32s14.4-32 32-32h64c17.6 0 32 14.4 32 32 0 16-11.9 29.3-27.3 31.6z" p-id="2479" fill="#1296db"></path></svg>
            </div>
            <div class="other">
                <div class="self" v-if="detail.isSelf">
                    <span>自营</span>
                </div>
                <div class="new" v-if="detail.isNew">
                    <span>新品</span>
                </div>
                <div class="gift" v-if="detail.hasGift">
                    <span>赠</span>
                </div>
            </div>
            <div class="operation">
                <div class="collect">
                    <svg t="1637723103100" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3609" width="22" height="22"><path d="M512 776.533333l-238.933333 85.333334 8.533333-251.733334L128 405.333333l243.2-72.533333L512 128l140.8 209.066667L896 405.333333l-153.6 200.533334 8.533333 251.733333-238.933333-81.066667z m0-51.2l187.733333 68.266667-4.266666-200.533333 123.733333-157.866667-192-55.466667-115.2-170.666666-110.933333 166.4-192 55.466666 123.733333 157.866667-4.266667 200.533333L512 725.333333z" fill="#e5e5e5" p-id="3610"></path></svg>
                    <span>加入收藏夹</span>
                </div>
                <div class="cart">
                    <svg t="1637723576455" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7661" width="20" height="20"><path d="M246.4 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z" p-id="7662" fill="#d81e06"></path><path d="M716.8 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z" p-id="7663" fill="#d81e06"></path><path d="M905.6 764.8l-537.6 0c-28.8 0-57.6-25.6-64-54.4l-96-566.4c-9.6-54.4-60.8-96-115.2-96l-22.4 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l22.4 0c28.8 0 57.6 25.6 64 54.4l96 566.4c9.6 54.4 60.8 96 115.2 96l537.6 0c12.8 0 25.6-12.8 25.6-25.6C931.2 777.6 921.6 764.8 905.6 764.8z" p-id="7664" fill="#d81e06"></path><path d="M880 179.2l-572.8 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l572.8 0c25.6 0 38.4 16 32 41.6l-70.4 281.6c-6.4 32-41.6 57.6-73.6 60.8l-396.8 28.8c-12.8 0-25.6 12.8-22.4 28.8 0 12.8 12.8 25.6 28.8 22.4l396.8-28.8c54.4-3.2 105.6-48 118.4-99.2l70.4-281.6C976 230.4 937.6 179.2 880 179.2z" p-id="7665" fill="#d81e06"></path></svg>
                    <span>加入购物车</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content: {
            type: Number,
            default: 1
        },
        detail: {
            type: Object,
            default: () => {
                return {
                    price: 1000,
                    title: 'iPhone 13 Pro Max 远峰蓝 256GB 5G 双卡  Pro Max (A2644) 256GB 远峰蓝色 支持移动联通电信5G 双卡双待手机',
                    imgUrl: 'https://img14.360buyimg.com/n7/jfs/t1/170960/24/23883/191395/614be471E20ff4504/f2997ec23199a45a.jpg',
                    shopName: 'Apple产品京东自营店',
                    isSelf: 1,
                    isNew: 1,
                    hasGift: 1,
                    commentNum: '20'
                }
            }
        }

    },
    filters: {
        price(p) {
            return `￥${p.toFixed(2)}`
        }
    },
    data() {
        return {

        }
    }
}
</script>


<style scoped lang='scss'>
@import '../assets/scss/config.scss';
    .searchItem {
        width: 216px;
        height: 446px;
        background-color: #fff;
        border: 1px solid #fff;
        margin-top: 10px;
        padding: 38px 9px 10px;
        transition: all 0.3s;
        img{ 
            width: 220px;
            height: 220px;
        }
        .info {
            margin-top: 10px;
           p {
                color: $colorA;
                font-size: 20px;
           }
           .title {
               width: 220px;
               margin-top: 10px;
               font-size: 12px;
               color: #666;
               overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
           }
           span {
               margin-top: 10px;
               display: block;
           }
           .shopName {
               display: flex;
               align-items: center;
               justify-content: flex-start;
               span {
                   font-size: 12px;
                   color: #999;
                    margin-right: 10px;
               }
           }
           .other {
                font-size: 12px;
                margin-top: 10px;
               .self {
                   background-color: #e23a3a;
                   padding: 2px 4px;
                   box-sizing: border-box;
                   color: #fff;
                   display: inline-block;
                   border-radius: 3px;
                   span {
                       margin: 0 ;
                       &:hover {
                           color: #fff;
                       }
                   }
               }
               .new {
                   background-color: #31c19e;
                   color: #fff;
                    padding: 2px 4px;
                   box-sizing: border-box;
                   margin: 0 4px;
                    display: inline-block;
                   border-radius: 3px;
                   span {
                       margin: 0 ;
                       &:hover {
                           color: #fff;
                       }
                   }
               }
               .gift {
                   border: 1px solid $colorA;
                   color: $colorA;
                    padding: 0px 4px;
                   box-sizing: border-box;
                   display: inline-block;
                   border-radius: 3px;
                    span {
                       margin: 0 ;
                    }
               }
           }
           .operation {
               width: 220px;
               height: 27px;
               border: 1px solid #e5e5e5;
               margin-top: 15px;
               display: flex;
               justify-content: space-between;
               color: #999;
               font-size: 12px;
                span {
                    margin: 0;
                }
                svg {
                    margin-right: 5px;
                }
               .collect {
                   display: flex;
                   align-items: center;
                   justify-content: flex-start;
                   width: 100px;    
                    border-right: 1px solid #e5e5e5;
                    &:hover {
                        span {
                            color: $colorA;
                        }
                        svg {
                            path {
                             fill: $colorA;

                            }
                        }
                    } 
               }
               .cart {
                   display: flex;
                   align-items: center;
                   justify-content: flex-start;
                   width: 100px;
               }
           }
        }
        &:hover {
            // border: 1px solid #e5e5e5;
            box-shadow: 0px 5px 5px #c8c8c8;
            transform: translateY(-5px);
        }
    }
</style>