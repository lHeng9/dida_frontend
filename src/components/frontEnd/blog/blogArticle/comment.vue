<template>
    <div style="margin: 0 auto; padding: 0 48px">

        <div id="comment" style="margin: 0 20px" >
            <el-card style="padding: 0" class="box-card" shadow="never">
                说出你的想法吧~
            </el-card>
        </div>

        <div>
            <a-comment>
                <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                />
                <div slot="content">
                    <a-form-item>
                        <a-textarea :rows="4" @change="handleChange" :value="value" ></a-textarea>
                    </a-form-item>
                    <a-form-item>
                        <a-button
                                htmlType="submit"
                                :loading="submitting"
                                @click="handleSubmit"
                                type="primary"
                        >
                            提交评论
                        </a-button>
                    </a-form-item>
                </div>
            </a-comment>

            <a-list
                    v-if="comments.length"
                    :dataSource="comments"
                    :header="`${comments.length} ${comments.length > 1 ? 'replies' : '条评论'}`"
                    itemLayout="horizontal"
            >
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-comment
                            :author="item.author"
                            :avatar="item.avatar"
                            :content="item.content"
                            :datetime="item.datetime"
                    >
                    </a-comment>
                </a-list-item>
            </a-list>


        </div>
    </div>

</template>
<script>
    import moment from 'moment'
    export default {
        data () {
            return {
                comments: [],
                submitting: false,
                value: '',
                moment,
            }
        },
        methods: {
            handleSubmit() {
                if (!this.value) {
                    return;
                }

                this.submitting = true

                setTimeout(() => {
                    this.submitting = false
                    this.comments = [
                        {
                            author: 'Han Solo',
                            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                            // avatar: '',
                            content: this.value,
                            datetime: moment().fromNow(),
                        },
                        ...this.comments,
                    ]
                    this.value = ''
                }, 1000)
            },
            handleChange(e) {
                this.value = e.target.value
            }
        },
    }
</script>
<style>

</style>