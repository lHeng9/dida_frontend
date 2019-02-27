<template>
    <div style="margin-top: 50px">
        <!--悬浮的固钉-->
        <div id="click">
            <div>
                <a-affix :offsetTop="this.top">
                    <ul>
                        <li>
                            <div class="components-a-tooltip-demo-placement">
                                <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
                                    <a-tooltip placement="leftTop">
                                        <template slot="title">
                                            <span>点赞</span>
                                        </template>
                                        <a-button><a-icon type="like" /></a-button>
                                    </a-tooltip>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="components-a-tooltip-demo-placement">
                                <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
                                    <a-tooltip placement="left">
                                        <template slot="title">
                                            <span>收藏</span>
                                        </template>
                                        <a-button><a-icon type="star" /></a-button>
                                    </a-tooltip>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="components-a-tooltip-demo-placement">
                                <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
                                    <a-tooltip placement="leftBottom">
                                        <template slot="title">
                                            <span>关注</span>
                                        </template>
                                        <a-button><a-icon type="heart" /></a-button>
                                    </a-tooltip>
                                </div>
                            </div>
                        </li>
                    </ul>
                </a-affix>
            </div>
        </div>
        <topMessage class="left"></topMessage>
        <div class="container">
            <showMarkdown></showMarkdown>
            <comment></comment>
            <!--<h1>这是文章页面</h1>-->
        </div>
    </div>

</template>
<script>

    export default {
        name: 'blogArticle',
        data() {
            return {
                top: 50,//悬挂时距离顶部的位置
            }
        }
    }
</script>
<style scoped>
    .components-a-tooltip-demo-placement .ant-btn {
        width: 50px;
        height: 50px;
        text-align: center;
        padding: 0;
        margin-right: 8px;
        margin-bottom: 5px;
    }

    #click {
        /*border-radius: 50%;*/
        /*background: #00bfa5;*/
        float: left;
        position: absolute;
        top: 45%;
        left: 8%;
    }

    .click-one {
        border-radius: 5px;
        width: 50px;
        height: 50px;
        background: #4fc3f7;
        float: left;
        padding: 0;
        margin: 3px;
    }

    .click-one:hover {
        background: #00bfa5;
    }

    .container {
        width: 70%;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        background: white;
    }

    .left {
        background: white;
    }

</style>
