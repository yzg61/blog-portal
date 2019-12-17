<template>
  <div>
    <el-tag class="tags-item"
            :key="tag.id"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
      {{tag.title}}
    </el-tag>

    <div v-if="inputVisible">
      <input-new-tag
        class="input-new-tag"
        @handleClose="inputVisible = false"
        @handleSelect="add"
      />
    </div>

    <div v-else class="button-new-tag" size="small" @click="showInput">
      <i class="el-icon-circle-plus-outline"></i>
      添加一个新标签
    </div>
  </div>
</template>

<script>
    import InputNewTag from "./DraftsNewAddTagInput";
    export default {
        name: "DraftsNewDynamicTags",
        components: {InputNewTag},
        props: [],
        data() {
            return {
                dynamicTags: [],
                inputVisible: false,

            }
        },

        methods: {
            //
            handleClose(tag) {
                this.$emit('change',this.dynamicTags)
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
            },

            add(tag) {
                for (let i =0; i < this.dynamicTags.length; i++){
                    if (this.dynamicTags[i].id === tag.id) {
                        this.$notify.error({
                            duration: 2000,
                            showClose: false,
                            title: '错误',
                            message: '不能添加重复的标签'
                        });
                        return false;
                    }
                }
                this.dynamicTags.push(tag)
                this.$emit('change',this.dynamicTags)
                setTimeout(() => {
                    this.inputVisible = false
                }, 0)
            },


        },
        created() {
        }
    }
</script>

<style scoped>
  .tags-item {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .button-new-tag {
    margin-bottom: 10px;
    cursor: pointer;
  }

  .button-new-tag:hover {
    color: #007fff;
  }
  .input-new-tag {
    margin-bottom: 10px;
  }
  .suggested-tag-list {
    position: absolute;
    left: 0;
    top:214px;
    margin-left: 15px;
    margin-top: 0;
    padding: 0;
    width: 8rem;
    background-color: #fff;
    border: 1px solid #ddd;
    list-style: none;
    z-index: 500;
  }
  .suggested-tag-list .tag {
    padding: .4rem 0.8rem;
    cursor: pointer;
    width: 100%;
    font-size: 1.0rem;
    box-sizing: border-box;
  }
  .suggested-tag-list .tag:hover {
    color: #007fff;
  }
</style>
