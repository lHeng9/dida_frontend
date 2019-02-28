<template>
    <div class="comment">
        <!--<span><a-icon theme="filled" type="message" style="color:grey" />-->
        <!--</span>-->
        <a-button  type="default" icon="message"  size="small">{{num}}条评论</a-button>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                num:'4,123'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .comment{
        /*border:1px solid red;*/

    }

</style>
