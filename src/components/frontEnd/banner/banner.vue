<template>

  <div class="hero">
    <el-carousel :interval="4000" arrow="always" height="820px">
      <el-carousel-item v-for="(item, index) in banner1" :key="index">
        <router-link :to="{name:'banner.details',query: {id:item.id, title:'banner'}}">
          <img :src="item" width="100%" height="100%" alt="">
        </router-link>
      </el-carousel-item>
    </el-carousel>

    <div class="container">
      <div class="tagline">
        <h1 style="color: white;">滴答学习.</h1><br><br>
        <p style="color: white">相信 <br> 每一滴水的力量</p>
      </div>
      <!--<div class="downloads">-->
        <!--<div class="btn-container">-->
          <!--<a href="" target="_blank">-->
            <!--<div class="btn">登录</div>-->
          <!--</a>-->
          <!--<a href="" target="_blank">-->
            <!--<div class="btn">注册</div>-->
          <!--</a>-->
        <!--</div>-->

      <!--</div>-->
    </div>
  </div>
</template>

<script>
  // import img1 from 'img/test1.jpg'
  // import img2 from 'img/test2.jpg'
  // import img3 from 'img/test3.jpg'
  // import img4 from 'img/test4.jpg'
  // import img5 from 'img/test5.jpg'
  import img1 from '../../../../static/images/banner/test1.jpg'
  import img2 from '../../../../static/images/banner/test2.jpg'
  import img3 from '../../../../static/images/banner/test3.jpg'
  import img4 from '../../../../static/images/banner/test4.jpg'
  import img5 from '../../../../static/images/banner/test5.jpg'
  export default {

    name: "banner",

    data() {
      return {
        banner1: [
            '../../../../static/images/banner/test1.jpg',
            '../../../../static/images/banner/test2.jpg',
            '../../../../static/images/banner/test3.jpg',
            '../../../../static/images/banner/test4.jpg',
            '../../../../static/images/banner/test5.jpg'
        ],
        // banner1: [],
        banner2: ''
      }
    },
    // created() {
    //   this.$Axios.get('vue.php?title=banner')
    //     .then((res) => {
    //       this.banner1 = res.data
    //       // console.logManage(this.banner1)
    //     });
    //
    //   // console.logManage(this.dataURL('vue.php', 'vueTitle'));
    //   this.$Axios.get(this.dataURL('vue.php', 'vueTitle'))
    //     .then((res) => {
    //       console.logManage(res.data)
    //       this.title = res.data
    //     });
    // },
    methods: {},

    mounted() {


    }
  }
</script>

<style scoped>
  @import '../../../components/frontEnd/banner/css/reset.css';
  @import '../../../components/frontEnd/banner/css/style.css';

.hero{
  margin-top: 60px;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
