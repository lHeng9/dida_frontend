<template>
    <div>
        <!--标题线-->
        <a-divider orientation="left" style="font-size: 22px">个人中心</a-divider>
        <div class=" welcome ">
            <el-card class="top-card" shadow="hover">
                <img id="face" src="../../../../static/images/face.jpg" alt=""/>
                <div class="top-message">
                    <h1>{{hoursTip}}，<span style="color: #3399ff">{{adminName}} </span>，{{greeting}}</h1>
                    <p>评论管理员</p>
                    <p>上次登录时间：2019-3-25 13:12:23</p>
                </div>
            </el-card>
        </div>

        <!--标题线-->
        <div class=" personal-information ">
            <a-card title="个人信息">
                <a-card-grid style="width:25%;textAlign:'center'">
                    <span>id:</span><span>1535638641264</span>
                </a-card-grid>
                <a-card-grid style="width:25%;textAlign:'center'">
                    <span>用户名：</span>
                    <span>XuanQing</span>
                </a-card-grid>
                <a-card-grid style="width:25%;textAlign:'center'">
                    <span>邮箱：</span>
                    <span>924070845@qq.com</span>
                </a-card-grid>
                <a-card-grid style="width:25%;textAlign:'center'">
                    <span>注册时间：</span>
                    <span>2018-8-30 22:17:21</span>
                </a-card-grid>
                <a-card-grid style="width:25%;textAlign:'center'">
                    <span>最近登录时间：</span>
                    <span>2019-5-14 9:39:21</span>
                </a-card-grid>
                <a-card-grid style="width:25%;textAlign:'center'">
                    <span>最近回帖时间：</span>
                    <span>2018-8-30 22:31:00</span>
                </a-card-grid>
                <a-card-grid style="width:25%;textAlign:'center'">
                    <span>最近发帖时间：</span>
                    <span>2019-1-13 22:37:57</span>
                </a-card-grid>
            </a-card>
        </div>

        <!--标题线-->
        <a-divider orientation="left" style="font-size: 22px">设置</a-divider>
        <div class=" setting-passWord ">
            <el-card shadow="hover">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                         class="demo-ruleForm">
                    <el-form-item label="原密码" prop="pass0">
                        <el-input type="password" v-model="ruleForm.pass0" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>

        <!--撑在底部-->
        <div style="margin-bottom: 50px"></div>
    </div>
</template>

<script>
    export default {
        data() {
            var validatePass0 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入现有密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass0');
                    }
                    callback();
                }
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
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                hoursTip: ' ',
                greeting: ' ',
                adminName: ' ',
                ruleForm: {
                    pass0: '',
                    pass: '',
                    checkPass: '',
                    checkPass0: '',
                    age: ''
                },
                rules: {
                    pass0: [
                        {validator: validatePass0, trigger: 'blur'}
                    ],
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ],
                }
            }

        }
        ,
        created() {
            this.getMycount();
        }
        ,
        methods: {
            getMycount: function () {
                let self = this;
                let date = new Date();
                this.adminName = "玄青丶丶"
                if (date.getHours() >= 0 && date.getHours() < 12) {
                    self.hoursTip = "上午好鸭~";
                    self.greeting = '今天也是充满希望的一天~~'
                } else if (date.getHours() >= 12 && date.getHours() < 13) {
                    self.hoursTip = "中午好鸭~";
                    self.greeting = "答应我，午饭一定要吃。"
                } else if (date.getHours() >= 13 && date.getHours() < 18) {
                    self.hoursTip = "下午好鸭~"
                    self.greeting = "生活再忙也要懂得欣赏午后的阳光。"
                } else {
                    self.hoursTip = "晚上好鸭~",
                        self.greeting = "为了秀发，不能熬夜了呦。。"
                }
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$message.success('提交成功，10秒后自动关闭', 10);
                    } else {
                        this.$message.error('提交失败，');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>


<style scoped>

    /*顶部信息开始--*/
    .top-message {
        height: 200px;
        float: left;
        position: relative;
        top: 35px;
        left: 90px;
    }

    .top-message p {
        position: relative;
        left: 5px;
        margin-top: 5px;
    }

    #face {
        width: 100px;
        height: 100px;
        border-radius: 20%;
        float: left;
        position: relative;
        top: 35px;
        left: 50px;
    }

    /*卡片原始样式开始*/
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .top-card {
        width: 100%;
        margin-bottom: 20px;
    }

    /*顶部信息结束*/

    .header {
        font-size: 23px;
    }

    .text {
        font-size: 26px;
        color: #3399ff;
    }

    .hover:hover {
        color: #3399ff;
        font-weight: bolder;
    }

    .box-card {
        width: 30%;
        display: inline-block;
        margin: 15px;
    }

    .item {
        float: right;
        display: inline-block;
    }

    .remark {
        /*float: right;*/
        color: #c8cbcf;
        padding-bottom: 10px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }


</style>
