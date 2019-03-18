<template>
    <div>
        <h1>基本统计信息</h1>
        <div style="width: 100%;height: 1px; background-color: #909399; margin-bottom: 20px "></div>
        <div class="message">
            <!--单个卡片-->

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                        <a-icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                        当前在线
                    </span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <sapn style="float: left">当前在线的所有人</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                        <a-icon type="check-circle" />
                        最高在线
                    </span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <sapn style="float: left">历史最高在线人数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                       <a-icon type="team" />
                        注册学生
                    </span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <sapn style="float: left">已注册学生总人数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">已注册教师总人数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">现存领域种类</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目前发表文章总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目前发表帖子总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目前发表回帖总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目前注册的课内标签总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目前注册的自定义的标签总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目前注册的保留词的总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目前举报人次累计总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目现役管理员总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                        <a-icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                        当前在线
                    </span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <sapn style="float: left">当前在线的所有人</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                        <a-icon type="check-circle" />
                        最高在线
                    </span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <sapn style="float: left">历史最高在线人数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
                </div>
            </el-card>

            <el-card shadow="always" class="box-card">
                <div slot="header" class="clearfix header">
                    <span>
                       <a-icon type="team" />
                        注册学生
                    </span>
                    <div class="text item hover">
                        1234
                    </div>
                </div>
                <div class="remark hover">
                    <sapn style="float: left">已注册学生总人数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">已注册教师总人数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">现存领域种类</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目前发表文章总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目前发表帖子总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目前发表回帖总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目前注册的课内标签总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目前注册的自定义的标签总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目前注册的保留词的总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目前举报人次累计总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
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
                    <sapn style="float: left">目现役管理员总数</sapn>
                    <span style="float: right"><a-icon type="reload" />&nbsp;刷新</span>
                </div>
            </el-card>

        </div>
    </div>

    </template>

<style>


    .header {
        font-size: 23px;
    }

    .text {
        font-size: 26px;

        color: #3399ff;
    }

    .hover:hover {
        color: #3399ff;
        /*margin-right: 5px;*/
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