import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
    user: {
        avatar: require("../assets/21.png"), //用户头像
        nickname: "央视网友",//用户昵称
        username: "", //账号
        password: "", //密码
        isMember: false, //是否是会员
    }
}
const getters = {
    getUser(state) {
        return state.user;
    }
}
const mutations = {
    updateUser(state, user) {
        state.user = user;
    }
}
const actions = {
    asyncUpdateUser(context, user) {
        context.commit('updateUser', user)
    }
}
const modules = {
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules


});