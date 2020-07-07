
<p align="left"><img src="https://kinghuuu.github.io/Images/lamp.png" alt="lamp" width="100"/></p>

## 笔记
##### Mustache 语法不能作用在 HTML attribute 上，遇到这种情况应该使用 v-bind 指令：
```
<div v-bind:id="dynamicId"></div>
<a v-bind:href="url">...</a>
```

##### 如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：
```
<input v-model.trim="msg">
```

##### npm装包时-S和-D的区别
```
-D后，安装包会在package中的  devDependencies对象中。简称dev。dev是在开发环境中要用到的。
-S后，安装包会在package中的  dependencies  对象中。简称dep。dep是在生产环境中要用到的。
举个例子：
构建工具：gulp和webpack是用来压缩代码，打包等需要的工具，程序实际运行的时候并不需要，就要放在dev中所以要用  -D
项目插件：例如element ui、echarts这种插件要在运行中使用的，就要放在dep中所以就用  -S
一般我们项目插件，在api中都可以看到，一般都是-S。因为这些插件是在程序运行中使用的
```

##### 计算属性和 methods 对比
```
计算属性多次计算时会被vue内部缓存,
计算属性比 methods 效率高.
```

##### 懒加载
```
把不同路由对应的组件分割成不同的代码块,然后当路由被访问的时候才加载对应的组件,
这样就更加高效了.
```

##### keep-alive用于vue-router
```
keep-alive 是Vue内置的一个组件,可以使被包含的组件保留状态,或避免重新渲染
```

##### 模块化和组件化概念的解读
```
模块化：是从代码的角度分析问题；把可复用的代码，抽离为单独的模块； CommonJS
       好处是提高了代码的复用率，提供模块作用域的概念，防止全局变量污染；方便了程序员之间 代码互相调用；
组件化：组件化是从页面UI的角度进行分析问题的；把页面中可复用的UI结构，抽离为单独的组件； elementUI
       好处是方便了 UI 结构的重用；随着项目开发的深入，手中可用的组件会越来越多；
```

##### Vuex
异步操作一般在actions中进行, mutations一般是进行同步操作的,方便Devtools进行跟踪.















