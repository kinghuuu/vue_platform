<template>
  <el-container class="whole-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/img/logo.png" alt="logo" />
        <span>后台项目管理平台</span>
      </div>
      <el-button type="info" @click="logout" size="mini">退出</el-button>
    </el-header>
    <el-container>
      <!-- 导航栏 -->
      <el-aside :width="isCollapse?'64px':'200px'">
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#409fff"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
          <el-menu-item index="/home" @click="saveNavState('/home')">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/news" @click="saveNavState('/news')">
            <i class="el-icon-news"></i>
            <span slot="title">新闻</span>
          </el-menu-item>
          <el-submenu index="/user">
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户中心</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="/parent" @click="saveNavState('/parent')">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>父组件</span>
              </template>
            </el-menu-item>
            <!-- <el-menu-item index="/children" @click="saveNavState('/children')">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>子组件</span>
              </template>
            </el-menu-item> -->
          </el-submenu>
          <el-menu-item index="/elementUI" @click="saveNavState('/elementUI')">
            <i class="el-icon-star-off"></i>
            <span slot="title">ElementUI</span>
          </el-menu-item>
          <el-menu-item index="/chatroom" @click="saveNavState('/chatroom')">
            <i class="el-icon-chat-round"></i>
            <span slot="title">聊天室</span>
          </el-menu-item>
          <!-- 菜单栏伸缩 -->
          <div class="toggle-button" @click="toggleCollapse">|||</div>
        </el-menu>
      </el-aside>
      <!-- 页面主题部分 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false, //是否折叠
      activePath: "" //被激活的链接地址
    };
  },
  created() {
    this.activePath = window.localStorage.getItem("actionPath");
  },
  methods: {
    logout() {
      window.localStorage.setItem("actionPath", "/home");
      this.$router.push("/login");
    },
    //折叠菜单
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    //保存菜单链接的激活状态
    saveNavState(activePath) {
      window.localStorage.setItem("actionPath", activePath);
      this.activePath = activePath;
    }
  }
};
</script>

<style lang="less" scoped>
.whole-container {
  height: 100%;
}
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
.el-aside {
  background-color: #545c64;
  .el-menu {
    border-right: none;
    height: 100%;
  }
}
.el-main {
  background-color: #eaedf1;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
