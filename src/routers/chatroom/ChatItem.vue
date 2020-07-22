<template>
  <div class="chat-item">
    <img :style="imgStyle" :src="chatitem.user.headerimg" :alt="chatitem.user.username" />
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["chatitem"],
  data() {
    return {
      imgStyle: {
        width: "50px",
        height: "50px"
      }
    };
  }
};
</script>
<style lang="less" scoped>
.chat-item {
  display: flex;
}
</style>