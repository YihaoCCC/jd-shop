<template>
    <div class="service">
        <div class="safeContent">
            <div class="serviceItem" v-for="(item,index) in service" :key="index" >
                <div class=" items" :class="item.name"></div>
                <p>{{item.title}}</p>
            </div>
        </div>   
    </div>
</template>
<script>
    export default {
        data() {
            return {
                message: 'fadsfdsa',
                service: [
                    {
                        name: 'more',
                        title: '品类齐全，轻松购物'
                    },
                    {
                        name: 'fast',
                        title: '多仓直发，急速配送'
                    },
                    {
                        name: 'good',
                        title: '正品行货，精致服务'
                    },
                    {
                        name: 'save',
                        title: '天天低价，畅选无忧'
                    }   
                ]
            }
        }
    }
</script>

<style scoped lang='scss'>
.service {
    background-color: #fff;
    padding: 20px 0;
}
.safeContent{ 
    display: flex;
    .serviceItem {   
        width: 297px;
        height: 42px;
        line-height: 42px;
        font-size: 18px;
        font-weight: bolder;
        display: flex;
        justify-content: center;
        p {
            display: inline-block;
        }
        .items {
            width: 36px;
            height: 42px;
            margin-right: 10px;
            display: inline-block;
            background-image: url('../assets/imgs/ServiceBar.png');
            background-size: 113px 86.5px;
            background-repeat: no-repeat;
        }
        .more { 
            background-position: 0 0;
        }
        .fast {
            background-position: -38.5px 0;
        }
        .good {
            background-position: -77px 0;
        }
        .save {
            background-position: 0 -44.5px;
        }
       

    }
}
</style>