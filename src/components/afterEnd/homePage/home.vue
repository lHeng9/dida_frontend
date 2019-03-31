<template>
    <div>
        <div class="left scrollBar">
            <afterEnd_menu></afterEnd_menu>
        </div>
        <div>
            <a-affix>
                <div class="top">
                    <afterEnd_breadcrumb></afterEnd_breadcrumb>
                    <div class="top_right">
                    <span>
                        <a-dropdown>
                            <img class="face ant-dropdown-link" src="../../../../static/images/face.jpg" alt="">
                            <a-menu slot="overlay" class="a-menu">
                              <a-menu-item>
                                <a href="javascript:;"><a-icon type="user"/>&nbsp;个人中心</a>
                              </a-menu-item>
                              <a-menu-item>
                                <a href="javascript:;"><a-icon type="setting"/>&nbsp;设置</a>
                              </a-menu-item>
                              <a-menu-item>
                                <router-link :to="{name:'afterEnd_adminLogin'}"><a-icon type="lock" />&nbsp;锁定</router-link>
                              </a-menu-item>
                                <a-menu-item>
                                    <router-link :to="{name:'afterEnd_adminLogin'}"><a-icon
                                            type="poweroff"/>&nbsp;注销</router-link>
                              </a-menu-item>
                            </a-menu>
                        </a-dropdown>

                    </span>
                        <span class="top_right_content" @click="openNotification">
                        <a-badge :count="100"><a href="#" class="head-example"></a></a-badge>
                        <a-icon type="bell" style="fontSize :20px; float: right;margin: 7px"/>
                    </span>
                    </div>
                </div>
            </a-affix>
        </div>

        <div class="right">
            <div class="content">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                collapsed: false,
            }
        },

        methods: {
            //提示消息的方法
            openNotification() {
                this.$notification.open({
                    message: '新消息',
                    description: '您的余额已不足，请及时充值！！.',
                    placement: 'bottomRight',
                    duration: 10,
                    style: {
                        width: '400px',
                    },
                },)
            },
        }

    }
</script>
<style scoped>
    .a-menu {
        margin-top: 10px;
        width: 100px;
    }

    .top_right {
        float: right;
        width: 300px;
        height: 40px;
        margin: 12px 50px 12px 12px;
    }

    .top_right .face {
        float: right;
        height: 40px;
        width: 40px;
        margin-left: 30px;
        display: inline-block;
        border-radius: 20%;
    }

    .top_right_content {
        margin-left: 30px;
        width: 40px;
        height: 40px;
        /*background-color: #3399ff;*/
        float: right;
        display: inline-block;
    }

    .left {
        width: 16%;
        float: left;
        position: fixed;
        height: 100%;
        overflow: auto;
    }

    .right {
        width: 84%;
        float: right;
        padding: 0 25px;
        background-color: white;
    }

    .top {
        width: 84%;
        height: 65px;
        float: right;
        background-color: rgba(255,255,255,0.8);
        /*添加阴影*/
        -webkit-box-shadow: #666 0 0 30px;
    }


    /*修改浏览器默认的滚动条*/
    ::-webkit-scrollbar-track-piece {
    / / 滚动条凹槽的颜色，还可以设置边框属性 background-color: #f8f8f8;
    }

    ::-webkit-scrollbar {
    / / 滚动条的宽度 width: 15 px;
        height: 15px;
    }

    ::-webkit-scrollbar-thumb {
    / / 滚动条的设置 background-color: #dddddd;
        background-clip: padding-box;
        min-height: 15px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #b4d7ff;
    }

    /*为左侧设置的滚动条*/
    .scrollBar::-webkit-scrollbar {
        width: 2px;
        margin-right: 10px;
    }

    .scrollBar::-webkit-scrollbar-track {
        /*background-color:red;*/
        -webkit-border-radius: 1em;
        -moz-border-radius: 1em;
        border-radius: 1em;
    }

    .scrollBar::-webkit-scrollbar-thumb {
        background-color: #e5f6fe;
        -webkit-border-radius: 1em;
        -moz-border-radius: 1em;
        border-radius: 1em;
    }


</style>
