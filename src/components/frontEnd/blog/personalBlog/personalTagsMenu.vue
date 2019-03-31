<template>
    <div>

        <el-tabs  v-model="activeName" @tab-click="handleClick" >

            <el-tab-pane label="文章" name="1">文章</el-tab-pane>
            <el-tab-pane label="提问" name="2">论坛</el-tab-pane>
            <el-tab-pane label="回答" name="3">回答</el-tab-pane>
            <el-tab-pane label="评论" name="4">评论</el-tab-pane>
            <el-tab-pane label="收藏" name="5">收藏</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: 'second',
                current: ['mail'],
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
.el-tabs{
    background-color: white;
    padding: 20px;
    width: 100%;
    float: left;
    display: inline-block;
}
</style>
