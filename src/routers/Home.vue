<template>
  <div class="home">
    <h1>{{title}}</h1>
    <h2>{{content}}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      title: "主页",
      content: "内容部分"
    };
  }
};
</script>
<style scoped>
.home {
  color: blue;
}
</style>