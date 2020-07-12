import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
    counter: 1000,
    students: [
        { name: 'xiaoA', age: 10 },
        { name: 'xiaoB', age: 15 },
        { name: 'xiaoC', age: 20 },
        { name: 'xiaoD', age: 25 },
    ],
    info: { name: 'James', country: 'USA' }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {}
})

export default store