<template>

    <div>
        <h1>博客列表</h1>
        <div style="width: 100%;height: 1px; background-color: #909399; margin-bottom: 20px "></div>


        <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1500, y: 470 }">
            <a slot="delete" @click="showDeleteConfirm">删除</a>

            <a slot="more" @click="showDrawer">更多</a>
        </a-table>


        <a-drawer
                width=640
                placement="right"
                :closable="false"
                @close="onClose"
                :visible="visible"
        >
            <!--抽屉页面-->
            <div>




            </div>

        </a-drawer>
    </div>
</template>
<script>

    // import descriptionItem from './descriptionItem'
    const columns = [
        {title: 'ID', width: 100, dataIndex: 'number', key: 'number', fixed: 'left'},
        {title: '博主', width: 100, dataIndex: 'name', key: 'name'},
        {title: '标题', dataIndex: 'college', key: 'college', width: 100},
        {title: '班级', dataIndex: 'class', key: 'class', width: 130},
        {title: '是否置顶', dataIndex: 'phone', key: 'phone', width: 130},
        {title: '标签', dataIndex: 'email', key: 'email', width: 200},
        {title: '被收藏数', dataIndex: 'type', key: 'type', width: 80},
        {title: '获赞数', dataIndex: 'QQ', key: 'QQ', width: 100},
        {title: '是否正常', dataIndex: 'status', key: 'status', width: 100},
        {title: '发布时间', dataIndex: 'gmt_time', key: 'gmt_time',width: 170},
        {title: '修改时间', dataIndex: 'gmt_time', key: 'gmt_time',width: 170},
        {
            title: '删除',
            key: 'delete',
            fixed: "right",
            width: 100,
            scopedSlots: {customRender: 'delete'},
        },
        {
            title: '详情',
            key: 'more',
            fixed: 'right',
            width: 100,
            scopedSlots: {customRender: 'more'},
        },
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `人造人${i}号`,
            number: `16140101${i}`,
            college: '软件学院',
            class: '16140Y02班',
            phone: '15534399695',
            email: '924070845@qq.com',
            type: '学生',
            QQ: '924070845',
            status: '正常',
            gmt_time: '2019-3-15',
            address: `中北大学文澜苑2号楼. ${i} 宿舍`,
            operation: 'delete',
            more: 'more'
        });
    }

    export default {
        data() {
            return {
                data,
                columns,

                visible: false,
                pStyle: {
                    fontSize: '16px',
                    color: 'rgba(0,0,0,0.85)',
                    lineHeight: '24px',
                    display: 'block',
                    marginBottom: '16px',
                },
                pStyle2: {
                    marginBottom: '24px'
                }
            }
        },
        components: {},
        methods: {
            showDrawer() {
                this.visible = true
            },
            onClose() {
                this.visible = false
            },
            showDeleteConfirm() {
                this.$confirm({
                    title: '删除',
                    content: '确定删除吗？',
                    okText: 'Yes',
                    okType: 'danger',
                    cancelText: 'No',
                    onOk() {
                        console.log('OK');
                    },
                    onCancel() {
                        console.log('Cancel');
                    },
                });
            },
        },
    }
</script>
