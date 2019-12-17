<template>
    <div class="section Card">
        <div class="reg-title">
            <span>加入博客</span>
        </div>
        <div class="reg-slogan">
            <span>分享你的看法</span>
        </div>
        <register-input-group size="small"/>
    </div>
</template>

<script>
    import RegisterInputGroup from "./BaseRegisterInputGroup";

    export default {
        name: "BaseRegisterSection",
        components: {RegisterInputGroup},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
    .section {
        background-color: #ffffff;
        margin-bottom: 10px;
        padding: 15px;
    }

    .reg-title {
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 600;
    }

    .reg-slogan {
        margin-bottom: 6px;
        font-size: 15px;
    }


</style>
