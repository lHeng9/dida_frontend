<template>
    <div>
        <!--标题线-->
        <a-divider orientation="left" style="font-size: 22px">举报列表</a-divider>

        <div style="width: 90%;margin: 0 auto">
            <!--统计汇总-->
            <div class="report-message">
                <span>总计：<span style="color: #409EFF">100条</span></span>&emsp;|&emsp;
                <span>已读：<span style="color: #67C23A;">90条</span></span>&emsp;|&emsp;
                <span>未读：<span style="color: #F56C6C;">10条</span></span>
                <span style="color: #409EFF;float: right"><a href=""><a-icon type="check" />&nbsp;全部标为已读</a></span>
            </div>
            <!--内容列表-->
            <div class="cards">
                <ul>
                    <li v-for="(item, index) in card" :key="index">
                        <el-card class="box-card" shadow="hover">

                            <div slot="header" class="clearfix card-title">
                            <span class="card-el ">
                                <router-link :to="{name:'personalBlogList'}">
                                    <img class="face" src="../../../../static/images/face.jpg">&emsp;
                                    {{item.author}}
                                </router-link>
                            </span>
                                <span id="report-text">&emsp;举报&emsp;</span>
                                <router-link :to="{name:'blogArticle'}"><h3 style="font-weight: bold">
                                    {{item.title}}</h3>
                                </router-link>



                            </div>
                            <span class="my-operation">
                                <a href=""><a-icon type="check" />&nbsp;标为已读</a>&emsp;|&emsp;
                                <a href="" style="color: #F56C6C"><a-icon type="close" />&nbsp;删除</a>&emsp;|&emsp;
                                <i class="el-icon-view"></i>
                                <span style="color: #67C23A">&nbsp;已读</span>
                            </span>
                            <div class="text item">
                                <span style="margin: 15px"><a-tag color="#409EFF">垃圾广告</a-tag></span>
                                <div class="card-introduction overflow-hidden">&emsp;{{item.introduction}}</div>
                                <div class="card-author-time">
                            </div>
                            </div>
                        </el-card>
                    </li>
                </ul>
            </div>
            <!--分页模块-->
            <div class="page">
                <a-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChange"/>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "cards",
        data() {
            return {
                card: [
                    {
                        title: 'webstorm、pycharm、IDEA等JetBrains家族软件的自定义代码快捷补全',
                        time: '2017',
                        introduction: '小号刷流量',
                        author: ' 玄青丶丶',
                        image: ''
                    },
                    {
                        title: '【vue】实现markdown',
                        time: '2018',
                        introduction: 'id 引起不适',
                        author: '花花小兔子'
                    },
                    {
                        title: 'webstorm、pycharm、IDEA等JetBrains家族软件的自定义代码快捷补全',
                        time: '2017',
                        introduction: '垃圾广告',
                        author: ' 玄青丶丶',
                        image: ''
                    },
                    {
                        title: '【vue】实现markdown',
                        time: '2018',
                        introduction: '最近在做的一个团队写作项目，里面涉及到写周报的功能，在这里用markdown是最好的解决方法，采用了vue-markdown插件将文本转换为markdown格式，并使用highlight.js来实现代码高亮...',
                        author: '花花小兔子'
                    },
                    {
                        title: 'webstorm、pycharm、IDEA等JetBrains家族软件的自定义代码快捷补全',
                        time: '2017',
                        introduction: '',
                        author: ' 玄青丶丶',
                        image: ''
                    },
                    {
                        title: '【vue】实现markdown',
                        time: '2018',
                        introduction: '最近在做的一个团队写作项目，里面涉及到写周报的功能，在这里用markdown是最好的解决方法，采用了vue-markdown插件将文本转换为markdown格式，并使用highlight.js来实现代码高亮...',
                        author: '花花小兔子'
                    },
                    {
                        title: 'webstorm、pycharm、IDEA等JetBrains家族软件的自定义代码快捷补全',
                        time: '2017',
                        introduction: '在js中，console.logManage() 这样的结构写的非常多，这时我们可以设置快捷键，写csl，按Tab来一键补全。\n' +
                            '\n' +
                            '（这里以webstorm举例，IDEA等JetBrains家族软件都是这样）',
                        author: ' 玄青丶丶',
                        image: ''
                    },
                    {
                        title: '【vue】实现markdown',
                        time: '2018',
                        introduction: '最近在做的一个团队写作项目，里面涉及到写周报的功能，在这里用markdown是最好的解决方法，采用了vue-markdown插件将文本转换为markdown格式，并使用highlight.js来实现代码高亮...',
                        author: '花花小兔子'
                    }
                ],
            }
        },
        methods: {
            onChange(pageNumber) {
                console.log('Page: ', pageNumber);
            }
        }
    }
</script>

<style scoped>

    h3 {
        display: inline-block;
    }

    .cards {
        margin: 0 auto;
    }

    /*card原始样式开始*/
    .text {
        font-size: 15px;
        line-height: 25px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 100%;
        margin-bottom: 10px;
        /*height: 100px;*/
    }

    /*card原始样式开结束*/

    .overflow-hidden {
        /*height: 57px;*/
        overflow: hidden;
    }

    /*标题超出宽度隐藏*/
    .card-title {
        display: block;
        /*text-overflow: ellipsis;*/
        /*white-space: nowrap;*/
        /*overflow: hidden;*/
        /*width: 680px;*/
        font-weight: bolder;
        font-size: 14px;
    }

    .card-title:hover {
        color: #4fc3f7;
    }

    #report-text {
        color: black;
    }

    .my-operation {
        padding-left: 5px;
        padding-right: 5px;
        float: right;
        font-size: 15px;
    }

    .router-link:hover {
        color: #4fc3f7;
    }

    a:hover {
        color: #4fc3f7;
    }

    .card-author-time {
        display: inline-block;
        position: relative;
        bottom: 0px;
        font-size: 8px;
        float: right;
        right: 5px;
    }

    .face {
        width: 30px;
        border-radius: 50%;
    }

    .card-el {
        margin: 0 10px;
        font-size: 16px;
    }

    .report-message {
        padding: 20px;
        font-size: 16px;
    }

    .page {
        padding: 40px;
        float: right;
        margin-bottom: 30px;
    }
</style>


