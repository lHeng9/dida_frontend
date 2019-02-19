<template>
  <div class="container">
    <topMessage class="left"></topMessage>
    <showMarkdown></showMarkdown>
    <comment></comment>
    <!--<h1>这是文章页面</h1>-->
  </div>
</template>
<script>

  export default {
    name: 'blogArticle',
    data() {
      return {
      }
    }
  }
</script>
<style scoped>
  .container{
    width: 70%;
    margin: 38px auto 0;
    background: white;
  }
  .left{
    background: #1cbd8f;
  }

</style>
