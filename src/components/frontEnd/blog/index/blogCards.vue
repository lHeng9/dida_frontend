<template>
    <div class="cards">
        <ul>
            <li v-for="(item, index) in card" :key="index">
                <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix card-title">
                        <router-link :to="{name:'blogArticle'}"><h3 style="font-weight: bold">{{item.title}}</h3></router-link>
                    </div>
                    <div class="text item">
                        <div class="card-introduction overflow-hidden">&emsp;&emsp;{{item.introduction}}</div>
                        <div class="card-author-time">
                            <span>
                                <img class="face" src="../../../../../static/images/face.jpg">
                            </span>
                            <span class="card-el "><router-link
                                    :to="{name:'personalBlogList'}">{{item.author}}</router-link></span>
                            <span class="card-el">
                                <i class="el-icon-time"></i>
                                {{item.time}}
                            </span>
                            <span class="card-el">
                                <i class="el-icon-view"></i>
                                浏览量：1000
                            </span>
                            <span class="card-el">
                                <!--<i class="el-icon-star-off"></i>-->
                                <a-icon type="heart" spin="true"/>
                                点赞量：100
                            </span>
                            <span class="card-el">
                                <!--<i class="el-icon-star-off"></i>-->
                                <a-icon type="message" />
                                探讨：100
                            </span>
                        </div>

                    </div>
                </el-card>

            </li>
        </ul>
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
                    },
                    {
                        title: 'webstorm、pycharm、IDEA等JetBrains家族软件的自定义代码快捷补全',
                        time: '2017',
                        introduction: '在js中，console.logManage() 这样的结构写的非常多，这时我们可以设置快捷键，写csl，按Tab来一键补全。\n' +
                            '\n' +
                            '（这里以webstorm举例，IDEA等JetBrains家族软件都是这样）在js中，console.logManage() 这样的结构写的非常多，这时我们可以设置快捷键，写csl，按Tab来一键补全。\\n\' +\n' +
                            '                            \'\\n\' +\n' +
                            '                            \'（这里以webstorm举例，IDEA等JetBrains家族软件都是这样）在js中，console.logManage() 这样的结构写的非常多，这时我们可以设置快捷键，写csl，按Tab来一键补全。\\n\' +\n' +
                            '                            \'\\n\' +\n' +
                            '                            \'（这里以webstorm举例，IDEA等JetBrains家族软件都是这样）',
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
        font-size: 14px;
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
    }

    /*card原始样式开结束*/

    .overflow-hidden {
        height: 57px;
        overflow: hidden;
    }

    /*标题超出宽度隐藏*/
    .card-title {
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 680px;
        font-weight: bolder;
        font-size: 14px;
    }

    .card-title:hover{
        color: #4fc3f7;
    }

    .router-link:hover{
        color: #4fc3f7;
    }

    a:hover {
        color: #4fc3f7;
    }

    .card-author-time {
        display: inline-block;
        position: relative;
        bottom: -20px;
        font-size: 8px;
    }

    .face {
        width: 30px;
        border-radius: 50%;
    }

    .card-el {
        margin: 0 10px;
    }
</style>