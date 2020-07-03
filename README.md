
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

























