<template>
    <div class="Card">
        <div class="header-box">
            <el-avatar
                class="avatar"
                :size="62"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
            <div class="user-info">
                用户名称11111
            </div>
        </div>
        <div class="start-list">
            <router-link class="item" to="/users/id/forums">
                <span class="title">讨论</span>
                <div class="number">1</div>
            </router-link>
            <router-link class="item" to="/users/id/follow?type=following">
                <span class="title">关注</span>
                <div class="number">1</div>
            </router-link>
            <router-link class="item" to="/users/id/follow?type=follower">
                <span class="title">关注者</span>
                <div class="number">1</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfoSection",
        props: [],
        data() {
            return {}
        },
        methods: {},
        created() {
        }
    }
</script>

<style scoped>
    .header-box {
        padding: 16px;
        display: flex;
        border-bottom: 1px solid rgba(92, 96, 102, .1);
    }

    .user-info {
        margin-left: 15px;
        margin-top: 10px;
        font-size: 16px;
        font-weight: 700;
    }

    .header-box .avatar {
        border: 1px solid #fff;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .15);
    }

    .start-list {
        display: flex;
        text-align: center;
        padding: 17px 0;
    }

    .start-list .item {
        width: 33.33%;
    }

    .start-list .item:not(:last-child) {
        border-right: 1px solid rgba(92, 96, 102, .1);
    }

    .start-list .item .title {
        font-size: 13px;
    }

    .start-list .item .number {
        font-size: 15px;
        font-weight: 700;
        color: #0b2e13;
    }
</style>
