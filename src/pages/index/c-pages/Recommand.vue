<template>
<div>
    <div class="floatImgBox">

        <goods-item 
        v-for="item in GoodsList" 
        :key="item.goodsId"
        :GoodsItem='item'
        >

        </goods-item>

    </div>
   <div class="loadMore" v-if="showMore">
       <button @click="LoadMore" >加载更多</button>
   </div>
    <end-data
        v-else
    ></end-data>
   
</div>

</template>
<script>
import GoodsItem from '../../../components/GoodsItem.vue'
import EndData from '@/components/EndData'

export default {
  components: { GoodsItem, EndData },
    name: 'Recommand',
    data() {
        return {
            pageNum: 1,
            showMore: true,
            GoodsList: [],//后端数据
            isShow: false,
        }
    },
    filters: {
        pirce(pirce) {
            pirce = Number(pirce)
            return `￥${pirce.toFixed(2)}`
        }
    },
    mounted() {
        this.getGoods()
    },
    methods: {
        getGoods() {
            this.yhRequest.get(`/api/goods/pageNum/${this.pageNum}`).then((res) => {
                if( !res.length ) {
                    this.$message.warning('数据已经到底了哦')
                    this.showMore = false
                }
                this.GoodsList.push(...res) // 数组拼接cancat会生成新的数组
            })
        },
        LoadMore() {
            this.pageNum ++;
            this.getGoods()
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