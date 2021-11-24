<template>
    <div class="search">
        <div class="searchHeader ">
            <div class="safeContent" style="display: flex; justify-content:flex-start">
                <div class="item" v-for="item in items" :key="item">
                    {{item}}
                </div>
            </div>
        </div>
         <p class="safeContent" style="margin-bottom:15px">全部结果：</p>
        <div class=" searchContent safeContent">
           
            <search-item v-for="item in 10" :key="item" :content='item'></search-item>
        </div>
    </div>
</template>
<script>
import SearchItem from "../components/SearchItem.vue";
export default {
    name: 'search',
    components: {
        SearchItem
    },
    data() {
        return { 
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
            ]
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
                font-weight: inherit;

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
