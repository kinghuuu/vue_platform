
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

























