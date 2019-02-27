// ArticleDetail.vue
<template>
  <div class="content">
    <section class="page">
      <!--顶部工具栏-->
      <mu-appbar class="app-bar" title="从零开始，教你用Webpack构建React基础工程">
        <!--返回按钮-->
        <mu-icon-button icon="arrow_back" slot="left" @click="back"/>
        <!--右侧菜单-->
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="菜单 1"></mu-menu-item>
          <mu-menu-item title="菜单 2"></mu-menu-item>
          <mu-menu-item title="菜单 3"/>
          <mu-menu-item title="菜单 4"/>
          <mu-menu-item title="菜单 5"/>
        </mu-icon-menu>
      </mu-appbar>

      <!--文章详情-->
      <mu-paper class="article" :zDepth="2">
        <!--使用v-html输出纯HTML-->
        <div class="markdown" v-html="articleContent"></div>
      </mu-paper>
    </section>
  </div>

</template>

<script>
  import highlightjs from 'highlight.js';
  // 引入marked，用来将Markdown转换成HTML
  import marked from 'marked';
  import vueTest from '../../../../../vueTest.md'
  // 配置marked
  marked.setOptions({
    // 配置高亮
    highlight: function (code, lang, callback) {
      return highlightjs.highlightAuto(code).value;   // 这里highlightjs会自动给代码增加类
    }
  });
  export default {
    data() {
      return {
        articleContent: ''
      }
    },
    created() {
      // 拿到数据
      let mdData = vueTest;  // md格式数据
      mdData = mdData.replace(/#/g, '# ');  // 因为简书里的#后接文字是可以被识别的，但是marked必须# 后接文字才可以被识别
      let htmlData = marked(mdData);    // html格式数据
      this.articleContent = htmlData;
    }
  };
</script>


<style lang="scss" rel="stylesheet/scss" scoped>

  // 引入颜色css
  @import "../../../../../static/css/markdown/color";

  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    /*width: 70%;*/
    /*margin: 0 auto;*/
    /*background: white;*/
  }

  .app-bar {
    background-color: $blue500;
  }

  .article {
    /*width: 90%;*/
    margin-top: 24px;
    padding: 48px;
  }

  .markdown {
    width: 100%;
  }

  /*markdown 代码样式*/
  tt, code, kbd, samp {
    font-family: consolas;
  }

  .prettyprint, pre.prettyprint {
    background-color: #272822;
    border: 1px solid #272822;
    overflow: hidden;
    margin: 10px;
    font-family: Helvetica, "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei UI", SimSun, SimHei, arial, sans-serif;
  }

  .prettyprint.linenums, pre.prettyprint.linenums {
    -webkit-box-shadow: inset 40px 0 0 #39382E, inset 41px 0 0 #464741;
    -moz-box-shadow: inset 40px 0 0 #39382E, inset 41px 0 0 #464741;
    box-shadow: inset 40px 0 0 #39382E, inset 41px 0 0 #464741;
  }

  .prettyprint.linenums ol, pre.prettyprint.linenums ol {
    padding-left: 28px !important;
    margin: 0000px;
  }

  .prettyprint.linenums ol li, pre.prettyprint.linenums ol li {
    padding-left: 12px;
    color: #bebec5;
    line-height: 20px;
    margin-left: 0;
    margin: 5px;
    list-style: decimal;
  }

  .prettyprint .com {
    color: #93a1a1;
  }

  .prettyprint .lit {
    color: #AE81FF;
  }

  .prettyprint .pun, .prettyprint .opn, .prettyprint .clo {
    color: #F8F8F2;
  }

  .prettyprint .fun {
    color: #dc322f;
  }

  .prettyprint .str, .prettyprint .atv {
    color: #E6DB74;
  }

  .prettyprint .kwd, .prettyprint .tag {
    color: #F92659;
  }

  .prettyprint .typ, .prettyprint .atn, .prettyprint .dec, .prettyprint .var {
    color: #A6E22E;
  }

  .prettyprint .pln {
    color: #66D9EF;
  }
</style>
