<template>
    
        <div class="item" >
                
                <img :src="GoodsItem.photoUrl" :alt="GoodsItem.goodsName" @click="GoToDetail(GoodsItem)">
                
                <div class="nameInfo" @click="GoToDetail(GoodsItem)">
                    <span class="self" v-if="GoodsItem.goodsIsSelf === 1">自营</span> 
                    <span>{{GoodsItem.goodsName}}</span>
                </div>
                <div class="pirce"><span>{{GoodsItem.goodsPrice | pirce}}</span></div>
                <div class="more">
                    <div class="findMore" @click="GoToDetail(GoodsItem)">
                        <span>查看详情</span>
                        <svg t="1635996283145" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2445" width="16" height="16"><path d="M324.778667 521.99424c0-102.857387 83.715413-186.579627 186.688853-186.579627 102.85056 0 186.688853 83.718827 186.688853 186.579627 0 74.028373-42.581333 141.359787-108.5952 171.49952-8.13056 3.70688-17.4592 4.058453-25.828693 0.95232s-15.18592-9.448107-18.8928-17.4592c-7.77216-16.858453-0.3584-36.713813 16.503467-44.485973 42.09664-19.26144 69.362347-62.552747 69.362346-110.394027 0-65.778347-53.456213-119.35744-119.241386-119.35744-65.778347 0-119.354027 53.57568-119.354027 119.35744a119.313067 119.313067 0 0 0 72.833707 110.032213c14.830933 6.212267 23.08096 21.998933 19.851946 37.546667-3.229013 15.55456-16.98816 26.914133-33.006933 26.914133a32.6656 32.6656 0 0 1-13.154987-2.75456c-69.246293-29.538987-114.09408-97.112747-113.855146-171.851093z m127.013546 174.486187c0.119467 0 0.119467 0 0 0 0.119467 0 0.119467 0 0 0zM992.36864 578.56c-16.387413 16.26112-30.856533 30.252373-55.497387 50.827947-6.813013 5.741227-15.6672 8.492373-24.634026 7.77216a33.54624 33.54624 0 0 1-22.96832-11.840854c-11.96032-14.2336-10.042027-35.280213 4.18816-47.36 22.725973-19.012267 35.642027-31.573333 51.428693-47.24736a26.279253 26.279253 0 0 0 8.133973-18.653866 26.309973 26.309973 0 0 0-8.133973-18.65728c-64.94208-64.1024-237.284693-213.248-432.943787-213.248-195.77856 0-368.001707 149.138773-433.063253 213.248a26.4192 26.4192 0 0 0-8.250027 18.65728c0 6.94272 2.870613 13.513387 8.250027 18.653866 64.938667 64.22528 237.28128 213.248 432.943787 213.248 100.696747 0 188.7232-29.180587 285.477546-94.60736a33.928533 33.928533 0 0 1 25.35424-5.25312 33.532587 33.532587 0 0 1 21.64736 14.114134c10.52672 15.29856 6.46144 36.232533-8.850773 46.639786-107.281067 72.594773-210.01216 106.318507-323.505493 106.318507v-0.119467c-212.882773 0-392.3968-145.793707-480.54272-232.73472A92.842667 92.842667 0 0 1 3.413333 511.941973c0-24.992427 10.16832-48.913067 28.105387-66.495146 88.02304-86.828373 267.659947-232.615253 480.423253-232.615254 212.87936 0 392.393387 145.793707 480.535894 232.741547 17.94048 17.578667 28.105387 41.499307 28.105386 66.491733-0.109227 24.99584-10.27072 48.909653-28.214613 66.495147z" 
                        p-id="2446" fill="#e6e6e6"></path></svg>
                    </div>
                </div>       
        </div> 

</template>
<script>
export default {
    props: {
        GoodsItem: {
            type: Object,
            default: () => {
                return {
                    photoUrl: 'https://bcn.135editor.com/files/users/541/5419088/202111/W9N8rGLO_rzdS.png',
                    goodsIsSelf: 1,
                    goodsName: '哒哒利亚默认商品',
                    goodsPrice: 999,
                }
            }
        }
    },
    filters: {
        pirce(pirce) {
            pirce = Number(pirce)
            return `￥${pirce.toFixed(2)}`
        }
    },
    data() {
        return {

        }
    },
    methods: {
        GoToDetail(GoodsItem) {
            this.yhRequest.get(`/api/goods/goodsDetail/${GoodsItem.goodsId}`).then(() => {
                this.$router.push(`/detail/${GoodsItem.goodsId}`)
            })
        },
    }
}
</script>
<style scoped lang='scss'>
@import '../assets/scss/config.scss';
        .item {
            cursor: pointer;
            text-align: center;
            width: 220px;
            height: 312px;
            display: inline-block;
            position: relative;
            background-color: #fff;
            border-radius: 20px;
            transition: all 0.4s;
            box-shadow: 0 2px 10px 0 rgb(0 0 0 / 8%);
            // box-shadow: 0 0 20px -5px #999;
            padding: 30px 20px;
            margin-top: 30px;
            box-sizing: border-box;
            img {
                width: 160px;
                height: 160px;
                margin: auto;
                margin-bottom: 25px;
            }
            .pirce {
                font-size: 18px;
                margin-top: 8px;
                text-align: left;
                color: $colorA;
                font-weight: bolder;
            }
            .nameInfo {
                height: 48px;
                font-size: 14px;
                line-height: 24px;
                text-align: left;
                color: #666;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                .self {
                    color: #fff;
                    background-color: $colorA;
                    border-radius: 2px;
                    padding: 0 5px;
                    margin-right: 4px;
                    line-height: 16px;
                    height: 16px;
                    font-size: 12px;
                    display: inline-block;
                }
            }
            .more {
                position: absolute;
                bottom: 0;
                height: 66px;
                width: 178px;
                text-align: center;
                background: linear-gradient(180deg,rgba(255,255,255,.8) 0,white 35%,white);
                opacity: 0;
                transition: all 1s;
                .findMore{
                    background-color: black;
                    width: 120px;
                    font-size: 12px;
                    height: 28px;
                    line-height: 28px;
                    border-radius: 20px;
                    color: #fff;
                    margin:18px auto 0 auto;
                    text-align: center;
                    cursor: pointer;
                    
                    span  {
                            color: #fff; 
                        }
                    svg {
                        vertical-align: middle;
                        margin-left: 5px;
                    }
                    &:hover {
                        background-color: #C81623;
                    }
                }
                &:hover {
                    opacity: 1;
                }
            }
            &:hover {
                transform: translateY(-10px) scale(1.1);
            }
        }
</style>