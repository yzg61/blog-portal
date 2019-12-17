<template>
    <div class="follow">
        <div class="follow-header">
            <div class="header-title">关注列表</div>
            <div class="type-box">
                <router-link
                    v-for="it in itemList"
                    :key="it.name"
                    class="item"
                    :class="{'active':type === it.type}"
                    :to="$route.path + '?type=' + it.type"
                >{{it.name}}
                </router-link>
            </div>
        </div>
        <user-follows-list :type="type"/>
    </div>
</template>

<script>
    import UserFollowsList from "./UserFollowsList";

    export default {
        name: "UserFollows",
        components: {UserFollowsList},
        props: [],
        data() {
            return {
                type: this.$route.query.type ? this.$route.query.type : 'following',
                itemList: [
                    {
                        name: '我关注的',
                        type: 'following'
                    },
                    {
                        name: '关注我的',
                        type: 'follower'
                    },
                    {
                        name: '关注标签',
                        type: 'tags'
                    },
                ]
            }
        },
        watch: {
            '$route'(to) {
                this.type = to.query.type ? to.query.type : 'following'
            },

        },
        methods: {},
        created() {
            document.title = "用户x的个人主页 - 关注 - 博客"
            console.log(this.$route)
        }
    }
</script>

<style scoped>
    .follow {
        background-color: #ffffff;
    }

    .follow-header {
        display: flex;
        align-items: center;
        padding: 0 20px;
        border-bottom: 1px solid rgba(230, 230, 231, .5)
    }

    .header-title {
        font-weight: 700;
        font-size: 15px;
    }

    .type-box {
        margin-left: auto;
        display: flex;
        align-items: center;
    }

    .type-box .item {
        margin: 10px 10px;
        font-size: 14px;
        font-weight: 500;
    }

</style>
