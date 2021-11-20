<template>
    <div class="confirm">
        <div class="order-confirm clearfloat">
            <h2>收货地址</h2>
            <div class="address-box">
                <div class="addAddress" :class="{'checkedAddress': index === selectedAddress}" @click="selectedAddress=index" v-for="(item,index) in addressList" :key="index" >
                    <div class="name">
                        {{item.receiverName}}
                    </div>
                    <div class="telephone">
                        {{item.receiverMobile}}
                    </div>
                    <div class="address">
                        {{item.receiverCity}} {{item.receiverDistrict}} {{item.receiverAddress}}
                    </div>
                    <div class="deleteEdit ">
                        <svg @click="openDelete(item)"  t="1627055165994" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="809" width="32" height="32"><path d="M92.748283 203.507071h838.503434v44.140606H92.748283zM644.402424 115.238788v44.127677h44.127677V115.238788c0-24.384646-19.75596-44.127677-43.998384-44.127677h-265.050505a43.97899 43.97899 0 0 0-31.172525 12.916364 43.918222 43.918222 0 0 0-12.825859 31.211313v44.127677h44.127677V115.238788h264.791919z m0 0" p-id="810" fill="#666666"></path>
                            <path d="M203.073939 909.614545v-661.979798H158.946263V909.575758c0 24.410505 19.639596 44.179394 44.179394 44.179394h617.761616c24.410505 0 44.179394-19.639596 44.179394-44.179394V247.634747H820.926061v661.979798H203.073939z m0 0" p-id="811" fill="#666666"></path>
                            <path d="M313.412525 335.90303h44.127677V733.090909h-44.127677V335.90303z m176.523637 0h44.127676V733.090909H489.936162V335.90303z m176.523636 0h44.127677V733.090909h-44.127677V335.90303z m0 0" p-id="812" fill="#666666"></path>
                        </svg  >
                        <svg @click="openEdit(item)" t="1627055531719" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10999" width="32" height="32">
                            <path d="M855.780741 315.758524c15.699564-15.699564 15.699564-39.247886 0-54.94745l-90.270956-90.270956c-15.699564-15.699564-39.247886-15.699564-54.94745 0l-70.647013 70.647013 149.143808 149.143808L855.780741 315.758524zM161.086815 716.090235l0 149.143808 149.143808 0 431.729815-435.655218-149.142785-149.143808L161.086815 716.090235z" p-id="11000" fill="#666666"></path>
                        </svg>
                    </div>
                </div>
                <div class="addAddress" @click="openAddAdresss">
                    <div class="address-img">
                        <svg t="1627027208301" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2366" width="32" height="32"><path d="M81.2 830a430.8 125 0 1 0 861.6 0 430.8 125 0 1 0-861.6 0Z" fill="#FFC06E" p-id="2367"></path>
                            <path d="M522.6 701v50h-20v-50h20z m-20 231h20v-50h-20v50zM95.1 834h80v-20h-80v20z m750-20v20h80v-20h-80z" fill="#FFFFFF" p-id="2368"></path><path d="M960 830c0 25.7-25.8 49.7-70.3 69.9v-0.1c-0.1 0-0.1 0.1-0.2 0.1-10.3 5.1-22.8 0.9-28-9.4-5.1-10.3-0.9-22.8 9.4-27.9 0.2-0.1 0.4-0.2 0.5-0.2 24.7-11.2 38.5-23.8 38.5-37.1 0-47.5-176.8-86-395-86s-395 38.5-395 86 176.8 86 395 86c51.6 0 96.7-1.9 141.8-5.9 0.2 0 0.4 0 0.6-0.1H657.6c12.9-0.7 24 9 25 21.9 0.9 13-8.8 24.3-21.8 25.3-46.6 4.8-96.7 7.4-148.9 7.4-247.4 0-448-58.2-448-130s200.6-130 448-130S960 758.2 960 830z m-190.6 58.3c-13 0.9-22.8 12.3-21.9 25.3 0.9 13 12.3 22.8 25.3 21.9 13-0.9 22.8-12.3 21.9-25.3-0.9-13.1-12.3-22.9-25.3-21.9z" fill="#3A3644" p-id="2369"></path>
                            <path d="M511.9 819c-26.5-20.9-84.6-68.9-142.1-131.9-45-49.3-80.7-97.8-106.2-144.4-31-56.6-46.7-110-46.7-158.8 0-78.8 30.7-152.9 86.4-208.6C359.1 119.7 433.2 89 512 89c78.8 0 152.9 30.7 208.6 86.4S807 305.2 807 384c0 48.4-15.8 101.7-46.9 158.3-25.6 46.6-61.4 95.3-106.6 144.8-57.4 63-115.2 111-141.6 131.9z" fill="#F24A5D" p-id="2370"></path><path d="M512 114c36.5 0 71.8 7.1 105.1 21.2 32.1 13.6 61 33.1 85.8 57.9 24.8 24.8 44.3 53.7 57.9 85.8C774.9 312.2 782 347.5 782 384c0 81.4-50.4 180-145.8 285-47.1 51.8-94.8 93.6-124.3 117.9-29.5-24.2-77.1-65.7-124.1-117.3C321.3 596.7 242 487.9 242 384c0-36.5 7.1-71.8 21.2-105.1 13.6-32.1 33.1-61 57.9-85.8 24.8-24.8 53.7-44.3 85.8-57.9C440.2 121.1 475.5 114 512 114m0-50c-176.7 0-320 143.3-320 320 0 233 320 466.6 320 466.6S832 615 832 384c0-176.7-143.3-320-320-320z" fill="#3A3644" p-id="2371"></path>
                            <path d="M512 320.1m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" fill="#3A3644" p-id="2372"></path>
                            <path d="M248.4 437.2c-4.3-18.4-6.4-36.1-6.4-53.2 0-72.1 28.1-139.9 79.1-190.9 51-51 118.8-79.1 190.9-79.1 19.1 0 38.1 2 56.5 5.9-150.9 47.8-270.6 166.7-320.1 317.3z" fill="#F48070" p-id="2373"></path>
                            <path d="M511.9 786.9c-34.4-28.2-93.3-79.9-147.4-143.8 19.9 3.5 40.1 5.2 60.5 5.2 184.1 0 335.6-142.1 350.8-322.3 4.1 18.9 6.2 38.3 6.2 57.9 0 81.4-50.4 180-145.8 285-47.1 51.9-94.8 93.7-124.3 118z" fill="#E73344" p-id="2374"></path>
                        </svg>
                    </div>
                    <span >添加新地址</span>
                </div>
            </div>
            <h2>商品</h2>
            <div class="payingList" v-for="(item,index) in cartSelectedList" :key="index">
                <img v-lazy="item.productMainImage" alt="">
                <div class="nameDetail">
                    <p>{{item.productName}}</p><span>3200万4800万前后双摄旗舰手机</span>
                </div>
                <div>
                    {{item.productPrice}} X {{item.quantity}}
                </div>
                <div class="total">
                    {{item.productTotalPrice}}
                </div>
            </div>
            <div class="detail clearfloat">
                <div class="additional">
                    <p>配送方式<span>包邮</span></p>
                    <p>发票 <span>电子发票</span><span>个人</span><span>商品明细</span></p>
                </div>
                <div class="summary">
                    <div class="summary-box">
                        <p>商品件数：<span>{{num}}件</span></p>
                        <p>商品总价：<span>{{totalPrice}}元</span></p>
                        <p>优惠活动：<span>0元</span></p>
                        <p>运费：<span>0元</span></p>
                        <p>应付总额：<span>{{totalPrice}}元</span></p>
                    </div>
                </div>
            </div>
            <div class="addressFooter">
                <button @click="goToCart">返回购物车</button>
                <button class="goPay" @click="goPay"> 去结算</button>
            </div>
        </div>
        <modal
                title="删除地址"
                :IsShow="showDelete"
                sure-text="删除"
                :btn-type="3"
                @SureClick="AddressProcess"
                @CancelClick="closeModal"
        >
            <template v-slot:body>
                <p>您确定要删除地址吗？</p>
            </template>
        </modal>
        <modal
            title="添加（修改）新地址"
            :IsShow="showAdd"
            sure-text="确认收获地址"
            :btn-type="3"
            @SureClick="AddressProcess"
            @CancelClick="closeModal"
        >
            <template v-slot:body>
                <div class="addAddressForm">
                    <div class="item">
                        <input type="text" placeholder="姓名"  v-model="checkedItem.receiverName" >
                        <input type="text" placeholder="手机号" v-model="checkedItem.receiverMobile" >
                    </div>
                    <div class="item">
                        <select name="province" v-model="checkedItem.receiverProvince" >
                            <option value="北京">北京</option>
                            <option value="北京">天津</option>
                        </select>
                        <select name="city" v-model="checkedItem.receiverCity" >
                            <option value="北京市">北京市</option>
                            <option value="天津市">天津市</option>
                        </select>
                        <select name="district" v-model="checkedItem.receiverDistrict" >
                            <option value="昌平区">昌平区</option>
                            <option value="东城区">东城区</option>
                            <option value="海淀区">海淀区</option>
                            <option value="石景山区">石景山区</option>
                            <option value="大兴区">大兴区</option>
                            <option value="朝阳区">朝阳区</option>
                            <option value="西青区">西青区</option>
                        </select>
                    </div>
                    <div class="item">
                        <textarea name="street" placeholder="请输入详细地址" v-model="checkedItem.receiverAddress" ></textarea>
                    </div>
                    <div class="item">
                        <input type="text" placeholder="邮编" v-model="checkedItem.receiverZip">
                    </div>
                </div>
            </template>
        </modal>
    </div>
