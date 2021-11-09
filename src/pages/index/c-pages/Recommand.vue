<template>
<div>
    <div class="floatImgBox">
        <div class="item" v-for="item in recommendList " :key="item.id" >
            
            <img :src="item.imgUrl" :alt="item.title" @click="GoToDetail(item)">
            
            <div class="nameInfo" @click="GoToDetail(item)">
                <span class="self" v-if="item.isSelf === 1">自营</span> 
                <span>{{item.title}}</span>
            </div>
            <div class="pirce"><span>{{item.pirce | pirce}}</span></div>
            <div class="more">
                <div class="findMore" @click="AddToCart(item)">
                    <span>加入购物车</span>
                    <svg t="1635996283145" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2445" width="16" height="16"><path d="M324.778667 521.99424c0-102.857387 83.715413-186.579627 186.688853-186.579627 102.85056 0 186.688853 83.718827 186.688853 186.579627 0 74.028373-42.581333 141.359787-108.5952 171.49952-8.13056 3.70688-17.4592 4.058453-25.828693 0.95232s-15.18592-9.448107-18.8928-17.4592c-7.77216-16.858453-0.3584-36.713813 16.503467-44.485973 42.09664-19.26144 69.362347-62.552747 69.362346-110.394027 0-65.778347-53.456213-119.35744-119.241386-119.35744-65.778347 0-119.354027 53.57568-119.354027 119.35744a119.313067 119.313067 0 0 0 72.833707 110.032213c14.830933 6.212267 23.08096 21.998933 19.851946 37.546667-3.229013 15.55456-16.98816 26.914133-33.006933 26.914133a32.6656 32.6656 0 0 1-13.154987-2.75456c-69.246293-29.538987-114.09408-97.112747-113.855146-171.851093z m127.013546 174.486187c0.119467 0 0.119467 0 0 0 0.119467 0 0.119467 0 0 0zM992.36864 578.56c-16.387413 16.26112-30.856533 30.252373-55.497387 50.827947-6.813013 5.741227-15.6672 8.492373-24.634026 7.77216a33.54624 33.54624 0 0 1-22.96832-11.840854c-11.96032-14.2336-10.042027-35.280213 4.18816-47.36 22.725973-19.012267 35.642027-31.573333 51.428693-47.24736a26.279253 26.279253 0 0 0 8.133973-18.653866 26.309973 26.309973 0 0 0-8.133973-18.65728c-64.94208-64.1024-237.284693-213.248-432.943787-213.248-195.77856 0-368.001707 149.138773-433.063253 213.248a26.4192 26.4192 0 0 0-8.250027 18.65728c0 6.94272 2.870613 13.513387 8.250027 18.653866 64.938667 64.22528 237.28128 213.248 432.943787 213.248 100.696747 0 188.7232-29.180587 285.477546-94.60736a33.928533 33.928533 0 0 1 25.35424-5.25312 33.532587 33.532587 0 0 1 21.64736 14.114134c10.52672 15.29856 6.46144 36.232533-8.850773 46.639786-107.281067 72.594773-210.01216 106.318507-323.505493 106.318507v-0.119467c-212.882773 0-392.3968-145.793707-480.54272-232.73472A92.842667 92.842667 0 0 1 3.413333 511.941973c0-24.992427 10.16832-48.913067 28.105387-66.495146 88.02304-86.828373 267.659947-232.615253 480.423253-232.615254 212.87936 0 392.393387 145.793707 480.535894 232.741547 17.94048 17.578667 28.105387 41.499307 28.105386 66.491733-0.109227 24.99584-10.27072 48.909653-28.214613 66.495147z" 
                    p-id="2446" fill="#e6e6e6"></path></svg>
                </div>
            </div>       
        </div> 
    </div>
   <div class="loadMore">
       <button>加载更多</button>
   </div>
   <model
    :IsShow="isShow"
    :btnType="1"
    content="添加购物车成功！"
    SureText="查看购物车"
    @CancelClick='cancel()'
    @SureClick = 'sure()'
   ></model>
</div>

