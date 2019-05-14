<template>
    <div id="app" style="background: #f5f5f5">
        <head-nav v-if="isshowhead"></head-nav>
        <!--<br>-->
        <router-view/>
        <foot-nav v-if="isshow" title="这是底部导航"></foot-nav>

    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {}
        },
        computed: {
            isshow() {
                return this.$store.getters.isShow
            },
            isshowhead() {
                return this.$store.getters.isShow
            }
        },
        watch: {
            $route(to, from) {
                // if(to.name == 'Forum' ){
                //     this.$store.dispatch('hideFooter')
                // }else{
                //     this.$store.dispatch('showFooter')
                // };

                if (
                    to.name == 'afterEnd_index' ||
                    to.name == 'afterEnd_userList' ||
                    to.name == 'afterEnd_userInsert' ||
                    to.name == 'afterEnd_userSelect' ||
                    to.name == 'afterEnd_blogList' ||
                    to.name == 'afterEnd_forumList' ||
                    to.name == 'afterEnd_labelList' ||
                    to.name == 'afterEnd_labelInsert' ||
                    to.name == 'afterEnd_labelSelect' ||
                    to.name == 'afterEnd_blogSelect' ||
                    to.name == 'afterEnd_reportList'||
                    to.name == 'afterEnd_adminLogin'||
                    to.name == 'afterEnd_personalCenter'

                ) {
                    this.$store.dispatch('hideFooter')
                } else {
                    this.$store.dispatch('showFooter')
                }
                // this.getBreadcrumb();

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
        background-color: #dddddd;
    }
</style>
