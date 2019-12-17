<template>
  <div class="submit-popover">
    <div class="item-title">
      分类
    </div>
    <div class="category-list">
      <div class="item"
           v-for="it in categoryList"
           :key="it.id"
           :class="{'active':it.id === categoryId}"
           @click="changeCategory(it)"
      >
        {{it.title}}
      </div>
    </div>

    <div class="item-title">
      标签
    </div>
    <div style="margin-left: 5px;margin-right: 5px;">
      <dynamic-tags @change="changeTags"/>
    </div>
    <div class="submit-box">
      <el-button
        class="submit-btn"
        type="primary"
        size="medium"
        plain
        @click="createArticle"
      >
        确认并发布
      </el-button>
    </div>
  </div>
</template>

<script>
    import DynamicTags from "./DraftsNewDynamicTags";
    export default {
        name: "DraftsNewSubmitPopover",
        components: {DynamicTags},
        props: [],
        data() {
            return {
                categoryList: [],
                categoryId: 0,//为0时表示没有选择任何分类
                tags: [],
            }
        },
        methods: {
            changeCategory(it) {//选择或更改文章分类
                this.categoryId = it.id
            },

            getCategoryList() {//获取所有的文章分类
                setTimeout(()=>{
                    this.categoryList = [
                        {id:1,title:"后端"},
                        {id:2,title:"前端"},
                        {id:3,title:"数据库"},
                        {id:4,title:"大数据"},
                        {id:5,title:"计算机网络"},
                        {id:6,title:"操作系统"}]
                },300)
            },

            createArticle() {//发表文章
                if (this.categoryId === 0) {
                    this.$notify.error({
                        duration: 2000,
                        showClose: false,
                        message: '请选择文章分类'
                    });
                }else if (this.tags.length === 0) {
                    this.$notify.error({
                        duration: 2000,
                        showClose: false,
                        message: '请至少添加一个标签'
                    });
                }
            },

            changeTags(tags) {
                this.tags = tags
                console.log(tags)
            }
        },
        created() {
            this.getCategoryList()
        }
    }
</script>

<style scoped>
  .submit-popover {

  }
  .item-title {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .category-list {
    white-space: normal;
    margin-right: 5px;
    margin-left: 5px;
  }
  .category-list .item {
    display: inline-block;
    margin: 0 .4rem .6rem 0;
    padding: .3rem .5rem;
    font-size: 0.8rem;
    white-space: nowrap;
    border: 1px solid #f1f1f1;
    border-radius: 2px;
    cursor: pointer;
  }
  .category-list .item:hover {
    color: #007fff;
    border-color: rgba(0,127,255,.15);
    background-color: rgba(0,127,255,.05);
  }
  .active {
    color: #007fff;
    border-color: rgba(0,127,255,.15);
    background-color: rgba(0,127,255,.05);
  }
  .submit-box {
    display: flex;
  }
  .submit-btn {
    margin-left: auto;
  }
</style>
