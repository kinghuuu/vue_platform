<template>
  <div>
    <h2>我是内容</h2>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      msg: "halo"
    };
  },
  created() {
    // console.log(this.msg);
  }
};
</script>

<style scoped>
</style>