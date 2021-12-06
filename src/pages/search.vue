<template>
    <div>
        <Loading v-if="Loading">

        </Loading>
        <template v-else>
            <div class="search">
                <div class="searchHeader ">
                    <div class="safeContent" style="display: flex; justify-content:flex-start">
                        <div class="item" v-for="item in items" :key="item">
                            {{item}}
                        </div>
                    </div>
                </div>
                <p class="safeContent" style="margin-bottom:15px">全部结果：<span style="color: #E1251B;font-weight:bolder">{{this.$route.query.searchGoods}}</span> </p>
                <div class=" searchContent safeContent">
                
                    <search-item v-for="item in SearchGoodsList" :key="item.goodsId" :detail="item"></search-item>
                </div>
                <div style="margin:auto;margin-top:20px;" class="safeContent">共<span style="color:#e1251b">{{number}}</span>个搜索结果</div>
                <div v-if="SearchGoodsList.length === 0" style="text-align:center">
                    暂未找到您搜索的名称为：<span  style="color: #E1251B;font-weight:bolder;font-size:20px">{{this.$route.query.searchGoods}} </span> 的商品
                </div>
                <end-data v-else></end-data>
            </div>
        </template>
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
import SearchItem from "../components/SearchItem.vue";
import EndData from '@/components/EndData'
import Loading from '@/components/Loading'
export default {
    name: 'search',
    components: {
        SearchItem,
        Loading,
        EndData
    },
    computed: {
        number() {
            return this.SearchGoodsList.length
        }
    },
    mounted() {
    
        this.getSearchGoods(this.$route.query.searchGoods)
      
    },
     watch:{
         $route: {
             deep:true,
             immediate: true,
             handler: function() {
                 console.log(this.$route.query.searchGoods)
                 this.getSearchGoods(this.$route.query.searchGoods)
             }
         }
     },
    data() {
        return { 
            Loading: true,
            items: [
                '全部搜索商品',
                '哒哒利亚时尚购',
                '美妆馆',
                '超市',
                '生鲜',
                '国际购',
                '云闪购',
                '拍卖',
                '我的金融'
            ],
            SearchGoodsList: [],
            isShowCollect: false,
            isShowCart: false
        }
    },
    methods: {
        getSearchGoods(params) {
            this.yhRequest.get(`/api/goods/queryByGoodsName/${params}`).then((res) => {
                let item = res
                this.SearchGoodsList = item.map((i) => { 
                    i.isNew = 1,
                    i.hasGift = 1,
                    i.shopName = '哒哒利亚产品自营店'
                    return i 
                })
                setTimeout(() => {
                    this.Loading = false
                },500)
            })
        },
        CollectSuccess() {
            this.isShowCollect  = true
        },
        GoCollect() {
            this.$router.push('/collect') 
        },
        cancel() {
            this.isShowCollect = false
        }
    }
}
</script>
<style scoped lang='scss'>
@import '../assets/scss/config.scss';
 .search {
     
     .searchHeader {
         width: 100%;
         height: 50px;
        border-bottom: 2px solid $colorA;
        background-color: #fff;
        margin-bottom: 20px;
        .item {
            height: 50px;
            line-height: 50px;
            padding: 0 30px;
            font-weight: bolder;
            box-sizing: border-box;
            &:first-child{
                background-color: $colorA;
                color: #fff;
                font-weight: bolder;
                display: inline-block;
            }
        } 
     }
     .searchContent {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        
    
     }
 }
</style>
