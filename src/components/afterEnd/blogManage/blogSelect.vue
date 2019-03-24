<template>

    <div style="height: 800px">
        <h1>查询文章</h1>
        <div style="width: 100%;height: 1px; background-color: #909399; margin-bottom: 20px "></div>
        <div class="content" >

            <div class="content_list">
                <div style="margin-bottom: 10px">按文章号查询：</div>
                <a-input-search placeholder="input search text" @search="onSearch" enterButton="查询" size="large"/>
            </div>
            <div class="content_list">
                <div style="margin-bottom: 10px">按博主号查询：</div>
                <a-input-search placeholder="input search text" @search="onSearch" enterButton="查询" size="large"/>
            </div>
            <div class="content_list">
                <div style="margin-bottom: 10px">按博主名查询：</div>
                <a-input-search placeholder="input search text" @search="onSearch" enterButton="查询" size="large"/>

            </div>

        </div>
    </div>

</template>

<script>
    export default {
        methods: {
            onSearch(value) {
                console.log(value)
            },
        },
    }
</script>

<style scoped>
    .content{
        width: 80%; margin: 0 auto;font-size: 18px
    }
    .content .content_list{
        margin-bottom: 30px ;line-height: 30px;
    }
</style>