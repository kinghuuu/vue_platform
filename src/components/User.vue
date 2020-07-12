<template>
  <div>
    <h2>我是用户界面</h2>
    <h3>{{userId}}</h3>
    <h3>{{$store.state.counter}}</h3>
  </div>
</template>

<script>
import axios from "axios";
axios({
  url: "http://wthrcdn.etouch.cn/weather_mini?city=南京"
}).then(res => {
  console.log(res);
});

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