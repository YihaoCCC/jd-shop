<template>
    <div class="myInfo">
        <div class="header">
            <a :class="flag === 1 ? 'active' : '' " @click="changeFlag"  style="cursor: pointer" >
                账户基本信息
            </a>
            <a :class="flag === 2  ? 'active' : '' " @click="changeFlag" style="margin-left:20px;cursor: pointer;">
                修改个人信息
            </a>
        </div>
        <div class="content">
            <transition name="el-zoom-in-top">
                <div style="width:400px">
                    <el-form ref="form"   label-width="100px"  v-show="flag===1" >
                        <el-form-item label="昵称:">
                            <el-input disabled :value="user.userName" ></el-input>
                        </el-form-item>
                        <el-form-item label="手机号:"  >
                            <el-input  disabled :value="user.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="性别:" >
                            <el-input disabled :value="user.sex === '1' ? '男':'女' "></el-input>   
                        </el-form-item>
                    </el-form>
                </div>
            </transition>
            <transition name="el-zoom-in-top">
                <el-form v-show="flag===2" style="width:400px" :model="userInfo" status-icon :rules="rules" ref="userInfo" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="新密码：" prop="pass">
                        <el-input type="password" v-model="userInfo.pass"  > </el-input>
                    </el-form-item>
                    <el-form-item label="确认密码：" prop="checkPass">
                        <el-input type="password" v-model="userInfo.checkPass" ></el-input>
                    </el-form-item>
                    <el-form-item label="昵称：">
                        <el-input v-model="userInfo.userName" maxlength="10" show-word-limit ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <button  @click="submitForm('userInfo')">提交</button>
                        <button @click="resetForm('userInfo')">重置</button>
                    </el-form-item>
                </el-form>
            </transition>
           
        </div>
    </div>
</template>
<script>
export default {
    
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    mounted() {
        this.userInfo.userName = JSON.parse(JSON.stringify(this.$store.state.user.userName))
    },
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.userInfo.checkPass !== '') {
            this.$refs.userInfo.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.userInfo.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        flag: 1,
        userInfo: {
            userName: '',
            pass: '',
            checkPass: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
        changeFlag () {
            this.flag  === 2 ? this.flag=1 :this.flag= 2
        },
        submitForm() {
            if( !this.userInfo.pass) {
                console.log('error submit!!');
            } else {
                console.log(this.userInfo)
            }
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //     console.log(this.userInfo)
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>


<style scoped lang='scss'>
@import '../../../assets/scss/config.scss';
    .myInfo {
        box-sizing: border-box;
        .header {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 60px;
            .active {
                color: $colorA;
                font-weight: bolder;
                padding-bottom: 2px;
                border-bottom: 2px solid $colorA;
                
            }
        }
        .content {
            button {
                width: 100px;
                border: 1px solid #fff;
                height: 40px;
                margin-right: 20px;
                cursor: pointer;
                &:first-child {
                    color: #fff;
                    background-color: $colorA;
                }
            }
        }
    }
</style>