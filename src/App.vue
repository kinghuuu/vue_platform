<template>
  <div id="app">
    <!-- <router-link to="/home" tag="el-button">首页</router-link>&nbsp;&nbsp;
    <router-link to="/about" tag="el-button">内容</router-link>&nbsp;&nbsp;
    <router-link v-bind:to="'/user/'+userId" tag="el-button">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'hujian',age:18}}" tag="el-button">档案</router-link>-->
    <el-button type="success" @click="homeClick">首页</el-button>
    <el-button type="success" @click="aboutClick">内容</el-button>
    <el-button type="success" @click="userClick">用户</el-button>
    <el-button type="success" @click="profileClick">档案</el-button>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zhangsan"
    };
  },
  methods: {
    homeClick() {
      this.$router.push("/home");
    },
    aboutClick() {
      this.$router.push("/about");
    },
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: { name: "hujian", age: 18 }
      });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/* .active {
  color: red;
} */
</style>
