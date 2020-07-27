<template>
  <div>
    <h4>--------vuex mutations----------------------------------</h4>
    <h4>{{$store.state.counter}}</h4>
    <el-button @click="add">新增</el-button>
    <el-button @click="reduce">减少</el-button>
    <el-button @click="addCount(5)">+5</el-button>
    <el-button @click="addStudent">添加学生</el-button>

    <h4>--------vuex getter------------------------------</h4>
    <h4>{{$store.getters.powerCounter}}</h4>
    <h4>{{$store.getters.moreThenAge18}}</h4>
    <h4>{{$store.getters.moreThenAge18Length}}</h4>
    <h4>{{$store.getters.moreThenAge(22)}}</h4>

    <h4>--------vuex actions------------------------------</h4>
    <h4>{{$store.state.info}}</h4>
    <el-button @click="aUpdateInfo">异步修改</el-button>

    <h4>--------实现个双向绑定------------------------------</h4>
    <h4>数量:{{num}}</h4>
    <!-- <input type="text" v-model="num" /> -->
    <input type="text" :value="num" @input="changeValue" />
    <h4>反转:{{reverseMsg}}</h4>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
let mapStateData = mapState(["num"]);
let mapGettersData = mapGetters(["reverseMsg"]);
import {
  INCREMENT,
  DECREMENT,
  INCREMENTCOUNT,
  ADDSTUDENT,
  AUPDATEINFO,
  SETNUM,
} from "../store/mutations-types";

export default {
  name: "VuexTest",
  methods: {
    add() {
      this.$store.commit(INCREMENT);
    },
    reduce() {
      this.$store.commit(DECREMENT);
    },
    addCount(count) {
      this.$store.commit({
        type: INCREMENTCOUNT,
        count,
        age: 8,
      });
    },
    addStudent() {
      const stu = { name: "XiaoE", age: 30 };
      this.$store.commit(ADDSTUDENT, stu);
    },
    aUpdateInfo() {
      this.$store.dispatch(AUPDATEINFO, {
        message: "我是携带的信息",
        success: () => {
          console.log("加载成功!");
        },
      });
    },
    changeValue(e) {
      this.$store.commit(SETNUM, e.target.value);
    },
  },
  computed: {
    ...mapStateData,
    ...mapGettersData,
  },
};
</script>

<style lang="less" scoped>
</style>