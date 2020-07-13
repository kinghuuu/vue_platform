<template>
  <div>
    <h2>我是用户界面</h2>
    <h3>{{userId}}</h3>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "User",
  data() {
    return {
      list: []
    };
  },
  computed: {
    userId() {
      //   console.log("当前活跃的路由 this.$route:", this.$route);
      //   console.log("this.$router:", this.$router);
      return this.$route.params.userId;
    }
  },
  // async beforeMount() {
  //   let res = await axios.get(
  //     "http://wthrcdn.etouch.cn/weather_mini?city=南京"
  //   );
  //   console.log("data:", res.data.data);
  //   console.log("forecast:", res.data.data.forecast);
  //   res.data.data.forecast.forEach(item => {
  //     this.data.list.push(item.high);
  //   });
  // },
  beforeMount() {
    axios({
      url: "http://wthrcdn.etouch.cn/weather_mini?city=南京"
    }).then(res => {
      // console.log("data:", res.data.data);
      // console.log("forecast:", res.data.data.forecast);
      res.data.data.forecast.forEach(item => {
        this.list.push(item);
      });
    });
  }
};
</script>

<style scoped>
</style>