<template>
    <div>
        <div class="item" v-for="(it, index) in reps" :key="it.id">
            <div class="comment">
                <div>
                    <user-popover type="head" size="medium" :user="it.userInfo"/>
                </div>
                <div class="comment-box">
                    <div class="box-meta">
                        <div class="comment-user">
                            <user-popover type="name" :user="it.userInfo"/>
                            <div style="margin-left: auto;color: #909090">#{{index + 1}}</div>
                        </div>
                        <div class="comment-action">
                            <div class="comment-content" @click="openReply(it)">
                                回复<span class="air-user"><user-popover type="name" :user="it.airUser"/>:</span>
                                {{it.content}}
                            </div>
                            <div class="action-row">
                                <time class="comment-time">
                                    2小时前{{it.createdAt}}
                                </time>
                                <div class="action-box">
                                    <div class="action-more hidden-xs-only" style="display: flex">
                                        <div class="action-report" @click="handleReport(it)">
                                            举报
                                        </div>
                                        <div class="action-delete" v-if="it.hasDelete" @click="handleDelete(it)">
                                            删除
                                        </div>
                                        <div class="action-edit" v-if="it.hasEdit" @click="handleEdit(it)">
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
                        <reply-form
                            v-if="it.openReply"
                            :parent-id="it.id"
                            @close="closeReply(it)"
                            class="reply-form"
                            style="background-color: #fff;"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="fetch-more" v-if="hasNext">
            <span class="more-btn" v-if="!loading" @click="load">加载更多</span>
            <span class="more-btn" v-else>
                <base-loading-point title="加载中"/>
            </span>
        </div>
    </div>
</template>

<script>
    import ReplyForm from "./CommentReplyForm";
    import UserPopover from "../AppUserPopover";
    import BaseLoadingPoint from "../holder/BaseLoadingPoint";

    export default {
        name: "CommentReplyList",
        components: {BaseLoadingPoint, UserPopover, ReplyForm},
        props: {
            //置顶的2条回复
            topReply: {
                type: Array,
            },
            //回复总数量
            count: {
                type: Number,
            }
        },
        data() {
            return {
                reps: this.topReply,
                loading: false,
                //只有总数量超过2条的回复才会显示
                hasNext: this.count > 2 && this.topReply.length > 0,
            }
        },
        methods: {
            //关闭回复表单
            closeReply(it) {
                it.openReply = false
            },

            //打开或关闭回复表单
            openReply(it) {
                it.openReply = !it.openReply;
            },

            //加载更多评论
            load() {
                this.loading = true
                setTimeout(() => {
                    for (let i = 1; i < 10; i++) {
                        const topRep = {
                            openReply: false,
                            commentId: i,
                            id: i * Math.random(),
                            content: '这是回复的内容，这是回复的内容' + i,
                            createdAt: i * 10000,
                            updatedAt: (i + 1) * 10000,
                            isLiked: i % 2 === 0,
                            hasDelete: i % 2 !== 0,
                            hasEdit: i % 2 !== 0,
                            likesCount: i * i,
                            replyCount: i,
                            userInfo: {
                                id: i * i + 10086,
                                username: '用户' + i * i * 31 + 232323,
                                avatar: 'https://mirror-gold-cdn.xitu.io/16c3be5471829f327f2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                                jobTitle: '大水比' + i * i * 31 + 232323,
                            },
                            airUser: {
                                id: i * 31,
                                username: '用户' + i + i * 31
                            }
                        }
                        this.reps.push(topRep)
                    }
                    this.loading = false
                    this.hasNext = this.reps.length < 10
                }, 500)
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
        }
    }
</script>

<style scoped>
    .item {
        padding-top: 15px;
    }

    .comment {
        display: flex;
    }

    .user-avatar {

    }

    .comment-user {
        display: flex;
    }

    .username {
        font-size: 13px;
        font-weight: 500;
        color: #333;
    }

    .box-meta {
        border-bottom: 1px solid #f1f1f1;
    }

    .comment-box {
        margin-left: 10px;
        flex: 1 1 auto;
    }

    .comment-content {
        display: inline-block;
        margin-top: 6px;
        font-size: 13px;
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

    .action-report {
        margin-right: 25px;
        cursor: pointer;
    }

    .action-delete {
        margin-right: 25px;
        cursor: pointer;
    }

    .action-edit {
        margin-right: 25px;
        cursor: pointer;
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

    .air-user {
        display: inline-flex;
        margin: 0 5px;
        color: #406599;
        cursor: pointer;
    }

    .fetch-more {
        text-align: center;
        font-size: 13px;
        padding-bottom: 8px;
        padding-top: 8px;
    }

    .more-btn {
        cursor: pointer;
        color: #007fff;
    }

    .more-btn:hover {
        color: #406599;
    }

    .reply-form {
        border: 1px solid #f1f1f2;
        margin-bottom: 15px;
    }
</style>
