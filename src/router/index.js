import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/index.css'
import Blog from '../components/frontEnd/blog/index/body'
import bannerDetails from '../components/frontEnd/banner/bannerDetails'
import Banner from '../components/frontEnd/banner/banner'
import blogArticle from '../components/frontEnd/blog/blogArticle/blogArticle'
import personalInformation from '../components/frontEnd/blog/personalBlog/personalInformation'
import topMessage from '../components/frontEnd/blog/blogArticle/topMessage'
import rightSecondary from '../components/frontEnd/blog/blogArticle/rightSecondary'
import personalBlogList from '../components/frontEnd/blog/personalBlog/personalBlogList'
import personalNav from '../components/frontEnd/blog/personalBlog/personalNav'
import comment from '../components/frontEnd/blog/blogArticle/comment'
import Test from '../components/frontEnd/blog/index/cards'
import cards from '../components/frontEnd/blog/index/cards'
import index from '../components'
import notfound from '../components/common/404'
import blogTagsMenu from '../components/frontEnd/blog/index/tagsMenu'
import Vuex from 'vuex'
// 编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

import editor from '../components/frontEnd/blog/editor/editor'
import showMarkdown from '../components/frontEnd/blog/blogArticle/showMarkdown'
import forumIndex from "../components/frontEnd/forum/forumIndex";


Vue.use(ElementUI);
Vue.use(Router);
Vue.use(Vuex)

Vue.component('banner', Banner);
Vue.component('topMessage', topMessage);
Vue.component('rightSecondary', rightSecondary);
Vue.component('personalInformation', personalInformation);
Vue.component('personalNav', personalNav)
Vue.component('showMarkdown', showMarkdown)
Vue.component('comment', comment)
Vue.component('cards', cards)
Vue.component('blogTagsMenu', blogTagsMenu)




export default new Router({
    routes: [
        {
            path:'/',
            redirect:{
                name:'index'//重定向
            }
        },
        {
            path:'/index.html',
            name:'index',
            component:index
        },
        {
            path:'/Forum',
            name:'Forum',
            component:forumIndex
        },
        {
            name: 'Blog',
            path: '/Blog',
            component: Blog
        },
        {
            name: 'banner.details',
            path: '/banner/details',
            component: bannerDetails
        },
        {
            name: 'blogArticle',
            path: '/blogArticle',
            component: blogArticle
        },
        {
            name: 'editor',
            path: '/editor',
            component: editor
        },
        {
            name: 'personalBlogList',
            path: '/personalBlogList',
            component: personalBlogList
        }, {
            name: 'personalInformation',
            path: '/personalInformation',
            component: personalInformation
        },
        {
            name: 'showMarkdown',
            path: '/showMarkdown',
            component: showMarkdown
        },
        {
            name: 'Test',
            path: 'Test',
            component: Test
        },
        {
            path:"*",
            component:notfound
        }
    ]
})
