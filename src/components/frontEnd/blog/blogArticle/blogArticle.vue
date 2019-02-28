<template>
    <div style="margin-top: 50px">
        <clickBar></clickBar>
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
