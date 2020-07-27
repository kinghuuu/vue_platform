<template>
  <div>
    <h2>用户中心 父组件</h2>
    <h3>childValue:{{childValue}}</h3>
    <h3>title:{{title}}</h3>
    <hr />
    <children :childTitle.sync="title" :message="msg" :list="list" @msgFunc="func"></children>
  </div>
</template>

<script>
import Children from "./Children";
export default {
  components: {
    Children,
  },
  data() {
    return {
      msg: "父组件中的值",
      list: ["xiaoA", "XiaoB", "xiaoC"],
      childValue: "",
      title: "",
    };
  },
  methods: {
    func(value) {
      console.log("从子组件传过来的值:", value);
      this.childValue = value;
    },
  },
};
</script>