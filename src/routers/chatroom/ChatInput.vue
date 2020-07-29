<template>
  <div>
    <input @keydown.enter="send" v-model="inputContent" type="text" />
    <el-button @click="send">发送</el-button>
  </div>
</template>
<script>
export default {
  props: ["sendEvent"],
  data() {
    return {
      inputContent: ""
    };
  },
  methods: {
    send: function() {
      this.sendEvent(this.inputContent);
      this.inputContent = "";
    }
  }
};
</script>



