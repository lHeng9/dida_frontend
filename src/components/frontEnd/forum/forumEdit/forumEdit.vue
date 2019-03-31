<template>
    <div class='tinymce'>
        <br>
        <div class="title">
            <Input v-model="value" placeholder="请输入标题" style="width: 100%;height:60px;" />
        </div>
        <editor id='tinymce' v-model='tinymceHtml' :init='init' onchange="conso"></editor>
        <!--<div v-html="tinymceHtml"></div>-->
        <!--<div>{{tinymceHtml}}</div>-->
    </div>
</template>

<script>
    import tinymce from 'tinymce/tinymce.min'
    import 'tinymce/themes/silver/theme'
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/plugins/image'
    import 'tinymce/plugins/link'
    import 'tinymce/plugins/code'
    import 'tinymce/plugins/table'
    import 'tinymce/plugins/lists'
    import 'tinymce/plugins/contextmenu'
    import 'tinymce/plugins/wordcount'
    import 'tinymce/plugins/colorpicker'
    import 'tinymce/plugins/textcolor'

    export default {
        name: 'tinymce',
        data () {
            return {
                value:'',
                tinymceHtml: '请输入内容',
                init: {
                    language_url: '../../../../../static/tinymce/zh_CN.js',
                    language: 'zh_CN',
                    skin_url: '../../../../../static/tinymce/skins/ui/oxide',
                    height: 300,
                    plugins: 'link lists image table colorpicker textcolor wordcount contextmenu',
                    //code 可以看文档代码
                    toolbar:
                        'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
                    branding: false,
                    menubar:false,
                    // image_advtab: true,
                    image_title:false,
                    automatic_uploads:true,
                    //图片上传处理函数
                    images_upload_handler:(blobInfo, success, failure) => {
                        var xhr, formData;

                        xhr = new XMLHttpRequest();
                        xhr.withCredentials = false;
                        xhr.open('POST', 'FileAction_updateFile');//第一个参数是请求方式，第二个参数是请求地址，我这里配置的是struts的action，如果是其他（PHP等）的可这样配置：xxx.php
                        xhr.onload = function () {
                            var json;
                            if (xhr.status !== 200) {
                                failure('HTTP Error: ' + xhr.status);
                                return;
                            }
                            json = JSON.parse(xhr.responseText);
                            if (!json || typeof json.location !== 'string') {
                                failure('Invalid JSON: ' + xhr.responseText);
                                return;
                            }
                            success(json.location);
                        };

                        formData = new FormData();
                        formData.append('file', blobInfo.blob(), blobInfo.filename());
                        xhr.send(formData);
                    }


                }
            }
        },
        mounted () {
            tinymce.init({})
        },
        components: {Editor},
        methods:{
            conso(){
                console.log(1)
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tinymce {
        margin-top: 38px;
    }

</style>
