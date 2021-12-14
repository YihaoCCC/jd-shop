<template>
    <div class="safeContent">
        <div style="min-height: 500px;">

            <div class="orderDetailList" v-for="item in orderDetailList" :key="item.goodsVersionId">
                <div class="goodsBox">
                    <img :src="item.versionPhotoUrl" alt="">
                    <div class="title">
                        <p>{{item.goodsName}}</p>
                        <span>{{item.goodsVersionDetail}}</span>
                    </div>
                </div>
                <div class="commentContent">
                    <div v-if="!item.isComment">
                        <textarea v-model="item.comment"></textarea  >
                        <button @click="submitComment(item)" >提交评论</button>
                    </div>
                    <p v-else style="font-weight:bolder;font-size:16px;color:#e1251b;margin-top:40px"> 已评论</p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    mounted(){
        this.getOrderDetail();
        console.log(this.orderNo)
    },
    data() {
        return {
            orderNo: this.$route.query.orderNo,
            orderDetailList: []
        }
    },
    methods: {
        getOrderDetail(){
            this.yhRequest.get(`/api/order/getOrder/fromLast/${this.orderNo}`).then((res)=>{
                this.orderDetailList = res.orderDetails.map((i) => {
                    i.comment = ''
                    i.isComment = 0
                    return i
                })  
            })
        },
        submitComment(item) {
            if(item.comment) {
                this.yhRequest.post('/api/review/add', {
                    userId: this.$store.state.user.userId,
                    goodsId: item.goodsId,
                    reviewMessage: item.comment
                }).then(res => {
                    if(res) {
                        item.comment = ''
                        item.isComment = 1
                        this.$message.success('评论成功！')
                    } else {
                        console.log('error')
                    }
                })
            } else {
                this.$message.waring('评论内容不可为空！')
            }
        }
    }
}
</script>
<style scoped lang='scss'>
@import '../assets/scss/comment.scss';
</style>