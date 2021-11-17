<template>
  <div class="nav-menu">
    <ul class="menu-warp">
      <li class="menu-item">
        <a href="javascript:;">家用 / 电器</a>
        <div class="children">
          <ul v-for="(item, index) in menuList" :key="index">
            <li v-for="(sub, j) in item" :key="j">
              <a :href="sub ? '/#/product/' + sub.id : ' '">
                {{ sub ? sub.name : "达达利亚商城" }}
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="menu-item">
        <a href="javascript:;">手机/运行商/数码</a>
        <div class="children">没有图片了，不写了</div>
      </li>
      <li class="menu-item">
        <a href="javascript:;">家居/家具/家装</a>
        <div class="children">没有图片了，不写了</div>
      </li>
      <li class="menu-item">
        <a href="javascript:;">男装/女装/童装</a>
      </li>
      <li class="menu-item">
        <a href="javascript:;">男鞋/运动/户外</a>
      </li>
      <li class="menu-item">
        <a href="javascript:;">图书/文娱/教育</a>
      </li>
      <li class="menu-item">
        <a href="javascript:;">生活 / 电话卡</a>
      </li>
      <li class="menu-item">
        <a href="javascript:;">机票/酒店/旅游</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        [
          {
            id: 30,
            name: "电视",
          },
          {
            id: 31,
            name: "空调",
          },
          {
            id: 32,
            name: "OLED电视",
          },
          {
            id: 33,
            name: "智慧屏",
          },
        ],
        [
          { id: 34, name: "冰箱" },
          { id: 35, name: "厨卫" },
          { id: 36, name: "生活电器" },
          { id: 37, name: "个护健康" },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    };
  },
};
</script>
<style lang='scss' scoped>
@import "../assets/scss/config.scss";
.nav-menu {
  display: inline-block;
  position: relative;
  width: 190px;
  height: 470px;
  z-index: 11;
  padding: 26px 0;
  background-color: #fff;
  box-sizing: border-box;
  .menu-warp {
    .menu-item {
      height: 50px;
      line-height: 50px;
      a {
        position: relative;
        display: block;
        color: #333;
        font-size: 16px;
        padding-left: 30px;
        &:after {
          position: absolute;
          right: 30px;
          top: 17.5px;
          display: inline-block;
          content: " ";
          width: 10px;
          height: 15px;
          background: url("../assets/imgs/icon-arrow.png") no-repeat center;
          background-size: contain;
        }
      }
      &:hover {
        background-color: $colorA;
        .children {
          width: 998px;
        }
      }
      .children {
        transition: all 0.7s;
        overflow: hidden;
        width: 0;
        height: 470px;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 190px;
        // box-shadow: 0 2px 10px 0 rgba(0 0 0 / 8%);
         box-shadow: 0 0 20px -5px #999;
        ul {
          display: flex;
          justify-content: space-between;
          height: 75px;
          li {
            height: 75px;
            line-height: 75px;
            width: 241px;
            padding-left: 23px;
            img {
              width: 42px;
              height: 35px;
              vertical-align: middle;
              margin-right: 15px;
            }
            a {
              color: #999;
              font-size: 14px;
              &:hover {
                color: $colorA;
                font-weight: bolder;
              }
            }
          }
        }
      }
    }
  }
}
</style>