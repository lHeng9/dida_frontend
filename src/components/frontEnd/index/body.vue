<template>
    <div>
        <!--轮播图开始-->
        <banner></banner>
        <!--轮播图结束-->
        <div class="body clearfix">

            <!--<el-row :gutter="12">-->
                <!--<el-col :span="8">-->
                    <!--<el-card shadow="always">-->



                    <!--</el-card>-->
                <!--</el-col>-->
            <!--</el-row>-->

            <div class="content clearfix">
                <div class="content-nav clearfix">
                    <el-tabs :tab-position="tabPosition">
                        <el-tab-pane label="热门博客">
                            <router-link :to="{name:''}">热门博客</router-link>
                        </el-tab-pane>
                        <el-tab-pane label="博客分类">
                            <router-link :to="{name:''}">博客分类</router-link>
                        </el-tab-pane>
                        <el-tab-pane label="我的关注">
                            <router-link :to="{name:''}">我的关注</router-link>
                        </el-tab-pane>
                        <el-tab-pane label="我已联系">
                            <router-link :to="{name:''}">我已联系</router-link>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <div class="left clearfix ">
                    <!--单个卡片-->
                    <!--<div class="content-card clearfix ">-->
                    <!---->
                    <!--</div>-->
                    <cards></cards>
                    <!--加载中-->
                    <div class="wait">
                        <el-button id="loding" style="width: 100px" type="primary" :loading="true">加载中</el-button>
                    </div>

                </div>
                <div class="right clearfix">
                    <!--课内课外分类-->
                    <div class="clearfix content-right ">

                        <el-card class="box-card" shadow="hover">
                            <!--<div v-for="o in 4" :key="o" class="text item">-->
                            <!--{{'列表内容 ' + o }}-->
                            <!--</div>-->

                            <el-collapse v-model="activeNames" @change="handleChange">
                                <el-collapse-item class="content-right-title" title="课内" name="1">
                                    <el-tag>标签一</el-tag>
                                    <el-tag type="success">标签二</el-tag>
                                    <el-tag type="info">标签三</el-tag>
                                    <el-tag type="warning">标签四</el-tag>
                                    <el-tag type="danger">标签五</el-tag>
                                </el-collapse-item>
                                <el-collapse-item class="content-right-title" title="课外" name="2">
                                    <el-tag>标签一</el-tag>
                                    <el-tag type="success">标签二</el-tag>
                                    <el-tag type="info">标签三</el-tag>
                                    <el-tag type="warning">标签四</el-tag>
                                    <el-tag type="danger">标签五</el-tag>
                                </el-collapse-item>
                                <el-collapse-item class="content-right-title" title="热门标签" name="3">
                                    <el-tag>标签一</el-tag>
                                    <el-tag type="success">标签二</el-tag>
                                    <el-tag type="info">标签三</el-tag>
                                    <el-tag type="warning">标签四</el-tag>
                                    <el-tag type="danger">标签五</el-tag>
                                </el-collapse-item>
                                <el-collapse-item class="content-right-title" title="最新标签" name="4">
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
                        <el-card class="box-card" shadow="hover">
                            <div slot="header" class="clearfix">
                                <span><strong>最新发布</strong></span>
                                <el-button style="float: right; padding: 3px 0" type="text">关注</el-button>
                            </div>
                            <ul>
                                <li v-for="(item, index) in hot_card" :key="index">
                                    <div class="content-right-top">
                                        <div class="card-title">
                                            <h4>{{item.title}}</h4>
                                        </div>
                                        <div class="card-introduction">{{item.introduction}}</div>
                                        <div class="card-author">{{item.author}}</div>
                                        <div class="card-time">
                                            <i>{{item.time}}</i></div>
                                    </div>
                                </li>
                            </ul>

                        </el-card>
                    </div>
                    <!--活跃教师-->

                    <!--活跃学生-->
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
                        title: '你算什么男人',
                        time: '2015',
                        introduction: '亲吻你的手，还靠着你的头，让你挡胸口，那个人已不是我 ...',
                        author: '周杰伦'
                    },
                    {
                        title: '一千年以后',
                        time: '2010',
                        introduction: '心跳乱了节奏，梦也不自由，爱是个绝对承诺不说，等到一千年以后 ...',
                        author: '林俊杰'
                    },
                    {
                        title: '你算什么男人',
                        time: '2015',
                        introduction: '亲吻你的手，还靠着你的头，让你挡胸口，那个人已不是我 ...',
                        author: '周杰伦'
                    },
                    {
                        title: '一千年以后',
                        time: '2010',
                        introduction: '心跳乱了节奏，梦也不自由，爱是个绝对承诺不说，等到一千年以后 ...',
                        author: '林俊杰'
                    }
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
        /*display: inline-block;*/
        margin: 0 10px;
    }

    .body {
        /*margin: 55px auto;*/
        background: white;
    }

    .left {
        float: left;
        width: 70%;
    }

    .right {
        float: right;
        width: 25%;
        /*background: #e0e0e0;*/
        /*padding-left: 20px;*/
        /*padding-right: 20px;*/
    }

    .clearfix::after {
        content: ""; /*这个里面不填内容，填了会原样显示在页面上。*/
        display: block;
        clear: both;
        /*不管是左还是右浮动，都能消除*/
    }

    .content {
        width: 80%;
        background: white;
        /*height: 1000px;*/
        margin: 0 auto;
    }

    .content-nav {
        background: white;
        /*border-right: 1px solid #e0e0e0;*/
        border-top: 1px solid #e0e0e0;
        /*border-radius: 15px;*/
        padding-top: 10px;
        padding-left: 10px;
    }

    .el-tag {
        margin: 5px;
    }


    /*卡片效果开始*/
    .card {
        background: white;
        width: 100%;
        height: 150px;
        padding: 25px 25px 25px 40px;
        margin: 7px;
        float: left;
        border-radius: 5px;
        border-right: 2px solid #d1d1d1;
        border-bottom: 2px solid #d1d1d1;
    }

    /*卡片效果结束*/

    /*右侧热门推荐开始*/
    #content-right-top {
        /*width: 25%;*/
        /*height: 500px;*/
        background: white;
        width: 100%;
        size: 10px;
        /*background: #1b6d85;*/
    }

    .content-right-top {
        width: 100%;
        height: 100px;
        font-size: 10px;
        background: white;
        margin-bottom: 10px;
        /*border: 2px solid #d1d1d1;*/
        border-bottom: 2px solid #d1d1d1;

    }

    /*右侧热门推荐结束*/

    .content-right {
        /*float: right;*/
        background: white;
        /*border-right: 2px solid #d1d1d1;*/
        /*padding-left: 15px;*/
        /*width: 25%;*/
    }

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
</style>
