import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            { name: 'xiaoA', age: 10 },
            { name: 'xiaoB', age: 15 },
            { name: 'xiaoC', age: 20 },
            { name: 'xiaoD', age: 25 },
        ]
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        }
    },
    actions: {

    },
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        },
        moreThenAge18(state) {
            return state.students.filter(s => s.age > 18)
        },
        moreThenAge18Length(state, getters) {
            return getters.moreThenAge18.length
        },
        moreThenAge(state) {
            // return function (param) {
            //     return state.students.filter(s => s.age > param)
            // }
            return param => { return state.students.filter(s => s.age > param) }
        },
    },
    modules: {

    }
})

export default store