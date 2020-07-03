<template>
  <div class="test">
    <h2>{{content}}</h2>
  </div>
</template>

<script>
export default {
  name: "Test",
  data: function() {
    return {
      content: "测试"
    };
  }
};
</script>
<style scoped>
.test {
  color: red;
}
</style>