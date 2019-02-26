import Vue from 'vue'
import App from './App'
import router from './router'
import Head from './components/common/headNav'
import Foot from './components/common/footNav'
import '../static/css/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios'
import $ from 'jquery'  // 引入jQuery
// import '../node_modules/cropper/dist/cropper.css'
// import MyCropper from 'cropper'

//bootstrap相关js文件开始
// import 'components/afterEnd/bootstrap后台管理/assets/js/jquery.min'
// import 'components/afterEnd/bootstrap后台管理/assets/js/popper.min'
// import 'components/afterEnd/bootstrap后台管理/assets/js/bootstrap.min'
// import 'components/afterEnd/bootstrap后台管理/assets/js/jquery.mCustomScrollbar.concat.min'
//
// import 'components/afterEnd/bootstrap后台管理/assets/js/index/jquery-jvectormap-1.2.2.min'
// import 'components/afterEnd/bootstrap后台管理/assets/js/index/jquery-jvectormap-world-mill-en'
// import 'components/afterEnd/bootstrap后台管理/assets/js/index/vmap-init'
// //
// import 'components/afterEnd/bootstrap后台管理/assets/js/index/morris-chart/morris'
// import 'components/afterEnd/bootstrap后台管理/assets/js/index/morris-chart/raphael-min'
// //
// import 'components/afterEnd/bootstrap后台管理/assets/js/index/morris-chart/morris-init'
// //
// import 'components/afterEnd/bootstrap后台管理/assets/js/index/Chart.bundle'
// import 'components/afterEnd/bootstrap后台管理/assets/js/index/utils'
// //
// import 'components/afterEnd/bootstrap后台管理/assets/js/index/chart'
// //
// import 'components/afterEnd/bootstrap后台管理/assets/js/jquery.dcjqaccordion.2.7'
// import 'components/afterEnd/bootstrap后台管理/assets/js/custom'
// //bootstrap相关js文件结束
// //bootstrap相关css文件开始
// //google font
// import 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700'
// import 'components/afterEnd/bootstrap后台管理/assets/css/bootstrap.min.css'
// import 'components/afterEnd/bootstrap后台管理/assets/css/font-awesome.min.css'
// import 'components/afterEnd/bootstrap后台管理/assets/css/ionicons.css'
// import 'components/afterEnd/bootstrap后台管理/assets/css/simple-line-icons.css'
// import 'components/afterEnd/bootstrap后台管理/assets/css/jquery.mCustomScrollbar.css'
// import 'components/afterEnd/bootstrap后台管理/assets/css/weather-icons.min.css'
// // Morris Chart
// import 'components/afterEnd/bootstrap后台管理/assets/css/style.css'
// import 'components/afterEnd/bootstrap后台管理/assets/css/responsive.css'
// import 'components/afterEnd/bootstrap后台管理/assets/js/index/morris-chart/morris.css'
//bootstrap相关css文件结束


Axios.defaults.baseURL = 'http://tanzhouweb.com/vueProject/'
Vue.prototype.$Axios = Axios
Vue.prototype.dataURL = function (file, title, id) {
  id = (id === undefined) ? '' : id;
  return file + '?title' + title + id
}

Vue.component('headNav', Head)
Vue.component('footNav', Foot)
// Vue.component('MyCropper', MyCropper)
Vue.use(ElementUI);
Vue.prototype.$ = $

// 为markDown文本阅读提供高亮开始
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
// 为markDown文本阅读提供高亮结束

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
