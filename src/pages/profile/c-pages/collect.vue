<template>
 <div class="collections">
        <h3>我的收藏</h3>  
       <div>
            <goods-item
            v-for="item in 4"
            :key="item"
        >

        </goods-item>
       </div>
    </div>
</template>

<script>
import GoodsItem from '../../../components/GoodsItem.vue';
    export default {
        components: {
            GoodsItem
        }
    }
</script>
<style scoped lang='scss'> 
.collections {
    h3 {
        margin-bottom: 10px;
        padding-bottom: 2px;
        border-bottom: 2px solid #E1251B;
    }

}
</style>
