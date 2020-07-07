import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        count: 100
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {

    },
    getters: {

    },
    modules: {

    }
})

export default store