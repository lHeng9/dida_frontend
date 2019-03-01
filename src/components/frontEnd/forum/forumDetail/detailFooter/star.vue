<template>
    <div>
        <a-button @click="clickstar" :type="type" icon="up"  size="small">{{num}}</a-button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                num:11,
                type:'default'
            }
        },
        methods:{
            clickstar(e){
                if(this.type === 'default'){
                    this.type = 'primary'
                    this.num++
                }else{
                    this.type = 'default'
                    this.num--
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .a-button{

    }
</style>
