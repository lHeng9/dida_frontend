<template>

    <div style="height: 800px">
        <h1>添加用户</h1>
        <div style="width: 100%;height: 1px; background-color: #909399; margin-bottom: 20px "></div>

        <div style="width: 80%; margin:  0 auto">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                     class="demo-ruleForm">

                <el-form-item label="学号：" prop="number">
                    <el-input v-model.number="ruleForm.number" placeholder="input your message"></el-input>
                </el-form-item>

                <el-form-item label="姓名：" prop="name">
                    <el-input v-model.number="ruleForm.name" placeholder="input your message"></el-input>
                </el-form-item>

                <el-form-item label="邮箱：" prop="email">
                    <el-input v-model.number="ruleForm.email" placeholder="input your message"></el-input>
                </el-form-item>

                <el-form-item label="电话：" prop="phone">
                    <el-input v-model.number="ruleForm.phone" placeholder="input your message"></el-input>
                </el-form-item>

                <el-form-item label="学院：" prop="college">
                    <el-input v-model.number="ruleForm.college" placeholder="input your message"></el-input>
                </el-form-item>


                <el-form-item label="密码：" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="input your message"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="input your message"></el-input>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            var checkNumber = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('学号不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入正确值'));
                    }
                }, 1000);
            };

            var checkName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('姓名不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入正确值'));
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {

                    number: '',
                    name: '',
                    college: '',
                    phone: '',
                    email: '',
                    pass: '',
                    checkPass: '',
                },
                rules: {
                    pass: [{validator: validatePass, trigger: 'blur'}],
                    checkPass: [{validator: validatePass, trigger: 'blur'}],

                    number: [{validator: checkNumber, trigger: 'blur'}],
                    name: [{validator: checkName, trigger: 'blur'}],
                    college: [{}],
                    phone: [{}],
                    email: [{}],


                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$message.success('提交成功，本条消息将在 3 秒之后关闭', 3);
                    } else {
                        this.$message.error('提交失败，本条消息将在 3 秒之后关闭', 3);
                        return false;
                    }
                });
            },
        }
    }
</script>


