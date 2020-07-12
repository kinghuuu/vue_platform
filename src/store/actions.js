
export default {
    //context::上下文,指store对象
    aUpdateInfo(context, payload) {
        setTimeout(() => {
            context.commit('updateInfo')
            console.log(payload.message)
            payload.success()
        }, 1000)
    }
}