<template>
    <div class='tinymce'>
        <br>
        <div class="title">
            <Input v-model="value" placeholder="请输入标题" style="width: 100%;height:40px;" />
        </div>
        <editor id='tinymce' v-model='tinymceHtml' :init='init'></editor>
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
                    plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
                    toolbar:
                        'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
                    branding: false,
                    menubar:false,

                }
            }
        },
        mounted () {
            tinymce.init({})
        },
        components: {Editor}
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tinymce {
        margin-top: 38px;
    }

</style>
