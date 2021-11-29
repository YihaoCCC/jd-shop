export default{
    saveUser(context,user){
        context.commit('saveUser',user)
    },
    changeIsShow(context,status) {
        context.commit('changeIsShow', status)
    }
}