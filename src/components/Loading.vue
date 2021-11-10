<template>
    <div class="loading">
        <img src="../assets/imgs/loadingSvg/loading.svg" alt="">
        <p>正在加载，请稍后......</p>
    </div>
</template>

<script>
    export default {
        name: "Loading"
    }
</script>

<style lang="scss">
.loading{
    height: 200px;
    text-align: center;
    padding-top: 30px;
    img{
        height: 120px;
    }
    p {
        margin-top: 20px;
        font-size: 20px;
        color: #999;
    }

}
</style>