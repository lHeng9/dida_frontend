<template>
  <div id="app" style="background: #e7f0f2">
    <head-nav></head-nav><br>
    <router-view/>
    <foot-nav title="这是底部导航"></foot-nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  /*fonts-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-fonts-smoothing: antialiased;*/
  /*-moz-osx-fonts-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*background: #e2e2e2;*/
}
</style>
