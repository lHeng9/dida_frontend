<template>
    <div>
        <forum-edit class="edit"></forum-edit>
        <select-tag class="tag"></select-tag>
        <div class="foot">
            <a-button class="btn" type="primary" size="large">发表</a-button>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .edit{
        width:80%;
        margin:0 auto;

    }
    .tag{
        width:80%;
        margin:0 auto;
        /*border:1px solid red;*/
        margin-top:10px;

    }
    .foot{
        width:80%;
        height:100px;
        /*border:1px solid red;*/
        margin:0 auto;
        margin-top:10px;
    }
    .btn{
        margin:0 auto;

    }
</style>
