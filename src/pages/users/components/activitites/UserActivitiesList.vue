<template>
    <div>
        <div class="activities-list">
            <div
                class="activity Card"
                v-for="act in activities"
                :key="act.id"
            >
                <div class="avatar">
                    <user-popover :size="45" type="head" :user="act.actors[0]"/>
                </div>
                <div class="info">
                    <div class="info-header">
                        <div class="username">
                            <user-popover type="name" :user="act.actors[0]"/>
                        </div>
                        <div class="action" v-if="act.action === 'FOLLOW_TAG'">
                            关注了
                        </div>
                        <div class="action-name">用户名称22</div>
                    </div>
                </div>
            </div>
        </div>
        <user-activities-list-holder v-if="loading"/>
        <div v-else-if="!hasNext">
            暂无数据
        </div>
    </div>
</template>

<script>
    import UserPopover from "../../../../components/AppUserPopover";
    import UserActivitiesListHolder from "./UserActivitiesListHolder";

    export default {
        name: "UserActivitiesList",
        components: {UserActivitiesListHolder, UserPopover},
        props: [],
        data() {
            return {
                loading: false,
                hasNext: true,
                activities: [],
            }
        },
        methods: {
            getActivities() {
                this.activities = []
                this.load()
            },

            load() {
                if (this.loading || !this.hasNext)
                    return;
                this.loading = true
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        const act = {
                            id: Math.random(),
                            action: 'FOLLOW_TAG',
                            didAt: '2019-11-19T08:37:24.701Z',
                            actors: [
                                {
                                    id: i * 31,
                                    username: '用户' + i,
                                    avatar: '',
                                }
                            ],
                            targets: [
                                {
                                    icon: "",
                                    id: "55978433e4b0c4d3e6fddcb1",
                                    title: "前端框架",
                                }
                            ]
                        }
                        this.activities.push(act)
                    }
                    this.loading = false
                }, 500)
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
            document.title = "用户x的个人主页 - 动态 - 博客"
            this.getActivities()
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
    .activity {
        padding: 16px 20px;
        display: flex;
        align-items: center;
    }

    .activity .info {
        margin-left: 20px;
    }

    .info-header {
        display: flex;
        align-items: center;
    }

    .info-header .username {
        font-size: 15px;
        font-weight: 700;

    }

    .info-header .action {
        font-size: 15px;
        font-weight: 500;
        color: #8a9a99;
        margin: 0 5px;
    }

    .info-header .action-name {
        font-size: 15px;
        font-weight: 700;
    }

    .info-meta {

    }
</style>
