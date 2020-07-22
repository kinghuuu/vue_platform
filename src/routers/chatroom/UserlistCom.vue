<template>
  <div class="userlist">
    <h1>用户列表</h1>
    <ul>
      <li
        v-for="(item,index) in userlist"
        :key="'item.username' + index"
        @click="chooseUser(index)"
      >
        <img :src="item.headerimg" alt="item.username" />
        <h3>{{item.username}}</h3>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["userlist"],
  methods: {
    chooseUser: function(index) {
      //将选择用户事件触发发送给父组件
      this.$emit("chooseuser", index);
    }
  }
};
</script>
<style lang="less" scoped>
.userlist {
  width: 300px;
  height: 700px;
  background-color: skyblue;
}
.userlist ul li {
  display: flex;
}
.userlist ul li img {
  width: 80px;
  height: 80px;
}
</style>