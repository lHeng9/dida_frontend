<template>
    <div>
        <div class="left scrollBar">
            <afterEnd_menu></afterEnd_menu>
        </div>
        <a-affix :offsetTop="this.top">
            <div class="top">
                <afterEnd_breadcrumb></afterEnd_breadcrumb>
            </div>
        </a-affix>
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
    }
</script>
<style scoped>


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
        padding:0  25px;
        background-color: white;
    }

    .top {
        width: 84%;
        height: 65px;
        background-color: white;
        float: right;
        /*添加阴影*/
        -webkit-box-shadow: #666  0 0 30px ;
    }


    /*修改浏览器默认的滚动条*/
    ::-webkit-scrollbar-track-piece {
    / / 滚动条凹槽的颜色，还可以设置边框属性 background-color: #f8f8f8;
    }

    ::-webkit-scrollbar {
    / / 滚动条的宽度 width: 15px;
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