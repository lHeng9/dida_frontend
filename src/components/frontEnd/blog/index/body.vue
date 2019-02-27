<template>
    <div>
        <!--轮播图开始-->
        <banner></banner>
        <!--轮播图结束-->
        <div class="body clearfix">
            <div class="content clearfix">
                <div class="content-nav clearfix">
                    <blogTagsMenu></blogTagsMenu>
                </div>
                <!--左侧主栏-->
                <div class="left clearfix ">
                    <blogCards></blogCards>
                    <!--加载中-->
                    <div class="wait">
                        <el-button id="loding" style="width: 100px" type="primary" :loading="true">加载中
                        </el-button>
                    </div>
                </div>
                <!--右侧复栏-->
                <div class="right clearfix">
                    <!--活跃教师-->
                    <div>
                        <el-card class="box-card" shadow="hover">
                            <div slot="header" class="clearfix">
                                <span><strong>活跃学生</strong></span>
                            </div>
                            <ul>
                                <li v-for="(item, index) in 5" :key="index">
                                    <div class="active">
                                        <img class="activeFace" src="../../../../../static/images/face.jpg">
                                        <div class="activeName">玄青丶丶</div>
                                    </div>
                                </li>
                            </ul>

                        </el-card>
                    </div>
                    <!--活跃学生-->
                    <div>
                        <el-card class="box-card" shadow="hover">
                            <div slot="header" class="clearfix">
                                <span><strong>活跃教师</strong></span>
                            </div>
                            <ul>
                                <li v-for="(item, index) in 5" :key="index">
                                    <div class="active">
                                        <img class="activeFace" src="../../../../../static/images/face.jpg">
                                        <div class="activeName">玄青丶丶</div>
                                    </div>

                                </li>
                            </ul>

                        </el-card>
                    </div>
                    <!--课内课外分类-->
                    <div class="clearfix content-right ">
                        <el-card class="box-card" shadow="hover">
                            <div slot="header" class="clearfix">
                                <span><strong>标签专栏</strong></span>
                            </div>
                            <el-collapse v-model="activeNames" @change="handleChange">
                                <el-collapse-item class="content-right-title" title="课外" name="1">
                                    <el-tag>JavaScript</el-tag>
                                    <el-tag type="success">Vue</el-tag>
                                    <el-tag type="info">Spring</el-tag>
                                    <el-tag type="warning">Node.js</el-tag>
                                    <el-tag type="danger">MongoDB</el-tag>
                                </el-collapse-item>
                                <el-collapse-item class="content-right-title" title="热门标签" name="2">
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
                    <!--右侧今日热门文章-->
                    <div class="right-windows">
                        <a-affix :offsetTop="this.top">
                            <el-card class="box-card" shadow="hover">
                                <div slot="header" class="clearfix">
                                    <span><strong>最新发布</strong></span>
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
                                            <div class="card-author-time"><span><img class="face"
                                                                                     src="../../../../../static/images/face.jpg"></span>
                                                <span class="card-el"><router-link
                                                        :to="{name:'personalBlogList'}">{{item.author}}</router-link></span>
                                                <span class="card-el"><i class="el-icon-time"></i>{{item.time}}</span>
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
                tabPosition: 'bottom'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleChange(val) {
                console.log(val);
            }
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

    .wait {
        position: center;
        margin: 30px auto;
        width: 100%;
    }

    #loding {
        width: 100px;
        margin-left: 50%;
        left: -50px;
    }

    .active {
        display: inline-block;
    }

    .activeFace {
        border-radius: 50%;
        width: 30px;
        float: left;
        margin: 10px 10px 10px 20px;
    }

    .activeName {
        font-size: 8px;
        text-align: center;
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

</style>
