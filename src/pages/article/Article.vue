<template>
    <div>
        <my-header @pin="headerShow = true" @unpin="headerShow = false"/>
        <main>
            <b-container style="padding: 0;max-width: 960px;display: flex">
                <suspended-panel
                    :show="!headerShow"
                />
                <b-col cols="12" lg="9" style="padding: 0">
                    <div class="Card">
                        <!--            文章加载loading-->
                        <div class="article-holder" v-if="loading">
                            <img src="https://b-gold-cdn.xitu.io/v3/static/img/article-loading.fca922e.png">
                        </div>
                        <div class="article" v-else>
                            <!--              作者信息-->
                            <div class="author-info">
                                <!--                 作者头像-->
                                <a class="author-avatar">
                                    <el-avatar icon="el-icon-user-solid"/>
                                </a>
                                <!--                  作者用户名和文章发表时间-->
                                <div>
                                    <a class="author-name">作者姓名</a>
                                    <div class="article-date">
                                        2019年11月05日
                                        <span class="watch">阅读 195</span>
                                    </div>
                                </div>
                                <el-button class="follow-btn" size="mini" type="primary" plain>关注</el-button>
                            </div>
                            <!--              文章封面-->
                            <div class="article-cover">
                                文章封面
                            </div>
                            <!--              文章标题-->
                            <div class="article-title">
                                <span>这是文章标题</span>
                            </div>
                            <!--              文章正文-->
                            <div class="article-content">
                                正文
                            </div>
                            <!--              文章标签-->
                            <div class="article-tags">
                                <el-tag>标签一</el-tag>
                                <el-tag type="success">标签二</el-tag>
                                <el-tag type="info">标签三</el-tag>
                                <el-tag type="warning">标签四</el-tag>
                                <el-tag type="danger">标签五</el-tag>
                            </div>
                            <!--              评论-->
                        </div>
                        <div class="comment" id="comments">
                            <div class="comment-title">评论</div>
                            <comment-form class="comment-form"/>
                            <comment-list :parent-id="id" :type="type"/>
                        </div>
                    </div>
                </b-col>
                <div class="right-box hidden-sm-and-down">
                    <div style="min-height: 300px">关于作者</div>
                    <catalog-panel class="" :top="!headerShow"/>
                </div>
            </b-container>
        </main>
        <my-footer/>
    </div>
</template>

<script>
    import MyHeader from "../../components/BaseHeader";
    import MyFooter from "../../components/BaseFooter";
    import CommentList from "../../components/comment/CommentList";
    import CommentForm from "../../components/comment/CommentForm";
    import SuspendedPanel from "./components/ArticleSuspendedPanel";
    import CatalogPanel from "./components/ArticleCatalogPanel";


    export default {
        name: "Article",
        components: {CatalogPanel, SuspendedPanel, CommentForm, CommentList, MyFooter, MyHeader},
        data() {
            return {
                headerShow: true,//导航栏是否显示
                id: this.$route.params.id,//文章的id
                type: '',//表示将要加载的评论类型，在文章加载成功后更改为‘article’，评论组件将会加载评论
                loading: false,//文章的加载状态
                article: {//文章实体类对象
                    id:this.$route.params.id,
                    title: '这是文章标题',
                    content: '<b>文章正文</b>',
                    createdAt: 1231231123,
                    updatedAt: 2342342344,
                    likeCount: 20,
                    commentsCount: 30,
                    img: '',//文章的封面
                },
            }
        },
        methods: {
            getArticle(id) {
                this.loading = true
                setTimeout(() => {
                    this.type = 'article'
                    this.loading = false
                    document.title = '文章标题'
                }, 500)
            }
        },
        created() {
            this.getArticle(this.id)
        }
    }

</script>

<style scoped>
    .article-holder {
        padding: 20px;
    }

    .article-holder img {
        max-width: 100%;
        height: auto;
    }

    .article {
        padding-left: 22px;
        padding-right: 22px;
        padding-top: 22px;
    }

    .author-info {
        margin-bottom: 25px;
        align-items: center;
        display: flex;
    }

    .author-avatar {
        margin-right: 15px;
    }

    .author-name {
        font-size: 15px;
        font-weight: 700;
    }

    .article-date {
        font-size: 14px;
        color: #909090;
    }

    .watch {
        margin-left: 10px;
    }

    .follow-btn {
        margin: 0 0 0 auto;
    }

    .comment {
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 22px;
    }

    .comment-title {
        text-align: center;
        font-size: 15px;
        color: #8a9aa9;
        margin-bottom: 20px;
    }

    .comment-form {
        margin-bottom: 15px;
    }

    .article-cover {
        background-color: #f1f1f1;
        min-height: 300px
    }

    .article-title {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 2.1rem;
        font-weight: 600;
    }

    .article-content {
        margin-bottom: 20px;
        min-height: 100px;background-color: #f1f1f1
    }

    .article-tags {
        margin-bottom: 20px;
    }

    .right-box {
        width: 300px;
        margin-left: 15px;
    }

</style>
