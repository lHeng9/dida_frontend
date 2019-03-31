<template>

    <div style="height: 800px">
        <h1>查询用户</h1>
        <div style="width: 100%;height: 1px; background-color: #909399; margin-bottom: 20px "></div>


        <div class="content" >

            <div class="content_list">
                按学号查询：<br><br>
                <a-input-search placeholder="input search text" @search="onSearch" enterButton="查询" size="large"/>
            </div>
            <div>
                按名字查询：<br><br>
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
                this.$Axios.get('/system/sysuser/user/'+value).then(res=>{
                    console.log(res)
                })
            },
        },
    }
</script>

<style scoped>
    .content{
        width: 80%; margin: 20px auto;font-size: 18px
    }
    .content .content_list{
        margin-bottom: 20px ;
        line-height: 20px;
    }
</style>