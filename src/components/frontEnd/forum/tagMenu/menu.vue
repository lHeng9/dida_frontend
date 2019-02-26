<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

            <el-badge  class="item" type="primary">
                <el-menu-item index="1">数据结构</el-menu-item>
            </el-badge>
            <el-badge :value="200" :max="99" class="item" type="primary">
                <el-submenu index="2">
                    <template slot="title">操作系统</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
            </el-badge>
            <el-badge :value="1" class="item" type="primary">
                <el-submenu index="3">
                    <template slot="title">java</template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    <el-menu-item index="3-3">选项3</el-menu-item>
                </el-submenu>
            </el-badge>
        </el-menu>
    </div>
</template>

<script>
    export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>
