<template>
  <div>
    <h4>--------南京未来5天天气----------------------------------</h4>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Welcome",
  data() {
    return {
      list: []
    };
  },
  created() {
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