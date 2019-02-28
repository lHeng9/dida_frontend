<template>
    <div class="body">

        <div class="main">
            <div class="left">
                <div class="main-top">
                    <Affix class="top" :offset-top="0" @on-change="change">

                        <Card class="titleCard" :bordered="false">
                            <p slot="title">为什么索引等相同下,数据量123123123123123到达一定量级时候， 会听说 mongodb 比 mysql 快</p>
                            <el-tag type="info" size="mini">标签三</el-tag>
                            <el-tag type="info" size="mini">标签三</el-tag>
                            <el-tag type="info" size="mini">标签三</el-tag>
                        </Card>
                    </Affix>
                </div>
                <Card class="item" :bordered="false" >
                    <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                </Card>

                <li v-for="index in 400">index</li>
            </div>
            <div class="right">1234</div>

        </div>
        <back-top></back-top>

    </div>
</template>

<script>
    export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    .body {
        width: 100%;
        height:100%;
        /*background-color: blue;*/
        background-color:#dddddd;
    }

    .main {
        width: 80%;
        height:100%;
        margin: 44px auto;
        /*border: 1px solid blue;*/
        display:table;

    }

    .main .left {
        width: 70%;
        float: left;

    }

    .main .right {
        width: 28%;
        float: right;
        border: 1px solid red;
    }

    .main .left .title {
        width: 90%;
        height: 80px;
        /*border:1px solid red;*/
        font-size: 20px;
        font-weight: bold;
        padding: 5px;
        float: left;
    }

    .main .left .authorFace {
        width: 80px;
        height: 80px;
        /*border:1px solid red;*/
        /*display:inline-block;*/
        float: right;
    }

    .main .left .authorFace img {
        width: 100%;
        height: 100%;
    }

    .main .left .top {
        border-bottom: 1px solid grey;
        background-color: white;
        width: 100%;
        height: 80px;
    }
    .titleCard{
        border-bottom:1px solid grey;
        margin-bottom:20px;
    }
    .item{
        margin-top:20px;
    }

</style>
