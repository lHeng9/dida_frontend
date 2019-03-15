<template>
    <div class="container">
        <el-card class="box-card" shadow="hover">
            <img id="face" src="../../../../../static/images/face.jpg" alt=""/>
            <div class="top-message">
                <!--<span style="font-size: 20px"><strong>玄青丶丶</strong></span>-->
                <!--<span style="font-size: 10px"><strong>一只摸着石头过河的幼年程序员</strong></span>-->
                <!--<h6>浏览量：</h6>-->
                <!--<h6>点赞量：</h6>-->
                <div >
                    <a-card title="玄青丶丶" :bordered="false" >

                        <p><span style="font-size: 14px">一只摸着石头过河的幼年程序员</span></p>
                        <br>
                        <p><a-icon type="user" />&emsp;身份：学生</p>
                        <p><span><a-icon type="eye" />&emsp;浏览量：1234</span>
                            <span><a-icon type="heart" />&emsp;点赞量：567</span>
                            <span><a-icon type="star" />&emsp;收藏量：567</span>
                            <span><a-icon type="clock-circle" />&emsp;时间：2019-03-10</span></p>

                    </a-card>
                </div>
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
        height: 200px;
        float: left;
        position: relative;
        /*top: 50px;*/
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
