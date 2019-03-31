<template>
    <div class="main">
        <div class="bgc">
            <img src="../../../../static/images/bgc.jpg" alt="">
            <form action="">
                <span class="title">welcome</span>
                <el-input class="input username" v-model="username" placeholder="请输入账号"></el-input>
                <el-input class="input password" v-model="password" placeholder="请输入密码" show-password></el-input>

                <el-button class="input submit" type="primary" @click="submit">登录</el-button>
                <br>
                <span class="forget">忘记密码</span>
            </form>
        </div>
    </div>
</template>

<script>

    import {mapMutations} from 'vuex';

    export default {
        data() {
            return {
                username: '',
                password: '',
                token: ''
            }
        },
        methods: {
            ...mapMutations(['changeLogin']),
            submit() {
                // this.username = this.$refs.username.value
                // this.password = this.$refs.password.value
                if (this.username === '' || this.password === '') {
                    alert('用户名或密码不能为空')
                } else {
                    console.log(this.username, this.password)
                    this.$Axios.post('/login', {
                        username: this.username,
                        password: this.password
                    }).then(res => {
                        console.log(res)
                        this.token = res.data.data
                        this.changeLogin({Authorization: this.token});
                        this.$router.push('/')
                        console.log(this.token)
                    }).catch(error => {
                        alert('用户名或密码不正确')
                    })
                }

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main {
        margin-top: 40px;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    .main .bgc{
        width:100%;
        height:100%;
    }

    .main .bgc img{
        width:100%;
        height:700px;
        /*margin-top:-20px;*/
    }
    .main form {
        /*border: 1px solid red;*/
        width: 20%;
        height: 350px;
        /*float:right;*/
        background-color:rgba(255,255,255,0.5);
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -150px;
        margin-left: -10%;
    }
    .main form .title{
        font-size:50px;
        font-weight:bold;
        position:absolute;
        top:10px;
        left:50%;
        /*border:1px solid red;*/
        margin-left:-100px;
    }
    .main form .input {
        width: 80%;
        margin-bottom:25px;
        margin-left:30px;

    }
    .main form .username{
        margin-top:90px;

    }
    .main form .submit{
        margin-bottom:20px;
    }
    .main form .forget{
        color:black;
        float:right;
        margin-right:40px;
    }
    .main form .forget:hover{
        color:deepskyblue;
        cursor:pointer;
    }
</style>
