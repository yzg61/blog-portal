<template>
    <div class="follow-list">
        <!--    关注他或者他关注的用户列表-->
        <div
            class="item"
            v-for="it in follows"
            :key="it.id"
        >
            <el-avatar :size="45"/>
            <div class="item-name">
                用户xxx
            </div>
            <div class="action">
                <el-button type="primary" :plain="false" size="mini">已关注</el-button>
            </div>
        </div>
        <user-activities-list-holder v-if="loading"/>
    </div>
</template>

<script>
    import UserActivitiesListHolder from "../activitites/UserActivitiesListHolder";

    export default {
        name: "UserFollowsList",
        components: {UserActivitiesListHolder},
        props: {
            //用户id
            userId: {
                type: String
            },
            //用户关注的类型
            type: {
                type: String,
                default: 'following',
                validator: function (value) {
                    return ['following', 'follower', 'tags'].indexOf(value) !== -1
                }
            }
        },
        data() {
            return {
                loading: false,
                hasNext: true,
                follows: [],
            }
        },
        watch: {
            //当type发生改变时，初始化关注列表
            'type'(type) {
                this.getFollows()
            }
        },
        methods: {
            //加载关注列表
            load() {
                if (this.loading || !this.hasNext)
                    return;
                this.loading = true
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        const follow = {
                            id: Math.random(),
                        }
                        this.follows.push(follow)
                    }
                    this.loading = false
                }, 500)
            },

            //初始化关注列表
            getFollows() {
                this.follows = []
                this.loading = false
                this.load()
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
            //初始化关注列表
            this.getFollows()
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
    .follow-list {

    }

    .follow-list .item {
        border-bottom: 1px solid rgba(230, 230, 231, .5);
        padding: 15px 28px;
        display: flex;
        align-items: center;
    }

    .follow-list .item-name {
        margin-left: 20px;
        font-size: 16px;
        font-weight: 700;
    }

    .follow-list .action {
        margin-left: auto;
    }
</style>
