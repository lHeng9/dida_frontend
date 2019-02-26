<template>
  <div class="container">
    <img id="face" src="../../../../../static/images/face.jpg" alt=""/>
    <div class="top-message">
      <span style="font-size: 20px"><strong>玄青丶丶</strong></span>
      <span style="font-size: 10px"><strong>一只摸着石头过河的幼年程序员</strong></span>
      <h6>浏览量：</h6>
      <h6>点赞量：</h6>
    </div>
  </div>
</template>

<script>
  export default {
    name: "leftMain"
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 200px;
    background: white;
    margin-top: 20px;
    border-top: 10px solid #e0e0e0;
    border-bottom: 10px solid #e0e0e0;

  }

  .top-message {
    width: 500px;
    height: 100px;
    /*background: #1cbd8f;*/
    float: left;
    position: relative;
    top: 35px;
    left: 120px;
  }

  #face {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    float: left;
    position: relative;
    top: 35px;
    left: 100px;
  }
</style>
