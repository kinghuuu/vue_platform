import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        component: () => import('../components/Home'),
        meta: { title: '首页' },
        children: [
            // { path: '/', redirect: 'news' },
            { path: 'news', component: () => import('../components/HomeNews') },
            { path: 'message', component: () => import('../components/HomeMessage') },
        ]
    },
    { path: '/about', meta: { title: '内容' }, component: () => import('../components/About') },
    { path: '/user/:userId', meta: { title: '用户' }, component: () => import('../components/User') },
    { path: '/profile', meta: { title: '档案' }, component: () => import('../components/Profile') },
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

//解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//前置守卫(guard)
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    next()
})

//后置钩子(hook)
// router.afterEach((to, from) => {
//     console.log('to:', to)
//     console.log('from:', from)
// })

export default router