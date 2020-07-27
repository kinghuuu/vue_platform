import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
    counter: 1000,
    num: 0,
    msg: "hujian",
    students: [
        { name: 'xiaoA', age: 10 },
        { name: 'xiaoB', age: 15 },
        { name: 'xiaoC', age: 20 },
        { name: 'xiaoD', age: 25 },
    ],
    info: { name: 'James', country: 'USA' },
    activePath: "/home" //定义全局的侧边栏被激活的链接地址,默认值是首页的路由
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {}
})

export default store