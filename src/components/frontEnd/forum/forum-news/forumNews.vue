<template>
    <div>
        <el-card class="card" shadow="hover">
            <div slot="header" class="clearfix">
                <span><strong>最新发布</strong></span>
            </div>
            <div class="content" v-for="index in 8">
                <div class="inf"  :key="index">
                    被裁的第50天，我终于拿到心仪公司Offer50天，我终于拿到心仪公司Offer
                </div>
                <div class="time">
                    2019-3-2
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                time: new Date()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card {
        width: 100%;
        height: 400px;
    }

    .card .content {
        margin-bottom: 18px;
        font-size: 12px;
        height: 20px;
        /*border: 1px solid red;*/
        overflow: hidden;

    }
    .card .content .inf{
        display: inline-block;
        width: 80%;

    }


    .card .time {
        float:right;
        color:#cccccc;
    }
</style>
