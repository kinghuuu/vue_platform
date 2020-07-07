<template>
  <div>
    <h2>{{$store.state.count}}</h2>
    <Button @click="$store.state.count++">新增</Button>
    <Button @click="$store.state.count--">减少</Button>
  </div>
</template>

<script>
export default {
  name: "About"
  // data() {
  //   return {
  //     counter: 0
  //   };
  // }
};
</script>

<style scoped>
</style>