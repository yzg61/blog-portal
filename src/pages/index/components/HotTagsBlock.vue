<template>
  <div class="hot-box Card">
    <div class="header">
      <div class="title">热门标签</div>
      <div class="right">
        <b-link to="/tags">查看全部</b-link>
      </div>
    </div>
    <div class="tag-list">
      <b-link class="tag" v-for="tag in tags" :to="'/tags/'+tag.id"
              target="_blank" :key="tag.id">{{tag.title}}</b-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HotTagsBlock",
        data() {
            return {
                tags:[]
            }
        },
        methods: {
            getTags() {
                let list = []
                for (let i = 1; i < 9; i++) {
                    const art = {
                        id: i,
                        title: "Java"+i
                    }
                    list.push(art)
                }
                this.tags = list
            }
        },
        created() {
            this.getTags()
        }
    }
</script>

<style scoped>
  .hot-box {
    background-color: #ffffff;
  }
  .header {
    height: 45px;
    line-height: 45px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
  }
  .title {
    font-size: 14px;
    flex-grow: 1;
    padding-right: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .right {
    font-size: 13px;
    cursor: pointer;
  }
  .right a {
    color: #007fff;
  }
  .tag-list {
    padding: 15px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .tag-list .tag {
    margin-right: 12px;
    margin-bottom: 12px;
    background-color: #f3f6f3;
    cursor: pointer;
    height: 30px;
    color: inherit;
    line-height: 30px;
    padding-left: 22px;
    padding-right: 22px;
    border-radius: 30px;
  }
  .tag-list .tag:hover {
    background-color: rgba(0, 127, 255, 0.61);
  }
</style>
