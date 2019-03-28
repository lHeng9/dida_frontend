<template>
    <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
        <transition-group>
            <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path" v-if="item.meta.title">
                <span v-if='item.redirect==="noredirect"||index==levelList.length-1' class="no-redirect">{{item.meta.title}}</span>
                <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>
<script>
    export default {
        data() {
            return {
                levelList: null
            }
        },
        created() {
            this.getBreadcrumb()
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        methods: {
            getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.name)//$route.matched 将会是一个包含从上到下的所有对象 (副本)。
                const first = matched[1]
                //取出路径中的第二级路径
                console.log("first.path: " + first.path.split('/')[2])
                const secondPath = first.path.split('/')[2]
                if (secondPath == 'afterEnd_user') {
                    matched = [{
                        path: '/afterEnd/afterEnd_user/afterEnd_userList',
                        meta: {title: '用户管理'}
                    }].concat(matched)
                } else if (secondPath == 'afterEnd_blog') {
                    matched = [{
                        path: '/afterEnd/afterEnd_user/afterEnd_blogList',
                        meta: {title: '博客管理'}
                    }].concat(matched)
                }
                if (secondPath !== '后台') {
                    matched = [{path: '/afterEnd', meta: {title: '后台'}}].concat(matched)
                }
                this.levelList = matched
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .app-breadcrumb.el-breadcrumb {
        display: inline-block;
        font-size: 14px;
        line-height: 50px;
        margin-left: 20px;

        .no-redirect {
            color: #97a8be;
            cursor: text;
        }
    }
</style>
