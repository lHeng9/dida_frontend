<template>
    <div class="editor">
        <div class="editor-title">
            <el-input v-model="input" placeholder="请输入文章标题"></el-input>
        </div>
        <mavon-editor v-model="value" style="height: 600px"/>
        <div class="edtior-tag">
            <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

        </div>
        <div class="editor-button">
            <el-row>
                <el-button type="success" round>发表文章</el-button>
                <el-button type="warning" round>暂存草稿</el-button>
            </el-row>
        </div>

    </div>

</template>

<script>
    // import markDownHelp from '../../../../markDownHelp.md'

    export default {
        name: "editor",
        data() {
            return {
                // value: markDownHelp,
                value: "# 请在左侧这里输入",
                defaultData: "preview",
                input: '',//标题输入框
                dynamicTags: ['自定义标签'],
                inputVisible: false,
                inputValue: '',
            }
        },
        methods: {
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },
            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        }
    }
</script>

<style scoped>
    .editor {
        margin-top: 50px;
        height: 600px;
    }

    .editor-title {
        margin: 10px;
    }

    .edtior-tag {
        width: 100%;
        height: 100px;
        float: left;
        padding: 20px;
    }

    .editor-button {
        float: left;
        margin-left: 50%;
        margin-top: 20px;
        margin-bottom: 20px;
        position: relative;
        left: -110px;
    }

    /*标签样式开始*/
    .el-tag + .el-tag {
        margin-left: 10px;
    }

    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }

    /*标签样式结束*/
</style>
