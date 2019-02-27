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
import '../node_modules/cropper/dist/cropper.css'
import tagMenu from './components/frontEnd/forum/tagMenu/menu'
import ForumBanner from './components/frontEnd/forum/banner/banner'
import fcard from './components/frontEnd/forum/forum-cards/fcards'
import ftags from './components/frontEnd/forum/forum-tags/fftags'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import MyCropper from 'cropper'


Axios.defaults.baseURL = 'http://tanzhouweb.com/vueProject/'
Vue.prototype.$Axios = Axios
Vue.prototype.dataURL = function (file, title, id) {
    id = (id === undefined) ? '' : id;
    return file + '?title' + title + id
}

Vue.component('headNav', Head)
Vue.component('footNav', Foot)
Vue.component('tagMenu', tagMenu)
Vue.component('ForumBanner',ForumBanner)
Vue.component('fcards',fcard)
Vue.component('ftags',ftags)
Vue.use(ElementUI);
Vue.use(iView);
Vue.prototype.$ = $;

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
    store,
    components: {App},
    template: '<App/>'
})
