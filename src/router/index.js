import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Blog from '../components/frontEnd/index/body'
import forumIndex from '../components/frontEnd/blogArticle/forumIndex'
import bannerDetails from '../components/frontEnd/banner/bannerDetails'
import Banner from '../components/frontEnd/banner/banner'
import blogArticle from '../components/frontEnd/blogArticle/blogArticle'
import personalInformation from '../components/frontEnd/personalBlog/personalInformation'
import topMessage from '../components/frontEnd/blogArticle/topMessage'
import rightSecondary from '../components/frontEnd/blogArticle/rightSecondary'
import personalBlogList from '../components/frontEnd/personalBlog/personalBlogList'
import personalNav from '../components/frontEnd/personalBlog/personalNav'
import comment from '../components/frontEnd/blogArticle/comment'
import Test from '../components/frontEnd/banner/banner'
// 编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

import editor from '../components/frontEnd/blogArticle/editor'
import showMarkdown from '../components/frontEnd/blogArticle/showMarkdown'


Vue.use(ElementUI);
Vue.use(Router);
Vue.component('banner', Banner);
Vue.component('topMessage', topMessage);
Vue.component('rightSecondary', rightSecondary);
Vue.component('personalInformation', personalInformation);
Vue.component('personalNav', personalNav)
Vue.component('showMarkdown', showMarkdown)
Vue.component('comment', comment)


export default new Router({
  routes: [
    {
      name: 'Blog',
      path: '/Blog',
      component: Blog
    },
    {
      name: 'forumIndex',
      path: '/forumIndex',
      component: forumIndex
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
      path: '/Test',
      component: Test
    }
  ]
})
