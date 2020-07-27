import {
    INCREMENT,
    DECREMENT,
    INCREMENTCOUNT,
    ADDSTUDENT,
    UPDATEINFO,
    SETNUM,
    SETACTIVEPATH
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
    [UPDATEINFO](state) {
        //不能在这里进行异步操作
        // setTimeout(() => {
        //     state.info.name = 'hujian'
        // }, 1000)
        state.info.name = 'hujian'
    },
    [SETNUM](state, val) {
        state.num = val
    },
    [SETACTIVEPATH](state, value) {
        state.activePath = value
    }
}