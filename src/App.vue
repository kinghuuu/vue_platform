<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>&nbsp;&nbsp;
    <router-link to="/about" tag="button">内容</router-link>&nbsp;&nbsp;
    <router-link v-bind:to="'/user/'+userId" tag="button">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zhangsan"
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.active {
  color: red;
}
/* .router-link-active {
  color: red;
} */
</style>
