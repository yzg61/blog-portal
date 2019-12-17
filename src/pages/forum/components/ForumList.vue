<template>
    <div class="forum-list">
        <!--            讨论列表-->
        <div
            class="item Card"
            v-for="it in forumList"
            :key="it.id"
        >
            <!--        列表头，包括作者头像，用户名，作者介绍，发表时间-->
            <div class="item-header">
                <user-popover type="head" :size="45" :user="it.user"/>
                <div class="header-content">
                    <div class="content-name">
                        <user-popover type="name" :user="it.user"/>
                    </div>
                    <div class="meta-box">
                        <div class="ellipsis">
                            {{it.user.jobTitle}}
                        </div>
                        <div class="dot">·</div>
                        <!--                            发布时间-->
                        <div class="time">
                            35分钟前
                        </div>
                    </div>
                </div>
                <div class="action-box">
                    <div class="follow-btn">
                        <el-button
                            v-if="!it.user.isFollow"
                            size="mini"
                            type="primary"
                            plain
                            style="width: 68px"
                            @click="handleFollow(it)"
                        >
                            关注
                        </el-button>
                        <el-button
                            v-else
                            size="mini"
                            type="primary"
                            @click="handleUnFollow(it)"
                        >
                            已关注
                        </el-button>
                    </div>
                    <div>
                        <el-dropdown trigger="click" size="small" @command="handleCommand">
                            <span class="el-dropdown-link"><i class="el-icon-more more-icon"/></span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item
                                    v-if="!it.hasDelete&&!it.hasEdit"
                                    :command="{type:'Report',params:it}"
                                >
                                    举报
                                </el-dropdown-item>
                                <el-dropdown-item
                                    v-if="it.hasEdit"
                                    :command="{type:'Edit',params:it}"
                                >
                                    修改
                                </el-dropdown-item>
                                <el-dropdown-item
                                    v-if="it.hasDelete"
                                    :command="{type:'Delete',params:it}"
                                >
                                    删除
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
            <div class="item-content">
                {{it.content}}
            </div>
            <div class="item-topic">
                <span class="topic">{{it.topic.title}}</span>
            </div>
            <div class="item-action">
                <div class="action" :class="{'active':it.hasLiked}" @click="handleLike(it)">
                    <div class="box">
                        <svg class="icon like-icon" aria-hidden="true" style="font-size: 15px">
                            <use xlink:href="#icon-dianzan"/>
                        </svg>
                        <span v-if="it.likeCount === 0">赞</span>
                        <span v-else>{{it.likeCount}}</span>
                    </div>
                </div>
                <div class="action" @click="handleOpenComments(it,$event)">
                    <div class="box">
                        <svg class="icon" aria-hidden="true" style="font-size: 15px;">
                            <use xlink:href="#icon-pinglun"/>
                        </svg>
                        <span v-if="it.commentCount === 0">评论</span>
                        <span v-else>{{it.commentCount}}</span>
                    </div>
                </div>
            </div>
            <div class="item-comments" v-if="it.openComments">
                <comment-form class="comment-form" :parent-id="it.id" type="forum"/>
                <comment-list :parent-id="it.id" :type="it.commentType"/>
            </div>
        </div>
        <forum-holder v-if="loading"/>
        <div v-else-if="!hasNext">
            暂无数据
        </div>
    </div>
</template>

