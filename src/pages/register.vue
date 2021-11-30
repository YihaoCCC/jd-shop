<template>
    <div class="display">
        <div class="register">
            <div class="logo" @click="GoIndex">
                <img src="../assets/imgs/register.png" alt="点击回到主页" title="点击回到主页"> 
            </div>
            <h1>欢迎注册达达利亚商城</h1>
            <div class="registerBody">
                <div class="input">
                    <div class="icon">
                        <svg t="1637636762934" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5292" width="26" height="26"><path d="M919.800824 955.849961H136.075373a374.825216 374.825216 0 0 1 374.825215-356.083955 299.860173 299.860173 0 1 0-150.952337-41.230774A442.975255 442.975255 0 0 0 67.925333 974.591222V989.92498a34.07502 34.07502 0 0 0 34.07502 34.07502h817.800471a34.07502 34.07502 0 0 0 0-68.150039zM279.871955 300.928084A231.028633 231.028633 0 1 1 510.900588 531.615967a231.369383 231.369383 0 0 1-231.028633-230.687883z m555.42282 432.411999a51.112529 51.112529 0 0 1 0 102.225059h-195.931363a51.112529 51.112529 0 0 1 0-102.225059h195.931363m0-68.15004h-195.931363a119.262569 119.262569 0 0 0 0 238.525138h195.931363a119.262569 119.262569 0 0 0 0-238.525138z" p-id="5293"></path></svg>
                    </div>
                    <input type="username" placeholder="请输入账号（手机号 ）" v-model="phone">
                </div>
                <div class="input">
                    <div class="icon">
                        <svg t="1637636782006" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5483" width="26" height="26"><path d="M832 384H192c-70.4 0-128 57.6-128 128v384c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V512c0-70.4-57.6-128-128-128z m64 512c0 35.2-28.8 64-64 64H192c-35.2 0-64-28.8-64-64V512c0-35.2 28.8-64 64-64h640c35.2 0 64 28.8 64 64v384z" fill="" p-id="5484"></path><path d="M512 0c-140.8 0-256 115.2-256 256v192h512V256c0-140.8-115.2-256-256-256z m192 384H320V256c0-105.6 86.4-192 192-192s192 86.4 192 192v128zM576 672c0-35.2-28.8-64-64-64s-64 28.8-64 64c0 22.4 12.8 44.8 32 54.4V768c0 19.2 12.8 32 32 32s32-12.8 32-32v-41.6c19.2-9.6 32-32 32-54.4z" fill="" p-id="5485"></path></svg>
                    </div>
                    <input type="password" placeholder="请输入密码" v-model="password">
                </div>
                <div class="input">
                    <div class="icon">
                        <svg t="1637650077420" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="891" width="24" height="24"><path d="M511.706311 796.752346 319.824119 860.713077 319.824119 737.425146 255.863389 703.627389 255.863389 959.469288 575.667042 827.662333 575.667042 767.588119Z" p-id="892"></path><path d="M511.706311 64.021106c-247.27171 0-447.724091 171.817204-447.724091 383.76336 0 153.018046 104.485703 285.11255 255.636215 346.741165l0-69.827345c-114.591875-55.319933-191.675484-158.614507-191.675484-276.914844 0-176.62265 171.817204-319.80263 383.76336-319.80263s383.76336 143.181003 383.76336 319.80263c0 162.608471-145.634892 296.869315-334.140173 317.15022l-133.724631 59.85011c27.240411 4.438079 55.353702 6.763031 84.10042 6.763031 247.27171 0 447.724091-171.817204 447.724091-383.76336S758.976998 64.021106 511.706311 64.021106z" p-id="893"></path><path d="M767.54821 421.847747c0 14.32424-11.612479 25.936719-25.936719 25.936719L345.760838 447.784466c-14.32424 0-25.936719-11.612479-25.936719-25.936719l0-12.08627c0-14.32424 11.612479-25.936719 25.936719-25.936719l395.84963 0c14.32424 0 25.936719 11.612479 25.936719 25.936719L767.547187 421.847747z" p-id="894"></path><path d="M639.627772 549.769208c0 14.32424-11.612479 25.936719-25.936719 25.936719L409.721569 575.705927c-14.32424 0-25.936719-11.612479-25.936719-25.936719l0-12.08627c0-14.32424 11.612479-25.936719 25.936719-25.936719l203.968461 0c14.32424 0 25.936719 11.612479 25.936719 25.936719L639.626749 549.769208z" p-id="895"></path></svg>
                    </div>
                    <input type="text" placeholder="请输入昵称" v-model="nickname">
                </div>
                <el-radio-group v-model="sex" fill='#E1251B' text-color='#E1251B'>
                    <el-radio :label="1" >我是男生</el-radio>
                    <el-radio :label="2" >我是女生</el-radio>
                </el-radio-group>
                <button @click="Regsiter" >确认注册</button>
                
            </div>
            <div class="formFooter" >
                <input type="radio"  :checked='agree' @click="changeChecked">
                <p><span>注册账号即代表您同意并愿意遵守达达利亚 </span >用户协议 <span> 和 </span>隐私政策</p>
            </div>
        </div>
    </div>
