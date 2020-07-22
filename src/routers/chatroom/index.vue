<template>
  <div id="chatroom">
    <div class="content">
      <chat-com :currentUser="currentUser"></chat-com>
      <userlist-com :userlist="userlist" @chooseuser="toggleUser"></userlist-com>
    </div>
  </div>
</template>

<script>
import chatCom from "./ChatCom";
import userlistCom from "./UserlistCom";
export default {
  components: {
    chatCom,
    userlistCom
  },
  data() {
    return {
      userlist: [
        {
          username: "小红",
          headerimg: require("../../assets/img/headerimg1.jpg")
        },
        {
          username: "小雨",
          headerimg: require("../../assets/img/headerimg2.jpg")
        },
        {
          username: "小张",
          headerimg: require("../../assets/img/headerimg3.jpg")
        },
        {
          username: "小白",
          headerimg: require("../../assets/img/headerimg4.jpg")
        }
      ],
      currentUser: {
        username: "小红",
        headerimg: require("../../assets/img/headerimg1.jpg")
      }
    };
  },
  methods: {
    toggleUser: function(index) {
      this.currentUser = this.userlist[index];
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  width: 800px;
  height: 700px;
}
</style>