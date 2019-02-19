<template>
  <div class="foot">
    <h1 v-text="title">title</h1>
  </div>
</template>

<script>
  export default {
    name: "footNav",
    props: ['title']
  }
</script>

<style scoped>
  .foot{
    position: relative;
    float: right;
    bottom: 0;


    left: 0;
    background: #252525;
    color: #b5b5b5;
    width: 100%;
    height: 150px;
  }
  h1{
    line-height: 150px;
    margin:  auto 0;
    padding-left: 50%;
  }

</style>
