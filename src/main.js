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
import Antd from 'ant-design-vue'//引入组件库
import 'ant-design-vue/dist/antd.css'//引入组件库
import tagMenu from './components/frontEnd/forum/tagMenu/menu'
import ForumBanner from './components/frontEnd/forum/banner/banner'
import fcard from './components/frontEnd/forum/forum-cards/fcards'
import ftags from './components/frontEnd/forum/forum-tags/fftags'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import forumBody from './components/frontEnd/forum/forumDetail/forumBody'
import star from './components/frontEnd/forum/forumDetail/detailFooter/star'
import report from './components/frontEnd/forum/forumDetail/detailFooter/report'
import comment from './components/frontEnd/forum/forumDetail/detailFooter/comment'
import sendComment from "./components/frontEnd/forum/forumDetail/sendComment";
import persionalInf from "./components/frontEnd/forum/forumDetail/personalInf"
import forumNews from "./components/frontEnd/forum/forum-news/forumNews"
import forumEdit from './components/frontEnd/forum/forumEdit/forumEdit'
// import MyCropper from 'cropper'
import selectTag from './components/frontEnd/forum/forumEdit/selectTag'

Axios.defaults.baseURL = 'http://localhost:8080'
Vue.prototype.$Axios = Axios
Vue.prototype.dataURL = function (file, title, id) {
    id = (id === undefined) ? '' : id;
    return file + '?title' + title + id
}
//请求头加token
Axios.interceptors.request.use(
    config => {
        if (localStorage.getItem('Authorization')) {
            config.headers.Authorization = localStorage.getItem('Authorization');
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    });
Axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 403:
                    // 返回 403 清除token信息并跳转到登录页面
                    localStorage.removeItem('Authorization');

                    this.$route.push('/login');

            }
        }
        return Promise.reject(error.response.data)
    } // 返回接口返回的错误信息
)

// 自动置顶
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});


Vue.component('headNav', Head)
Vue.component('footNav', Foot)
Vue.component('tagMenu', tagMenu)
Vue.component('ForumBanner', ForumBanner)
Vue.component('forumBody', forumBody)
Vue.component('fcards', fcard)
Vue.component('ftags', ftags)
Vue.component('star', star)
Vue.component('report', report)
Vue.component('comment', comment)
Vue.component('sendComment', sendComment)
Vue.component('person', persionalInf)
Vue.component('forumNews', forumNews)
Vue.component('forumEdit', forumEdit)
Vue.component('selectTag', selectTag)

Vue.use(Antd)
Vue.use(ElementUI);
Vue.use(iView);
Vue.prototype.$ = $;
// 为markDown文本阅读提供高亮开始
import hljs from 'highlight.js'
import 'highlight.js/styles/a11y-dark.css'

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
