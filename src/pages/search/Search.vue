<template>
    <div>
        <my-header/>
        <main>
            <b-container style="padding: 0;max-width: 960px">
                <div class="header-title">以下是<span>{{query}}</span>的搜索结果</div>
                <div class="search-result-list Card">
                    <el-tabs class="tabs" v-model="type" @tab-click="changeTag">
                        <el-tab-pane name="article" label="文章">
                        </el-tab-pane>
                        <el-tab-pane name="tag" label="标签">
                        </el-tab-pane>
                        <el-tab-pane name="user" label="用户">
                        </el-tab-pane>
                    </el-tabs>
                    <template v-if="type === 'article'">
                        <article-list type="search" :query="query"/>
                    </template>
                    <template v-else-if="type === 'tag'">
                        <tags-search-result :query="query"/>
                    </template>
                    <template v-else-if="type === 'user'">
                        <users-search-result/>
                    </template>
                </div>

            </b-container>
        </main>
        <my-footer/>
    </div>
</template>

<script>
    import MyHeader from "../../components/BaseHeader";
    import MyFooter from "../../components/BaseFooter";
    import ArticleList from "../index/components/ArticleList";
    import TagsList from "../tags/components/TagsList";
    import TagsSearchResult from "./children/TagsSearchResult";
    import UsersSearchResult from "./children/UsersSearchResult";

    export default {
        name: "Search",
        components: {UsersSearchResult, TagsSearchResult, TagsList, ArticleList, MyFooter, MyHeader},
        watch: {
            '$route': function (route) {
                this.query = route.query.key
                document.title = this.query + '的搜索结果 - 博客'
                this.type = route.query.type ? route.query.type : 'article'
            }
        },
        data() {
            return {
                query: this.$route.query.key,
                type: this.$route.query.type ? this.$route.query.type : 'article'
            }
        },
        methods: {
            changeTag(event) {
                this.$router.push({
                    name: 'search',
                    query: {
                        key: this.query,
                        type: event.name,
                    }
                })
            }
        },
        created() {
            document.title = this.query + '的搜索结果 - 博客'
        }
    }
</script>

<style scoped>
    .header-title {
        font-size: 14px;
        padding: 10px 0;
    }
    .header-title span {
        color: red;
    }
    .search-result-list {
        max-width: 700px;
    }
    .tabs {
        padding: 25px 25px 0 25px;
    }
</style>
