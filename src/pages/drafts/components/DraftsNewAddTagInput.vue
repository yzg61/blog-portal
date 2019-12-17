<template>
  <el-autocomplete
    class="search-input"
    popper-class="my-autocomplete"
    size="small"
    v-model="state"
    :fetch-suggestions="querySearch"
    placeholder="查找标签"
    @select="handleSelect"
    ref="searchinput"
  >
    <i
      class="el-icon-close el-input__icon"
      slot="suffix"
      @click="handleIconClick">
    </i>
    <template slot-scope="{ item }">
      <div class="name">{{ item.title }}</div>
    </template>
  </el-autocomplete>

</template>

<style scoped>
  .search-input {
    width: 100%;
  }
  .el-input__icon {
    cursor: pointer;
  }
  .el-input__icon:hover {
    color: #007fff;
  }
</style>

<script>
    export default {
        name: 'DraftsNewAddTagInput',
        data() {
            return {
                restaurants: [],
                state: ''
            };
        },
        methods: {
            querySearch(queryString, cb) {
                // 调用 callback 返回建议列表的数据
                cb(this.loadAll(queryString));
            },
            loadAll(query) {
                return [
                    {id: 1, title: "Java"},
                    {id: 2, title: "JavaScript"},
                    {id: 3, title: "JavaWeb"},
                    {id: 4, title: "MySQL"},
                    {id: 5, title: "Redis"},
                    {id: 6, title: "Spring"},
                    {id: 7, title: "MyBatis"},

                ];
            },
            handleSelect(item) {
                this.$emit('handleSelect',item)
            },
            handleIconClick(ev) {
                this.$emit('handleClose')
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
            this.$refs.searchinput.focus()
        }
    }
</script>
