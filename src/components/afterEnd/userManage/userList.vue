<template>

    <div>
        <!--标题线-->
        <a-divider orientation="left" style="font-size: 22px">用户列表</a-divider>
        <a-table :dataSource="data" :columns="columns" style="height:800px;">
            <!--查询框-->
            <h1>用户列表</h1>
            <div style="width: 100%;height: 1px; background-color: #909399; margin-bottom: 20px "></div>
            查询框
            <div slot="filterDropdown"
                 slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
                 class='custom-filter-dropdown'>
                <!--出入要查询的内容-->
                <a-input
                    v-ant-ref="c => searchInput = c"
                    :placeholder="`Search ${column.dataIndex}`"
                    :value="selectedKeys[0]"
                    @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                    @pressEnter="() => handleSearch(selectedKeys, confirm)"
                    style="width: 188px; margin-bottom: 8px; display: block;"
                />
                <!--探出的查询按钮-->
                <a-button
                    type='primary'
                    @click="() => handleSearch(selectedKeys, confirm)"
                    icon="search"
                    size="small"
                    style="width: 90px; margin-right: 8px"
                >Search
                </a-button>
                <!--查询旁边的重置按钮-->
                <a-button
                    @click="() => handleReset(clearFilters)"
                    size="small"
                    style="width: 90px"
                >Reset
                </a-button>
            </div>
            <a-icon slot="filterIcon" slot-scope="filtered" type='search'
                    :style="{ color: filtered ? '#108ee9' : undefined }"/>
            <template slot="customRender" slot-scope="text">
                <span v-if="searchText">
                    <template
                        v-for="(fragment, i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))">
                        <mark v-if="fragment.toLowerCase() === searchText.toLowerCase()" :key="i"
                              class="highlight">{{fragment}}</mark>
                    <template v-else>{{fragment}}</template>
                    </template>
                </span>
                <template v-else>{{text}}</template>
            </template>
            <template slot="more" slot-scope="value, record">
                <a href="javascript:;" @click="() => showDrawer(value,record)">更多</a>
            </template>

        </a-table>
        <!--右侧详情抽屉-->
        <a-drawer
            width=50%
            placement="right"
            :closable="false"
            @close="onClose"
            :visible="visible">
            <!--抽屉页面-->
            <div style=" margin: 0 auto">
                <div style="width: 90% ; margin: 0 auto; ">
                    <span style="font-weight: bolder; font-size: 20px; color: #3399ff;">用户详情</span>
                    <div style="width: 100%;height: 1px; background-color: #3399ff; margin-bottom: 10px "></div>
                    <form action="" name="form">
                        <div>
                            <img src="../../../../static/images/face.jpg" class="face" name="face" v-if="user.face == 0"><br>
                        </div>
                        <div class="a-input">
                            <div class="items">系统ID</div>
                            <a-input disabled name="id" v-model='user.id'/>
                        </div>
                        <div class="a-input">
                            <div class="items">学号/工号</div>
                            <a-input disabled name="number" v-model='user.number'/>

                        </div>
                        <div class="a-input">
                            <div class="items">姓名</div>
                            <a-input :disabled="disabled" name="name" v-model='user.name'/>
                        </div>
                        <div class="a-input">
                            <div class="items">学院</div>
                            <a-input :disabled="disabled" name="college" v-model='user.college'/>
                        </div>
                        <div class="a-input">
                            <div class="items">电话</div>
                            <a-input :disabled="disabled" name="phone" v-model='user.phone'/>
                        </div>
                        <div class="a-input">
                            <div class="items">邮箱</div>
                            <a-input disabled name="email" v-model='user.email'/>
                        </div>
                        <div class="a-input">
                            <div class="items">账号状态</div>
                            <a-select v-model="user.status" :disabled="disabled" name="status"
                                      style="width: 100%" @change="handleChange">
                                <a-select-option value="封禁">封禁</a-select-option>
                                <a-select-option value="正常">正常</a-select-option>
                            </a-select>
                        </div>
                        <div class="a-input">
                            <div class="items">个人简介</div>
                            <a-textarea :disabled="disabled" name="message" :autosize="{ minRows: 2, maxRows: 15 }"
                                        v-model='user.message'/>
                        </div>
                        <div class="a-input">
                            <div class="items">背景图</div>
                            <a-input :disabled="disabled" name="backgroundImage" v-model='user.backgroundImage'/>
                        </div>
                        <div class="a-input">
                            <div class="items">QQ</div>
                            <a-input :disabled="disabled" name="qq" v-model='user.qq'/>
                        </div>
                        <div class="a-input">
                            <div class="items">用户类型</div>
                            <a-select :disabled="disabled" name="type" v-model="user.type" style="width: 100%"
                                      @change="handleChange">
                                <a-select-option value="教师">教师</a-select-option>
                                <a-select-option value="学生">学生</a-select-option>
                            </a-select>
                        </div>
                        <div class="a-input">
                            <div class="items">注册时间</div>
                            <a-input disabled name="gmtCreate" v-model='user.gmtCreate'/>
                        </div>
                        <div class="a-input">
                            <div class="items">修改时间</div>
                            <a-input disabled name="gmtModified" v-model='user.gmtModified'/>
                        </div>
                        <div class="a-input">
                            <a-button @click="Disabled" type="primary" id="update">编辑</a-button>
                            <a-button type="primary" @click="Submit">确定</a-button>
                        </div>
                    </form>
                </div>
            </div>
        </a-drawer>
    </div>
