<template>
  <div class="chat">
    <h1 class="user">用户: {{currentUser.username}} {{new Date() | dateFormat}}</h1>
    <div class="chatlist">
      <chat-item v-for="(item,index) in chatlist" :chatitem="item" :key="index">{{item.chatcontent}}</chat-item>
    </div>
    <chat-input :sendEvent="sendEvent"></chat-input>
  </div>
</template>
<script>
import ChatInput from "./ChatInput";
import ChatItem from "./ChatItem";
export default {
  props: ["currentUser"],
  components: {
    ChatInput,
    ChatItem,
  },
  data() {
    return {
      chatlist: [
        {
          user: {
            username: "小红",
            headerimg: require("../../assets/img/headerimg1.jpg"),
          },
          chatcontent: "今天吃了吗?",
        },
      ],
    };
  },
  methods: {
    sendEvent: function (value) {
      this.chatlist.push({
        user: this.currentUser,
        chatcontent: value,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.chat {
  width: 500px;
  height: 700px;
  border: 1px solid #ccc;
}
</style>