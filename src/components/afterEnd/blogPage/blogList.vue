<template>
    <div>
        <h1>这是博客列表</h1>

        <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1500, y: 480}">
            <a slot="action" @click="showDrawer" slot-scope="text" href="javascript:;">action</a>
        </a-table>

        <!--抽屉信息-->
        <div>
            <a-drawer
                    title="Basic Drawer"
                    placement="right"
                    :closable="false"
                    @close="onClose"
                    width="650px"
                    :visible="visible"
            >

                <div>
                    <a-card
                            hoverable
                            style="width: 240px"
                    >
                        <img
                                alt="example"
                                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                slot="cover"
                        />
                        <a-card-meta
                                title="Europe Street beat">
                            <template slot="description">www.instagram.com</template>
                        </a-card-meta>
                    </a-card>


                    <a-card title="Card Title">
                        <a-card-grid style="width:25%;textAlign:'center'">Content</a-card-grid>
                        <a-card-grid style="width:25%;textAlign:'center'">Content</a-card-grid>
                        <a-card-grid style="width:25%;textAlign:'center'">Content</a-card-grid>
                        <a-card-grid style="width:25%;textAlign:'center'">Content</a-card-grid>
                        <a-card-grid style="width:25%;textAlign:'center'">Content</a-card-grid>
                        <a-card-grid style="width:25%;textAlign:'center'">Content</a-card-grid>
                        <a-card-grid style="width:25%;textAlign:'center'">Content</a-card-grid>
                    </a-card>

                    <a-form>
                        <a-form-item
                                :label-col="labelCol"
                                :wrapper-col="wrapperCol"
                                label="Fail"
                                validate-status="error"
                                help="Should be combination of numbers & alphabets"
                        >
                            <a-input
                                    id="error"
                                    placeholder="unavailable choice"
                            />
                        </a-form-item>

                        <a-form-item
                                :label-col="labelCol"
                                :wrapper-col="wrapperCol"
                                label="Warning"
                                validate-status="warning"
                        >
                            <a-input
                                    id="warning"
                                    placeholder="Warning"
                            />
                        </a-form-item>

                        <a-form-item
                                :label-col="labelCol"
                                :wrapper-col="wrapperCol"
                                label="Validating"
                                has-feedback
                                validate-status="validating"
                                help="The information is being validated..."
                        >
                            <a-input
                                    id="validating"
                                    placeholder="I'm the content is being validated"
                            />
                        </a-form-item>

                        <a-form-item
                                :label-col="labelCol"
                                :wrapper-col="wrapperCol"
                                label="Success"
                                has-feedback
                                validate-status="success"
                        >
                            <a-input
                                    id="success"
                                    placeholder="I'm the content"
                            />
                        </a-form-item>

                        <a-form-item
                                :label-col="labelCol"
                                :wrapper-col="wrapperCol"
                                label="Warning"
                                has-feedback
                                validate-status="warning"
                        >
                            <a-input
                                    id="warning"
                                    placeholder="Warning"
                            />
                        </a-form-item>

                        <a-form-item
                                :label-col="labelCol"
                                :wrapper-col="wrapperCol"
                                label="Fail"
                                has-feedback
                                validate-status="error"
                                help="Should be combination of numbers & alphabets"
                        >
                            <a-input
                                    id="error"
                                    placeholder="unavailable choice"
                            />
                        </a-form-item>

                        <a-form-item
                                :label-col="labelCol"
                                :wrapper-col="wrapperCol"
                                label="Success"
                                has-feedback
                                validate-status="success"
                        >
                            <a-date-picker style="width: 100%"/>
                        </a-form-item>

                        <a-form-item
                                :label-col="labelCol"
                                :wrapper-col="wrapperCol"
                                label="Warning"
                                has-feedback
                                validate-status="warning"
                        >
                            <a-time-picker style="width: 100%"/>
                        </a-form-item>

                        <a-form-item
                                :label-col="labelCol"
                                :wrapper-col="wrapperCol"
                                label="Error"
                                has-feedback
                                validate-status="error"
                        >
                            <a-select default-value="1">
                                <a-select-option value="1">
                                    Option 1
                                </a-select-option>
                                <a-select-option value="2">
                                    Option 2
                                </a-select-option>
                                <a-select-option value="3">
                                    Option 3
                                </a-select-option>
                            </a-select>
                        </a-form-item>

                        <a-form-item
                                :label-col="labelCol"
                                :wrapper-col="wrapperCol"
                                label="Validating"
                                has-feedback
                                validate-status="validating"
                                help="The information is being validated..."
                        >
                            <a-cascader
                                    :default-value="['1']"
                                    :options="[]"
                            />
                        </a-form-item>

                        <a-form-item
                                label="inline"
                                :label-col="labelCol"
                                :wrapper-col="wrapperCol"
                                style="margin-bottom:0;"
                        >
                            <a-form-item
                                    validate-status="error"
                                    help="Please select the correct date"
                                    :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
                            >
                                <a-date-picker style="width: 100%"/>
                            </a-form-item>
                            <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">
        -
      </span>
                            <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
                                <a-date-picker style="width: 100%"/>
                            </a-form-item>
                        </a-form-item>

                        <a-form-item
                                :label-col="labelCol"
                                :wrapper-col="wrapperCol"
                                label="Success"
                                has-feedback
                                validate-status="success"
                        >
                            <a-input-number style="width: 100%"/>
                        </a-form-item>
                    </a-form>
                </div>
            </a-drawer>
        </div>
    </div>
</template>

<script>
    const columns = [
        {title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left'},
        {title: 'Age', width: 50, dataIndex: 'age', key: 'age', fixed: 'left'},
        {title: 'Column 1', dataIndex: 'address', key: '1', width: 150},
        {title: 'Column 2', dataIndex: 'address', key: '2', width: 150},
        {title: 'Column 3', dataIndex: 'address', key: '3', width: 150},
        {title: 'Column 4', dataIndex: 'address', key: '4', width: 150},
        {title: 'Column 5', dataIndex: 'address', key: '5', width: 150},
        {title: 'Column 6', dataIndex: 'address', key: '6', width: 150},
        {title: 'Column 7', dataIndex: 'address', key: '7', width: 150},
        {title: 'Column 8', dataIndex: 'address', key: '8'},
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            scopedSlots: {customRender: 'action'},
        },
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `Edrward ${i}`,
            age: 32,
            address: `London Park no. ${i}`,
        });
    }

    export default {
        data() {
            return {
                data,
                columns,
                visible: false,//抽屉默认状态
                labelCol: {
                    xs: {span: 24},
                    sm: {span: 5},
                },
                wrapperCol: {
                    xs: {span: 24},
                    sm: {span: 12},
                },
            }
        },
        methods: {
            showDrawer() {
                this.visible = true
            },
            onClose() {
                this.visible = false
            },
        }
    }
</script>