</template>
<script>
import Model from '../../../components/Model.vue'
export default {
  components: { Model },
    name: 'Recommand',
    data() {
        return {
            recommendList: [
                {
                    id: 1,
                    isSelf: 1,
                    title: '华硕a豆14 航天版 7nm八核高性能轻薄本 学生商务办公笔记本电脑(8核R7-5700U 16G 512G 高色域 套装)',
                    pirce: 4999,
                    imgUrl: 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/197543/29/15798/251230/61822529Ecd74f05a/2821ba5406ca21d9.jpg.webp'
                },
                {
                    id: 2,
                    isSelf: 0,
                    title: '2020华为荣耀笔记本magicbook14英寸键盘膜matebookd15英寸键盘保护贴膜加大字母 KP-043',
                    pirce: 39,
                    imgUrl: 'https://img10.360buyimg.com/jdcms/s300x300_jfs/t1/140177/21/5307/81118/5f350d99Eda501dfc/c9a09486e37e2dd6.jpg.webp'
                },
                {
                    id: 3,
                    isSelf: 1,
                    title: '荣耀MagicBook 16 Pro 2021 16.1英寸高性能标压轻薄游戏笔记本电脑(R7-5800H 16+512G 144Hz RTX3050)星空灰',
                    pirce: 7299,
                    imgUrl: 'https://img20.360buyimg.com/jdcms/s300x300_jfs/t1/202340/17/13434/211094/617fcac9E91749b4c/aa8a6bf7546e46a7.jpg.webp'
                },
                {
                    id: 4,
                    isSelf: 0,
                    title: '2021款华为笔记本MateBook D14 D15锐龙版/酷睿全面屏轻薄本商务办公学生笔记本电脑 银D15酷睿四核11代i7 16G+512G 集显',
                    pirce: 6899,
                    imgUrl: 'https://img14.360buyimg.com/jdcms/s300x300_jfs/t1/208721/9/6771/98793/61763696E9ebde8e1/cab9c2b15ce0f6ee.jpg.webp'
                },
                {
                    id: 5,
                    isSelf: 1,
                    title: 'Apple iPhone 13 (A2634) 256GB 星光色 支持移动联通电信5G 双卡双待手机【快充套装】',
                    pirce: 6808,
                    imgUrl: 'https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/198821/2/8516/36243/6141198dEbcf28beb/0cb322ec02645bcb.jpg.webp'
                },
                {
                    id: 6,
                    isSelf: 0,
                    title: 'vivo S10Pro新品 轻薄自拍旗舰 自然柔光人像光致变色工艺 后置1亿像素主摄 天玑1100 绮光焕彩 8GB  128GB',
                    pirce: 2699,
                    imgUrl: 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/202248/4/14272/98255/6185468dE39acff73/2cef48662c8b08df.jpg.webp'
                },
                 {
                    id: 7,
                    isSelf: 0,
                    title: '卡贝伯爵坐垫椅子大学生教室地垫毛绒50大号秋冬办公室寝室座垫屁股屁垫 九孔绵柔-紫雏菊 40X40(防滑加厚带绑带)',
                    pirce: 18.98,
                    imgUrl: 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/207889/8/5033/111065/616686f1E130d256c/fd74adccecb7bb6e.jpg.webp'
                },
                {
                    id: 8,
                    isSelf: 0,
                    title: '巧马水洗棉床上四件套床单简约裸睡亲肤纯色被套单人学生宿舍被罩1.5m1.8米双人床上用品 双拼 浅兰灰-浅灰 0.9床【三件套】被套150*200',
                    pirce: 96,
                    imgUrl: 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/219873/6/3473/103364/618788daEc9906ff4/87ccc2775eeb41ee.jpg.webp'
                },
                {
                    id: 9,
                    isSelf: 1,
                    title: '飞利浦（PHILIPS）真无线运动蓝牙耳机7级深度防水运动狂甩不掉苹果华为小米安卓手机通用A5205',
                    pirce: 399,
                    imgUrl: ' https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/174160/5/28433/99952/6184f44fEe510aa31/928a3155cc6c6ffd.jpg.webp'
                },
                {
                    id: 10,
                    isSelf: 1,
                    title: '华硕无畏15 OLED轻薄商务办公学生笔记本电脑(R7-5700U 16G 512G 100%DCI-P3 高色域 600尼特 护眼屏 金属)银',
                    pirce: 4698,
                    imgUrl: 'https://img20.360buyimg.com/jdcms/s300x300_jfs/t1/205589/26/14187/204557/6185fc40Ec5a9c82c/12bf7822356bae59.jpg.webp'
                },

            ],
            isShow: false,
        }
    },
    filters: {
        pirce(pirce) {
            return `￥${pirce.toFixed(2)}`
        }
    },
    methods: {
        GoToDetail(item) {
            this.$router.push({
                path: '/detail',
                query: {
                    detail: item
                }
            })
        },
        AddToCart(item) {
            this.isShow = true
            console.log(item)
        },
        cancel() {
            this.isShow = false
        },
        sure() {
            this.$router.push('/myCart')
        }
    }
}
</script>
<style lang='scss' scoped>
@import '../../../assets/scss/config.scss';
    .floatImgBox {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
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
    }
    .loadMore {
        width: 110px;
        margin: 30px auto;
        button {
            width: 110px;
            cursor: pointer;
            height: 50px;
            border-radius: 20px;
            background-color: $colorA;
            border: 2px solid #fff;
            color: #fff;
            font-size: 16px;
            &:hover {
                border: 2px solid $colorA;
            }
        }
    }
    
</style>