<template>
  <div>
    <h2>我是主页</h2>
    <!-- <router-link to="/home/news" tag="button">新闻</router-link>&nbsp;&nbsp;
    <router-link to="/home/message" tag="button">消息</router-link>-->

    <Button type="primary" @click="homeNewsClick">新闻</Button>&nbsp;&nbsp;
    <Button type="primary" @click="homeMessageClick">消息</Button>
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
  methods: {
    homeNewsClick() {
      this.$router.push("/home/news");
    },
    homeMessageClick() {
      this.$router.push("/home/message");
    }
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