<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from "./components/TopNav.vue";
import Home from "./routers/Home.vue";
import Test from "./routers/Test.vue";

export default {
  name: "App",
  components: {
    TopNav,
    Home,
    Test
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
