<template>
    <div :on-reach-bottom="handleReachBottom">
        <div class="box-card" v-for="(item,index) in listcard" :key="index">
            <img src="../../../../../static/images/xiyang.gif" alt="">
            <div class="title">解放军山东矿机{{item}}</div>
            <el-tag type="info" size="mini">标签三</el-tag>  &nbsp;•&nbsp;
            <div class="author">lheng</div>&nbsp;•&nbsp;
            <div class="time">2018-12-12</div>
            <el-badge :value="1" :max="99" class="item" type="warning"/>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                listcard:[1,2,3,4,5,6,7,8,9,10]
            }
        },
        methods: {
            handleReachBottom(){
                return new Promise(resolve =>{
                    setTimeout(() =>{
                        const last = this.listcard[this,listcard.length-1];
                        for(let i = 1 ; i < 11 ; i++){
                            this.listcard.push(last + i)
                        }
                        resolve();
                    },1000)
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box-card{
        width:100%;
        height:70px;
        margin-bottom:10px;
        border:1px solid rgb(235,238,248) ;
        background-color:white;
        padding-top:7px;

    }
    .box-card img{
        border-radius: 10%;
        width:56px;
        height:56px;
        float:left;
        margin:0 10px;
        /*border:1px solid red;*/

    }
    .box-card .title{
        width:100%;
        height:20px;
        /*border:1px solid red;*/
        margin-top:7px;
        font-weight:bold;

    }
    .box-card .item{
        float:right;
        margin-bottom:10px;
        margin-right:10px;
    }
    .box-card .author{
        display:inline-block;
        font-size:12px;
    }
    .box-card .time{
        display:inline-block;
        font-size:12px;
        color: #cccccc;

    }
</style>
