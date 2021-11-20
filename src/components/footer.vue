<template>
<div class="footer">
    <div class="safeContent">
        <span v-for="(items,index) in titles" :key="index">{{items}}</span>
        <p>京公网安备 11000002000088号 | 京ICP备11041704号 |  互联网药品信息服务资格证编号(京)-经营性-2014-0008 | 新出发京零 字第大120007号</p>
        <p>Copyright © 2004 -  | 消费者维权热线：4006067733 | 经营证照 | (京)网械平台备字(2018)第00003号 | 营业执照</p>
        <p>达达利亚旗下网站： 达达利亚钱包 | 达达利亚云 | 网络内同从业人员违法违规行为举报电话： 4006561155-3</p>
        <p>最终解释权归达达利亚小组所有@Copyright All DADALIYA</p>
    </div>
</div>
    
</template>
<script>
 export default {
     data() {
         return {
             titles: [
                 '关于我们',
                 '联系我们',
                 '联系客服',
                 '合作招商',
                 '营销中心',
                 '达达利亚',
                 '友情链接',
                 '销售联盟',
                 '达达利亚',
                 '风险监测',
                 '隐私政策',
                 '达达利亚',
                 'English Site',
                 'Media & IR',
             ],
             services: [

             ]
         }
     }
 }
</script>

<style scoped lang='scss'>
.footer {
    border-top: 1px solid red;
    padding: 20px 0 ;
    box-sizing: border-box;
    text-align: center;
    span {
        font-size: 12px;
        color: #666;
        margin-right: 10px;
        &::after {
            content: '|';
            margin-left: 10px;
        }
        &:last-child {
            &::after {
                content: '';
            }
        }
    }
    p {
        margin: 10px 0;
        font-size: 12px;
        color: #999;
    }
}
</style>