</template>

<script>
    import Modal from "@/components/Model";
    import testPhone from '../utils/testPhone'
    export default {
        components: {Modal},
        component:{
          Modal
        },
        name: "orderConfirm",
        data(){
          return{
              addressList:[],//收获地址列表
              cartSelectedList:[],//购物车中需要结算的商品列表
              totalPrice:0,//选中商品总价
              num:0,//商品件数
              userAction:'',//用户行为 0：表示添加新地址 1：表删修改地址 2：表示删除地址
              checkedItem:{},//表示当前选中的地址项
              showAdd:false,//展示添加收货地址模态框
              showDelete:false,//展示删除收获地址模态框
              selectedAddress:0,//表示当前选中的地址
          }
        },
        mounted(){
            // this.getAdress();
            // this.getSelectedList();
        },
        methods:{
            openEdit(item){

              this.checkedItem=item;
                this.showAdd=true;
              this.userAction=1;
            },
            openDelete(item){
              this.showDelete=true;
              this.checkedItem=item;
              this.userAction=2;
            },
            openAddAdresss(){
                this.showAdd=true;
                this.checkedItem={};
                this.userAction=0;
            },
            //地址增加、删除、修改方法
            AddressProcess(){
                let { userAction,checkedItem } =this;
                let method,url;
                let params={};
                if(userAction === 0 ){
                    method='post',
                        url='/shippings'
                }
                else if(userAction === 1){
                    method='put',
                        url=`/shippings/${checkedItem.id}`
                }
                else {
                    method='delete',
                        url=`/shippings/${checkedItem.id}`
                }
                if(userAction == 0 || userAction == 1){
                    let { receiverName, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress, receiverZip } =checkedItem;
                   let message='';
                    if(!receiverName){
                       message='收货人姓名未填写！';
                   } else if(!receiverMobile || testPhone.testPhone(receiverMobile) !=1 ){
                        message = testPhone.testPhone(receiverMobile);

                    }
                    else if(!receiverProvince || !receiverCity || !receiverDistrict ){
                        message='请选择地区'
                    }
                    else if(!receiverAddress){
                        message='请填写详细街道地址'
                    }
                    if(message){
                        this.$message.error(message);
                        console.log("111111111")
                        return;
                    }
                    console.log("2222222")
                    params = {
                            receiverName,
                            receiverMobile,
                            receiverProvince,
                            receiverCity,
                            receiverDistrict,
                            receiverAddress,
                            receiverZip
                        }
                }
                this.axios[method](url,params).then(()=>{
                    this.getAdress();
                    this.closeModal();
                    this.$message.success("操作成功！")
                })
            },
            //关闭模态框，并重置行为
            closeModal(){
                this.checkedItem = {};
                this.userAction = '';
                // this.getAdress(); //关闭重新获取一遍地址
                this.showAdd = false;
                this.showDelete=false;
            },
            //进入页面获取登陆人的收获地址
            getAdress(){
              this.axios.get('/shippings').then((res)=>{
                  this.addressList=res.list;
              })
            },
            //获取购物车所有选中商品的列表
            getSelectedList(){
              this.axios.get('/carts').then((res)=>{
                let list = res.cartProductVoList;//获取所有数据，下一步进行筛选
                  this.totalPrice = res.cartTotalPrice;
                  this.cartSelectedList=list.filter((i)=>i.productSelected);
               this.cartSelectedList.forEach((i)=>
                   this.num += i.quantity
                 );
              })
            },
            //跳转页面去购物车
            goToCart(){
                this.$router.push('/myCart');
            },
            //跳转界面去支付界面
            goPay(){
                // let item = this.addressList[this.selectedAddress];
                // if(!item){
                //     this.$message.error("请选择一个收获地址")
                //     return
                // }
                // this.axios.post('/orders',{
                //     shippingId:item.id
                // }).then((res)=>{
                //     this.$router.push({
                //         path:'/order/pay',
                //         query:{
                //             orderNo:res.orderNo,
                //         }
                //     })
                // })
                this.$router.push('/order/pay')

            }
        },


    }
