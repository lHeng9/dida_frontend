<template>

  <div class="hero">
    <el-carousel :interval="4000" arrow="always" height="800px">
      <el-carousel-item v-for="(item, index) in banner1" :key="item.id">
        <router-link :to="{name:'banner.details',query: {id:item.id, title:'banner'}}">
          <img :src="item" width="100%" height="100%" alt="">
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    import img1 from '../../../../../static/images/banner/test1.jpg'
    import img2 from '../../../../../static/images/banner/test2.jpg'
    import img3 from '../../../../../static/images/banner/test3.jpg'
    import img4 from '../../../../../static/images/banner/test4.jpg'
    import img5 from '../../../../../static/images/banner/test5.jpg'
  export default {

    name: "banner",

    data() {
      return {
          banner1: [
              '../../../../../static/images/banner/test1.jpg',
              '../../../../../static/images/banner/test2.jpg',
              '../../../../../static/images/banner/test3.jpg',
              '../../../../../static/images/banner/test4.jpg'
          ],
        // banner1: [],
        banner2: ''
      }
    },
    // created() {
    //   this.$Axios.get('vue.php?title=banner')
    //     .then((res) => {
    //       this.banner1 = res.data
    //       // console.log(this.banner1)
    //     });
    //
    //   // console.log(this.dataURL('vue.php', 'vueTitle'));
    //   this.$Axios.get(this.dataURL('vue.php', 'vueTitle'))
    //     .then((res) => {
    //       console.log(res.data)
    //       this.title = res.data
    //     });
    // },
    methods: {},

    mounted() {


    }
  }
</script>

<style scoped>
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
