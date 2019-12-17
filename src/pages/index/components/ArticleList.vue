<template>
    <div>
        <!--    数据列表-->
        <div class="article" v-for="art in list" :key="art.id">
            <b-media right-align vertical-align="center">
                <template v-slot:aside>
                    <b-img
                        v-if="art.img !== ''"
                        width="80"
                        alt="placeholder"
                        :src="art.img"
                        @click="goToArt(art.id)"/>
                </template>
                <div class="meta-row">
                    <ul class="meta-list">
                        <user-popover type="name" :user="art.user" class="username"/>
                        <li class="item"/>
                        <li class="item time">三小时前</li>
                        <li class="item tags">
                            <a class="tag" :href="'/tag/'+tag.id" target="_blank"
                               v-for="tag in art.tags.slice(0,2)">{{tag.title}}</a>
                        </li>
                    </ul>
                </div>
                <div class="title-row">
                    <div class="item" @click="goToArt(art.id)"><span class="title">{{art.title}}</span></div>
                </div>
                <div class="content" v-show="type !== 'tag'">
                    <p class="mb-0" @click="goToArt(art.id)">
                        {{art.outline}}
                    </p>
                </div>
                <div class="action-row">
                    <ul class="action-list">
                        <li class="item like" @click="like(art)">
                          <span class="title-box" :class="{'active': art.hasLiked}">
                            <svg class="icon like-icon" aria-hidden="true">
                              <use xlink:href="#icon-dianzan"/>
                            </svg>
                            &nbsp;{{art.likeCount}}
                          </span>
                        </li>
                        <li class="item comment" @click="clickComment(art)">
              <span class="title-box">
                <svg class="icon" aria-hidden="true" style="font-size: 14px;">
                  <use xlink:href="#icon-pinglun"/>
                </svg>
                &nbsp;{{art.commentsCount}}
              </span>
                        </li>
                    </ul>
                </div>
            </b-media>
        </div>
        <!--    加载中-->
        <place-holder v-if="loading"/>
        <!--    没有更多-->
        <div v-else-if="!hasNext" class="notFound">
            <svg class="icon empty-icon" aria-hidden="true">
                <use xlink:href="#icon-wenzhangfenxiang"/>
            </svg>
            <div>暂无数据</div>
        </div>
    </div>
</template>

<script>
    import PlaceHolder from "./ArticleListPlaceHolder";
    import UserPopover from "../../../components/AppUserPopover";

    export default {
        name: "ArticleList",
        components: {UserPopover, PlaceHolder},
        props: {
            sort: {
                type: String,
                default: 'hot',//默认为按热度排序
                validator: function (value) {
                    // sort必须匹配下列字符串中的一个
                    return ['hot', 'new', 'rec'].indexOf(value) !== -1
                }
            },
            //搜索关键字
            query: {
                type: String,
                default: '',
            },
            //加载类型
            type: {
                type: String,
                default: 'index',//默认为首页显示的文章列表
                validator: function (value) {
                    return ['index', 'tag', 'search'].indexOf(value) !== -1
                }
            }
        },
        data() {
            return {
                loading: false,
                hasNext: true,
                list: [],

            }
        },
        watch: {
            'sort' () {
                this.getArticles()
            },
            'query'() {
                this.getArticles()
            }
        },
        methods: {
            //加载文章列表
            getArticles() {
                this.noMore = false
                this.list = []
                this.load()
            },
            load() {
                if (this.loading || !this.hasNext)
                    return;

                this.loading = true
                setTimeout(() => {
                    for (let i = 1; i < 10; i++) {
                        const art = {
                            id: Math.random(),
                            title: 'Media object',
                            outline: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante ' +
                                'sollicitudin.Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. ' +
                                'Fusce condimentum nunc ac\n',
                            img: 'https://picsum.photos/125/125/?image=58',
                            createdAt: 100000,
                            updatedAt: 200000,
                            lastCommentTime: 200000,
                            likeCount: i * 10,
                            commentsCount: i + 20,
                            hasLiked: i % 2 === 0,
                            user: {
                                id: 100,
                                username: '王大锤',
                                avatar: ''
                            },
                            category: {
                                id: 100,
                                title: '后端'
                            },
                            tags: [
                                {
                                    id: 100,
                                    title: 'SpringBoot'
                                },
                                {
                                    id: 200,
                                    title: 'Java'
                                },
                            ]
                        }
                        this.list.push(art)
                    }
                    this.loading = false
                }, 500)
            },

            //跳转文章详情
            goToArt(id) {
                const {href} = this.$router.resolve({
                    name: "article",
                    params: {
                        id: id
                    }
                });
                window.open(href, '_blank');
            },
            //点赞或取消点赞
            like(art) {
                if (art.hasLiked) {
                    console.log('取消点赞' + art.id)
                } else {
                    console.log('点赞' + art.id)
                }
            },

            //点击评论
            clickComment(art) {
                const {href} = this.$router.resolve({
                    name: "article",
                    params: {
                        id: art.id
                    }
                });
                window.open(href + '#comments', '_blank');
            },

            //滚动加载更多
            scrollGetMore() {
                const st = this.$utils.getScrollTop()
                const wh = this.$utils.getWindowHeight()
                const sh = this.$utils.getScrollHeight()
                if (200 + st + wh > sh) {
                    this.load()
                }

            },
        },
        created() {
            //初始换文章列表
            this.getArticles()
        },

        mounted() {
            window.addEventListener('scroll', this.scrollGetMore)
        },

        destroyed() {
            window.removeEventListener('scroll', this.scrollGetMore)
        },
    }