<script>
    import UserPopover from "../../../components/AppUserPopover";
    import CommentList from "../../../components/comment/CommentList";
    import CommentForm from "../../../components/comment/CommentForm";
    import ForumHolder from "./ForumListHolder";

    export default {
        name: "ForumList",
        components: {ForumHolder, CommentForm, CommentList, UserPopover},
        props: {
            //讨论的排序类型
            sort: {
                type: String,
                default: 'recommend',
                validator: function (value) {
                    return ['recommend', 'hot', 'follow'].indexOf(value) !== -1
                }
            },
            type: {
                type: String,
                default: 'all',
                validator: function (value) {
                    return ['all', 'user'].indexOf(value) !== -1
                }
            },
            userId: {
                type: String,
            }
        },
        data() {
            return {
                forumList: [],
                loading: false,
                hasNext: true,
                commentType: '',
            }
        },
        watch: {
            'sort'(value) {//当sort发生变化时，重新加载列表
                this.getForumList()
            }
        },
        methods: {
            // 获取讨论列表
            getForumList() {
                this.noMore = false;
                this.forumList = [];
                this.load()
            },

            //获取讨论数据
            load() {
                //防止重复加载
                if (this.loading || !this.hasNext)
                    return;
                //开始获取
                this.loading = true;
                setTimeout(() => {
                    for (let i = 1; i < 10; i++) {
                        const forum = {
                            id: Math.random() + '',
                            content: '发表动态正文' + i * 31,
                            topic: {
                                id: i * 29,
                                title: "话题" + i
                            },
                            hasDelete: i % 2 === 0,
                            hasEdit: i % 2 === 0,
                            likeCount: i * 31,
                            hasLiked: i % 2 === 0,
                            commentCount: i * 31,
                            createdAt: i * 31 + 100000,
                            updateAt: i * 31 + 200000,
                            user: {
                                id: i * 31,
                                username: '用户' + i + '用户用户',
                                avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                                jobTitle: '介绍一下介绍一下介绍一下' + i,
                                isFollow: i % 2 === 0,
                            },
                            openComments: false,
                        };
                        //初始化commentType
                        forum.commentType = '';
                        this.forumList.push(forum)
                    }
                    this.loading = false
                }, 500)
            },

            //对讨论的举报，删除，修改操作
            handleCommand(command) {
                console.log(command);
                this['handle' + command.type](command.params)
            },

            //举报
            handleReport(it) {
                console.log("举报")
            },
            //删除
            handleDelete(it) {
                console.log("删除")
            },
            //修改
            handleEdit(it) {
                console.log("修改")
            },

            //展开或收起评论
            handleOpenComments(forum) {
                console.log('forum', forum);

                forum.openComments = !forum.openComments;
                forum.commentType = '';

                setTimeout(() => {
                    forum.commentType = 'forum'
                }, 10)
            },

            //点击关注
            handleFollow(it) {
                console.log("follow" + it)
            },

            //取消关注
            handleUnFollow(it) {
                console.log("unfollow" + it)
            },

            //点赞或取消点赞
            handleLike(it) {
                if (it.hasLiked) {
                    //取消点赞
                    console.log("dislike" + it.id)
                } else {
                    //点赞
                    console.log("like" + it.id)
                }
            },

            //滚动加载更多
            scrollGetMore() {
                const st = this.$utils.getScrollTop();
                const wh = this.$utils.getWindowHeight();
                const sh = this.$utils.getScrollHeight();
                if (200 + st + wh > sh) {
                    this.load()
                }

            }
        },
        created() {
            //初始化列表
            this.getForumList()
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
    .forum-list {

    }

    .item-header {
        padding: 16px 20px 0 20px;
        display: flex;
    }

    .header-content {
        margin-left: 15px;
    }

    .content-name {
        font-size: 15px;
        font-weight: 600;
    }

    .job-title {

    }

    .time {
        min-width: 60px;
    }

    .ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
    }

    @media (max-width: 600px) {
        .ellipsis {
            max-width: 80px;
        }
    }

    .item-content {
        margin: 5px 40px 5px 80px;
        font-size: 15px;
    }

    .meta-box {
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #8a9aa9;
        cursor: default;
    }

    .action-box {
        display: flex;
        margin-left: auto;
    }

    .follow-btn {
        margin-right: 15px;
    }

    .more-icon {
        font-size: 14px;
    }

    .more-icon:hover {
        cursor: pointer;
    }

    .item-action {
        display: flex;
        margin-top: 15px;
        border-top: 1px solid #f1f1f1;
        background-color: #ffffff;
        height: 34px;
    }

    .item-action :not(:last-child):after {
        content: "";
        position: absolute;
        top: 60%;
        right: 0;
        margin-top: -1rem;
        width: 1px;
        height: 26px;
        background-color: #ebebeb;
    }

    .item-action .action {
        flex: 1 1 33.333%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 100%;
        cursor: pointer;
        user-select: none;
        font-size: 13px;
        color: #8a93a0;
    }

    .item-action .active {
        color: #007fff;
    }

    .item-action .action:not(.active):hover {
        color: rgba(138, 147, 160, 0.85);
    }

    .item-action .action .box {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .item-action .action .box span {
        margin-left: 5px;
    }

    .dot {
        margin: 0 6px;
    }

    .item-topic {
        margin: 15px 40px 5px 80px;
    }

    .topic {
        font-size: 13px;
        display: inline-block;
        line-height: 22px;
        padding: 0 12px;
        border: 1px solid #007fff;
        border-radius: 14px;
        color: #007fff;
        user-select: none;
    }

    .topic:hover {
        cursor: pointer;
    }

    .item-comments {
        padding: 15px 20px;
        border-top: 1px solid #f1f1f1;
    }

    .comment-form {
        margin-bottom: 15px;
    }
</style>