</script>

<style lang="scss">
    @import '../assets/scss/config.scss';
.order-confirm{
    width: 1226px;
    margin: 0 auto 60px auto;
    box-sizing: border-box;
    transform: translateY(30px);
    background-color: white;
    padding: 30px 30px 30px 30px;
    border-radius: 30px;
    .address-box{
        display: flex;
        justify-content: flex-start;

        .addAddress{
            &.checkedAddress{
                border: 1px solid #FF6600;
            }
            padding: 20px;
            box-sizing: border-box;
            width: 270px;
            height: 180px;
            margin: 13px 15px 30px 0px;
            border: 1px solid #e5e5e5;
            color: #666666;
            font-size: 14px;
            .name{
                font-size: 26px;
                color: #666666;
                margin-bottom: 20px;
            }
            .deleteEdit{
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                margin-top: 25px;
            }
            &:last-child{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                .address-img{
                    cursor: pointer;
                    vertical-align: middle;
                }
            }

        }
    }
    .payingList{
        display: flex;
        margin-top: 15px;
        padding: 10px 5px 10px 0px ;
        border-top:  1px solid #e5e5e5;

        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        img{margin-left: 20px;
            width: 60px;
            height: 50px;
        }
        .total{
            font-size: 16px;
            color:$colorA;
            font-weight:bold;
        }
    }
    .detail{
        border-top: 1px solid #e5e5e5 ;
        line-height: 16px;
        padding-bottom:15px ;
        margin-bottom: 20px;
        border-bottom: 1px solid #e5e5e5;
        .additional{
            font-size: 17px;
            font-weight: bold;
            p{
                margin:20px 0 40px 0;
                span{
                    margin:0 30px 0 30px;
                    font-size: 14px;
                    color: $colorA;
                }
                &:last-child{
                    margin-bottom: 20px;
                    span{
                        &:nth-child(1){
                            margin-left: 60px;
                        }
                    }
                }
            }
        }
        .summary{
            float: right;
            .summary-box{
                font-weight: bold;
                p{
                    margin-bottom: 15px;
                    font-size: 14px;
                    color: #666666;
                    span{
                        font-size:14px;
                        color: $colorA;
                    }
                    &:nth-child(4){
                        span{
                            margin-left: 32px;
                        }

                    }
                }
            }
        }
    }
    .addressFooter{
        text-align: right;
        height: 60px;
        padding: 5px 0;
        box-sizing: border-box;
        button { 
            width: 202px;
            height: 50px;
            font-size: 18px;
            color: #777;
            border: none;
            cursor: pointer;
            &:hover {
                border: 2px solid #fff;
            }
            &:last-child{
                margin-left: 20px;
            }
        }
        .goPay {
            background-color: $colorA;
            color: #fff;
        }
    }
}
    .addAddressForm{
     font-size: 14px;
        .item{
            margin-bottom: 15px;
          input{
              padding-left: 15px;
              box-sizing: border-box;
              border: 1px solid #e5e5e5;
              width: 283px;
              height: 40px;
              &+ input{                     /*第一种方法  兄弟元素*/
                  margin-left:14px ;
              }
          }

            /*&:first-child{             第二种方法 兄弟元素 */
            /*    input{*/
            /*        &:last-child{*/
            /*            margin-left: 10px;*/
            /*        }*/
            /*    }*/
            /*}*/
            select{
                width: 100px;
                height: 40px;
                line-height: 40px;
                padding-left: 13px;
                border: 1px solid #e5e5e5;
                margin-right: 10px;
            }
            textarea{
                border: 1px solid #e5e5e5;
                width: 579px;
                height: 62px;
                line-height: 62px;
                padding-left: 15px;
            }
        }
    }
    .clearfloat:after{
        content: '';
        display: block;
        clear: both;
    }
</style>