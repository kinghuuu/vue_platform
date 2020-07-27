<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <span @click="saveNavState('/home')">首页</span>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <span @click="saveNavState('/echarts')">Echarts</span>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <div ref="main" style="width: 600px;height:400px;"></div>
    </el-card>
  </div>
</template>

<script>
import { SETACTIVEPATH } from "../store/mutations-types";
export default {
  mounted() {
    this.getRenderer();
  },
  methods: {
    getRenderer() {
      // console.log(this.$echarts);
      console.log(this.$refs.main);
      let myChart = this.$echarts.init(this.$refs.main);
      let option = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      myChart.setOption(option);
    },
    saveNavState(value) {
      window.localStorage.setItem("actionPath", value);
      this.$router.push(value);
      this.$store.commit(SETACTIVEPATH, value);
    },
  },
};
</script>

<style lang="less" scoped>
span {
  cursor: pointer;
}
span:hover {
  color: #409eff;
  font-weight: 700;
}
</style>