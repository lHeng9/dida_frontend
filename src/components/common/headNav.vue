<template>
    <div>
        <!--<div class="line"></div>-->
        <div class="head clearfix">
            <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#000"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item style="padding-left:100px" index="0">
                    <router-link :to="{name:'index'}"><h1 style="color:white;">滴答学习</h1></router-link>
                </el-menu-item>
                <el-menu-item index="1">
                    <router-link :to="{name:'Blog'}">博客</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link :to="{name:'Forum'}">论坛</router-link>
                </el-menu-item>
                <el-menu-item index="4">内推</el-menu-item>
                <el-submenu index="6">
                    <template slot="title">排行榜</template>
                    <el-menu-item index="2-1">博客排行</el-menu-item>
                    <el-menu-item index="2-2">论坛排行</el-menu-item>
                    <el-menu-item index="2-3">活跃度排行</el-menu-item>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title">消息中心</template>
                    <el-menu-item index="2-0">全部未读</el-menu-item>
                    <el-menu-item index="2-1">回复我的</el-menu-item>
                    <el-menu-item index="2-2">@&nbsp;我的</el-menu-item>
                    <el-menu-item index="2-3">收到的赞</el-menu-item>
                    <el-menu-item index="2-4">系统通知</el-menu-item>
                    <el-menu-item index="2-5">消息设置</el-menu-item>

                </el-submenu>
                <el-menu-item index="8">
                    <router-link :to="{name:'editor'}"><i class="el-icon-edit"></i>写博客</router-link>
                </el-menu-item>
                <el-menu-item index="10">
                    <router-link :to="{name:'test'}">测试接口</router-link>
                </el-menu-item>
                <el-menu-item index="11" id="le-menu-item">
                    <el-input
                            size="small"
                            placeholder="请输入内容"
                            v-model="input">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-menu-item>
                <el-menu-item index="12" id="face">
                    <!--头像-->
                    <el-row class="block-col-2">
                        <el-col :span="12">
                            <el-dropdown>
              <span class="el-dropdown-link">
                <div>
                  <img class="face" src="../../../static/images/face.jpg">
                </div>
              </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>个人中心</el-dropdown-item>
                                    <el-dropdown-item>我的关注</el-dropdown-item>
                                    <el-dropdown-item>我的收藏</el-dropdown-item>
                                    <el-dropdown-item>我的评论</el-dropdown-item>
                                    <el-dropdown-item>账号设置</el-dropdown-item>
                                    <hr>
                                    <el-dropdown-item>管理博客</el-dropdown-item>
                                    <el-dropdown-item>管理帖子</el-dropdown-item>
                                    <hr>
                                    <el-dropdown-item>帮助</el-dropdown-item>
                                    <el-dropdown-item>注销</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>
                    </el-row>
                </el-menu-item>


            </el-menu>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '0',
                activeIndex2: '0',
                input: ''

            };
        },
        template: '<router-link></router-link>',
        methods: {
            handleSelect(key, keyPath) {
                // console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .head {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        /*透明度开始*/
        filter: alpha(Opacity=80);
        -moz-opacity: 0.5;
        opacity: 0.8;
        /*透明度结束*/
    }

    .clearfix::after {
        content: ""; /*这个里面不填内容，填了会原样显示在页面上。*/
        display: block;
        clear: both;
        /*不管是左还是右浮动，都能消除*/
    }

    .face {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        float: right;
    }

    #le-menu-item {
        position: relative;
        right: -3%;
    }

    #face {
        position: relative;
        right: -3%;
    }
</style>
