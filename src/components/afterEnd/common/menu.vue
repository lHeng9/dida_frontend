<template>
    <div>

        <div class="menu">
            <div>
                <div style="background: #001529; width: 100%; height: 200px; line-height: 100px">
                    <div class="name">
                        <img src="../../../../static/images/face.jpg" class="face"><br>
                        <span><a-icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"/></span>
                        <span style="font-size: 16px; color: white"> 玄青丶丶</span>
                    </div>
                </div>
                <a-menu
                        :defaultSelectedKeys="['1']"
                        :defaultOpenKeys="['sub1']"

                        :openKeys="openKeys"
                        @openChange="onOpenChange"

                        mode="inline"
                        theme="dark"
                        :inlineCollapsed="collapsed"

                >
                    <a-sub-menu key="sub1">
                        <span slot="title"><a-icon type="mail"/><span>首页</span></span>
                        <a-menu-item key="1">
                            <router-link :to="{name:'afterEnd_index'}">后台首页</router-link>
                        </a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <span slot="title"><a-icon type="user"/>
                            <span>用户管理</span>
                        </span>
                        <a-menu-item key="2">
                            <router-link :to="{name:'afterEnd_userList'}">用户列表</router-link>
                        </a-menu-item>
                        <a-menu-item key="3">
                            <router-link :to="{name:'afterEnd_userInsert'}">添加用户</router-link>

                        </a-menu-item>
                        <a-menu-item key="4">
                            <router-link :to="{name:'afterEnd_userSelect'}">查询用户</router-link>

                        </a-menu-item>
                    </a-sub-menu>

                    <a-sub-menu key="sub3">
                        <span slot="title"><a-icon type="profile"/><span>帖子管理</span></span>
                        <a-menu-item key="5">搜索帖子</a-menu-item>
                        <a-menu-item key="6">帖子列表</a-menu-item>
                    </a-sub-menu>

                    <a-sub-menu key="sub4">
                        <span slot="title">
                            <a-icon type="read"/><span>博客管理</span></span>
                        <a-menu-item key="7">搜索文章</a-menu-item>
                        <a-menu-item key="8">文章列表</a-menu-item>
                    </a-sub-menu>

                    <a-sub-menu key="sub5">
                        <span slot="title"><a-icon type="file-done"/><span>回帖管理</span></span>
                        <a-menu-item key="9">回帖列表</a-menu-item>
                    </a-sub-menu>

                    <a-sub-menu key="sub6">
                        <span slot="title"><a-icon type="build"/><span>领域管理</span></span>
                        <a-menu-item key="10">添加领域</a-menu-item>
                        <a-menu-item key="11">领域列表</a-menu-item>
                    </a-sub-menu>

                    <a-sub-menu key="sub7">
                        <span slot="title"><a-icon type="tag"/><span>标签管理</span></span>
                        <a-menu-item key="12">标签查询</a-menu-item>
                        <a-menu-item key="13">标签列表</a-menu-item>
                        <a-menu-item key="14">添加标签</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub8">
                        <span slot="title"><a-icon type="key"/><span>保留词管理</span></span>
                        <a-menu-item key="15">添加保留词</a-menu-item>
                        <a-menu-item key="16">保留词列表</a-menu-item>
                    </a-sub-menu>

                    <a-sub-menu key="sub9">
                        <span slot="title"><a-icon type="phone"/><span>举报管理</span></span>
                        <a-menu-item key="17">被举报列表</a-menu-item>
                        <a-menu-item key="18">添加举报类型</a-menu-item>
                        <a-menu-item key="19">已处理</a-menu-item>
                        <a-menu-item key="20">未处理</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub10">
                        <span slot="title"><a-icon type="gateway"/><span>其他管理</span></span>
                        <a-menu-item key="21">添加允许发布类型</a-menu-item>
                        <a-menu-item key="22">已添加列表</a-menu-item>
                    </a-sub-menu>

                    <a-sub-menu key="sub11">
                        <span slot="title"><a-icon type="sound"/><span>公告管理</span></span>
                        <a-menu-item key="23">发布公告</a-menu-item>
                        <a-menu-item key="24">历史公告</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub12">
                        <span slot="title"><a-icon type="team"/><span>ROOT</span></span>
                        <a-menu-item key="25">添加管理员</a-menu-item>
                        <a-menu-item key="26">管理员列表</a-menu-item>
                    </a-sub-menu>

                    <a-sub-menu key="sub13">
                        <span slot="title"><a-icon type="file-search"/><span>日志管理</span></span>
                        <a-menu-item key="27">系统日志</a-menu-item>
                        <a-menu-item key="28">管理日志</a-menu-item>
                    </a-sub-menu>

                </a-menu>

                <div style="background: #001529; width: 100%; height: 40px">

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .face {
        margin-top: 30px;
        width: 100px;
        border-radius: 50%;
        line-height: 200px;
        border: white 3px solid;
    }

    .name {
        padding: 10px;
        width: 80%;
        height: 50px;
        margin: 0 auto;
        text-align: center;
        line-height: 50px;
        font-size: 18px;
    }

</style>

<script>
    export default {
        data() {
            return {
                collapsed: false,

                rootSubmenuKeys: [
                    'sub1', 'sub2', 'sub3',
                    'sub4', 'sub5', 'sub6',
                    'sub7', 'sub8', 'sub9',
                    'sub10', 'sub11', 'sub12',
                    'sub13',
                ], //为了收起菜单
                openKeys: ['sub1'],//为了收起菜单
            }
        },
        methods: {
            // toggleCollapsed() {
            //     this.collapsed = !this.collapsed
            // },

            //为了收起菜单
            onOpenChange(openKeys) {
                const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
                if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                    this.openKeys = openKeys
                } else {
                    this.openKeys = latestOpenKey ? [latestOpenKey] : []
                }
            },
        },
    }
</script>