<template>
  <div>
    <h2>我是主页</h2>
    <router-link to="/home/news" tag="el-button">新闻</router-link>&nbsp;&nbsp;
    <router-link to="/home/message" tag="el-button">消息</router-link>
    <router-view></router-view>
    <!-- <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
    </el-row>-->
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
  created() {
    console.log("created");
  },
  destroyed() {
    console.log("destroyed");
  },
  activated() {  //这个函数只有该组件被包裹在keep-alive组件中才能执行
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