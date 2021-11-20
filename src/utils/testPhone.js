export default {
    testPhone(phoneNumber){
        if(/^\d{11}$/.test(phoneNumber)){
            if(/^1\d{10}$/.test(phoneNumber)){
                if(/^1[345678]\d{9}$/.test(phoneNumber)){
                    return 1
                }
                else{
                    return  this.errmsg("第二位必须是数字3~8！")
                }
            }
            else{
               return  this.errmsg("第一位必须为数字1")
            }
        }
        else{
           return this.errmsg("手机号码长度不正确！")
        }
    },
    errmsg ( message){
        return message;
    }
}