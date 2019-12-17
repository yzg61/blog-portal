<template>
    <div>
        <ul class="list-header">
            <li>
                <a
                    href="javascript:;"
                    @click="sort = 'hot'"
                    :class="{'active' : sort === 'hot'}"
                >最热
                </a>
            </li>
            <li>
                <a
                    href="javascript:;"
                    @click="sort = 'new'"
                    :class="{'active' : sort === 'new'}"
                >最新
                </a>
            </li>
            <li>
                <el-input
                    v-model="queryInput"
                    @keyup.enter.native="handleSearch"
                    size="mini"
                    placeholder="搜索标签"
                    maxlength="20"
                />
            </li>
        </ul>
        <tags-list type="all" :query="query" :sort="sort"/>
    </div>
</template>

<script>
    import TagsList from "../components/TagsList";
    export default {
        name: "AllTags",
        components: {TagsList},
        props: [],
        data() {
            return {
                queryInput: this.$route.query.query,
                query: this.$route.query.query,
                sort: this.$route.query.sort ? this.$route.query.sort : 'hot',
            }
        },
        methods: {
            //执行搜索
            handleSearch() {
                if (this.queryInput !== this.query) {
                    this.query = this.queryInput
                }
            }
        },
        created() {
            document.title = '所有标签 - 博客'
        }
    }
</script>

<style scoped>

    .list-header {
        align-items: center;
        display: flex;
        padding: 0;
        margin: 0;
    }

    .list-header li {
        padding: 5px 0 20px 25px;
        font-size: 15px;
    }

    .tags-box {
        padding: 25px 25px 0 25px;
    }

    @media (max-width: 600px) {
        .tags-box {
            padding: 0 10px;
        }

    }

    .list-header {
        align-items: center;
        display: flex;
        padding: 0;
        margin: 0;
    }

    .list-header li {
        padding: 5px 0 20px 25px;
        font-size: 15px;
    }
</style>
