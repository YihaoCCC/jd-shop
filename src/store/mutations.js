export default {
    saveUser(state,user){
        state.user=user;
        console.log(user)
    },
    changeIsShow (state,status) {
        state.isShowGoToLogin = status
    }
}