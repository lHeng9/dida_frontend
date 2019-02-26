<template>
  <div class="personalInformation">
    <div class="background_image">
      <img id="background_image" src="../../../../../static/images/xiyang.gif" alt="">
    </div>
    <div class="message">
      <div id="background_message_card"></div>
      <img id="face" src="../../../../../static/images/face.jpg" alt=""/>
      <div id="background_message_sp">
        <div class="message-sp">
          <span style="font-size: 30px">玄青丶丶</span><br>
          <strong>简介：</strong><br>
          <span style="color: black">
            &emsp;&emsp;瞻彼淇奥，绿竹猗猗。有匪君子，如切如磋，如琢如磨。瑟兮僩兮，赫兮咺兮。有匪君子，终不可谖兮。
            瞻彼淇奥，绿竹青青。有匪君子，充耳琇莹，会弁如星。瑟兮僩兮，赫兮咺兮。有匪君子，终不可谖兮。
          </span><br>
          <strong>积分：</strong><span>1000000</span>
          &emsp;&emsp;&emsp;&emsp;&emsp;
          <strong>发表数量：</strong><span>10000</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "personalInformation"
    }
</script>

<style scoped>
  #background_image {
    margin-top: -20px;
  }

  #background_message_card {
    width: 100%;
    height: 180px;
    background: white;
    /*透明度开始*/
    filter: alpha(Opacity=80);
    -moz-opacity: 0.5;
    opacity: 0.5;
    /*透明度结束*/
    float: left;
    margin-top: -180px;
    z-index: 0;
    position: absolute;
  }

  #background_message_sp {
    width: 650px;
    height: 160px;
    position: relative;
    left: 550px;
    display: inline-block;
    margin-top: -170px;
    z-index: 1;
    float: left;
    /*透明度开始*/
    filter: alpha(Opacity=100);
    -moz-opacity: 1;
    opacity: 0.9;
    /*透明度结束*/
  }

  #face {
    width: 150px;
    height: 150px;
    position: relative;
    left: 350px;
    border-radius: 50%;
    background: #7b7b7b;
    margin-top: -250px;
    z-index: 1;
    float: left;
    /*透明度开始*/
    filter: alpha(Opacity=100);
    -moz-opacity: 1;
    opacity: 1;
    /*透明度结束*/
  }
</style>
