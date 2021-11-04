<template>
    <div class="floatImgBox">
        <div class="item" v-for="item in 5 " :key="item">
            <p>{{item}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Recommand',
    data() {
        return {
            
        }
    }
}
</script>
<style lang='scss' scoped>
    .floatImgBox {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        box-sizing: border-box;
        .item {
            text-align: center;
            width: 220px;
            height: 322px;
            display: inline-block;
            background-color: #fff;
            border-radius: 20px;
            transition: all 0.4s;
            box-shadow: 0 2px 10px 0 rgb(0 0 0 / 8%);
            // box-shadow: 0 0 20px -5px #999;

            &:hover {
                transform: translateY(-15px) scale(1.1);
            }
        }
    }
</style>