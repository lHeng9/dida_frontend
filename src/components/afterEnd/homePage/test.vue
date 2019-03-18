<template>
    <el-container style="height: 710px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <afterEnd_menu></afterEnd_menu>
        </el-aside>

        <el-container>

            <el-main>
                <a-layout style="float: right">
                    <a-layout-header style="background: #fff; padding: 0; float: right">

                        <!--点击该图标将收起左侧菜单-->
                        <!--<a-icon
                                 class="trigger"
                                 :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                                 @click="()=> collapsed = !collapsed"
                         />-->
                        <afterEnd_breadcrumb></afterEnd_breadcrumb>
                    </a-layout-header>

                    <a-layout-content
                            :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '300px' }">
                        <br>
                        <afterEnd_index></afterEnd_index>
                    </a-layout-content>
                </a-layout>
            </el-main>

        </el-container>
    </el-container>
</template>


<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>

<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    };
</script>