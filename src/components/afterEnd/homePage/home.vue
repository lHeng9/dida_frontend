<template>
    <div style="margin-top: 40px">
        <el-container style="height: 561px">

            <el-header style="text-align: right; font-size: 12px">
                <afterEnd_breadcrumb></afterEnd_breadcrumb>

                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>玄青丶丶</span>
            </el-header>


            <el-container>

                <el-aside class="scrollbar">
                    <el-menu >
                        <afterEnd_menu></afterEnd_menu>
                    </el-menu>
                </el-aside>

                <el-main style="float: right; width: 70%; display: inline-block">
                    <afterEnd_index></afterEnd_index>
                </el-main>

            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

    .scrollbar::-webkit-scrollbar { /*滚动条整体样式*/
        width: 7px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }

    .scrollbar::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
        -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
        background: white;
    }

    .scrollbar::-webkit-scrollbar-track { /*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.8);
        background: #EDEDED;
    }


    .el-header {
        background-color: white;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
        width: 15%;
        float: left;
        display: inline-block;
    }




</style>