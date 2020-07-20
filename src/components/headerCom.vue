<template>
  <el-header>
    <div>
      <img src="../assets/img/logo.png" alt="logo" />
      <span>后台项目管理平台</span>
    </div>
    <el-button type="info" @click="logout">退出</el-button>
  </el-header>
</template>

<script>
export default {
  methods: {
    logout() {
      window.localStorage.setItem("actionPath", "/welcome");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
  img {
    margin-left: 5px;
    height: 25px;
    width: 25px;
  }
}
</style>