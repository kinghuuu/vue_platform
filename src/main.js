import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import element from './element';
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'

Vue.config.productionTip = false
Vue.use(element);
Vue.prototype.$echarts = echarts     //全局定义 echarts

//全局定义时间过滤器
Vue.filter('dateFormat', function (value) {
  const dt = new Date(value)

  const y = dt.getFullYear()
  const m = ((dt.getMonth() + 1) + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, 0)

  const hh = (dt.getHours() + '').padStart(2, 0)
  const mm = (dt.getMinutes() + '').padStart(2, 0)
  const ss = (dt.getSeconds() + '').padStart(2, 0)

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')