</template>
<script>
    const data = []

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            scopedSlots: {
                filterDropdown: 'filterDropdown',
                filterIcon: 'filterIcon',
                customRender: 'customRender',
            },
            onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: (visible) => {
                if (visible) {
                    setTimeout(() => {
                        this.searchInput.focus()
                    }, 0)
                }
            },
        },
        {
            title: '学号',
            dataIndex: 'number',
            key: 'number',
            scopedSlots: {
                filterDropdown: 'filterDropdown',
                filterIcon: 'filterIcon',
                customRender: 'customRender',
            },
            onFilter: (value, record) => record.number.toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: (visible) => {
                if (visible) {
                    setTimeout(() => {
                        this.searchInput.focus()
                    })
                }
            },
        },
        {
            title: '身份',
            dataIndex: 'type',
            key: 'type',
            scopedSlots: {
                filterDropdown: 'filterDropdown',
                filterIcon: 'filterIcon',
                customRender: 'customRender',
            },
            onFilter: (value, record) => record.type.toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: (visible) => {
                if (visible) {
                    setTimeout(() => {
                        this.searchInput.focus()
                    })
                }
            },
        },
        {
            title: '用户状态',
            dataIndex: 'status',
            key: 'status',
            scopedSlots: {
                filterDropdown: 'filterDropdown',
                filterIcon: 'filterIcon',
                customRender: 'customRender',
            },
            onFilter: (value, record) => record.number.toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: (visible) => {
                if (visible) {
                    setTimeout(() => {
                        this.searchInput.focus()
                    })
                }
            },
        },
        {
            title: '详情',
            dataIndex: 'more',
            key: 'more',
            scopedSlots: {customRender: 'more'},
        },
    ]
    export default {
        data() {
            return {
                data,
                columns,
                searchText: '',
                searchInput: null,
                visible: false,
                disabled: true, //决定输入框能否输入
                user: {},

            }
        },
        methods: {
            handleSearch(selectedKeys, confirm) {
                confirm()
                this.searchText = selectedKeys[0]
            },

            handleReset(clearFilters) {
                clearFilters()
                this.searchText = ''
            },
            Disabled() {
                this.disabled = false
            },
            showDrawer(text, record) {
                this.visible = true
                // console.log(text,record)
                // console.log(text)//可以拿到当前点击对象的id
                console.log(text, record)
                this.user = record;
                this.user = this.user;
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
            },
            Submit() {
                console.log('this:'+this)
                this.$confirm({
                    title: '保存修改',
                    content: '确定保存修改吗？',
                    okText: 'Yes',
                    okType: 'danger',
                    cancelText: 'No',
                    onOk:()=>{
                        if(this.user.status == '封禁'){
                            this.user.status = 0
                        }else if(this.user.status == '正常'){
                            this.user.status = 1
                        }
                        if(this.user.type == '学生'){
                            this.user.type = 0
                        }else if(this.user.type =='教师'){
                            this.user.type = 1
                        }
                        this.$Axios.put('/system/sysuser/user/'+this.user.id,{
                            "backgroundImage":form.backgroundImage.value,
                            "college": form.college.value,
                            "email": form.email.value,
                            "face": "0",
                            "message":form.message.value,
                            "name": form.name.value,
                            "number": form.number.value,
                            "phone": form.phone.value,
                            "qq": form.qq.value,
                            "status": this.user.status,
                            "type": this.user.type,
                        })
                        //修改后为了展示效果更好，重新处理数据
                        this.data.forEach(item => {
                            //判断状态值，来给出相应的defaultvalue
                            if (item.status == 0) {
                                item.status = '封禁'
                                console.log('我刷新了')
                            } else if (item.status == 1) {
                                item.status = '正常'
                            }
                            if (item.type == 1) {
                                item.type = '教师'
                            } else if (item.type == 0) {
                                item.type = '学生'
                            }
                        })
                        console.log('OK');
                        //关闭该抽屉
                        this.onClose()
                    },
                    onCancel:()=>{
                        console.log('Cancel');
                        //取消时应该重新请求db中的数据
                        this.$Axios.get('/system/sysuser/user').then(res => {
                            this.data = res.data
                            this.data.forEach(item => {
                                //判断状态值，来给出相应的defaultvalue
                                if (item.status == 0) {
                                    item.status = '封禁'
                                    console.log('我刷新了')
                                } else if (item.status == 1) {
                                    item.status = '正常'
                                }
                                if (item.type == 0) {
                                    item.type = '学生'
                                } else if (item.type == 1) {
                                    item.type = '教师'
                                }
                            })
                            console.log(res)


                        })
                        //关闭该抽屉
                        this.onClose()
                    },
                });
            }
        },
        // 页面加载完成时请求数据
        mounted() {
            this.$Axios.get('/system/sysuser/user').then(res => {
                this.data = res.data
                this.data.forEach(item => {
                    //判断状态值，来给出相应的defaultvalue
                    if (item.status == 0) {
                        item.status = '封禁'
                        console.log('我刷新了')
                    } else if (item.status == 1) {
                        item.status = '正常'
                    }
                    if (item.type == 1) {
                        item.type = '教师'
                    } else if (item.type == 0) {
                        item.type = '学生'
                    }
                })
                console.log(res)


            })
        }

    }
</script>
<style scoped>
    .custom-filter-dropdown {
        padding: 8px;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
    }

    .highlight {
        background-color: rgb(255, 192, 105);
        padding: 0px;
    }

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
