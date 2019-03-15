<template>
    <div :on-reach-bottom="handleReachBottom" >
        <div v-for="(item,index) in listcard">
        <div class="box-card"  >
            <img src="../../../../../static/images/face.jpg" alt="">
            <router-link :to="{name:'ForumDetail'}" class="title">关于肺结节检测相关的FROC曲线和目标检测</router-link>
            <br><br>
            <el-tag type="info" size="mini">人工智能</el-tag>
            <el-tag type="info" size="mini">FROC</el-tag>
            <el-tag type="info" size="mini">目标检测</el-tag>
            &nbsp;•&nbsp;
            <div class="author">lheng</div>&nbsp;•&nbsp;
            <div class="time">2018-12-12</div>
            <el-badge :value="1" :max="99" class="item" type="warning"/>

        </div>
        <div class="box-card" >
            <img src="../../../../../static/images/bgc.jpg" alt="">
            <router-link :to="{name:'ForumDetail'}" class="title">ResNet图像识别与tensorflow实现</router-link>
            <br><br>
            <el-tag type="info" size="mini">图像识别</el-tag>
            <el-tag type="info" size="mini">tensorflow</el-tag>
            &nbsp;•&nbsp;
            <div class="author">lheng</div>&nbsp;•&nbsp;
            <div class="time">2018-12-12</div>
            <el-badge :value="1" :max="99" class="item" type="warning"/>

        </div>
        <div class="box-card">
            <img src="../../../../../static/images/xiyang.gif" alt="">
            <router-link :to="{name:'ForumDetail'}" class="title">线形回归和梯度下降的Python实例。</router-link>
            <br><br>
            <el-tag type="info" size="mini">python</el-tag>  &nbsp;•&nbsp;
            <div class="author">lheng</div>&nbsp;•&nbsp;
            <div class="time">2018-12-12</div>
            <el-badge :value="1" :max="99" class="item" type="warning"/>

        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                listcard:[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
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
        margin-bottom:1px;
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
        font-size:14px;
        color:black;

    }
    .box-card .item{
        float:right;
        margin-top:3px;
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
