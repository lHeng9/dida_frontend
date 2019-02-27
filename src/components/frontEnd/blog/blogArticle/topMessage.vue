<template>
    <div class="container">
        <el-card class="box-card" shadow="hover">
            <img id="face" src="../../../../../static/images/face.jpg" alt=""/>
            <div class="top-message">
                <span style="font-size: 20px"><strong>玄青丶丶</strong></span>
                <span style="font-size: 10px"><strong>一只摸着石头过河的幼年程序员</strong></span>
                <h6>浏览量：</h6>
                <h6>点赞量：</h6>
            </div>
        </el-card>
    </div>


</template>

<script>
    export default {
        name: "leftMain"
    }
</script>

<style scoped>

    .top-message {
        width: 500px;
        height: 200px;
        float: left;
        position: relative;
        top: 50px;
        left: 120px;
    }

    #face {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        float: left;
        position: relative;
        top: 35px;
        left: 70px;
    }

    /*卡片原始样式开始*/
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 100%;
        margin-top: 50px;
    }

    /*卡片原始样式结束*/
</style>
