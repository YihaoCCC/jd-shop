<template>
    <div class="myInfo">
        <div class="header">
            <a :class="flag === 1 ? 'active' : '' " @click="changeFlag"  style="cursor: pointer" >
                账户基本信息
            </a>
            <a :class="flag === 2  ? 'active' : '' " @click="changeFlag" style="margin-left:20px;cursor: pointer;">
                修改密码
            </a>
        </div>
        <div class="content">
            <div class="left">
                <transition name="el-zoom-in-top">
                    <div style="width:400px">
                        <el-form ref="form"   label-width="100px"  v-show="flag===1" >
                            <el-form-item label="昵称:">
                                <el-input  :value="nickName" v-model="nickName" maxlength="10" show-word-limit ></el-input>
                                <button class="changeName" @click.prevent="changeName">修改昵称</button>
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
                        <el-form-item label="原密码：">
                            <el-input v-model="oldPass" type="password" @change="judgeOld"></el-input>
                        </el-form-item>
                        <el-form-item label="新密码：" prop="pass">
                            <el-input type="password" v-model="userInfo.pass"  > </el-input>
                        </el-form-item>
                        <el-form-item label="确认密码：" prop="checkPass">
                            <el-input type="password" v-model="userInfo.checkPass" ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <button  @click.prevent ="submitForm('userInfo')">提交</button>
                            <button @click="resetForm('userInfo')">重置</button>
                        </el-form-item>
                    </el-form>
                </transition>
            </div>
            <div class="right">
                <h1>{{this.$store.state.user.userName}}</h1>
                <span>鼠标移上查看个人积分</span>
                <h2>我的积分：{{this.$store.state.user.points}}</h2>
            </div>
           
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
        this.nickName = this.$store.state.user.userName
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
        oldPass: '',
        nickName: '',
        userInfo: {
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
        // 选择并改变标签
        changeFlag () {
            this.flag  === 2 ? this.flag=1 :this.flag= 2
        },
        // 提交修改
        submitForm() {
            if(this.userInfo.pass) {
                if(this.oldPass === this.user.pswd) {
                    if( !this.userInfo.pass) {
                    console.log('error submit!!');
                    } else {
                        this.yhRequest.get(`/api/user/modifyPassword/${this.$store.state.user.userId}&${this.userInfo.pass}`).then((res) => {
                            if(res) {
                                this.$cookie.set('userId','',{expires:'-1'});
                                this.$store.dispatch('saveUser', {})
                                this.showLogOut = false
                                this.$router.push('/').then(() => {
                                    history.go(0)
                                })
                                this.$message.warning('密码修改成功，请重新登录！')
                            } else {
                                this.$message.error('密码修改失败，请联系管理员重试！')
                            }
                        })
                    }
                } else {
                    this.$message.error('新密码必须与旧密码相同！')
                }
            } else {
                this.$message.error('密码不可为空！')
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
        // 修改昵称
      changeName() {
          if(this.nickName) {
              this.yhRequest.get(`/api/user/modifyName/${this.$store.state.user.userId}&${this.nickName}`).then((res) => {
                if(res) {
                    this.$store.state.user.userName = this.nickName
                    this.$message.success('更改昵称成功！')

                } else {
                    this.$message.error('修改失败')
                }
            })
          } else {
               this.$message.error('昵称不可为空！')
          }
          
      },
      // 重置表格
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 判断密码是否相同
      judgeOld() {
         if( this.oldPass !== this.user.pswd ) {
             this.$message.error('新密码必须与旧密码相同！')
         }
      },
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
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            .left  {
                .changeName {
                    margin-top: 15px;
                        color: #fff;
                        background-color: #c9423b;
                    
                }
                button {
                    width: 100px;
                    border: 1px solid #fff;
                    height: 40px;
                    margin-right: 20px;
                    cursor: pointer;
                    border-radius: 10px;
                    &:first-child {
                        color: #fff;
                        background-color: $colorA;
                    }
                }
            }
            .right {
                position: absolute;
                top: -6px;
                right: 20px;
                width: 300px;
                height: 200px;
                padding: 30px;
                box-sizing: border-box;
                font-size: 16px;
                cursor: pointer;
                border-radius: 50px;
                background: #e0e0e0;
                box-shadow:  20px 20px 30px #bebebe;           
                border: none;
                outline: none;
                color: white;
                font-family: 'Times New Roman', Times, serif;
                font-weight: 700;
                transition: all 0.5s;
                z-index: 1;
                span {
                    color: #999;
                    transition: all 0.5s;
                }
                h2 {
                    color: #e0e0e0;
                }
                &::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0px;
                    height: 100%;
                    background-color: #e0e0e0;
                    z-index: -1;
                    transition: all 0.5s;
                    border-radius: 50px;
                    box-shadow:  20px 20px 30px #bebebe;
                }
                &:hover::before {
                        width: 100%;
                }

                &:hover {
                    color: #666;
                    span {
                        color: #e0e0e0;
                        &:active {
                            color: rgb(240, 184, 170);
                        }
                    }
                    h2 {
                         color: #666;
                    }
                }
                &:active {
                    span {
                        color: rgb(240, 184, 170);
                    }
                }
                &:active:before {
                    background: rgb(240, 184, 170);
                }
            }
            
        }
    }
</style>