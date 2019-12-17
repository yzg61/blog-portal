<!--个人资料设置页面组件-->
<template>
    <div class="setting-list">
        <h1 class="header">
            个人资料
        </h1>
        <div class="item">
            <div class="title">
                用户名
            </div>
            <profile-input
                class="item-input"
                :value="'用户名称111'"
                @save="handleSave('username',$event)"
            />
        </div>
        <div class="item">
            <div class="title">
                个人介绍
            </div>
            <profile-input
                class="item-input"
                :value="'这个人很懒，什么都没有写'"
                @save="handleSave('username',$event)"
            />
        </div>
    </div>
</template>

<script>
    import ProfileInput from "../components/ProfileInput";

    export default {
        name: "Profile",
        components: {ProfileInput},
        props: [],
        data() {
            return {}
        },
        methods: {
            //保存修改
            handleSave(key, value) {
                console.log(key, value)
            }
        },
        created() {
            document.title = '个人资料设置 - 博客'
        }
    }
</script>

<style scoped>

    .setting-list {
        padding: 0 20px;
    }

    .header {
        font-size: 18px;
        font-weight: 600;
        margin: 20px 0;
    }

    .item {
        display: flex;
        align-items: center;
        padding: 20px 0;
        border-top: 1px solid #f1f1f1;
    }

    .title {
        width: 100px;
        font-size: 15px;
    }

    @media (max-width: 600px) {
        .setting-list {
            padding: 0;
        }
        .item {
            flex-direction: column;
            align-items: flex-start;
        }
        .title {
            margin-bottom: 10px;
        }
        .item-input {
            width: 100%;
        }
    }


</style>
