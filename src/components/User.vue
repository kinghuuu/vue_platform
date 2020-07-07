<template>
  <div>
    <h2>我是用户界面</h2>
    <h3>{{userId}}</h3>
    <h3>{{$store.state.count}}</h3>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      number: 0
    };
  },
  computed: {
    userId() {
      //   console.log("当前活跃的路由 this.$route:", this.$route);
      //   console.log("this.$router:", this.$router);
      return this.$route.params.userId;
    }
  }
};
</script>

<style scoped>
</style>