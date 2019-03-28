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
import blogComment from '../components/frontEnd/blog/blogArticle/comment'
import personalBlogCards from '../components/frontEnd/blog/index/personalBlogCards'
import blogCards from '../components/frontEnd/blog/index/blogCards'
import index from '../components'
import notfound from '../components/common/404'
import blogTagsMenu from '../components/frontEnd/blog/index/tagsMenu'
import Vuex from 'vuex'
import personalTagsMenu from '../components/frontEnd/blog/personalBlog/personalTagsMenu'
import forumDetail from '../components/frontEnd/forum/forumDetail/forumDetail'
import test from '../components/frontEnd/blog/index/test'
import test2 from '../components/frontEnd/blog/index/test2'
import clickBar from '../components/frontEnd/blog/blogArticle/clickBar'
import forumEditIndex from '../components/frontEnd/forum/forumEdit/index'
import pagination from '../components/frontEnd/forum/forumDetail/pagination'
// 后台管理
import afterEnd from '../components/afterEnd/homePage/home'
import afterEnd_menu from '../components/afterEnd/common/menu'
import afterEnd_index from '../components/afterEnd/homePage/index'
import afterEnd_breadcrumb from '../components/afterEnd/homePage/breadcrumb'
import afterEnd_userList from '../components/afterEnd/userManage/userList'
import afterEnd_userInsert from '../components/afterEnd/userManage/userInsert'
import afterEnd_userSelect from '../components/afterEnd/userManage/userSelect'
import afterEnd_blogList from '../components/afterEnd/blogManage/blogList'
import afterEnd_blogSelect from '../components/afterEnd/blogManage/blogSelect'
import afterEnd_forumList from '../components/afterEnd/forumManage/forunmList'
import afterEnd_labelList from '../components/afterEnd/lableManage/labelList'
import afterEnd_labelInsert from '../components/afterEnd/lableManage/labelInsert'
import afterEnd_labelSelect from '../components/afterEnd/lableManage/labelSelect'
import afterEnd_reportList from '../components/afterEnd/reportManage/reportList'



// 编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor);

import editor from '../components/frontEnd/blog/editor/editor'
import showMarkdown from '../components/frontEnd/blog/blogArticle/showMarkdown'
import forumIndex from "../components/frontEnd/forum/forumIndex";
import login from "../components/frontEnd/login/login";


Vue.use(ElementUI);
Vue.use(Router);
Vue.use(Vuex);

Vue.component('banner', Banner);
Vue.component('topMessage', topMessage);
Vue.component('rightSecondary', rightSecondary);
Vue.component('personalInformation', personalInformation);
Vue.component('personalNav', personalNav)
Vue.component('showMarkdown', showMarkdown)
Vue.component('blogComment', blogComment)
Vue.component('blogCards', blogCards)
Vue.component('personalBlogCards', personalBlogCards)
Vue.component('blogTagsMenu', blogTagsMenu)
Vue.component('personalTagsMenu', personalTagsMenu)
Vue.component('forumDetail', forumDetail)
Vue.component('clickBar', clickBar)
Vue.component('test', test)
Vue.component('pagination',pagination)
//后台管理
Vue.component('afterEnd_menu', afterEnd_menu)
Vue.component('afterEnd_index', afterEnd_index)
Vue.component('afterEnd_breadcrumb', afterEnd_breadcrumb)
Vue.component('afterEnd_userList', afterEnd_userList)
Vue.component('afterEnd_userInsert', afterEnd_userInsert)
Vue.component('afterEnd_userSelect', afterEnd_userSelect)
Vue.component('afterEnd_blogList', afterEnd_blogList)
Vue.component('afterEnd_forumList', afterEnd_forumList)
Vue.component('afterEnd_labelList', afterEnd_labelList)
Vue.component('afterEnd_labelInsert', afterEnd_labelInsert)
Vue.component('afterEnd_labelSelect', afterEnd_labelSelect)
Vue.component('afterEnd_blogSelect', afterEnd_blogSelect)
Vue.component('afterEnd_reportList', afterEnd_reportList)

