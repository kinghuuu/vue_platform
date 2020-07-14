import {
    INCREMENT,
    DECREMENT,
    INCREMENTCOUNT,
    ADDSTUDENT
} from "../store/mutations-types";

export default {
    [INCREMENT](state) {
        state.counter++
    },
    [DECREMENT](state) {
        state.counter--
    },
    // incrementCount(state, count) {
    //     // state.counter += count
    //     console.log('count:', count)
    // },
    [INCREMENTCOUNT](state, payload) {
        // console.log('count:', payload)
        state.counter += payload.count
    },
    [ADDSTUDENT](state, stu) {
        state.students.push(stu)
    },
    updateInfo(state) {
        //不能在这里进行异步操作
        // setTimeout(() => {
        //     state.info.name = 'hujian'
        // }, 1000)
        state.info.name = 'hujian'
    },
    setNum(state, val) {
        state.num = val
    }

}