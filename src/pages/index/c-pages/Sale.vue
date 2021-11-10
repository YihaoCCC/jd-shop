<template>
    <div class="saleContent">
        <div class="container">
            <div class="left">
                <div class="items" v-for="item in salesList" :key="item.id" @click="GoToSalePart" >
                    <img :src="item.imgUrl" alt="">
                    <div class="title">
                        <p>{{item.title}}
                        </p>
                    </div>
                    <span>{{item.name}}</span>
                </div>
            </div>
            <div class="right">
                <img src="https://img11.360buyimg.com/babel/s380x200_jfs/t1/206568/23/6950/34367/617910b5Ee1c9b6da/1f98e6f3e2ac1fa1.png!cc_190x100.webp" alt="">
                <img src="https://img11.360buyimg.com/babel/s380x200_jfs/t1/137021/4/21507/6353/617a5e11E8edecc81/06e14ae9cef5a969.png!cc_190x100.webp" alt="">
                <img src="https://img14.360buyimg.com/babel/s380x200_jfs/t1/197747/6/15023/7165/617f64e8E60f5e472/1802f5989ffa7617.png!cc_190x100.webp" alt="">
                <img src="https://img10.360buyimg.com/babel/s380x200_jfs/t1/211042/9/5709/8138/616cff18E874f49fc/c215dda400cb51de.png!cc_190x100.webp" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                salesList: [
                    {
                        id: 1,
                        name: '美好生活',
                        title: '生活好物1元起',
                        imgUrl: 'https://img14.360buyimg.com/img/s260x260_jfs/t1/216873/27/2943/238306/61824029Ed53bf519/c44b39e79e0e7782.jpg!cc_130x130.webp',
                    },
                    {
                        id: 2,
                        name: '钟表眼镜',
                        title: '每满200减30',
                        imgUrl: 'https://img11.360buyimg.com/img/s260x260_jfs/t1/222307/7/1066/136127/6181e02cE374026c1/50860695899e9709.jpg!cc_130x130.webp'
                    },
                    {
                        id: 3,
                        name: '爱宠狂欢节',
                        title: '领券满199减100',
                        imgUrl: 'https://img12.360buyimg.com/img/s260x260_jfs/t1/200582/12/15322/133422/617eaf8eE1c66c857/555c3d05b1f26c4a.jpg!cc_130x130.webp'
                    },
                    {
                        id: 4,
                        name: '5G购机补贴',
                        title: '送30元话费',
                        imgUrl: 'https://img30.360buyimg.com/img/s260x260_jfs/t1/220959/19/2158/316809/617a4c4bE0315fbd1/c24ee218c6004bda.jpg!cc_130x130.webp'
                    },
                    {
                        id: 5,
                        name: '戴森爆款精选',
                        title: '直降高达千元',
                        imgUrl: 'https://img13.360buyimg.com/img/s260x260_jfs/t1/156034/3/24362/249614/617e7703E305a2677/7ade98a968e12010.jpg!cc_130x130.webp'
                    },
                    {
                        id: 6,
                        name: '防护精选',
                        title: '199减100',
                        imgUrl: 'https://img12.360buyimg.com/img/s260x260_jfs/t1/171029/11/22378/121594/6179f089Efa90d95f/8a86a59760949337.jpg!cc_130x130.webp'
                    },
                    {
                        id: 7,
                        name: '品质图书',
                        title: '5折封顶叠津贴',
                        imgUrl: 'https://img10.360buyimg.com/img/s260x260_jfs/t1/133142/13/6896/177418/5f33a610E11765fe5/bf13ce75f14eaae4.jpg!cc_130x130.webp'
                    },
                    {
                        id: 8,
                        name: '配件外设',
                        title: '部分每满99减20',
                        imgUrl: 'https://img13.360buyimg.com/img/s260x260_jfs/t1/156034/3/24362/249614/617e7703E305a2677/7ade98a968e12010.jpg!cc_130x130.webp'
                    },
                    {
                        id: 9,
                        name: '企业超省月',
                        title: '低至5折',
                        imgUrl: 'https://img11.360buyimg.com/img/s260x260_jfs/t1/208573/38/7634/71120/618104b7E37ba268f/0e8283ee134eada8.jpg!cc_130x130.webp'
                    },
                    {
                        id: 10,
                        name: '京东E卡',
                        title: '购卡返京豆',
                        imgUrl: 'https://img14.360buyimg.com/img/s260x260_jfs/t1/171106/30/21116/570173/617b9e6fE4f7d4a12/ea7d6170440e6e2c.jpg!cc_130x130.webp'
                    },
                ]
            }
        },
        methods: {
            GoToSalePart() {
                
                this.$message.warning('售卖详情页面没有需求');
            }
        }
    }
</script>


<style scoped lang='scss'>
@import '../../../assets/scss/config.scss';
.saleContent {
    margin: 60px auto 0 auto;
    width: 1270px;
    height: 555px;
    padding-top: 108px;
    box-sizing: border-box;
    background-image: url('../../../assets/imgs/index-bg2.webp');
    background-size: contain;
    .container {
        width: 1202.5px;
        height: 440px;
        margin: auto;
        display: flex;
        justify-content: flex-start;
        .left {
            width: 1000px;
            height: 440px;
            text-align: center;
            
            .items {
                width: 190px;
                height: 210px;
                display: inline-block;
                cursor: pointer;
                margin: 0 10px 10px 0;
                background-image: url('../../../assets/imgs/items-box-bg.webp');
                background-size: cover;
                text-align: center;
                img {
                    width: 130px;
                    height: 130px;
                    margin: auto;
                }
                .title {
                    width: 174px;
                    height: 30px;
                    margin: 10px auto 7px auto;
                    background-image: url('../../../assets/imgs/items-bg.webp');
                    background-size: cover;
                    P {
                        font-size: 17px;
                        color: #fff;
                        font-weight: bolder;
                        line-height: 30px;
                    }
                   
                }
                 span {
                        font-size: 17px;
                        color: $colorA;
                        font-weight: bolder;
                    }
            }
        }
        .right {
            width: 190px;
            height: 440px;

            img {
                width: 190px;
                height: 100px;
                margin-bottom: 7px;
            }
           
        }

    }
}
</style>