</template>
<script>
import testPhone from '@/utils/testPhone'
    export default {
        name: 'register',
        data() {
            return {
                phone: '',
                password: '',
                nickname: '',
                agree: false,
                sex: 1
            }
        },
        methods: {
           GoIndex() {
               this.$router.push('/index')
           },
           Regsiter() {
               let message =  testPhone.testPhone(this.phone)
               if(this.phone && this.password && this.nickname) {
                   if(message === 1) {
                        if(!this.agree) {
                            this.$message.error('请先勾选服务条款')
                        } else {
                            // console.log(this.username+this.password + this.nickname+ this.sex)
                            this.yhRequest.post('/api/user/register', {
                            
                                phone: this.phone,
                                pswd: this.password,
                                userName: this.nickname,
                                sex: this.sex
                            
                            }).then ((res) => {
                            if(res) {
                                this.$router.push('/login')
                            } else {
                                this.$message.error('注册失败，手机号已存在')
                            }
                            })
                        }
                   } else {
                       this.$message.error(message)
                   }
                   
               } else {
                    this.$message.error('账号、昵称、密码不能为空') 
               }
              
           },
           changeChecked() {
               this.agree = !this.agree
           }
        }
    }

</script>

<style scoped lang='scss'>
@import '../assets/scss/config.scss';
    .display {
        position: absolute;
        width: 100%;
        height: 100vh;
        background-color: #f5f5f5;
    }
    .register {
        width: 900px;
        height: 600px;
        position: fixed;
        top: 50%;
        left: 50%;
        background-color: #fff; 
        transform: translate(-50%, -55%);
        text-align: center;
        border-radius: 50px;
        .logo {
            width: 66px;
            height: 66px;
            margin: auto;
            cursor: pointer;
            img {
                width: 100%;
                height: 100%;
                transition: all 0.5s;
                &:hover {
                    transform: scale(1.2);
                }
            }   
        }
        h1 {
            margin-top: 20px;
        }
        .registerBody {
            width: 400px;
            margin: 30px auto;
            display: inline-block;
            .input {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 15px auto 20px;
                width: 334px;
                height: 44px;
                border: 1px solid #e5e5e5;
                .icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    border: 1px solid #e5e5e5;
                    svg{
                        width: 24px;
                        height: 24px;
                        border: none;
                    }
                }
                input {
                    width: 80%;
                    height: 30px;
                    border: none;
                }
            }
            button {
                width: 334px;
                height: 44px;
                margin: 20px auto;
                background-color: $colorA;
                border: 2px solid #FFF;
                color: #fff;
                font-size: 16px;
                cursor: pointer;
                &:hover {
                    border: 2px solid $colorA;
                }
            }  
        }
        .formFooter {
            input {
                display: inline-block;
            }
            
            p { 
                margin-left: 10px;
                display: inline-block;
                color: $colorA;
                span {
                    color: #333;
                }
            }
        }
    }
</style>
