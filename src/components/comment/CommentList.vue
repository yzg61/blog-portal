<template>
    <div>
        <div
            class="item"
            v-for="it in list"
            :key="it.id"
        >
            <div class="comment">
                <!--        空白div用于大屏幕下将列表右移-->
                <div class="hidden-xs-only" style="padding-left: 55px"></div>
                <div class="avatar">
                    <user-popover :type="'head'" :size="'medium'" :user="it.userInfo"/>
                </div>
                <div class="comment-box">
                    <div class="box-meta">
                        <div class="comment-user">
                            <user-popover :type="'name'" :user="it.userInfo"/>
                        </div>
                        <div class="comment-action">
                            <div class="comment-content" @click="openReply(it)">
                                {{it.content}}
                            </div>
                            <div class="action-row">
                                <time class="comment-time">
                                    2小时前
                                </time>
                                <div class="action-box">
                                    <div class="action-more hidden-xs-only" style="display: flex">
                                        <div class="action-item" @click="handleReport(it)">
                                            举报
                                        </div>
                                        <div class="action-item" v-if="it.hasDelete" @click="handleDelete(it)">
                                            删除
                                        </div>
                                        <div class="action-item" v-if="it.hasEdit" @click="handleEdit(it)">
                                            修改
                                        </div>
                                    </div>
                                    <div class="action-like">
                                        <svg class="icon like-icon" aria-hidden="true">
                                            <use xlink:href="#icon-dianzan"/>
                                        </svg>
                                    </div>
                                    <div class="action-comment" @click="openReply(it)">
                                        回复
                                    </div>

                                    <div class="action-sm-more hidden-sm-and-up">
                                        <el-dropdown trigger="click"><span class="el-dropdown-link"><i
                                            class="el-icon-more"/></span>
                                            <el-dropdown-menu slot="dropdown">
                                                <el-dropdown-item @click.native="handleReport(it)">举报</el-dropdown-item>
                                                <el-dropdown-item
                                                    v-if="it.hasEdit"
                                                    @click.native="handleEdit(it)"
                                                >修改
                                                </el-dropdown-item>
                                                <el-dropdown-item
                                                    v-if="it.hasDelete"
                                                    @click.native="handleDelete(it)"
                                                >删除
                                                </el-dropdown-item>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <reply-form v-if="it.openReply" :parent-id="it.id" @close="closeReply(it)"/>
                        <div class="reply-list">
                            <reply-list :top-reply="it.topReps" :count="it.replyCount"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="more" v-if="hasNext">
            <div
                class="more-btn"
                v-if="!loading && type !== ''"
                @click="load"
            >加载更多>
            </div>
            <div
                class="more-btn"
                v-else
            >
                <base-loading-point title="加载中"/>
            </div>
        </div>
    </div>
</template>

