<template>
  <nav>
    <ul>
      <li>
        <router-link exact to="/">主页</router-link>
      </li>
      <li>
        <router-link exact to="/test">测试</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "topNav"
};
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  background-color: dodgerblue;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
}
.router-link-active {
  background-color: rgba(255, 255, 255, 0.4);
}
</style>