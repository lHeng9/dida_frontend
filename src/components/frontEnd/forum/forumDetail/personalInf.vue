<template>
    <div>
        <card class="card">
            <div class="top">
                <img src="../../../../../static/images/face.jpg" height="1080" width="1080"/>
                <span class="name">luheng 1614010120</span>
            </div>
            <div class="bottom">
                <div class="left">
                    <div class="num">1234</div>
                    <div class="inf">发帖数</div>
                </div>
                <div class="right">
                    <div class="num">4567</div>
                    <div class="inf">关注的帖子</div>
                </div>
            </div>
        </card>
    </div>
</template>

<script>
    export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card {
        width: 100%;
        height: 200px;
        /*border: 1px solid red;*/
    }

    .card .top {
        width: 100%;
        height: 80px;
        /*border: 1px solid red;*/

    }

    .card .top img{
        width:80px;
        height:80px;
        margin:0 auto;
        float:left;


    }
    .card .top .name{
        line-height:80px;
        font-size:15px;
        font-weight:bold;
        margin-left:20px;
    }
    .card .bottom {
        width:100%;
        height:60px;
        /*border:1px solid red;*/
        margin-top:20px;
    }
    .card .bottom .left{
        width:50%;
        height:100%;
        display:inline-block;
        border-right:2px solid #ddd;
    }
    .card .bottom .right{
        width:48%;
        height:100%;
        display:inline-block;
    }
    .card .bottom .num{
        margin:0 auto;
        /*border:1px solid red;*/
        text-align:center;
        font-size:20px;
        font-weight:bold;
    }
    .card .bottom .inf{
        margin:0 auto;
        /*border:1px solid red;*/
        text-align:center;
        font-size:16px;


    }


</style>
