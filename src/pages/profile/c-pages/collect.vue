<template>
 <div class="collections">
        <h3>我的收藏</h3> 
       <div class="collectContent">
            <goods-item
                v-for="item in collectionList"
                :key="item.goodsId"
                :GoodsItem="item"
            >
            </goods-item>
        
       </div>
        <button @click="LoadMore" v-if="closeLoadMore">加载更多</button>
       
    </div>
</template>

<script>
import GoodsItem from '../../../components/GoodsItem.vue';
    export default {
        components: {
            GoodsItem
        },
        mounted() {
            this.getCollection()
        },
        data() {
            return {
                pageNum: 1,
                collectionList: [],
                closeLoadMore: true
            }
        },
        methods: {
            getCollection() {
                this.yhRequest.get(`/api/collection/queryByUserId/${this.$store.state.user.userId}&${this.pageNum}`).then((res) => {
                    if(res.length) {
                        this.collectionList.push(...res)
                    } else {
                        this.$message.warning('已经到底啦！')
                        this.closeLoadMore = false
                    }
                })
            },
            LoadMore() {
                this.pageNum ++
                this.getCollection()
            }
        }
    }
</script>
<style scoped lang='scss'> 
.collections {
    text-align: center;
    h3 {
        text-align: left;
        margin-bottom: 15px;
        padding-bottom: 5px;
        border-bottom: 2px solid #E1251B;
    }
    .collectContent{
        display: flex;
        padding: 0px 15px 0 0;
        box-sizing: border-box;
        justify-content: space-between;
        flex-wrap: wrap;
        height: 400px;
        scrollbar-width: none; /* firefox */
        -ms-overflow-style: none; /* IE 10+ */
        overflow-x: hidden;
        overflow-y: auto;
        &::-webkit-scrollbar {
            display: none; /* Chrome Safari */
        }

    }
    button {
        width: 100px;
        height: 40px;
        border-radius: 20px;
        background-color: #E1251B;
        color: #fff;
        border: 2px solid #fff;
        margin-top: 40px ;
        &:hover {
            border: 2px solid #E1251B;
        }
    }

}
</style>
