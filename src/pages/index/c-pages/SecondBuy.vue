<template>
  <div class="secondBuy">
    <div class="secondLeft">
      <h1>达 达 利 亚</h1>
      <div class="time">
        <h3>{{ time | timeF}}  </h3>
        点场 距结束
        <div class="timeContent">
          <div class="timmer">
            00
          </div>
          :
          <div class="timmer">
            {{ munite }}
          </div>
          :
          <div class="timmer">
            {{ second }}
          </div>
        </div>
      </div>
    </div>
    <div class="secondBuyContent">
      <el-carousel trigger="click" :autoplay='false' height="260px">
        <el-carousel-item v-for="(x,index) in secondList" :key="index">
          <div class="listItem" v-for="item in x" :key="item.id" @click="goToDetail(item)">
            <img :src="item.imgUrl" alt="">
            <span>{{item.title}}</span>
            <em>{{item.price | price}}</em>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="rightSwiper">
        <el-carousel  height="260px" :interval="3000"  indicator-position='none'>
            <el-carousel-item v-for="item in rightList" :key="item.id">
                  <img style="width: 120px;heigth: 120px;" :src="item.imgUrl" alt="">
                  <div class="instructions">
                      <p>{{item.title}}</p>
                      <p>{{item.promo}}</p>
                      <div class="itemAction">
                        <span>{{item.action}}></span>
                      </div>
                  </div>
            </el-carousel-item>
        </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.getNowDate()
  },
  methods: {
    getNowDate() {
      //获取当前时间
      let nowTime  = new Date()
      // 定义截至时间小时
      let endTimeHour
      if(nowTime.getHours() !== 23) {
        endTimeHour = nowTime.getHours() + 1
      } else {
        endTimeHour = 0
      }
      // 定义截至时间对象 下一个小时0分0秒
      this.time = endTimeHour
      let endTime = new Date()
      endTime.setHours(endTimeHour)
      endTime.setMinutes(0)
      endTime.setSeconds(0)

      // 定义定时器 每一秒进行运行
      setInterval(() => {
      let Time = new Date()//每次获取当前时间
      let time = endTime - Time //计算差值
      this.munite = Math.floor(time/(60000)%60)    //计算分钟数
       
      this.second = Math.floor(time/1000%60);  //计算秒数
      
      },1000)
      
    },
    goToDetail(item) {
      this.$router.push({
        path:'/detail',
        query: {
          detail: item
        }
      })
    }
  },
  data() {
    return {
      time: "22:00",
      hour: "01",
      munite: "50",
      second: 33,
      secondList: [
        [
              {
              id: 1,
              title: '三星 SAMSUNG Galaxy S21 Ultra 5G 5G手机 骁龙888 1.08亿像素 120Hz 支持Spen 12GB+256G幽夜黑',
              price: 8169,
              imgUrl: 'https://img20.360buyimg.com/seckillcms/s280x280_jfs/t1/145853/26/19479/105728/60aefa3fE797a4540/8b9bbe6fcb72c567.jpg.webp'
            },
            {
              id: 2,
              title: 'OPPO Reno6 Pro+ 8+128GB 夏日晴海 5000万四摄 索尼IMX766 骁龙870 旗舰拍照 5G手机',
              price: 8169,
              imgUrl: 'https://img10.360buyimg.com/seckillcms/s280x280_jfs/t1/195464/34/16599/129148/610b58feE95c944e6/d19eb687b64f4099.jpg.webp'
            },
            {
              id: 7,
              title: '阿玛尼(Emporio Armani)满天星手表 明星同款 钢质表带时尚休闲石英女士腕表  AR11244',
              price: 3269,
              imgUrl: 'https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/203914/19/13659/161312/617f8350E4af735bf/b5569461ac7d2f91.jpg.webp'
            },
           
            {
              id: 4,
              title: '小米11 Pro 5G 骁龙888 2K AMOLED四曲面柔性屏 67W无线闪充 3D玻璃工艺 12GB+256GB 黑色 手机',
              price: 8169,
              imgUrl: 'https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/184244/35/6773/83620/60b4a2a5E9870799f/f131ae58b58ff955.jpg.webp'
            }
        ],
        [
            {
              id: 5,
              title: '蒙牛低脂高钙牛奶营养早餐奶整箱礼盒装 250ml*24盒',
              price: 49.9,
              imgUrl: 'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/216242/13/2901/197079/61813e41E906806b6/2fdc523c642cdecd.jpg.webp'
            },
            {
              id: 6,
              title: '京库 JINGKU 手工花椒锅巴组合装108g*4袋（五香味2袋+麻辣味2袋）',
              price: 10.90,
              imgUrl : 'https://img10.360buyimg.com/seckillcms/s280x280_jfs/t1/214360/23/2895/181157/618107dfEaf2a8ca7/34526c53a0552df6.jpg.webp'
            },
             {
              id: 3,
              title: '荣耀 Magic3 骁龙888 6.76英寸超曲屏 多主摄计算摄影 66W超级快充 4600mAh大电池 全网通版 8GB+128GB釉白色',
              price: 8169,
              imgUrl: 'https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/174255/28/26953/50331/6163e4ebE23e01d95/c4fe597820ebd9c7.jpg.webp'
            },
            {
              id: 8,
              title: '河南钱币 2022年熊猫银币纪念币30克999足银熊猫银币系列 配绿盒',
              price: 227,
              imgUrl: 'https://img10.360buyimg.com/seckillcms/s280x280_jfs/t1/142111/39/21562/66422/6180e1c7E78ce7b10/8e91703ca724ef08.jpg.webp'
            }
        ],
      ],
      rightList: [
        {
          id: 9,
          title: '华硕品牌秒杀',
          promo: '至高白条12期免息',
          action: '品牌秒杀',
          imgUrl: 'https://img12.360buyimg.com/seckillcms/s260x260_jfs/t1/170049/18/11964/65161/604b219fE00600eef/621185613de72c8a.jpg.webp',
        },
        {
          id: 10,
          title: '欧普照明专场特卖',
          promo: '爆款低至5折',
          action: '品类秒杀',
          imgUrl: 'https://img11.360buyimg.com/seckillcms/s260x260_jfs/t1/211144/16/7778/243950/61816a7fE239e60ff/f2b85c6e44af1e72.jpg.webp'
        }
      ]
    };
  },
  filters: {
    price(x) { 
      return `￥${x.toFixed(2)}`
    },
    timeF(x) {
      return `${x}: 00`
    }
  }
};
</script>
<style scoped lang='scss'>
@import '../../../assets/scss/config.scss';
.secondBuy {
  height: 260px;
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
  .secondLeft {
    width: 190px;
    height: 100%;
    text-align: center;
    // display: inline-block;
    background-image: url("../../../assets/imgs/miaosha-bg.png");
    color: #fff;
    h1 {
      line-height: 110px;
    }
    .time {
      margin-top: 50px;
      h3 {
        display: inline-block;
        font-weight: bolder;
        font-size: 20px;
      }
      .timeContent {
        display: flex;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
        .timmer {
          width: 30px;
          height: 30px;
          line-height: 30px;
          font-size: 24px;
          font-weight: bolder;
          background-color: #333;
        }
      }
    }
  }

  .secondBuyContent {
      width: 800px;
    //   display: inline-block;
    .el-carousel__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .listItem {
        padding: 20px 10px;
        position: relative;
        background-color: #fff;
        width: 200px;
        height: 260px;
        text-align: center;
        box-sizing: border-box;  
        
        &::after {
            position: absolute;
            height: 1px;
            left: 15px;
            right: 15px;
            background: linear-gradient(90deg,white,#999,#999,white);
            content: " ";
            bottom: 10px;
        }
        img {
              width: 140px;
              height: 140px;
              display: block;
          }
          span {
            display: inline-block;
            margin: 10px 0;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 160px;
          }
          em {
            font-size: 16px;
            font-weight: bolder;
            color: $colorA;
          }
        }
    }
  }

  .rightSwiper {
    width: 200px;
    height: 100%;
    background-color: #fff;
    padding: 10px 10px;
    box-sizing: border-box;
    img {
      margin: 10px 10px;
    }
    .instructions {
      height: 96px;
      color: #888;
      background: linear-gradient(180deg,rgba(255,255,255,.5),rgba(220,224,236,.5));
      p {
        margin-bottom: 5px;
        &:nth-child(2){
          font-size: 15px;
          color: #333;
          font-weight: bolder;
        }
      }
      .itemAction {
        border-radius: 20px;
        width: 70px;
        margin: auto;
        border: 1px solid $colorA;
        color: $colorA;
        font-weight: bolder;
        padding: 3px 10px;
        text-align: center;
        &::after {
          margin: 0%;
        }
        &:hover {
          background-color: $colorA;
          span {
            color: #fff;
          }
        }
      }
    }
    
    .el-carousel__item {
      text-align: center;
    }
  }
}
</style>
