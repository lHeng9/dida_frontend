<template>
  <div class="top-nav clearfix">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">文章</el-menu-item>
      <el-menu-item index="2">发帖</el-menu-item>
      <el-menu-item index="3">回帖</el-menu-item>
      <el-menu-item index="4">被邀请</el-menu-item>
      <el-submenu index="2">
        <template slot="title">更多</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
    export default {
        name: "personalNav",
      data(){
          return {
            activeIndex: '1',
            activeIndex2: '1'
        }
      },
      methods:{
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  .top-nav {
    /*height: 50px;*/
    width: 100%;
    /*background: #1cbd8f;*/
    float: left;
    /*position: relative;*/
    /*top: -340px;*/
  }
</style>
