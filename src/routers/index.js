import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', meta: { title: '登陆' }, component: () => import('./Login') },
    {
        path: '/whole',
        component: () => import('./Whole'),
        redirect: '/home',
        children: [
            { path: '/home', meta: { title: '首页' }, component: () => import('./Home') },
            { path: '/news', meta: { title: '新闻' }, component: () => import('./News') },
            { path: '/parent', meta: { title: '父组件' }, component: () => import('./user/Parent') },
            { path: '/children', meta: { title: '子组件' }, component: () => import('./user/Children') },
            { path: '/elementUI', meta: { title: 'ElementUI' }, component: () => import('./ElementUI') },
        ]
    },
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
    document.title = to.meta.title
    next()
})

export default router