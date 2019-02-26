<template>
  <div id="app">
    <!--<img-->
      <!--v-cropper="cropOptions"-->
      <!--src="https://i.imgur.com/WcvkCxl.png"-->
      <!--alt="jQuery Meme">-->
    <!--<v-my-cropper>-->
      <!--<my-cropper></my-cropper>-->
    <!--</v-my-cropper>-->
    <div class="abc"></div>
  </div>
</template>

<script>
  import Cropper from '../../../directives/Cropper'

  export default {
    directives: {
      Cropper
    },

    data () {
      return {
        cropOptions: {
          viewMode: 0,
          zoomable: false
        },

      }
    },
    methods(){
      // toggleTable:function (thisTab) {
      //   this.currentTab = thisTab;
      //   $('.abc').hide();
      //   console.log('999')
      //
      // }
    }
  }
</script>

<style scoped>

</style>
