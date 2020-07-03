import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routers from './routers/index.js'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routers = new VueRouter({
  routes: Routers
})

new Vue({
  router: routers,
  render: h => h(App)
}).$mount('#root')
