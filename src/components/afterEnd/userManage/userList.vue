<template>

    <div>
        <h1>用户列表</h1>
        <div style="width: 100%;height: 1px; background-color: #909399; margin-bottom: 20px "></div>
        <!--表格右侧悬停的栏-->
        <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1500, y: 470 }">
            <a slot="delete" @click="showDeleteConfirm">封印</a>
            <a slot="more" @click="showDrawer">更多</a>
        </a-table>
        <!--右侧详情抽屉-->
        <a-drawer width=50% placement="right" :closable="false" @close="onClose" :visible="visible">
            <!--抽屉页面-->
            <div style=" margin: 0 auto">
                <div style="width: 90% ; margin: 0 auto; ">
                    <span style="font-weight: bolder; font-size: 20px; color: #3399ff;">用户详情</span>
                    <div style="width: 100%;height: 1px; background-color: #3399ff; margin-bottom: 10px "></div>
                    <div >
                        <img src="../../../../static/images/face.jpg" class="face"><br>
                    </div>
                    <div class="a-input">
                        <div class="items">系统ID</div>
                        <a-input disabled/>
                    </div>
                    <div class="a-input">
                        <div class="items">学号/工号</div>
                        <a-input disabled />
                    </div>
                    <div class="a-input">
                        <div class="items">姓名</div>
                        <a-input  :disabled="disabled" />
                    </div>
                    <div class="a-input">
                        <div class="items">学院</div>
                        <a-input  :disabled="disabled" />
                    </div>
                    <div class="a-input">
                        <div class="items">电话</div>
                        <a-input  :disabled="disabled" />
                    </div>
                    <div class="a-input">
                        <div class="items">邮箱</div>
                        <a-input disabled />
                    </div>
                    <div class="a-input">
                        <div class="items">账号状态</div>
                        <a-select :disabled="disabled" defaultValue="正常" style="width: 100%" @change="handleChange">
                            <a-select-option value="banned">封禁</a-select-option>
                            <a-select-option value="normal">正常</a-select-option>
                        </a-select>
                    </div>
                    <div class="a-input">
                        <div class="items">个人简介</div>
                        <a-textarea :disabled="disabled" :autosize="{ minRows: 2, maxRows: 15 }" />
                    </div>
                    <div class="a-input">
                        <div class="items">背景图</div>
                        <a-input  :disabled="disabled" />
                    </div>
                    <div class="a-input">
                        <div class="items">QQ</div>
                        <a-input  :disabled="disabled" />
                    </div>
                    <div class="a-input">
                        <div class="items">用户类型</div>
                        <a-select  :disabled="disabled" defaultValue="学生" style="width: 100%" @change="handleChange">
                            <a-select-option value="student">学生</a-select-option>
                            <a-select-option value="teacher">教师</a-select-option>
                        </a-select>
                    </div>
                    <div class="a-input">
                        <div class="items">注册时间</div>
                        <a-input disabled/>
                    </div>
                    <div class="a-input">
                        <div class="items">修改时间</div>
                        <a-input disabled/>
                    </div>
                    <div class="a-input">
                        <a-button @click="Disabled" type="primary" id="update">编辑</a-button>
                        <a-button type="primary" >确定</a-button>
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
        {title: '加入时间', dataIndex: 'gmt_time', key: 'gmt_time', width: 100},
        {title: '修改时间', dataIndex: 'gmt_time', key: 'gmt_time', width: 100},
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
            more: 'more',

        });
    }

    export default {
        data() {
            return {
                data,
                columns,
                visible: false,
                disabled: true //决定输入框能否输入

            }
        },
        components: {},
        methods: {
            Disabled(){
              this.disabled = false
            },
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
            handleChange(value) {
                console.log(`selected ${value}`);
            }
        },
    }
</script>

<style>
    .a-input {
        background-color: rgba(255, 255, 255, 0.2);
        margin-bottom: 15px;
    }

    .items {
        font-weight: bolder;
        font-size: 16px;
        margin-bottom: 5px;
    }

    .face{
        width: 50%;
        margin: 20px auto;
        border-radius: 10%;
    }
    #update{
        margin-right: 20px;
        background-color: orange;
        border: orange 1px solid
    }
</style>