<script>
    import ReplyList from "./CommentReplyList";
    import ReplyForm from "./CommentReplyForm";
    import UserPopover from "../AppUserPopover";
    import BaseLoadingPoint from "../holder/BaseLoadingPoint";

    export default {
        name: "CommentList",
        components: {BaseLoadingPoint, UserPopover, ReplyForm, ReplyList},
        props: {
            //评论的目标实体id
            parentId: {
                type: String,
            },
            //评论的目标实体类型,
            type: {
                type: String,
            },
        },
        data() {
            return {
                list: [],
                loading: false,
                hasNext: true,
            }
        },
        watch: {
            'type'(value) {
                if (value !== '') {
                    //初始化评论列表
                    this.getCommentList()
                }

            }
        },
        methods: {
            //获取评论列表
            getCommentList() {
                this.list = []
                this.load()
            },

            //加载评论
            load() {
                this.loading = true
                setTimeout(() => {
                    for (let i = 1; i < 5; i++) {
                        const comment = {
                            openReply: false,
                            id: i * Math.random(),
                            content: '这是评论的内容，这是评论的内容' + i,
                            createdAt: i * 10000,
                            updatedAt: (i + 1) * 10000,
                            isLiked: i % 2 === 0,
                            hasDelete: i % 2 !== 0,
                            hasEdit: i % 2 !== 0,
                            likesCount: i * i,
                            replyCount: i,
                            userInfo: {
                                id: i * 10,
                                username: '用户' + i * i + i * 31 + 232323,
                                avatar: 'https://mirror-gold-cdn.xitu.io/16c3be5471829f327f2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                                jobTitle: '大水比' + i * i + i * 31 + 232323,
                            },
                            topReps: []
                        }
                        if (i % 2 === 0) {
                            for (let j = 1; j < 3; j++) {
                                const topRep = {
                                    openReply: false,
                                    commentId: i,
                                    id: i + 10086 + j,
                                    content: '这是回复的内容，这是回复的内容' + i,
                                    createdAt: i * 10000,
                                    updatedAt: (i + 1) * 10000,
                                    isLiked: i % 2 === 0,
                                    hasDelete: j % 2 !== 0,
                                    hasEdit: j % 2 !== 0,
                                    likesCount: i * i,
                                    replyCount: i,
                                    userInfo: {
                                        id: j * i + 10086,
                                        username: '用户' + i * j * 31 + 232323,
                                        avatar: 'https://mirror-gold-cdn.xitu.io/16c3be5471829f327f2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                                        jobTitle: '大水比' + i * j * 31 + 232323,
                                    },
                                    airUser: {
                                        id: i * 31,
                                        username: '用户' + j + i * 31
                                    }
                                }
                                comment.topReps.push(topRep)
                            }
                        }

                        this.list.push(comment)
                    }
                    this.loading = false
                    this.hasNext = this.list.length < 15
                }, 500)
            },

            //关闭评论的回复输入框
            closeReply(it) {
                it.openReply = false
            },
            //点击回复按钮
            openReply(it) {
                it.openReply = !it.openReply;
            },

            //点击举报按钮
            handleReport(it) {
                console.log('report', it)
            },
            //点击修改按钮
            handleEdit(it) {
                console.log('edit', it)
            },
            //点击删除按钮
            handleDelete(it) {
                console.log('delete', it)
            },
        },
        created() {

        }
    }
</script>

<style scoped>
    .item {
        margin-bottom: 20px;
    }

    .comment {
        display: flex;
    }

    .user-avatar {

    }

    .comment-user {

    }

    .username {
        font-size: 13px;
        font-weight: 500;
    }

    .comment-box {
        margin-left: 10px;
        flex: 1 1 auto;
    }

    .comment-content {
        margin-top: 6px;
        font-size: 13px;
    }

    .box-meta {
        width: 100%;
        border-bottom: 1px solid #f1f1f1;
    }

    .action-row {
        display: flex;
        margin-top: 12px;
        margin-bottom: 12px;
        font-size: 13px;
        color: #8a93a0;;
    }

    .action-box {
        flex: 0 0 auto;
        display: flex;
        margin: 0 0 0 auto;
    }

    .action-more {
        visibility: hidden;
    }

    .action-item {
        margin-right: 25px;
        cursor: pointer;
    }

    .action-item:hover {
        color: #007fff;
    }

    .comment-action:hover .action-row .action-box .action-more {
        visibility: visible;
    }

    .action-like {
        cursor: pointer;
    }

    .action-comment {
        cursor: pointer;
        margin-left: 25px;
    }

    .action-sm-more {
        margin-left: 25px;
    }

    .reply-list {
        background-color: #fafbfc;
        padding-left: 15px;
        padding-right: 10px;
        margin-top: 10px;
    }

    .more {
        text-align: center;
        color: #007fff;
        font-size: 13px;
    }

    .more-btn {
        cursor: pointer;
    }

    .more-btn:hover {
        color: #406599;
    }
</style>
