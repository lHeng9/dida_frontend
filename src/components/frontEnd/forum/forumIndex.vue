<template>
    <div class="main">
        <ForumBanner></ForumBanner>
        <div class="menu">
            <div class="nav">
                <img src="../../../../static/images/book.png" alt="">
                <h2>课内热点</h2>
            </div>
            <tag-menu></tag-menu>
        </div>
        <div class="in-class-main">
            <fcards class="fcard"></fcards>
            <div class="right">
                <ftags class="ftag"></ftags>
                <Affix :offset-top="0">
                    <forum-news class="news"></forum-news>
                </Affix>
            </div>

        </div>
        <back-top></back-top>
    </div>
</template>

<script>
    export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main {
        margin-top: 38px;
        background-color: #ddd;

    }

    .menu {
        width: 80%;
        /*border: 1px solid red;*/
        margin: 0 auto;
        /*margin-bottom: 20px;*/
        background-color: white;
        padding: 0 0 10px 10px;

    }

    .menu .nav {
        margin-top: 10px;
        margin-bottom: 10px;
        /*border:1px solid red;*/
        height: 50px;
        width: 100%;

    }

    .menu .nav img {
        width: 40px;
        height: 40px;
        float: left;
        margin-top: 5px;
        margin-right: 10px;
        /*border:1px solid red;*/

    }

    .menu .nav h2 {
        /*border:1px solid red;*/
        line-height: 50px;
    }

    .in-class-main {
        width: 80%;
        margin: 0 auto;
        /*border: 1px solid red;*/
        margin-top: 10px;
        display: table;
    }

    .fcard {
        width: 70%;
        /*border:1px solid red;*/
        float: left;
    }

    .in-class-main .right {
        width: 28%;
        float: right;
    }



    .ftag {
        margin-bottom: 10px;

    }


</style>
