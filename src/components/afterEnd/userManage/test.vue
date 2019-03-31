<template>

    <div>
        <h1>用户列表</h1>
        <div style="width: 100%;height: 1px; background-color: #909399; margin-bottom: 20px "></div>
        <!--表格右侧悬停的栏-->
        <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1500, y: 470 }">
            <template slot="banned" slot-scope="text, record">
                <a slot="banned" @click="showDeleteConfirm" v-if="text.status ==='正常'">封印</a>
                <a slot="banned" @click="showDeleteConfirm" v-if="text.status ==='封禁'">解封</a>

            </template>
            <template slot="more" slot-scope="text, record">
                <a href="javascript:;" @click="() => showDrawer(text,record)">更多</a>
            </template>
        </a-table>
        <!--右侧详情抽屉-->
        <a-drawer width=50% placement="right" :closable="false" @close="onClose" :visible="visible">
            <!--抽屉页面-->
            <div style=" margin: 0 auto">
                <div style="width: 90% ; margin: 0 auto; ">
                    <span style="font-weight: bolder; font-size: 20px; color: #3399ff;">用户详情</span>
                    <div style="width: 100%;height: 1px; background-color: #3399ff; margin-bottom: 10px "></div>
                    <div>
                        <img src="../../../../static/images/face.jpg" class="face"><br>
                    </div>
                    <div class="a-input">
                        <div class="items">系统ID</div>
                        <a-input disabled :value='user.id'/>
                    </div>
                    <div class="a-input">
                        <div class="items">学号/工号</div>
                        <a-input disabled :value='user.number'/>
                    </div>
                    <div class="a-input">
                        <div class="items">姓名</div>
                        <a-input :disabled="disabled" :value='user.name'/>
                    </div>
                    <div class="a-input">
                        <div class="items">学院</div>
                        <a-input :disabled="disabled" :value='user.college'/>
                    </div>
                    <div class="a-input">
                        <div class="items">电话</div>
                        <a-input :disabled="disabled" :value='user.phone'/>
                    </div>
                    <div class="a-input">
                        <div class="items">邮箱</div>
                        <a-input disabled :value='user.email'/>
                    </div>
                    <div class="a-input">
                        <div class="items">账号状态</div>
                        <a-select :disabled="disabled" :defaultValue="user.status" style="width: 100%" @change="handleChange">
                            <a-select-option value="banned">封禁</a-select-option>
                            <a-select-option value="normal">正常</a-select-option>
                        </a-select>
                    </div>
                    <div class="a-input">
                        <div class="items">个人简介</div>
                        <a-textarea :disabled="disabled" :autosize="{ minRows: 2, maxRows: 15 }" :value='user.number'/>
                    </div>
                    <div class="a-input">
                        <div class="items">背景图</div>
                        <a-input :disabled="disabled" :value='user.backgroundImage'/>
                    </div>
                    <div class="a-input">
                        <div class="items">QQ</div>
                        <a-input :disabled="disabled" :value='user.qq'/>
                    </div>
                    <div class="a-input">
                        <div class="items">用户类型</div>
                        <a-select :disabled="disabled" :defaultValue="user.type" style="width: 100%" @change="handleChange">
                            <a-select-option value="teacher">教师</a-select-option>
                            <a-select-option value="student">学生</a-select-option>
                        </a-select>
                    </div>
                    <div class="a-input">
                        <div class="items">注册时间</div>
                        <a-input disabled :value='user.gmtCreate'/>
                    </div>
                    <div class="a-input">
                        <div class="items">修改时间</div>
                        <a-input disabled :value='user.gmtModified'/>
                    </div>
                    <div class="a-input">
                        <a-button @click="Disabled" type="primary" id="update">编辑</a-button>
                        <a-button type="primary">确定</a-button>
                    </div>
                </div>
            </div>

        </a-drawer>
    </div>
</template>
<script>

    const columns = [
        {title: 'ID', width: 100, dataIndex: 'id', key: 'number', fixed: 'left'},
        {title: '姓名', width: 100, dataIndex: 'name', key: 'name'},
        {title: '学院', dataIndex: 'college', key: 'college', width: 100},
        {title: '班级', dataIndex: 'class', key: 'class', width: 130},
        {title: '是否正常', dataIndex: 'status', key: 'status', width: 100},
        {title: '加入时间', dataIndex: 'gmtCreate', key: 'gmtCreate', width: 100},
        {title: '修改时间', dataIndex: 'gmtModified', key: 'gmtModified', width: 100},
        {title: '是否违规', fixed: "right", width: 100, scopedSlots: {customRender: 'banned'},},
        {title: '详情', fixed: 'right', width: 100, scopedSlots: {customRender: 'more'},},
    ];

    const data = [];
    export default {
        data() {
            return {
                data,
                columns,
                visible: false,
                disabled: true, //决定输入框能否输入
                user: {},

            }
        },
        components: {},
        methods: {
            Disabled() {
                this.disabled = false
            },
            showDrawer(text) {
                this.visible = true
                // console.log(text,record)
                console.log(text.id)//可以拿到当前点击对象的id
                this.user = text;

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
        //页面加载完成时请求数据
        mounted() {
            this.$Axios.get('/system/sysuser/user').then(res => {
                console.log(res)
                this.data = res.data
                this.data.forEach(item=>{
                    //判断状态值，来给出相应的defaultvalue
                    if (item.status == 0){
                        item.status = '封禁'
                    }else if(item.status == 1){
                        item.status = '正常'
                    }
                    if(item.type == 0){
                        item.type = '教师'
                    }else if(item.type == 1){
                        item.type = '学生'
                    }
                })


            })
        }

    }
</script>

<style scoped>
    .a-input {
        background-color: rgba(255, 255, 255, 0.2);
        margin-bottom: 15px;
    }

    .items {
        font-weight: bolder;
        font-size: 16px;
        margin-bottom: 5px;
    }

    /*详细页头像*/
    .face {
        width: 50%;
        margin: 20px auto;
        border-radius: 10%;
    }

    /*详细页修改按钮*/
    #update {
        margin-right: 20px;
        background-color: orange;
        border: orange 1px solid
    }
</style>
