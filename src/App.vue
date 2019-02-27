<template>
    <div id="app">
        <head-nav></head-nav>
        <br>
        <router-view/>
        <foot-nav v-if="isshow" title="这是底部导航"></foot-nav>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data(){
            return {

            }
        },
        computed:{
            isshow(){
                return this.$store.getters.isShow
            }
        },
        watch:{
            $route(to,from){
                if(to.name == 'Forum'){
                    this.$store.dispatch('hideFooter')
                }
            }
        }
    }
</script>

<style scoped>
    #app {
        /*fonts-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        /*-webkit-fonts-smoothing: antialiased;*/
        /*-moz-osx-fonts-smoothing: grayscale;*/
        /*text-align: center;*/
        /*color: #2c3e50;*/
        /*margin-top: 60px;*/
        /*background: #e2e2e2;*/
    }
</style>
