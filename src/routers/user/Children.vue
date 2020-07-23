<template>
  <div>
    <div>以下是子组件内容</div>
    <div>{{message}}</div>
    <ul v-for="(item,index) in list" :key="index">
      <li>{{item}}</li>
    </ul>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
export default {
  props: ["message", "list"],
  methods: {
    handleClick() {
      this.$emit("msgFunc", "啦啦啦啦啦");
    },
  },
};
</script>