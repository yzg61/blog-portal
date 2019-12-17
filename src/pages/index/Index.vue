<template>
    <div>
        <my-header/>
        <main>
            <b-container style="padding: 0px;max-width: 960px">
                <b-row no-gutters>
                    <div class="index-main">
                        <div class="main Card">
                            <!--    导航头-->
                            <nav class="nav-list">
                                <ul class="tabs-ul">
                                    <li>
                                        <b-link
                                            :active="sort==='rec'"
                                            to="?sort=rec"
                                            @click="sort='rec'"
                                        >推荐
                                        </b-link>
                                    </li>
                                    <li>
                                        <b-link
                                            :active="sort==='new'"
                                            to="?sort=new"
                                            @click="sort='new'"
                                        >最新
                                        </b-link>
                                    </li>
                                    <li>
                                        <b-link
                                            :active="sort==='hot'"
                                            to="?sort=hot"
                                            @click="sort='hot'"
                                        >热门
                                        </b-link>
                                    </li>
                                </ul>
                            </nav>
                            <article-list type="index" :sort="sort"/>
                        </div>
                    </div>
                    <div class="hidden-sm-and-down main-right">
                        <div class="reg-box">
                            <register-section/>
                        </div>
                        <div class="right-top">
                            <recommend-articles-block/>
                            <hot-tags/>
                            <my-footer/>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </main>
    </div>
</template>

<script>
    import MyHeader from "../../components/BaseHeader";
    import MyFooter from "../../components/BaseFooter";
    import ArticleList from "./components/ArticleList";
    import HotTags from "./components/HotTagsBlock";
    import RegisterSection from "../../components/login/BaseRegisterSection";
    import RecommendArticlesBlock from "./components/RecommendArticlesBlock";


    export default {
        name: "Index",
        components: {RecommendArticlesBlock, RegisterSection, HotTags, ArticleList, MyFooter, MyHeader},
        data() {
            return {
                sort: this.$route.query.sort ? this.$route.query.sort : 'rec'
            }
        },
        methods: {},
        created() {
            document.title = '首页 - 博客'
        }
    }
</script>

<style scoped>
    .nav-list {
        margin-bottom: 0;background-color: #ffffff;
    }
    .tabs-ul {
        display: flex;
        padding: 20px 10px;
        border-bottom: 1px solid #f1f1f1;
        font-size: 15px;
        margin-bottom: 0;
    }

    .tabs-ul li a {
        padding-right: 10px;
        padding-left: 10px;
        text-decoration-line: none;
        cursor: pointer;
    }

    .tabs-ul li a:hover {
        color: #007fff;
    }
    @media (min-width: 991px) {
        .index-main {
            width: 700px;
        }
    }

    @media (max-width: 991px) {
        .index-main {
            width: 100%;
        }

        .main {
            max-width: 800px;
            margin: auto;
        }
    }

    .main {
        margin-bottom: 20px;
    }

    .main-right {
        margin-left: auto;
        width: 230px;
    }

    .right-top {

    }

    .reg-box {

    }
</style>
