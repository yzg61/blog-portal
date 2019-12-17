<!--资料设置输入框-->
<template>
  <div class="input-box">
    <input
      class="input"
      v-model="newValue"
      ref="input"
      @focus="handleFocus()"
      @blur="handleBlur()"
    />
    <button class="button">
      <span v-show="!focus" @click="$refs.input.focus()"><i class="el-icon-edit"/>修改</span>
      <span v-show="focus">
        <span @mousedown="handleSave">保存&nbsp; </span>
        <span @mousedown="handleCancel" style="color: #909090">取消</span>
      </span>
    </button>
  </div>
</template>

<script>
  export default {
    name: "ProfileInput",
    props: ['value'],
    data() {
      return {
        focus: false,
        newValue: this.value,
      }
    },
    methods: {
      //输入框获取焦点
      handleFocus() {
        this.focus = true
      },
      //输入框失去焦点
      handleBlur() {
        this.focus = false
      },
      //保存修改
      handleSave() {
        if (this.value !== this.newValue){
          this.$emit('save',this.newValue)
        }
      },
      //放弃修改
      handleCancel() {
        this.newValue = this.value
      }
    },
    created() {

    }
  }
</script>

<style scoped>
  .input-box {
    display: flex;
    flex: 1;

  }

  .input {
    flex: 1;
    display: inline-block;
    border: none;
    outline: none;
    color: #909090;
    font-size: 15px;
  }

  .button {
    font-size: 15px;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 2px;
    border: none;
    outline: none;
    transition: background-color .3s, color .3s;
    cursor: pointer;
    background-color: transparent;
    color: #007fff;
    padding: 0;
    white-space: nowrap;
    margin-left: 10px;
  }
</style>
