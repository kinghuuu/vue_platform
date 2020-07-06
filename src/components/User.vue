<template>
  <div>
    <h2>我是用户界面</h2>
    <h3>{{userId}}</h3>
    <button @click="addCount">新增</button>
    <!-- <h3>{{count}}</h3> -->
    <h3>{{number}}</h3>
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
  methods: {
    addCount: function() {
      // console.log("User中 this.$store:", this.$store);
      this.$store.commit("increment");
      this.number = this.$store.state.count;
    }
  },
  computed: {
    userId() {
      //   console.log("当前活跃的路由 this.$route:", this.$route);
      //   console.log("this.$router:", this.$router);
      return this.$route.params.userId;
    }
    // count() {
    //   console.log("this.$store:", this.$store);
    //   this.$store.commit("increment");
    //   return this.$store.state.count;
    // }
  }
};
</script>

<style scoped>
</style>