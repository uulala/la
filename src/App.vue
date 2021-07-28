<template>
  <div id="app">
    <page-header />
    <div class="page-content">
      <router-view />
    </div>
    <!-- <page-footer /> -->
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader";
// import PageFooter from "./components/PageFooter";

export default {
  name: "App",
  components: {
    PageHeader,
    // PageFooter,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page-content {
  padding: 60px 10px 10px 40px;
  height: 100%;
  box-sizing: border-box;
}
</style>
