<template>


    <div class="cards">

        <ul>
            <li v-for="(item, index) in card" :key="index">
                <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix">
                        <router-link :to="{name:'blogArticle'}">
                            {{item.title}}
                        </router-link>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <router-link :to="{name:'blogArticle'}">
                                详情
                            </router-link>
                        </el-button>
                    </div>
                    <div class="text item">
                        <div class="card-introduction">{{item.introduction}}</div>
                        <div class="card-author">
                            <router-link :to="{name:'personalBlogList'}">
                                {{item.author}}
                            </router-link>
                        </div>
                        <div class="card-time">{{item.time}}</div>
                    </div>
                </el-card>

            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "cards",
        data() {
            return {
                card: [
                    {
                        title: '你算什么男人',
                        time: '2015',
                        introduction: '亲吻你的手，还靠着你的头，让你挡胸口，那个人已不是我 ...',
                        author: '周杰伦',
                        image: ''
                    },
                    {
                        title: '一千年以后',
                        time: '2010',
                        introduction: '心跳乱了节奏，梦也不自由，爱是个绝对承诺不说，等到一千年以后 ...',
                        author: '林俊杰'
                    },
                    {
                        title: '你算什么男人',
                        time: '2015',
                        introduction: '亲吻你的手，还靠着你的头，让你挡胸口，那个人已不是我 ...',
                        author: '周杰伦'
                    },
                    {
                        title: '一千年以后',
                        time: '2010',
                        introduction: '心跳乱了节奏，梦也不自由，爱是个绝对承诺不说，等到一千年以后 ...',
                        author: '林俊杰'
                    },
                    {
                        title: '你算什么男人',
                        time: '2015',
                        introduction: '亲吻你的手，还靠着你的头，让你挡胸口，那个人已不是我 ...',
                        author: '周杰伦'
                    },
                    {
                        title: '一千年以后',
                        time: '2010',
                        introduction: '心跳乱了节奏，梦也不自由，爱是个绝对承诺不说，等到一千年以后 ...',
                        author: '林俊杰'
                    }
                ],
            }
        }
    }
</script>

<style scoped>
    /*card原始样式开始*/
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 790px;
        margin-bottom: 10px;
    }

    /*card原始样式开结束*/
</style>