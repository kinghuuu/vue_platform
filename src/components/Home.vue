<template>
  <div>
    <h2>我是主页</h2>
    <router-link to="/home/news" tag="el-button">新闻</router-link>&nbsp;&nbsp;
    <router-link to="/home/message" tag="el-button">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/news"
    };
  },
  activated() {
    //这个函数只有该组件被包裹在keep-alive组件中才能执行
    this.$router.push(this.path);
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  }
};
</script>

<style scoped>
</style>