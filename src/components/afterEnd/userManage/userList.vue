<template>

    <div>
        <h1>用户列表</h1>
        <div style="width: 100%;height: 1px; background-color: #909399; margin-bottom: 20px "></div>

        <a-table :dataSource="data" :columns="columns">

            <!--查询框-->
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
            <!--<div slot="more" slot-scope="text">-->
            <!--<a href="javascript; @click="showDrawer>more</a>-->
            <!--<router-link :to="{name:''}"></router-link>-->
            <!--</div>-->
            <a slot="banned" slot-scope="text" @click="showDeleteConfirm">封印</a>
            <a slot="more" slot-scope="text" @click="showDrawer">更多</a>
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
                    <div>
                        <img src="../../../../static/images/face.jpg" class="face"><br>
                    </div>
                    <div class="a-input">
                        <div class="items">系统ID</div>
                        <a-input disabled/>
                    </div>
                    <div class="a-input">
                        <div class="items">学号/工号</div>
                        <a-input disabled/>
                    </div>
                    <div class="a-input">
                        <div class="items">姓名</div>
                        <a-input :disabled="disabled"/>
                    </div>
                    <div class="a-input">
                        <div class="items">学院</div>
                        <a-input :disabled="disabled"/>
                    </div>
                    <div class="a-input">
                        <div class="items">电话</div>
                        <a-input :disabled="disabled"/>
                    </div>
                    <div class="a-input">
                        <div class="items">邮箱</div>
                        <a-input disabled/>
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
                        <a-textarea :disabled="disabled" :autosize="{ minRows: 2, maxRows: 15 }"/>
                    </div>
                    <div class="a-input">
                        <div class="items">背景图</div>
                        <a-input :disabled="disabled"/>
                    </div>
                    <div class="a-input">
                        <div class="items">QQ</div>
                        <a-input :disabled="disabled"/>
                    </div>
                    <div class="a-input">
                        <div class="items">用户类型</div>
                        <a-select :disabled="disabled" defaultValue="学生" style="width: 100%" @change="handleChange">
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
                        <a-button type="primary">确定</a-button>
                    </div>
                </div>
            </div>

        </a-drawer>

    </div>
</template>
<script>
    const data = []

    for (let i = 0; i < 50; i++) {
        data.push({
            key: i,
            name: `人造人${i}号`,
            age: `16140101${i}`,
            address: '软件学院',
        });
    }
    export default {
        data() {
            return {
                data,
                searchText: '',
                searchInput: null,
                visible: false,
                disabled: true, //决定输入框能否输入
                columns: [
                    {
                        title: 'Name',
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
                        title: 'Age',
                        dataIndex: 'age',
                        key: 'age',
                        scopedSlots: {
                            filterDropdown: 'filterDropdown',
                            filterIcon: 'filterIcon',
                            customRender: 'customRender',
                        },
                        onFilter: (value, record) => record.age.toLowerCase().includes(value.toLowerCase()),
                        onFilterDropdownVisibleChange: (visible) => {
                            if (visible) {
                                setTimeout(() => {
                                    this.searchInput.focus()
                                })
                            }
                        },
                    },
                    {
                        title: 'Address',
                        dataIndex: 'address',
                        key: 'address',
                        scopedSlots: {
                            filterDropdown: 'filterDropdown',
                            filterIcon: 'filterIcon',
                            customRender: 'customRender',
                        },
                        onFilter: (value, record) => record.address.toLowerCase().includes(value.toLowerCase()),
                        onFilterDropdownVisibleChange: (visible) => {
                            if (visible) {
                                setTimeout(() => {
                                    this.searchInput.focus()
                                })
                            }
                        },
                    },
                    {title: '是否违规', dataIndex: 'banned',scopedSlots:{customRender:'banned'}},
                    {title: '详情', dataIndex: 'more', scopedSlots:{customRender:'more'}},
                ],
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
