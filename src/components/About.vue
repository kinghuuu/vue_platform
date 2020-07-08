<template>
  <div>
    <h2>--------vuex mutations------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <Button @click="add">新增</Button>
    <Button @click="reduce">减少</Button>

    <h2>--------vuex getter------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.moreThenAge18}}</h2>
    <h2>{{$store.getters.moreThenAge18Length}}</h2>
    <h2>{{$store.getters.moreThenAge(22)}}</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    add() {
      this.$store.commit("increment");
    },
    reduce() {
      this.$store.commit("decrement");
    }
  }
};
</script>

<style scoped>
</style>