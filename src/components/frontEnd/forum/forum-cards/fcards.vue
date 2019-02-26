<template>
    <div>
        <div class="box-card" v-for="index in 4">
            <img src="../../../../../static/images/xiyang.gif" alt="">
            <div class="title">解放军山东矿机</div>
            <el-tag type="info" size="mini">标签三</el-tag>  &nbsp;•&nbsp;
            <div class="author">lheng</div>&nbsp;•&nbsp;
            <div class="time">2018-12-12</div>
            <el-badge :value="1" :max="99" class="item" type="primary"/>

        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box-card{
        width:100%;
        height:70px;
        margin-bottom:10px;
        /*border:1px solid red;*/
        background-color:white;

    }
    .box-card img{
        border-radius: 10%;
        width:56px;
        height:56px;
        float:left;
        margin:7px 10px;
        /*border:1px solid red;*/

    }
    .box-card .title{
        width:100%;
        height:30px;
        /*border:1px solid red;*/
        margin-top:7px;
        font-weight:bold;

    }
    .box-card .item{

        margin-bottom:10px;
    }
    .box-card .author{
        display:inline-block;
        font-size:12px;
    }
    .box-card .time{
        display:inline-block;
        font-size:12px;
        color: #cccccc;

    }
</style>
