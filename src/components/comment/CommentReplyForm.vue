<template>
  <div class="reply-form-box" v-click-outside="close">
    <div class="form-box">
        <el-input size="medium" placeholder="回复XXX" v-model="content" :id="'reply-form'+parentId"/>
        <div class="action-box">
          <div class="submit">
            <el-button type="primary" size="small">回复</el-button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CommentReplyForm",
        props: {
            //回复的评论实体id
            parentId: {
                type: Number,
            },
            //回复的输入框显示与隐藏状态
            open: {
                type: Boolean,
            },
        },
        data() {
            return {
                content: '',
            }
        },
        methods: {
            close() {
                let myInput = document.getElementById('reply-form'+this.parentId);
                if (this.content === '' && myInput !== document.activeElement) {
                    //没有聚焦且输入内容为空，关闭form
                    this.$emit('close')
                }
            },
        },
        mounted() {
            //聚焦input
            document.getElementById('reply-form'+this.parentId).focus()
        }
    }
</script>

<style scoped>
  .reply-form-box {
    padding: 15px;
    display: flex;
    background-color: #fafbfc;
    border-radius: 4px;
  }
  .form-box {
    flex: 1 1 auto;
  }
  .action-box {
    display: flex;
    margin-top: 8px;
  }
  .submit {
    flex: 0 0 auto;
    margin-left: auto;
  }
</style>
