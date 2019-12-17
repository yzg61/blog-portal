<template>
  <div>
    <div class="input-box">
      <div v-html="textarea" style="white-space: pre-line"></div>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        maxlength="1000"
        show-word-limit
        :autosize="autosize"
        resize="none"
      >
      </el-input>
    </div>
    <div class="action-box">
      <el-button
        class="submit-btn"
        size="small"
        type="primary"
        @click="handelSubmit"
        :disabled="textarea.length === 0"
      >
        发布
      </el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ForumEditor",
        props: [],
        data() {
            return {
                textarea: '',
                autosize: {minRows: 5},
            }
        },
        methods: {
            handelSubmit() {
                console.log("发布讨论"+this.textarea)
            }
        },
        created() {
        }
    }
</script>

<style scoped>
  .input-box {
    margin: 15px;
  }
  .action-box {
    display: flex;
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 15px;
  }
  .submit-btn {
    margin-left: auto;
  }
</style>
