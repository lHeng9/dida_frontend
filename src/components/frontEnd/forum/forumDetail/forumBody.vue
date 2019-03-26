<template>
    <div>
        <Card class="authorContent" :bordered="true" v-for="index in 4" :key="index">
            <div class="contentLeft">
                <img src="../../../../../static/images/face.jpg"/>
            </div>
            <div class="contentRight">
                <div class="authorName">lheng</div>
                <div class="time">
                    <Time :time="time3" :interval="1"/>
                </div>
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
                <div class="contentFoot" @click="showModal">
                    <star class="star"></star>
                    <comment class="comment" @click="showModal"></comment>
                    <report class="report"></report>
                </div>
            </div>
        </Card>
        <a-button type="primary" @click="showDrawer">
            Open
        </a-button>

        <a-modal
            title="Basic Modal"
            v-model="visible"
            @ok="handleOk"
            width="700px"
            bodyStyle="height:500px;overflow-y:scroll;"
        >
            <a-list
                itemLayout="horizontal"
                :dataSource="data"
            >
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-list-item-meta
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    >
                        <a slot="title" href="https://vue.ant.design/">{{item.title}}</a>
                        <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </a-list-item-meta>
                </a-list-item>
            </a-list>
        </a-modal>
        <!--</el-card>-->

    </div>
</template>

<script>
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },

    ]
    export default {
        data() {
            return {
                time3: new Date(),
                visible: false,
                data
            }
        },
        methods: {
            showModal() {
                this.visible = true
            },
            handleOk(e) {
                console.log(e);
                this.visible = false
            },
        }}

        var obj = {
            width: '200px',
            height: '200px'
        }
        // this.$ref.modal.bodyStyle = obj;

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .contentLeft {
        width: 10%;
        height: 100%;
        /*border: 1px solid red;*/
        /*display:inline-block;*/
        float: left;
    }

    .contentLeft img {
        width: 100%;
        height: 100%;
    }

    .authorContent {
        margin-top: 3px;
        display: table;
    }

    .authorContent .contentRight {
        float: right;
        width: 87%;
        /*border:1px solid red;*/
        padding-right: 10px;

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
        /*border:1px solid red;*/
    }

    .authorContent .contentRight .context {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .contentFoot {
        width: 100%;
        height: 24px;
        /*border:1px solid red;*/
        float: right;
        margin-bottom: 10px;

    }

    .contentFoot .star {
        margin-left: 10px;
        /*border:1px solid red;*/
        /*height:24px;*/
        /*width:50px;*/
        display: inline-block;
        margin-right: 10px;
    }

    .contentFoot .report {
        /*border:1px solid red;*/
        display: inline-block;
        float: right;
    }

    .contentFoot .comment {
        display: inline-block;
        /*cursor:pointer;*/
    }

    .a-modal {
        width: 200px;
        height: 300px;
        overflow-y: scroll;
    }

</style>
