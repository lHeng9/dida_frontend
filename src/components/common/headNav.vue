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
                    <el-menu-item index="6-1">博客排行</el-menu-item>
                    <el-menu-item index="6-2">论坛排行</el-menu-item>
                    <el-menu-item index="6-3">活跃度排行</el-menu-item>
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
                <el-menu-item index="9">
                    <router-link :to="{name:'ForumEdit'}"><i class="el-icon-edit"></i>发帖</router-link>
                </el-menu-item>
                <el-menu-item index="10">
                    <router-link :to="{name:'selectEdit'}">测试接口</router-link>
                </el-menu-item>
                <el-menu-item index="11">
                    <router-link :to="{name:'afterEnd'}">后台入口</router-link>
                </el-menu-item>

                <el-menu-item index="12" id="le-menu-item">
                    <!--搜索框-->
                    <a-auto-complete
                            class="certain-category-search"
                            dropdownClassName="certain-category-search-dropdown"
                            :dropdownMatchSelectWidth="false"
                            :dropdownStyle="{width: '300px'}"
                            size="large"
                            style="width: 100%"
                            placeholder="input here"
                            optionLabelProp="value"
                    >
                        <template slot="dataSource">
                            <a-select-opt-group
                                    v-for="group in dataSource"
                                    :key="group.title"
                            >
          <span slot="label">
            {{group.title}}
            <a>更多</a>
          </span>
                                <a-select-option v-for="opt in group.children" :key="opt.title" :value="opt.title">
                                    {{opt.title}}
                                    <span class="certain-search-item-count">{{opt.count}} 人 关注</span>
                                </a-select-option>
                            </a-select-opt-group>
                            <a-select-option disabled key="all" class="show-all">
                                <a>查看所有结果</a>
                            </a-select-option>
                        </template>
                        <a-input>
                            <a-icon slot="suffix" type="search" class="certain-category-icon"/>
                        </a-input>
                    </a-auto-complete>
                    <!--<div class="certain-category-search-wrapper" style="width: 200px;">-->
                    <!---->
                    <!--</div>-->
                </el-menu-item>

                <el-menu-item index="14" id="face">
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
    const dataSource = [{
        title: '话题',
        children: [{
            title: 'AntDesign',
            count: 10000,
        }, {
            title: 'AntDesign UI',
            count: 10600,
        }],
    }, {
        title: '问题',
        children: [{
            title: 'AntDesign UI 有多好',
            count: 60100,
        }, {
            title: 'AntDesign 是啥',
            count: 30010,
        }],
    }, {
        title: '文章',
        children: [{
            title: 'AntDesign 是一个设计语言',
            count: 100000,
        }],
    }];

    export default {
        data() {
            return {
                activeIndex: '0',
                activeIndex2: '0',
                input: '',
                dataSource

            };
        },
        template: '<router-link></router-link>',
        methods: {
            handleSelect(key, keyPath) {
                // console.logManage(key, keyPath);
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
        right: 0;
    }

    #face {
        position: relative;
        right: 0;
    }

    /*搜索框*/
    .certain-category-search-wrapper >>> .certain-category-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix {
        right: 12px;
    }

    .certain-category-search-wrapper >>> .certain-search-item-count {
        position: absolute;
        color: #999;
        right: 16px;
    }

    .certain-category-search-wrapper >>> .certain-category-search.ant-select-focused .certain-category-icon {
        color: #108ee9;
    }

    .certain-category-search-wrapper >>> .certain-category-icon {
        color: #6E6E6E;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        font-size: 16px;
    }
</style>


<style>
    /*搜索框*/
    .certain-category-search-dropdown .ant-select-dropdown-menu-item-group-title {
        color: #666;
        font-weight: bold;
    }

    .certain-category-search-dropdown .ant-select-dropdown-menu-item-group {
        border-bottom: 1px solid #F6F6F6;
    }

    .certain-category-search-dropdown .ant-select-dropdown-menu-item {
        padding-left: 16px;
    }

    .certain-category-search-dropdown .ant-select-dropdown-menu-item.show-all {
        text-align: center;
        cursor: default;
    }

    .certain-category-search-dropdown .ant-select-dropdown-menu {
        max-height: 350px;
    }
</style>
