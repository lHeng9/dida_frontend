<template>
    <div>
        <div class="head clearfix">
            <!--<h1 v-text="title" class="title">title</h1>-->
            <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#000"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item style="padding-left:100px" index="0">
                    <router-link :to="{name:'index'}"><h1>滴答学习</h1></router-link>
                </el-menu-item>
                <el-menu-item index="1">
                    <router-link :to="{name:'Blog'}">博客</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link :to="{name:'Forum'}">论坛</router-link>
                </el-menu-item>
                <el-menu-item index="4">内推</el-menu-item>
                <el-menu-item index="5">博客</el-menu-item>
                <el-menu-item index="6">排行榜</el-menu-item>
                <el-menu-item index="7">消息中心</el-menu-item>

                <el-menu-item index="9">
                    <router-link :to="{name:'showMarkdown'}">markdown展示</router-link>
                </el-menu-item>
                <el-menu-item index="8">
                    <router-link :to="{name:'editor'}">写博客</router-link>
                </el-menu-item>
                <el-menu-item index="10">
                    <router-link :to="{name:'Test'}">测试接口</router-link>
                </el-menu-item>
                <el-menu-item index="11">
                    <el-input
                        placeholder="请输入内容"
                        v-model="input">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-menu-item>


            </el-menu>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                input: ''

            };
        },
        template: '<router-link></router-link>>',
        methods: {
            handleSelect(key, keyPath) {
                // console.log(key, keyPath);
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
        /*height: 150px;*/
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
</style>
