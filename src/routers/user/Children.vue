<template>
  <div>
    <div>以下是子组件内容</div>
    <div>{{message}}</div>
    <ul v-for="(item,index) in list" :key="index">
      <li>{{item}}</li>
    </ul>
    <button @click="handleClick">点击修改childValue</button>
    <button @click="changeTitle">点击修改changeTitle</button>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    list: Array,
    childTitle: String,
  },
  methods: {
    handleClick() {
      this.$emit("msgFunc", "啦啦啦啦啦");
    },
    changeTitle() {
      this.$emit("update:childTitle", "Hello");
    },
  },
};
</script>