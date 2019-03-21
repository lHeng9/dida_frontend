<template>

    <div>
        <h1>博客列表</h1>
        <div style="width: 100%;height: 1px; background-color: #909399; margin-bottom: 20px "></div>


        <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1500, y: 450 }">
            <a slot="delete" @click="showDeleteConfirm">封印</a>
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
            <div style=" margin: 0 auto">

                <div style="width: 90% ; margin: 0 auto; ">
                    <div class="a-input">
                        <div class="items">文章编号</div>
                        <a-input />
                    </div>
                    <div class="a-input">
                        <div class="items">作者编号</div>
                        <a-input />
                    </div>
                    <div class="a-input">
                        <div class="items">博主</div>
                        <a-input/>
                    </div>
                    <div class="a-input">
                        <div class="items">标题</div>
                        <a-input/>
                    </div>
                    <div class="a-input">
                        <div class="items">内容</div>
                        <a-textarea :autosize="{ minRows: 2, maxRows: 15 }" />
                    </div>

                    <div class="a-input">
                        <div class="items">标签</div>
                        <div>
                            <a-tag color="#f50">Ant UI</a-tag>
                            <a-tag color="#2db7f5">Element UI</a-tag>
                            <a-tag color="#87d068">Vue</a-tag>
                        </div>
                    </div>

                    <div class="a-input">
                        <div class="items">浏览计数</div>
                        <a-input />
                    </div>

                    <div class="a-input">
                        <div class="items">回复计数</div>
                        <a-input />
                    </div>

                    <div class="a-input">
                        <div class="items">获赞数</div>
                        <a-input />
                    </div>

                    <div class="a-input">
                        <div class="items">收藏数</div>
                        <a-input />
                    </div>

                    <div class="a-input">
                        <div class="items">是否置顶</div>
                        <a-input />
                    </div>

                    <div class="a-input">
                        <div class="items">当前状态</div>
                        <a-input />
                    </div>

                    <div class="a-input">
                        <div class="items">创建时间</div>
                        <a-input />
                    </div>

                    <div class="a-input">
                        <div class="items">修改时间</div>
                        <a-input disable />
                    </div>

                    <div class="a-input">
                        <a-button type="primary" id="update">编辑</a-button>
                        <a-button type="primary" >确定</a-button>
                    </div>

                </div>



            </div>

        </a-drawer>
    </div>
</template>
<script>

    const columns = [
        {title: '作者ID', width: 100, dataIndex: 'number', key: 'number', fixed: 'left'},
        {title: '文章ID', width: 100, dataIndex: 'id', key: 'id', },
        {title: '博主', width: 150, dataIndex: 'name', key: 'name'},
        {title: '标题', dataIndex: 'title', key: 'title', width: 200},
        {title: '是否置顶', dataIndex: 'top', key: 'top', width: 100},
        {title: '标签', dataIndex: 'label', key: 'label', width: 200},
        {title: '是否正常', dataIndex: 'status', key: 'status', width: 100},
        {title: '发布时间', dataIndex: 'gmt_create', key: 'gmt_create',width: 100},
        {title: '修改时间', dataIndex: 'gmt_modified', key: 'gmt_modified',width: 170},

        {
            title: '删除',
            key: 'delete',
            fixed: "right",
            width: 100,
            scopedSlots: {customRender: 'delete'},
        },
        {
            title: '封印',
            key: 'more',
            fixed: 'right',
            width: 100,
            scopedSlots: {customRender: 'more'},
        },
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            id: i,
            name: `人造人${i}号`,
            number: `16140101${i}`,
            title: '滴答学习的点点滴滴',
            label: 'Vue/Ant UI/Element UI',
            top: '是',
            status: '正常',
            gmt_create: '2019-3-15',
            gmt_modified: '2019-gmt_modified-15',

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

<style>
    .a-input{
        margin-bottom: 15px;
    }
    .items{
        font-weight: bolder;
        font-size: 14px;
        margin-bottom: 5px;
        color: #6f7882;
    }
    #update{
        margin-right: 20px;
        background-color: orange;
        border: orange 1px solid
    }
</style>
