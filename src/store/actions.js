import {
    UPDATEINFO,
    AUPDATEINFO
} from "../store/mutations-types";

export default {
    //context::上下文,指store对象
    [AUPDATEINFO](context, payload) {
        setTimeout(() => {
            context.commit(UPDATEINFO)
            console.log(payload.message)
            payload.success()
        }, 1000)
    }
}