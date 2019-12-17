<template>
    <div class="input-group">
        <div class="input-box">
            <el-input :size="size" placeholder="用户名" v-model="user.username"/>
        </div>
        <div class="input-box">
            <el-input :size="size" placeholder="邮箱" v-model="user.email"/>
        </div>
        <div class="input-box">
            <el-input :size="size" type="password" placeholder="密码(不少于6位)" v-model="user.password"/>
        </div>
        <transition name="slide-fade">
            <div class="input-box" v-if="user.password.length > 0">
                <el-input :size="size" type="password" placeholder="确认密码" v-model="confirmPwd"/>
            </div>
        </transition>
        <div class="reg-btn">
            <el-button type="primary" :size="size" @click="handleRegister" style="width: 100%">立即注册</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseRegisterInputGroup",
        props: ['size'],
        data() {
            return {
                user: {
                    username: '',
                    email: '',
                    password: '',
                },
                confirmPwd: '',
                loading: false,
            }
        },
        methods: {
            handleRegister() {
                console.log("点击注册")
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }

    .input-box {
        margin-bottom: 10px;
        width: 100%;
    }

    .reg-btn {
        width: 100%;
        height: 35px;
    }
</style>
