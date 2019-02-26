<template>
  <div class="body">
    <!--个人简要信息-->
    <personalInformation></personalInformation>
    <div class="content clearfix">
      <!--个人导航-->
      <personalNav></personalNav>
      <div class=" left clearfix">
        <!--单个卡片开始-->
        <div class="content-card clearfix">
          <ul>
            <li v-for="(item, index) in card" :key="index">
              <div class="card">
                <div class="card-title">
                  <h3>
                    <router-link :to="{name:'blogArticle'}">
                      {{item.title}}
                    </router-link>
                  </h3>
                </div>
                <div class="card-introduction">{{item.introduction}}</div>
                <div class="card-time">{{item.time}}</div>
              </div>
            </li>
          </ul>
        </div>
        <!--单个卡片结束-->
        <!--分页-->
        <div class="page">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>


      </div>
      <div class="right clearfix">
        <!--课内课外分类-->
        <div class="clearfix content-right ">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item class="content-right-title" title="关注的标签" name="1">
              <el-tag>标签一</el-tag>
              <el-tag type="success">标签二</el-tag>
              <el-tag type="info">标签三</el-tag>
              <el-tag type="warning">标签四</el-tag>
              <el-tag type="danger">标签五</el-tag>
            </el-collapse-item>
            <el-collapse-item class="content-right-title" title="关注的帖子" name="2">
              <el-tag>标签一</el-tag>
              <el-tag type="success">标签二</el-tag>
              <el-tag type="info">标签三</el-tag>
              <el-tag type="warning">标签四</el-tag>
              <el-tag type="danger">标签五</el-tag>
            </el-collapse-item>
            <el-collapse-item class="content-right-title" title="个人创建的标签" name="3">
              <el-tag>标签一</el-tag>
              <el-tag type="success">标签二</el-tag>
              <el-tag type="info">标签三</el-tag>
              <el-tag type="warning">标签四</el-tag>
              <el-tag type="danger">标签五</el-tag>
            </el-collapse-item>
            <el-collapse-item class="content-right-title" title="最新标签" name="4">
              <el-tag>标签一</el-tag>
              <el-tag type="success">标签二</el-tag>
              <el-tag type="info">标签三</el-tag>
              <el-tag type="warning">标签四</el-tag>
              <el-tag type="danger">标签五</el-tag>
            </el-collapse-item>
          </el-collapse>
        </div>
        <!--右侧今日热门文章-->
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "personalBlogList",
    data() {
      return {
        currentDate: new Date(),
        activeNames: ['1'],
        card: [
          {
            title: '你算什么男人',
            time: '2015',
            introduction: '亲吻你的手，还靠着你的头，让你挡胸口，那个人已不是我 ...',
            author: '周杰伦'
          },
          {
            title: '你算什么男人',
            time: '2015',
            introduction: '亲吻你的手，还靠着你的头，让你挡胸口，那个人已不是我 ...',
            author: '周杰伦'
          },
          {
            title: '你算什么男人',
            time: '2015',
            introduction: '亲吻你的手，还靠着你的头，让你挡胸口，那个人已不是我 ...',
            author: '周杰伦'
          },
          {
            title: '你算什么男人',
            time: '2015',
            introduction: '亲吻你的手，还靠着你的头，让你挡胸口，那个人已不是我 ...',
            author: '周杰伦'
          },
          {
            title: '你算什么男人',
            time: '2015',
            introduction: '亲吻你的手，还靠着你的头，让你挡胸口，那个人已不是我 ...',
            author: '周杰伦'
          },
          {
            title: '你算什么男人',
            time: '2015',
            introduction: '亲吻你的手，还靠着你的头，让你挡胸口，那个人已不是我 ...',
            author: '周杰伦'
          }
        ],
        title: '',
      }
    },
    created() {

    },
    methods: {}
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  .left {
    float: left;
    width: 70%;
  }

  .right {
    float: right;
    width: 25%;
    background: #d9edf7;
    padding-left: 20px;
    padding-right: 20px;
  }

  .clearfix::after {
    content: ""; /*这个里面不填内容，填了会原样显示在页面上。*/
    display: block;
    clear: both;
    /*不管是左还是右浮动，都能消除*/
  }

  .content {
    width: 80%;
    background: #d9edf7;
    /*height: 1000px;*/
    margin: 0 auto;
    position: relative;
    /*top: -340px;*/
    float: left;
    margin-left: 50%;
    left: -630px;
    float: left;
  }
  /*卡片效果开始*/
  .card {
    background: white;
    width: 100%;
    height: 150px;
    padding: 25px;
    margin: 10px;
    float: left;
    border-radius: 5px;
    border-right: 2px solid #d1d1d1;
    border-bottom: 2px solid #d1d1d1;

  }

  /*卡片效果结束*/
  .content-right {
    /*float: right;*/
    background: #f5f5f5;
    border-right: 2px solid #d1d1d1;
    padding-left: 15px;
    /*width: 25%;*/
  }

  .page {
    margin: 20px auto;
    display: inline-block;
    position: relative;
    left: 212px;
  }

</style>
