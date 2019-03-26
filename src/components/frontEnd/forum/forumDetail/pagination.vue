<template>
    <div>
        <a-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChange" />
    </div>
</template>

<script>
    export default {
        methods:{
            onChange(pagenumber){
                console.log('page:',pagenumber)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
