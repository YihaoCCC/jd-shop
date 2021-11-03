<template>
  <div class="secondBuy">
    <div class="secondLeft">
      <h1>京东秒杀</h1>
      <div class="time">
        <h3>{{ time }}</h3>
        点场 距结束
        <div class="timeContent">
          <div class="timmer">
            {{ hour }}
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
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="secondRightContent">
        
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: "22:00",
      hour: "01",
      munite: "50",
      second: "33",
    };
  },
};
</script>
<style scoped lang='scss'>
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
      width: 760px;
    //   display: inline-block;
  }
}
</style>
