
<p align="left"><img src="https://kinghuuu.github.io/Resource/img/lamp.png" alt="lamp" width="100"/></p>

## 笔记
#### 如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：
```
<input v-model.trim="msg">
```
#### npm装包时-S和-D的区别
```
-D后，安装包会在package中的  devDependencies对象中。简称dev。dev是在开发环境中要用到的。
-S后，安装包会在package中的  dependencies  对象中。简称dep。dep是在生产环境中要用到的。
举个例子：
构建工具：gulp和webpack是用来压缩代码，打包等需要的工具，程序实际运行的时候并不需要，就要放在dev中所以要用  -D
项目插件：例如element ui、echarts这种插件要在运行中使用的，就要放在dep中所以就用  -S
一般我们项目插件，在api中都可以看到，一般都是-S。因为这些插件是在程序运行中使用的
```
#### 模块化和组件化概念的解读
```
模块化：是从代码的角度分析问题；把可复用的代码，抽离为单独的模块； CommonJS
       好处是提高了代码的复用率，提供模块作用域的概念，防止全局变量污染；方便了程序员之间 代码互相调用；
组件化：组件化是从页面UI的角度进行分析问题的；把页面中可复用的UI结构，抽离为单独的组件； elementUI
       好处是方便了 UI 结构的重用；随着项目开发的深入，手中可用的组件会越来越多；
```
#### Vuex
```
1.异步操作一般在actions中进行, mutations一般是进行同步操作的,方便Devtools进行跟踪.
2.state 单一状态树(只用一个store)
3.getters 先把数据进行处理了,再放到组件中去
4.vuex的store状态的更新唯一方式: 提交mutations
5.Vuex要求我们Mutations中的方法必须是同步方法(异步操作,devtools不好追踪变化)
```
#### axios发送并发请求
```
axios.all([axios(),axios()]
     .then(res=>{}))
```
#### computed和watch比较:
```
计算属性适合用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；
而侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑。
1.computed能做的，watch都能做，反之则不行.
2.能用computed的尽量用computed.
```
#### 父子组件传值:
```
1.通过 Prop 向子组件传递数据.
2.子组件可以通过调用内建的 $emit 方法并传入事件名称来触发一个事件,
  可以使用 $emit 的第二个参数传参.
```
### .sync 语法糖
```
sync 就是为了实现prop 进行“双向绑定”仅此而已（父对子，子对父，来回传）
当你有需要在子组件修改父组件值的时候这个方法很好用，它的实现机制和v-model是一样的。
<child :foo.sync="bar"></child>
等同于
<child :bar="foo" @update:bar="e=>foo=e">
更新方式
this.$emit('update:bar',newValue)
```
#### 项目一些基本优化
```
1.vFor和vIf不要一起使用
    vFor 的优先级其实是比 vIF 高的，所以当两个指令出现来一个DOM中，那么 vFor 渲染的当前列表，
    每一次都需要进行一次 vIf 的判断。而相应的列表也会重新变化，这个看起来是非常不合理的。
    因此当你需要进行同步指令的时候。尽量使用计算属性，先将 vIf 不需要的值先过滤掉。
2.vFor key避免使用index作为标识
    其实大家都知道 vFor 是不推荐使用 index 下标来作为 key 的值，这是一个非常好理解的知识点，
    当index作为标识的时候，插入一条数据的时候，列表中它后面的key都发生了变化，
    那么当前的 vFor 都会对key变化的 Element 重新渲染，但是其实它们除了插入的 Element 数据都没有发生改变，
    这就导致了没有必要的开销。所以，尽量不要用index作为标识，而去采用数据中的唯一值，如 id 等字段。
3.释放组件资源
    什么是资源? 每创建出一个事物都需要消耗资源，资源不是凭空产生的，是分配出来的。
    所以说，当组件销毁后，尽量把我们开辟出来的资源块给销毁掉，比如 setInterval , addEventListener等，
    如果你不去手动给释放掉，那么它们依旧会占用一部分资源。这就导致了没有必要的资源浪费。
    多来几次后，可以想象下资源占用率肯定是上升的。
    (1).添加的事件:
       created() {
       addEventListener('click', Function, false)
       },
       beforeDestroy() {
       removeEventListener('click', Function false)
       }
    (2).定时器:
       created() {
       this.currentInterVal = setInterval(code,millisec,lang)
       },
       beforeDestroy() {
       clearInterval(this.currentInterVal)
       }
4.图片合理的优化方式
    (1).小图标使用 SVG 或者字体图标
    (2).通过 base64 和 webp  的方式加载小型图片
    (3).能通过cdn加速的大图尽量用cdn
    (4).大部分框架都带有懒加载的图片，不要嫌麻烦，多花点时间使用它
5.路由器按需加载
    路由懒加载的方式有两种，一种是require 另一种是 import 。
    当路由按需加载后，那么Vue服务在第一次加载时的压力就能够相应的小一些，不会出现超长白屏P0问题。
    // require法
    component: resolve=>(require(['@/components/HelloWorld'],resolve))

    // import
    component: () => import('@/components/HelloWorld')
```
#### 路由懒加载配置
```
Vue 项目中实现路由按需加载（路由懒加载）的 3 中方式：
1、Vue异步组件技术：
{
  path: '/home',
  name: 'Home',
  component: resolve => reqire(['../views/Home.vue'], resolve)
}

2、es6提案的import()
{
  path: '/',
  name: 'home',
  component: () => import('../views/Home.vue')
}

3、webpack提供的require.ensure()
{
  path: '/home',
  name: 'Home',
  component: r => require.ensure([],() =>  r(require('../views/Home.vue')), 'home')
}
```
#### 改变单页面应用的 title
```
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
})
```
#### 登录权限校验
```
1、配置路由的 meta 对象的 auth 属性
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { title: '首页', keepAlive: false, auth: false },
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine.vue'),
    meta: { title: '我的', keepAlive: false, auth: true },
  },
]
2、在路由首页进行判断。当to.meta.auth为true(需要登录)，且不存在登录信息缓存时，需要重定向去登录页面
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  const userInfo = sessionStorage.getItem('userInfo') || null
  if (!userInfo && to.meta.auth) {
    next('/login')
  } else {
    next()
  }
})
```
#### 页面缓存配置
```
1、通过配置路由的 meta 对象的 keepAlive 属性值来区分页面是否需要缓存
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { title: '首页', keepAlive: false, auth: false },
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/list.vue'),
    meta: { title: '列表页', keepAlive: true, auth: false },
  },
]
2、在 app.vue 做缓存判断
<div id="app">
  <router-view v-if="!$route.meta.keepAlive"></router-view>
  <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
</div>
```
#### vue.config.js 配置
```
vue-cli3 开始，新建的脚手架都需要我们在 vue.config.js 配置我们项目的东西。主要包括
1.打包后文件输出位置
2.关闭生产环境 sourcemap
3.配置 rem 转化 px
4.配置 alias 别名
5.去除生产环境 console
6.跨域代理设置

module.exports = {
  publicPath: './',             // 默认为'/'
  outputDir: 'dist/static',     // 将构建好的文件输出到哪里，本司要求
  assetsDir: 'static',          // 放置生成的静态资源(js、css、img、fonts)的目录。
  indexPath: 'index.html',      // 指定生成的 index.html 的输出路径
  runtimeCompiler: false,       // 是否使用包含运行时编译器的 Vue 构建版本。
  transpileDependencies: [],
  productionSourceMap: false,   // 如果你不需要生产环境的 source map

  // 配置css
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    sourceMap: true,
    // css预设器配置项
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100,
          }),
        ],
      },
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
  },

  // 是一个函数，允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: (config) => {
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))

    config.optimization.minimizer('terser').tap((args) => {
      // 去除生产环境console
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  },

  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: require('os').cpus().length > 1,

  devServer: {
    host: '0.0.0.0',
    port: 8088, // 端口号
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器  open: 'Google Chrome'-默认启动谷歌

    // 配置多个代理
    proxy: {
      '/api': {
        target: 'https://www.mock.com',
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
```
#### CDN 资源优化
```
CDN 的全称是 Content Delivery Network，即内容分发网络。CDN 是构建在网络之上的内容分发网络，
依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，
降低网络拥塞，提高用户访问响应速度和命中率。CDN 的关键技术主要有内容存储和分发技术。

随着项目越做越大，依赖的第三方 npm 包越来越多，构建之后的文件也会越来越大。
再加上又是单页应用，这就会导致在网速较慢或者服务器带宽有限的情况出现长时间的白屏。
此时我们可以使用 CDN 的方法，优化网络加载速度。

1、将 vue、vue-router、vuex、axios 这些 vue 全家桶的资源，全部改为通过 CDN 链接获取，在 index.html 里插入 相应链接。
<body>
  <div id="app"></div>
  <script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>
  <script src="https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.min.js"></script>
  <script src="https://cdn.bootcss.com/vuex/3.1.0/vuex.min.js"></script>
  <script src="https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js"></script>
  <script src="https://cdn.bootcss.com/element-ui/2.6.1/index.js"></script>
</body>

2、在 vue.config.js 配置 externals 属性
module.exports = {
 ···
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'axios':'axios'
    }
  }

3、卸载相关依赖的 npm 包
npm uninstall  vue vue-router vuex axios
```
#### gZip 加速优化
```
所有现代浏览器都支持 gzip 压缩，启用 gzip 压缩可大幅缩减传输资源大小，
从而缩短资源下载时间，减少首次白屏时间，提升用户体验。

gzip 对基于文本格式文件的压缩效果最好（如：CSS、JavaScript 和 HTML），
在压缩较大文件时往往可实现高达 70-90% 的压缩率，对已经压缩过的资源（如：图片）进行 gzip 压缩处理，效果很不好。

const CompressionPlugin = require('compression-webpack-plugin')
configureWebpack: (config) => {
  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
      new CompressionPlugin({
        // gzip压缩配置
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        threshold: 10240, // 对超过10kb的数据进行压缩
        deleteOriginalAssets: false, // 是否删除原文件
      })
    )
  }
}
```




