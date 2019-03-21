<template>

    <div>
        <h1>标签列表</h1>
        <div style="width: 100%;height: 1px; background-color: #909399; margin-bottom: 20px "></div>


        <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1500, y: 470 }">
            <a slot="delete" @click="showDeleteConfirm">删除</a>

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
            <div>

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
                        <div class="items">内容<span style=" color: #779ecb;  padding-left: 10px">(点击查看全文)</span></div>
                        <a-textarea placeholder="Autosize height with minimum and maximum number of lines" :autosize="{ minRows: 2, maxRows: 10 }" />

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
        {title: '标签ID', width: 100, dataIndex: 'label_id', key: 'label_id', fixed: 'left'},
        {title: '标签名', dataIndex: 'name', key: 'name', width: 100},
        {title: '路径', dataIndex: 'path', key: 'path', width: 180},
        {title: '课内/课外', dataIndex: 'in_class', key: 'in_class', width: 100},
        {title: '是否系统给定', dataIndex: 'is_system', key: 'is_system', width: 100},
        {title: '等级', dataIndex: 'rank', key: 'rank', width: 80},
        {title: '发布时间', dataIndex: 'gmt_create', key: 'gmt_create',width: 100},
        {title: '修改时间', dataIndex: 'gmt_modified', key: 'gmt_modified',width: 100},
        {
            title: '删除',
            key: 'delete',
            fixed: "right",
            width: 100,
            scopedSlots: {customRender: 'delete'},
        },

    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            label_id: i,
            name: `人造人${i}号`,
            path: `/操作系统/内存管理`,
            in_class: '课内',
            is_system: '系统',
            rank:'2',
            gmt_create: '2019-3-15',
            gmt_modified: '2019-3-15',

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
