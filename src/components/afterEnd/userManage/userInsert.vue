<template>
    <div>
        <!--标题线-->
        <a-divider orientation="left" style="font-size: 22px">添加用户</a-divider>
        <div style="width: 80%; height: 800px">
            <a-form :form="form" @submit="handleSubmit">
                <a-form-item v-bind="formItemLayout" label="手机">
                    <a-input
                        v-decorator="[
          'phone',
          {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          }
        ]"
                    />
                </a-form-item>
                <a-form-item v-bind="formItemLayout" label="密码">
                    <a-input
                        v-decorator="[
          'password',
          {
            rules: [{
              required: true, message: '请输入您的密码!',
            }, {
              validator: validateToNextPassword,
            }],
          }
        ]"
                        type="password"
                    />
                </a-form-item>
                <a-form-item v-bind="formItemLayout" label="重复密码">
                    <a-input
                        v-decorator="[
                            'confirm',
          {
            rules: [{
              required: true, message: '请再次输入密码!',
            }, {
              validator: compareToFirstPassword,
            }],
          }
        ]"
                        type="password"
                        @blur="handleConfirmBlur"
                    />
                </a-form-item>
                <a-form-item v-bind="formItemLayout">
                    <span slot="label">姓名</span>
                    <a-input
                        v-decorator="[
          'name',
          {
            rules: [{ required: true, message: '请输入姓名!', whitespace: true }]
          }
        ]"
                    />
                </a-form-item>
                <a-form-item v-bind="formItemLayout">
                    <span slot="label">状态</span>
                    <a-input
                        v-decorator="[
          'status',
          {
            rules: [{ required: true, message: '请输入姓名!', whitespace: true }]
          }
        ]"
                    />
                </a-form-item>
                <a-form-item v-bind="formItemLayout">
                    <span slot="label">学号</span>
                    <a-input
                        v-decorator="[
          'number',
          {
            rules: [{ required: true, message: '请输入姓名!', whitespace: true }]
          }
        ]"
                    />
                </a-form-item>
                <a-form-item v-bind="tailFormItemLayout">
                    <a-button type="primary" html-type="submit">提交</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
    import qs from 'qs'
    export default {
        data() {
            return {
                confirmDirty: false,
                autoCompleteResult: [],
                formItemLayout: {
                    labelCol: {
                        xs: {span: 24},
                        sm: {span: 8},
                    },
                    wrapperCol: {
                        xs: {span: 24},
                        sm: {span: 16},
                    },
                },
                tailFormItemLayout: {
                    wrapperCol: {
                        xs: {
                            span: 24,
                            offset: 0,
                        },
                        sm: {
                            span: 16,
                            offset: 8,
                        },
                    },
                },
            };
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                        this.$Axios.post('/system/sysuser/user',{
                                name:values.name,
                                number:values.number,
                                status:values.status,
                                phone:values.phone,
                        })
                        .then(res=>{
                            console.log(res)
                        })

                    }
                });
            },
            handleConfirmBlur(e) {
                const value = e.target.value;
                this.confirmDirty = this.confirmDirty || !!value;
            },
            compareToFirstPassword(rule, value, callback) {
                const form = this.form;
                if (value && value !== form.getFieldValue('password')) {
                    callback('Two passwords that you enter is inconsistent!');
                } else {
                    callback();
                }
            },
            validateToNextPassword(rule, value, callback) {
                const form = this.form;
                if (value && this.confirmDirty) {
                    form.validateFields(['confirm'], {force: true});
                }
                callback();
            },

        },
    };
</script>
<style scoped>


</style>