<template>

    <div>
        <h1>用户列表</h1>
        <div style="width: 100%;height: 1px; background-color: #909399; margin-bottom: 20px "></div>


        <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1500, y: 470 }">
            <a slot="delete" @click="showDeleteConfirm">封印</a>

            <a slot="more" @click="showDrawer">更多</a>
        </a-table>


        <a-drawer
                width=50%
                placement="right"
                :closable="false"
                @close="onClose"
                :visible="visible"

        >
            <!--抽屉页面-->
            <div style=" margin: 0 auto">

                <div style="background: #001529; width: 100%; height: 200px; line-height: 100px">
                    <div class="name">
                        <img src="../../../../static/images/face.jpg" class="face" style="width: 100%"><br>
                    </div>
                </div>



                <div style="width: 90% ; margin: 0 auto; ">

                    <div class="a-input">
                        <div class="items">ID</div>
                        <a-input placeholder="default size" class=""/>
                    </div>
                    <div class="a-input">
                        <div class="items">姓名</div>
                        <a-input placeholder="default size" class=""/>
                    </div>
                    <div class="a-input">
                        <div class="items">学院</div>
                        <a-input placeholder="default size" class=""/>
                    </div>
                    <div class="a-input">
                        <div class="items">QQ</div>
                        <a-input placeholder="default size" class=""/>
                    </div>
                    <div class="a-input">
                        <div class="items">邮箱</div>
                        <a-input placeholder="default size" class=""/>
                    </div>




                </div>



            </div>

        </a-drawer>
    </div>
</template>
<script>

    const columns = [
        {title: 'ID', width: 100, dataIndex: 'number', key: 'number', fixed: 'left'},
        {title: '姓名', width: 100, dataIndex: 'name', key: 'name'},
        {title: '学院', dataIndex: 'college', key: 'college', width: 100},
        {title: '班级', dataIndex: 'class', key: 'class', width: 130},
        {title: '是否正常', dataIndex: 'status', key: 'status', width: 100},
        {title: '加入时间', dataIndex: 'gmt_time', key: 'gmt_time',width: 100},
        {title: '修改时间', dataIndex: 'gmt_time', key: 'gmt_time',width: 100},
        {
            title: '是否违规',
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
                    title: '封印',
                    content: '确定封印吗？',
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

<style>
    .a-input{
        background-color: rgba(255,255,255,0.2);
        margin-bottom: 15px;
    }
    .items{
        font-weight: bolder;
        /*color: white;*/
        font-size: 16px;
        margin-bottom: 5px;
    }
</style>