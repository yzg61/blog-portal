<template>
    <div>
        <base-header/>
        <main>
            <div class="tag-header">
                <div class="header-title">
                    前端
                </div>
                <div class="header-number">
                    200关注
                    100文章
                </div>
            </div>
            <b-container style="padding: 0;max-width: 960px">
                <div class="articles-nav">
                    <div class="tag-img">
                        <img width="100px" src="https://lc-gold-cdn.xitu.io/279e631b065a5a31289f.png?imageView2/2/w/200/h/64/q/85/format/webp/interlace/1"/>
                        <el-button size="mini" v-if="false">关注</el-button>
                        <el-button size="mini" v-else type="primary">已关注</el-button>
                    </div>
                    <div class="item">
                        <router-link
                            :to="'?sort=hot'"
                            :class="{'active':sort === 'hot'}"
                        >热门</router-link>
                    </div>
                    <div class="item">
                        <router-link
                            :to="'?sort=new'"
                            :class="{'active':sort === 'new'}"
                        >最新</router-link>
                    </div>
                    <div class="item">
                        <router-link
                            :to="'?sort=rec'"
                            :class="{'active':sort === 'rec'}"
                        >推荐</router-link>
                    </div>
                </div>
                <div class="Card">
                    <article-list type="tag" :sort="sort"/>
                </div>
            </b-container>
        </main>
        <base-footer/>
    </div>
</template>

<script>
    import BaseHeader from "../../components/BaseHeader";
    import BaseFooter from "../../components/BaseFooter";
    import ArticleList from "../index/components/ArticleList";

    export default {
        name: "Tag",
        components: {ArticleList, BaseFooter, BaseHeader},
        props: [],
        data() {
            return {
                tagId: this.$route.params.id,
                sort: this.$route.query.sort ? this.$route.query.sort : 'rec'
            }
        },
        watch: {
            '$route'(route) {
                this.sort = route.query.sort
            }
        },
        methods: {},
        created() {

        }
    }
</script>

<style scoped>

    .tag-header {
        padding: 50px 0;
        align-items: center;
        text-align: center;
        background-color: #f8f9fa;
    }
    .header-title {
        font-weight: 600;
        font-size: 25px;
    }
    .header-number {
        font-size: 14px;
        color: #909090;
    }
    .tag-img {
        margin-right: auto;
    }
    .articles-nav {
        display: flex;
        align-items: center;
    }
    .articles-nav .item {
        padding: 15px;
        font-size: 15px;
    }
</style>
