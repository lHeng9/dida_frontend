<template>
    <div>
        <div class="message">
        </div>
        <div class="menu">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo el-menu-background-image" @open="handleOpen"
                     @close="handleClose" :collapse="isCollapse">
                <el-submenu index="1" class="el-menu-background" show-timeout="1000">
                    <template slot="title" class="el-menu-background">
                        <i class="el-icon-location"></i>
                        <span slot="title">进入首页</span>
                    </template>
                    <el-menu-item-group class="el-menu-background">
                        <el-menu-item index="1-1" class="el-menu-background">首页</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2" class="el-menu-background" show-timeout="5000">
                    <template slot="title" class="el-menu-background">
                        <i class="el-icon-news"></i>
                        <span slot="title">用户管理</span>
                    </template>
                    <el-menu-item-group class="el-menu-background" show-timeout="5000">
                        <el-menu-item index="2-1">搜索用户</el-menu-item>
                        <el-menu-item index="2-2">添加用户</el-menu-item>
                        <el-menu-item index="2-3">用户列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3" class="el-menu-background">
                    <template slot="title" class="el-menu-background">
                        <i class="el-icon-document"></i>
                        <span slot="title">帖子管理</span>
                    </template>
                    <el-menu-item-group class="el-menu-background">
                        <el-menu-item index="3-1">搜索帖子</el-menu-item>
                        <el-menu-item index="3-2">帖子列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="4" class="el-menu-background">
                    <template slot="title" class="el-menu-background">
                        <i class="el-icon-document"></i>
                        <span slot="title">回帖管理</span>
                    </template>
                    <el-menu-item-group class="el-menu-background">
                        <el-menu-item index="4-1">搜索回帖</el-menu-item>
                        <el-menu-item index="4-2">回帖列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="12" class="el-menu-background">
                    <template slot="title" class="el-menu-background">
                        <i class="el-icon-tickets"></i>
                        <span slot="title">博客管理</span>
                    </template>
                    <el-menu-item-group class="el-menu-background">
                        <el-menu-item index="12-1">搜索博客</el-menu-item>
                        <el-menu-item index="12-3">博客列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="5" class="el-menu-background">
                    <template slot="title" class="el-menu-background">
                        <i class="el-icon-location"></i>
                        <span slot="title">领域管理</span>
                    </template>
                    <el-menu-item-group class="el-icon-location-outline">
                        <el-menu-item index="5-1">搜索领域</el-menu-item>
                        <el-menu-item index="5-2">添加领域</el-menu-item>
                        <el-menu-item index="5-3">领域列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="6" class="el-menu-background">
                    <template slot="title" class="el-menu-background">
                        <i class="el-icon-circle-plus-outline"></i>
                        <span slot="title">标签管理</span>
                    </template>
                    <el-menu-item-group class="el-menu-background">
                        <el-menu-item index="6-1">搜索标签</el-menu-item>
                        <el-menu-item index="6-2">添加标签</el-menu-item>
                        <el-menu-item index="6-3">标签列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="7" class="el-menu-background">
                    <template slot="title" class="el-menu-background">
                        <i class="el-icon-bell"></i>
                        <span slot="title">保留管理</span>
                    </template>
                    <el-menu-item-group class="el-menu-background">
                        <el-menu-item index="7-1">搜索保留词</el-menu-item>
                        <el-menu-item index="7-2">添加保留词</el-menu-item>
                        <el-menu-item index="7-3">保留词列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="8" class="el-menu-background">
                    <template slot="title" class="el-menu-background">
                        <i class="el-icon-phone"></i>
                        <span slot="title">举报管理</span>
                    </template>
                    <el-menu-item-group class="el-menu-background">
                        <el-menu-item index="8-1">举报列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="9" class="el-menu-background">
                    <template slot="title" class="el-menu-background">
                        <i class="el-icon-more-outline"></i>
                        <span slot="title">其他管理</span>
                    </template>
                    <el-menu-item-group class="el-menu-background">
                        <el-menu-item index="9-1">允许发布帖子</el-menu-item>
                        <el-menu-item index="9-2">允许发布博客</el-menu-item>
                        <el-menu-item index="9-3">允许注册</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="10" class="el-menu-background">
                    <template slot="title" class="el-menu-background">
                        <i class="el-icon-warning"></i>
                        <span slot="title">公报管理</span>
                    </template>
                    <el-menu-item-group class="el-menu-background">
                        <el-menu-item index="10-1">搜索公告</el-menu-item>
                        <el-menu-item index="10-2">发布公告</el-menu-item>
                        <el-menu-item index="10-3">公告列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="11" class="el-menu-background">
                    <template slot="title" class="el-menu-background">
                        <i class="el-icon-view"></i>
                        <span slot="title">Root管理</span>
                    </template>
                    <el-menu-item-group class="el-menu-background">
                        <el-menu-item index="11-1">Root管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="13" class="el-menu-background">
                    <template slot="title" class="el-menu-background">
                        <i class="el-icon-date"></i>
                        <span slot="title">日志管理</span>
                    </template>
                    <el-menu-item-group class="el-menu-background">
                        <el-menu-item index="13-1">搜索日志</el-menu-item>
                        <el-menu-item index="13-2">日志列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>

        </div>


        <div>


        </div>
    </div>

</template>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        /*width: 230px;*/
        min-height: 430px;
        show-timeout: 1000
    }

    .el-menu-background-image {
        /*background-image: url("../../../../static/images/菜单背景3.jpg");*/
    }

    .el-menu-background {
        /*background:rgba(255,255,255,0.5)*/
        /*opacity:0.5;*/
        flite: blur(3px)
    }
</style>

<script>
    export default {

        data() {
            return {
                isCollapse: false
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>