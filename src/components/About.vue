<template>
  <div>
    <h2>--------vuex mutations------------------------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <Button @click="add">新增</Button>
    <Button @click="reduce">减少</Button>
    <Button @click="addCount(5)">+5</Button>
    <Button @click="addStudent">添加学生</Button>

    <h2>--------vuex getter------------------------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.moreThenAge18}}</h2>
    <h2>{{$store.getters.moreThenAge18Length}}</h2>
    <h2>{{$store.getters.moreThenAge(22)}}</h2>

    <h2>--------vuex actions------------------------------</h2>
    <h2>{{$store.state.info}}</h2>
    <Button @click="aUpdateInfo">异步修改</Button>

    <h2>--------实现个双向绑定------------------------------</h2>
    <h2>数量:{{num}}</h2>
    <!-- <input type="text" v-model="num" /> -->
    <input type="text" :value="num" @input="changeValue" />
    <h2>反转:{{reverseMsg}}</h2>
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
  ADDSTUDENT
} from "../store/mutations-types";

export default {
  name: "About",
  methods: {
    add() {
      this.$store.commit(INCREMENT);
    },
    reduce() {
      this.$store.commit(DECREMENT);
    },
    addCount(count) {
      //1.普通的提交封装
      // this.$store.commit("incrementCount", count);

      //2.特殊的提交封装
      this.$store.commit({
        type: INCREMENTCOUNT,
        count,
        age: 8
      });
    },
    addStudent() {
      const stu = { name: "XiaoE", age: 30 };
      this.$store.commit(ADDSTUDENT, stu);
    },
    aUpdateInfo() {
      this.$store.dispatch("aUpdateInfo", {
        message: "我是携带的信息",
        success: () => {
          console.log("加载成功!");
        }
      });
    },
    changeValue(e) {
      this.$store.commit("setNum", e.target.value);
    }
  },
  // computed: {
  //   num: {
  //     get: function() {
  //       return this.$store.state.num;
  //     },
  //     set: function(val) {
  //       this.$store.commit("setNum", val);
  //     }
  //   }
  // }
  computed: {
    ...mapStateData,
    ...mapGettersData
  }
};
</script>

<style scoped>
</style>