</script>

<style scoped>
    ul {
        padding: 0;
        margin: 0;
    }

    .notFound {
        margin: 38px 0;
        text-align: center;
        font-size: 15px;
        color: #b2bac2;
    }

    .empty-icon {
        font-size: 50px;
    }

    .article {
        padding: 20px;
        border-bottom: 1px solid #f1f1f1;
        background-color: #ffffff;
    }

    .article:hover {
        cursor: pointer;
        background-color: #fbfbfb;
    }

    .title-row .item {
        font-size: 18px;
        font-weight: 600;
    }

    .title:hover {
        color: rgba(0, 109, 205, 0.8);
        cursor: pointer;
    }

    .meta-row {
        font-size: 0.8rem;
        color: #b2bac2;
    }

    .meta-list {
        display: flex;
        align-items: baseline;
        white-space: nowrap;
    }

    .meta-list .item:not(:last-child)::after {
        content: "·";
        color: rgb(178, 186, 194);
        margin: 0px 0.4em;
    }

    .meta-list .item .tag:not(:last-child):after {
        content: "/";
        margin-left: 0.10rem;
        color: #b2bac2;
    }

    .time {
        cursor: auto;
    }

    .username {
        color: #b2bac2;
    }

    .username:hover {
        color: #007fff;
    }

    .tag {
        color: #b2bac2;
    }

    .tag:hover {
        color: #007fff;
    }

    .content {

    }

    .content:hover {
        color: #555555;
    }

    .action-row {
        padding-top: 10px;
    }

    .action-list {
        display: inline-flex;
        white-space: nowrap;
    }

    .action-list > .item {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 0 .5rem;
        height: 1.4rem;
        font-size: 0.783rem;
        line-height: 1;
        white-space: nowrap;
        color: #b2bac2;
        border-radius: 1px;
        border: 1px solid #edeeef;
    }

    .action-list > .item:hover {
        background-color: #f1f1f1;
        cursor: pointer;
    }

    .action-list > .item.like {
        padding: 0;
    }

    .action-list > .item.comment {
        margin-left: -1px;
        padding: 0;
    }

    .action-list > .item .title-box {
        display: flex;
        align-items: center;
        padding: 0 .8rem;
        height: 100%;
        font-weight: 600;
    }

    .like-icon {
        font-size: 14px;
    }


</style>
