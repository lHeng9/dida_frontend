<template>
    <div>
        <personalInformation></personalInformation>
        <div class="body clearfix">

            <div class="content clearfix">
                <div class="content-nav clearfix">
                    <personalTagsMenu></personalTagsMenu>
                </div>
                <!--左侧主栏-->
                <div class="left clearfix ">
                    <!--列表内容-->
                    <personalBlogCards></personalBlogCards>
                    <!--分页条-->
                    <div class="page">
                        <div style="margin: 30px 25%; ">
                            <!--<div>-->
                            <a-pagination :defaultCurrent="1" :total="500"/>
                        </div>
                    </div>
                </div>
                <!--右侧复栏-->
                <div class="right clearfix">
                    <!--个人成就-->
                    <div>
                        <el-card class="box-card" shadow="hover">
                            <div slot="header" class="clearfix">
                                <span><strong>个人成就</strong></span>
                            </div>
                            <div style="line-height: 30px; padding-left: 20px">
                                <div><a-icon type="like" />&emsp;获得&nbsp;<span style="font-size: 18px;color: #40a9ff">1234</span>&nbsp;次点赞</div>
                                <div><a-icon type="star" />&emsp;获得&nbsp;<span style="font-size: 18px;color: #40a9ff">1234</span>&nbsp;次收藏</div>
                                <div><a-icon type="bulb" />&emsp;参与&nbsp;<span style="font-size: 18px;color: #40a9ff">1234</span>&nbsp;次讨论</div>
                                <div><a-icon type="solution" />&emsp;回答&nbsp;<span style="font-size: 18px;color: #40a9ff">1234</span>&nbsp;次问题</div>
                                <div><a-icon type="alert" />&emsp;收到&nbsp;<span style="font-size: 18px;color: #40a9ff">1234</span>&nbsp;次邀请</div>
                                <div><a-icon type="fire" />&emsp;活跃度为&nbsp;<span style="font-size: 18px;color: #40a9ff">1234</span></div>
                            </div>
                        </el-card>
                    </div>
                    <!--关注者与关注人-->
                    <div>
                        <el-card class="box-card reset-el-card" shadow="hover">
                            <div class="attention">
                                <div>
                                    <router-link :to="{name:''}">
                                        <span style="display: block;">关注者</span>
                                        <span style="font-size: 30px">1,000</span>
                                    </router-link>

                                </div>
                            </div>
                            <div id="attentionMiddle"></div>
                            <div class="attention">
                                <div>
                                    <router-link :to="{name:''}">
                                        <span style="display: block;">关注人</span>
                                        <span style="font-size: 30px">1,000</span>
                                    </router-link>

                                </div>
                            </div>
                        </el-card>
                    </div>
                    <!--课内课外分类-->
                    <div class="clearfix content-right ">
                        <el-card class="box-card" shadow="hover">
                            <div slot="header" class="clearfix">
                                <span><strong>标签专栏</strong></span>
                            </div>
                            <el-collapse v-model="activeNames" @change="handleChange">
                                <el-collapse-item class="content-right-title" title="擅长方向" name="1">
                                    <el-tag>JavaScript</el-tag>
                                    <el-tag type="success">Vue</el-tag>
                                    <el-tag type="info">Spring</el-tag>
                                    <el-tag type="warning">Node.js</el-tag>
                                    <el-tag type="danger">MongoDB</el-tag>
                                </el-collapse-item>
                                <el-collapse-item class="content-right-title" title="自定义标签" name="2">
                                    <el-tag>标签一</el-tag>
                                    <el-tag type="success">标签二</el-tag>
                                    <el-tag type="info">标签三</el-tag>
                                    <el-tag type="warning">标签四</el-tag>
                                    <el-tag type="danger">标签五</el-tag>
                                </el-collapse-item>
                                <el-collapse-item class="content-right-title" title="最新标签" name="3">
                                    <el-tag>标签一</el-tag>
                                    <el-tag type="success">标签二</el-tag>
                                    <el-tag type="info">标签三</el-tag>
                                    <el-tag type="warning">标签四</el-tag>
                                    <el-tag type="danger">标签五</el-tag>
                                </el-collapse-item>
                            </el-collapse>
                        </el-card>
                    </div>
                    <!--我的热门-->
                    <div class="right-windows">
                        <a-affix :offsetTop="this.top">
                            <el-card class="box-card" shadow="hover">
                                <div slot="header" class="clearfix">
                                    <span><strong>我的热门</strong></span>
                                </div>
                                <ul>
                                    <li v-for="(item, index) in hot_card" :key="index">
                                        <div class="content-right-top">
                                            <div class="card-title">
                                                <h4>{{item.title}}</h4>
                                            </div>
                                            <div class="card-introduction overflow-hidden">
                                                &emsp;&emsp;{{item.introduction}}
                                            </div>
                                            <div class="card-author-time">
                                                <span class="card-el"><i class="el-icon-view"></i>浏览量：1000</span>
                                                <span class="card-el"><a-icon type="heart" spin="true"/>点赞量：100</span>
                                            </div>
                                            <hr style="height:1px;border:none;border-top:1px dashed #b5b5b5;"/>
                                        </div>
                                    </li>
                                </ul>

                            </el-card>
                        </a-affix>

                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                banner1: [],
                currentDate: new Date(),
                activeNames: ['1'],
                hot_card: [
                    {
                        title: '从零开始Win10搭建TensorFlow开发环境',
                        time: '2018',
                        introduction: '到官网下载Anaconda最新版本：https://www.anaconda.com/distribution/ ，选择对应版本进行下载。',
                        author: ' winp'
                    },
                    {
                        title: 'Python制作快递查询系统，再一次感受到了Python的强大',
                        time: '2019',
                        introduction: 'win10 使用时出现了在资源管理器或者桌面右键文件时会卡住的情况，' +
                            '每次卡住几十秒。但又不是一定会出现，出现一次后隔一段时间才会再出现一次，似乎没有发现什么规律。win10 使用时出现了在资源管理器或者桌面右键文件时会卡住的情况，\' +\n' +
                            '                            \'每次卡住几十秒。但又不是一定会出现，出现一次后隔一段时间才会再出现一次，似乎没有发现什么规律。',
                        author: ' hongguifengd'
                    },
                    {
                        title: '从零开始Win10搭建TensorFlow开发环境',
                        time: '2018',
                        introduction: '到官网下载Anaconda最新版本：https://www.anaconda.com/distribution/ ，选择对应版本进行下载。',
                        author: ' winp'
                    },
                    {
                        title: '一种 win10 右键卡住转圈问题的排查过程',
                        time: '2019',
                        introduction: 'win10 使用时出现了在资源管理器或者桌面右键文件时会卡住的情况，每次卡住几十秒。但又不是一定会出现，出现一次后隔一段时间才会再出现一次，似乎没有发现什么规律。',
                        author: ' hongguifengd'
                    },
                ],
                title: '',
                // activeName2: 'first',
                tabPosition: 'bottom',
                // page: '',
                // pageSize: ''
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleChange(val) {
                console.log(val);
            },
            // change(page, pageSize){
            //
            // },
            // showSizeChange(current, size){
            //
            // }
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 0 10px;
        display: inline-block;
    }

    .left {
        float: left;
        width: 70%;
    }

    .right {
        float: right;
        width: 29%;
        margin-bottom: 10px;
    }

    /*清除浮动*/
    .clearfix::after {
        content: ""; /*这个里面不填内容，填了会原样显示在页面上。*/
        display: block;
        clear: both;
        /*不管是左还是右浮动，都能消除*/
    }

    .content-nav {
        padding-top: 20px;
        padding-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
    }

    .el-col {
        width: 100%;
    }

    .el-tag {
        margin: 5px;
    }

    .el-card {
        margin-bottom: 10px;
    }

    .reset-el-card el-card__body {
        padding: 0;
        /*margin: 0;*/

    }

    .content {
        width: 80%;
        margin: 0 auto;
    }

    /*右侧热门推荐开始*/
    .content-right-top {
        width: 100%;
        font-size: 10px;
        margin: 0 auto 20px;
        line-height: 18px;

    }

    /*右侧热门推荐结束*/

    .page {
        /*display: inline-block;*/
        /*position: center;*/
        margin: 30px auto;
        width: 100%;
        /*float: left;*/
    }


    .card-title {
        margin-bottom: 5px;
    }

    .overflow-hidden {
        height: 38px;
        overflow: hidden;
    }

    .card-author-time {
        display: inline-block;
        font-size: 8px;
        margin: 10px 0;
    }

    .face {
        width: 20px;
        border-radius: 50%;
    }

    .card-el {
        margin: 0 10px;
    }

    .attention {
        display: inline-block;
        width: 48%;
        text-align: center;
        /*line-height: 80px;*/
    }

    #attentionMiddle {
        height: 55px;
        width: 2px;
        background: #e6e6e6;
        display: inline-block;
    }
</style>
