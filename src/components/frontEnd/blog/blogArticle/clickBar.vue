<template>
    <div>
        <!--悬浮的固钉-->
        <div id="click">
            <a-affix :offsetTop="this.top">
                <ul>
                    <li>
                        <div class="components-a-tooltip-demo-placement">
                            <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
                                <a-tooltip placement="leftTop">
                                    <template slot="title">
                                        <span>点赞</span>
                                    </template>
                                    <a-button>
                                        <a-icon type="like"/>
                                    </a-button>
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
                                    <a-button>
                                        <a-icon type="star"/>
                                    </a-button>
                                </a-tooltip>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="components-a-tooltip-demo-placement">
                            <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
                                <a-tooltip placement="left">
                                    <template slot="title">
                                        <span>关注</span>
                                    </template>
                                    <a-button>
                                        <a-icon type="heart"/>
                                    </a-button>
                                </a-tooltip>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="components-a-tooltip-demo-placement">
                            <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
                                <a-tooltip placement="leftBottom">
                                    <template slot="title">
                                        <span>回到顶部</span>
                                    </template>
                                    <a-button>
                                        <a-icon type="arrow-up"/>
                                    </a-button>
                                </a-tooltip>
                            </div>
                        </div>
                    </li>
                </ul>
            </a-affix>
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                top: 50,
            }
        },
    }
</script>
<style>
    .components-a-tooltip-demo-placement .ant-btn {
        width: 50px;
        height: 50px;
        text-align: center;
        padding: 0;
        margin-right: 8px;
        margin-bottom: 5px;
    }

    #click {
        float: left;
        position: absolute;
        top: 45%;
        left: 8%;
    }
</style>