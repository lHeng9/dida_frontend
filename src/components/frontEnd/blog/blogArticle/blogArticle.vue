<template>
    <div style="margin-top: 50px">
        <clickBar></clickBar>
        <topMessage class="left"></topMessage>
        <div class="container">
            <showMarkdown></showMarkdown>
            <div id="comment" style="margin: 0 20px" >
                <el-card style="padding: 0" class="box-card" shadow="never">
                    说出你的想法吧~
                </el-card>
            </div>

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
            }
        }
    }
</script>
<style scoped>
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
