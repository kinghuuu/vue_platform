
export default {
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
    reverseMsg(state) {
        return state.msg.split('').reverse().join('')
    }
}