const router = new Router({
    routes: [
        {
            name: 'test',
            path: 'test',
            component: test
        },
        {
            name: 'test2',
            path: 'test2',
            component: test2
        },
        {
            path: '/',
            redirect: {
                name: 'Blog'//重定向
            }
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/index.html',
            name: 'index',
            component: index
        },
        {
            path: '/Forum',
            name: 'Forum',
            component: forumIndex
        },
        {
            path: '/Forum/forumDetail',
            name: 'ForumDetail',
            component: forumDetail
        },
        {
            path: '/Forum/edit',
            name: 'ForumEdit',
            component: forumEditIndex
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
        },
        {
            name: 'personalInformation',
            path: '/personalInformation',
            component: personalInformation
        },
        {
            name: 'showMarkdown',
            path: '/showMarkdown',
            component: showMarkdown
        },
        // 后台路由集合开始
        {
            path: '/afterEnd',
            name: 'afterEnd',
            redirect: {
                name: 'afterEnd_index'//重定向
            }
        },
        {
            name: 'afterEnd',
            path: '/afterEnd',
            component: afterEnd,
            children:[
                {
                    name: 'afterEnd_index',
                    path: 'afterEnd_index',
                    component: afterEnd_index,
                    meta: {title: '后台首页'}
                },
                {
                    name: 'afterEnd_userList',
                    path: 'afterEnd_user/afterEnd_userList',
                    component: afterEnd_userList,
                    meta: {title: '用户列表'}
                },
                {
                    name: 'afterEnd_userInsert',
                    path: 'afterEnd_user/afterEnd_userInsert',
                    component: afterEnd_userInsert,
                    meta: {title: '添加用户'}
                },
                {
                    name: 'afterEnd_userSelect',
                    path: 'afterEnd_user/afterEnd_userSelect',
                    component: afterEnd_userSelect,
                    meta: {title: '查询用户'}
                },
                {
                    name: 'afterEnd_blogList',
                    path: 'afterEnd_blog/afterEnd_blogList',
                    component: afterEnd_blogList,
                    meta: {title: '博客列表'}
                },
                {
                    name: 'afterEnd_blogSelect',
                    path: 'afterEnd_blog/afterEnd_blogSelect',
                    component: afterEnd_blogSelect,
                    meta: {title: '查询博客'}
                }
                ,
                {
                    name: 'afterEnd_forumList',
                    path: 'afterEnd_forum/afterEnd_forumList',
                    component: afterEnd_forumList,
                    meta: {title: '论坛列表'}
                },
                {
                    name: 'afterEnd_labelList',
                    path: 'afterEnd_label/afterEnd_labelList',
                    component: afterEnd_labelList,
                    meta: {title: '标签列表'}
                },
                {
                    name: 'afterEnd_labelInsert',
                    path: 'afterEnd_label/afterEnd_labelInsert',
                    component: afterEnd_labelInsert,
                    meta: {title: '添加标签'}
                },
                {
                    name: 'afterEnd_labelSelect',
                    path: 'afterEnd_label/afterEnd_labelSelect',
                    component: afterEnd_labelSelect,
                    meta: {title: '查询标签'}
                },
                {
                    name: 'afterEnd_reportList',
                    path: 'afterEnd_repor/afterEnd_reportList',
                    component: afterEnd_reportList,
                    meta: {title: '举报列表'}
                }
            ]


        },

        {
            name: 'afterEnd_breadcrumb',
            path: 'afterEnd_breadcrumb',
            component: afterEnd_breadcrumb
        },
        // 后台路由集合结束
        {
            path: "*",
            component: notfound
        }
    ]
});
//
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
//
// router.beforeEach((to,from,next)=>{
//     if(to.path === '/login'){
//         next()
//         console.logManage(123)
//     }else{
//         let token = localStorage.getItem('Authorization')
//         console.logManage(token)
//         if(token === null || token === ''){
//             next('/login')
//         }else{
//             next()
//         }
//     }
// });
export default router


