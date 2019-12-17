<template>
    <div class="comment-form-box" v-click-outside="clickFormBox">
        <div class="avatar-box hidden-xs-only">
            <el-avatar class="avatar-icon" size="medium" src=""/>
        </div>
        <div class="form-box">
            <el-input v-model="comment" size="medium" placeholder="写下你的评论" id="1111"
                      @focus="open = true"/>
            <div class="action-box" v-if="open">
                <div></div>
                <div class="submit">
                    <el-button type="primary" size="small" :disabled="disabled" @click="submitComment()">评论</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommentForm",
        props: {
            //评论的目标实体id
            parentId: {
                type: String,
            },
            //评论的目标实体类型,
            type: {
                type: String,
            },
        },
        data() {
            return {
                open: false,
                comment: '',
                loading: false,
                disabled: true,
            }
        },
        watch: {
            'comment': function (value) {
                if (value === '') {
                    this.disabled = true
                } else {
                    this.disabled = false
                }
            }
        },
        methods: {
            submitComment() {//点击评论按钮

            },
            clickFormBox() {//点击评论表单以外的地方，收起评论表单
                if (this.comment === '') {
                    this.open = false

                }
            }
        },
        created() {

        },
    }
</script>

<style scoped>
    .comment-form-box {
        padding: 15px;
        display: flex;
        background-color: #fafbfc;
        border-radius: 4px;
    }

    .avatar-box {
    }

    .avatar-icon {
        margin-right: 15px;
    }

    .form-box {
        flex: 1 1 auto;
    }

    .action-box {
        display: flex;
        margin-top: 8px;
    }

    .disabled {
        background-color: #a0cfff;
        border-color: #ffffff;
        cursor: auto;
    }

    .submit {
        flex: 0 0 auto;
        margin-left: auto;
    }
</style>
