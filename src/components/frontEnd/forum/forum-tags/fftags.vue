<template>
    <div>
        <div class="clearfix content-right ">
            <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix">
                    <span><strong>标签专栏</strong></span>
                </div>
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item class="content-right-title" title="课外" name="1">
                        <el-tag>JavaScript</el-tag>
                        <el-tag type="success">Vue</el-tag>
                        <el-tag type="info">Spring</el-tag>
                        <el-tag type="warning">Node.js</el-tag>
                        <el-tag type="danger">MongoDB</el-tag>
                    </el-collapse-item>
                    <el-collapse-item class="content-right-title" title="热门标签" name="2">
                        <el-tag>标签一</el-tag>
                        <el-tag type="success">标签二</el-tag>
                        <el-tag type="info">标签三</el-tag>
                        <el-tag type="warning">标签四</el-tag>
                        <el-tag type="danger">标签五</el-tag>
                    </el-collapse-item>
                    <el-collapse-item class="content-right-title" title="最新标签" name="3">
                        <el-tag>标签一</el-tag>
                        <el-tag type="success">标签二</el-tag>
                        <el-tag type="info">标签三</el-tag>
                        <el-tag type="warning">标签四</el-tag>
                        <el-tag type="danger">标签五</el-tag>
                    </el-collapse-item>
                </el-collapse>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                activeNames: ['1'],
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
