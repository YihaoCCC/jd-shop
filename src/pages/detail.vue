<template>
    <div>
        <detail-header :title="detail.title">
            <template v-slot:buy>
                <button>加入购物车</button>
            </template>
        </detail-header>
        <div class="detailContent">
            
        </div>
    </div>
</template>
<script>
import DetailHeader from '../components/DetailHeader.vue'

export default {
    mounted() {
       this.detail = this.$route.query.detail
    },
    components: {
        DetailHeader,
    },
    data() {  
        return {
            message: '产品详情',
            detail: {}   
        }
    }
}
</script>
<style scoped lang='scss'>
@import '../assets/scss/config.scss';
button {
    width: 100px;
    height: 40px;
    background-color: $colorA;
    color: #fff;
    font-size: 14px;
    border: none;
    &:hover {
        border: 1px solid #fff;

    }
}
.detailContent {
    height: 500px;
    background-color: #fff;
}
</style>