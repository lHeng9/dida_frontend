<template>
    <div class="body">

        <div class="main">
            <div class="left">
                <div class="main-top">
                    <Affix class="top" :offset-top="0" >
                        <Card class="titleCard" :bordered="false">
                            <p slot="title">为什么索引等相同下,数据量123123123123123到达一定量级时候， 会听说 mongodb 比 mysql 快</p>
                            <el-tag type="info" size="mini">标签三</el-tag>
                            <el-tag type="info" size="mini">标签三</el-tag>
                            <el-tag type="info" size="mini">标签三</el-tag>
                            <div class="btn">
                                <Button type="primary" shape="circle" icon="md-create">回答该问题</Button>
                                &nbsp
                                <Button type="primary" shape="circle">关注该问题</Button>
                            </div>
                        </Card>
                    </Affix>
                </div>
                <Card class="authorContent" :bordered="false">
                    <div class="contentLeft">
                        <img src="../../../../../static/images/face.jpg"/>
                    </div>
                    <div class="contentRight">
                        <div class="authorName">lheng</div>
                        <div class="time"> <Time :time="time3" :interval="1" /></div>
                        <div class="context">
                            <p>导语，如果你被裁了...咖啡我请！

                                （一）裁员大潮，第一浪，被裁啦！
                                如果一天，我被裁了，我会到点正常出门！

                                我会像没事人似的，到点正常出家门，不想让老婆孩子为我担心。

                                如果一天，我被裁了，月底正常交工资!

                                到了发工资的日子，我会如时如数的，把存的私房钱像工资一样上缴老婆大人。

                                如果一天，我被裁了，

                                找家咖啡厅，投投简历，抒发一下被裁的心情，分享一下自己曾积累的技术干货，说不定被裁对你来说，变成了加薪。


                                （二）裁员大潮，第二浪，没被裁
                                呀嗬，竟然没被裁，只是有点寂寞

                                平时的积累没有白费，能干活的我还是被留下了！其实，我就要快准备跟他们拜师学艺软技能了，怎么一转眼，他们都不在啦？好吧，继续当个硬货。


                                （三）裁员大潮，第三浪，大洗牌中的个人定位
                                目前看来，本次裁员只是大换血，你是潜力股还是垃圾股，谁说了都不算！需要你自己用行动来证明。

                                去年底，大家都在说中年危机，其实大可不必担心。是您的能力，谁也抢不跑。这次大换血，实际是一次伟大的资源重组，在这动荡不安的节点上，你应该静下来，看清局势，认清自己，找一个合适的位置，无论被裁还是留下，这都是一次美好的机遇，请你慎重考虑。

                                在这里我们捋一下重点，局与已的关系。

                                局

                                当局者迷，抽身出来，把你身边发生的一切，像讲故事一样，讲一边。去年有个词很热，叫复盘，复一下行业发展的这个局面，未来的方向是什么？请瞄准它，再往前走。

                                自己

                                在过去的职业生涯中，让你最费力的过程在哪里？嗯，把这个技能重新捡起来，这就是你的核心竞争力。

                                去吧，朝着瞄准的方向，使出浑身的力气，成就自已！ </p>
                        </div>
                    </div>
                </Card>
                <div class="answer">
                    <!--<img src="../../../../../static/images/植物.png" height="200" width="200"/>-->
                    answer
                    <a-radio-group class="btn" defaultValue="a" size="small">
                        <a-radio-button value="a">按时间排序</a-radio-button>
                        <a-radio-button value="b">按赞数排序</a-radio-button>
                    </a-radio-group>
                </div>
                <forum-body></forum-body>
                <send-comment></send-comment>
            </div>
            <Affix>
            <div class="right">
                <person class="person"></person>
                <forum-news></forum-news>
            </div>
            </Affix>

        </div>
        <back-top></back-top>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                time3:new Date()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    .body {
        width: 100%;
        height: 100%;
        /*background-color: blue;*/
        background-color: #dddddd;
    }

    .main {
        width: 80%;
        height: 100%;
        margin: 44px auto;
        /*border: 1px solid blue;*/
        display: table;

    }

    .main .left {
        width: 70%;
        float: left;

    }

    .main .right {
        width: 28%;
        float: right;
        /*border: 1px solid red;*/
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

    .main .left .contentLeft {
        width: 10%;
        height: 100%;
        /*border: 1px solid red;*/
        /*display:inline-block;*/
        float: left;
    }

    .main .left .contentLeft img {
        width: 100%;
        height: 100%;
    }

    .main .left .top {
        border-bottom: 1px solid grey;
        background-color: white;
        width: 100%;
        height: 80px;
    }

    .titleCard {
        border-bottom: 1px solid grey;
        margin-bottom: 20px;
    }

    .titleCard .btn {
        display: inline-block;
        float: right;
        /*border:1px solid red;*/
        /*margin-bottom:10px;*/
        /*margin-left:400px;*/
    }

    .authorContent {
        margin-top: 20px;
        display: table;
    }

    .authorContent .contentRight {
        float: right;
        width: 87%;
        /*border:1px solid red;*/
        padding-right:10px;
    }

    .authorContent .contentRight .authorName {
        font-size: 13px;
        font-weight: bold;
        /*border:1px solid red;*/
        padding-left: 10px;
        display: inline-block;
    }

    .authorContent .contentRight .time {
        display: inline-block;
        font-size: 12px;
        margin-left: 20px;
        color: grey;
    }

    .authorContent .contentRight .context {
        margin-top: 10px;
        margin-bottom: 10px;
        /*border:1px solid red;*/

    }
    .left .answer{
        width:100%;
        height:50px;
        /*border:1px solid red;*/
        margin-top:10px;
        font-size:20px;
        font-weight: bold;
        line-height: 40px;
        border-bottom:1px solid white;
        /*padding:5px;*/
    }
    .left .answer img{
        width:40px;
        height:40px;
        display:inline-block;
    }
    .left .answer .btn{
        float:right;
    }
    .main .right .person{
        margin-bottom:10px;
    }

</style>
