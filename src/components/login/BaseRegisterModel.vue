<template>
    <div>
        <!--    注册-->
        <b-form-group v-if="t === 'register'">
            <register-input-group/>
            <div class="has-user" @click="t = 'login'">
                <span>已有账号登陆</span>
            </div>
        </b-form-group>

        <!--    登录-->
        <b-form-group v-else>
            <base-login-input-group/>
            <div class="has-user" @click="t = 'register'">
                <span>注册</span>
            </div>
        </b-form-group>
    </div>
</template>

<script>
    import RegisterInputGroup from "./BaseRegisterInputGroup";
    import BaseLoginInputGroup from "./BaseLoginInputGroup";

    export default {
        name: "BaseRegisterModel",
        components: {BaseLoginInputGroup, RegisterInputGroup},
        props: ['id', 'type'],
        data() {
            return {
                //注册或登录
                t: this.type,

            }
        },

        methods: {},
        created() {

        }
    }
</script>

<style scoped>
    .input-box {
        margin-bottom: 10px;
    }

    .input-box input {
        font-size: 14px;
    }

    .reg-btn {
        padding-top: 10px;
    }

    .has-user {
        margin-top: 15px;
        text-align: center;
        font-size: 15px;
        color: #007fff;
    }

    .has-user span:hover {
        cursor: pointer;
    }
</style>
