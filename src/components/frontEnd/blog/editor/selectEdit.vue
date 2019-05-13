<template>
    <div class="background">
        <div class="body">
            <div class="card left"></div>
            <div class="card right"></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "selectEdit"
    }
</script>

<style scoped>
    .background {
        width: 100%;
        height: 570px;
        /*height: 100%;*/
        border: red 1px solid;
        background-color: #3399ff;
        margin: 60px auto 0 0;
    }
    .body{
        width: 80%;
        height: 300px;
        margin: 0 auto;
        line-height: 510px;
        border: red 2px solid;

    }
</style>
