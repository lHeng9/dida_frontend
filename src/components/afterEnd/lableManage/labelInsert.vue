<template>

    <div>
        <h1>添加标签</h1>
        <div style="width: 100%;height: 1px; background-color: #909399; margin-bottom: 20px "></div>

        <div style="width: 80%; height: 800px">
            <a-form :form="form" @submit="handleSubmit">
                <a-form-item v-bind="formItemLayout" label="邮箱">
                    <a-input
                            v-decorator="[
          'email',
          {
            rules: [{
              type: 'email', message: '您输入的不是邮箱!',
            }, {
              required: true, message: '请输入您的邮箱!',
            }]
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
          'nickname',
          {
            rules: [{ required: true, message: '请输入姓名!', whitespace: true }]
          }
        ]"
                    />
                </a-form-item>


                <a-form-item v-bind="tailFormItemLayout">
                    <a-button type="primary" html-type="submit" >提交</a-button>
                </a-form-item>
            </a-form>
        </div>

    </div>

</template>

<script>

    export default {
        data() {
            return {
                confirmDirty: false,
                // residences,
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