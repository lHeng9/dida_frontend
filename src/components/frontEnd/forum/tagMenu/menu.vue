<template>
    <div>
        <el-dropdown trigger="click">
            <el-button size="small">
                操作系统
                <el-badge :value="1" :max="99" class="item" type="primary"/>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                    评论
                    <el-badge class="mark" :value="12"/>
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                    回复
                    <el-badge class="mark" :value="3"/>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-button size="small">
            数据结构
            <el-badge :value="1" :max="99" class="item" type="primary"/>
        </el-button>
        <el-button size="small">
            java
            <el-badge :value="999" :max="99" class="item" type="primary"/>
        </el-button>
        <el-button size="small">
            评论
            <el-badge :value="1" :max="99" class="item" type="primary"/>
        </el-button>
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                更多<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                    评论
                    <el-badge class="mark" :value="12"/>
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                    回复
                    <el-badge class="mark" :value="3"/>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

    </div>
</template>

<script>
    export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-dropdown-link{
        margin-left:10px;
        font-size:12px;
        color:deepskyblue;
    }
</style>
