<template>
  <div>
    <h2>我是Profile组件</h2>
    <h3>{{$route.query.name}}---{{$route.query.age}}</h3>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style scoped>
</style>