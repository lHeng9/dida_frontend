<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '' }">活动管理</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '' }">活动列表</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '' }">活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "breadcrumb"
    }
</script>

<style scoped>
    .el-breadcrumb {
        margin-top: 24px;
        display: inline-block;
        float: left
    }
</style>