<template>
  <div id="app">
      
    <!-- <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script> -->
    <router-view></router-view>
    <!-- <Tabbar></Tabbar>
    <Homepage></Homepage> -->
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
  },
  mounted: function(){

  },
};
</script>

<style>
#app {
  font-family: "PingFang SC", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
