<template>
    <div>
        <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            const item = {
                date: '2019-03-13',
                name: '玄青丶丶',
                address: '太原市 尖草坪区 中北大学 文澜苑 '
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    }
</script>

<style scoped>

</style>