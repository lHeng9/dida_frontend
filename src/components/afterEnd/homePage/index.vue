<template>
    <div>
        <!--标题线-->
        <a-divider orientation="left" style="font-size: 22px">系统主线</a-divider>
        <div class=" welcome ">
            <el-card class="top-card" shadow="hover">
                <img id="face" src="../../../../static/images/face.jpg" alt=""/>
                <div class="top-message">
                    <h1>{{hoursTip}}，玄青丶丶 ，{{greeting}}</h1>
                    <p>评论管理员</p>
                    <p>上次登录时间：2019-3-25 13:12:23</p>

                </div>
            </el-card>
        </div>
        <h1>基本统计信息</h1>
        <div style="width: 100%;height: 1px; background-color: #909399; margin-bottom: 20px "></div>
        <div class="message">
            <!--单个卡片-->

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                        <a-icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"/>
                        当前在线
                    </span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <span style="float: left">当前在线的所有人</span>
                    <span style="float: right"><a-icon type="reload"/>&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                        <a-icon type="check-circle"/>
                        最高在线
                    </span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <span style="float: left">历史最高在线人数</span>
                    <span style="float: right"><a-icon type="reload"/>&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                       <a-icon type="team"/>
                        注册学生
                    </span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <span style="float: left">已注册学生总人数</span>
                    <span style="float: right"><a-icon type="reload"/>&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                        <a-icon type="user"/>
                        注册教师
                    </span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <span style="float: left">已注册教师总人数</span>
                    <span style="float: right"><a-icon type="reload"/>&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span><a-icon type="build"/>&nbsp;领域数</span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <span style="float: left">现存领域种类</span>
                    <span style="float: right"><a-icon type="reload"/>&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                        <a-icon type="read"/>
                        &nbsp;文章数</span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <span style="float: left">目前发表文章总数</span>
                    <span style="float: right"><a-icon type="reload"/>&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                        <a-icon type="profile"/>
                        &nbsp;帖子数</span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <span style="float: left">目前发表帖子总数</span>
                    <span style="float: right"><a-icon type="reload"/>&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                        <a-icon type="file"/>
                        &nbsp;回帖数</span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <span style="float: left">目前发表回帖总数</span>
                    <span style="float: right"><a-icon type="reload"/>&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                        <a-icon type="tag"/>
                        &nbsp;课内标签</span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <span style="float: left">目前注册的课内标签总数</span>
                    <span style="float: right"><a-icon type="reload"/>&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                        <a-icon type="tags"/>
                        &nbsp;自主标签</span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <span style="float: left">目前注册的自定义的标签总数</span>
                    <span style="float: right"><a-icon type="reload"/>&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                        <a-icon type="key"/>
                        &nbsp;保留词数</span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <span style="float: left">目前注册的保留词的总数</span>
                    <span style="float: right"><a-icon type="reload"/>&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                        <a-icon type="phone"/>
                        &nbsp;举报次数</span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <span style="float: left">目前举报人次累计总数</span>
                    <span style="float: right"><a-icon type="reload"/>&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                        <a-icon type="team"/>
                        &nbsp;管理员数</span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <span style="float: left">目现役管理员总数</span>
                    <span style="float: right"><a-icon type="reload"/>&nbsp;刷新</span>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hoursTip: ' ',
                greeting: ' '
            }
        },
        created() {
            this.getMycount();
        },
        methods: {
            getMycount: function () {
                let self = this;
                let date = new Date();
                if (date.getHours() >= 0 && date.getHours() < 12) {
                    self.hoursTip = "上午好鸭~";
                    self.greeting = '今天也是充满希望的一天~~'
                } else if (date.getHours() >= 12 && date.getHours() < 13) {
                    self.hoursTip = "中午好鸭~";
                    self.greeting = "答应我，午饭一定要吃。"
                } else if (date.getHours() >= 13 && date.getHours() < 18) {
                    self.hoursTip = "下午好鸭~"
                    self.greeting = "生活再忙也要懂得欣赏午后的阳光。"
                } else {
                    self.hoursTip = "晚上好鸭~",
                    self.greeting = "为了秀发，不能熬夜了呦。。"
                }
            }
        }
    }
</script>


<style scoped>

    /*顶部信息开始--*/
    .top-message {
        height: 200px;
        float: left;
        position: relative;
        top: 35px;
        left: 90px;
    }

    .top-message p {
        position: relative;
        left: 5px;
        margin-top: 5px;
    }

    #face {
        width: 100px;
        height: 100px;
        border-radius: 20%;
        float: left;
        position: relative;
        top: 35px;
        left: 50px;
    }

    /*卡片原始样式开始*/
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .top-card {
        width: 100%;
        margin-bottom: 20px;
    }

    /*顶部信息结束*/

    .header {
        font-size: 23px;
    }

    .text {
        font-size: 26px;
        color: #3399ff;
    }

    .hover:hover {
        color: #3399ff;
        font-weight: bolder;
    }

    .box-card {
        width: 30%;
        display: inline-block;
        margin: 15px;
    }

    .item {
        float: right;
        display: inline-block;
    }

    .remark {
        /*float: right;*/
        color: #c8cbcf;
        padding-bottom: 10px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }


</style>
