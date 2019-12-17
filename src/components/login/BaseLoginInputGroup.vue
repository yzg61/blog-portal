<!--用户登录表单-->

<template>
  <div class="input-group">
    <div class="input-box">
      <el-input placeholder="用户名" v-model="user.username"/>
    </div>
    <div class="input-box">
      <el-input type="password" placeholder="密码" v-model="user.password"/>
    </div>
    <div class="reg-btn">
      <el-button type="primary" :loading="loading" @click="handleLogin" style="width: 100%">登录</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BaseLoginInputGroup",
    props: [],
    data() {
      return {
        user: {
          username: '',
          password: '',
        },
        loading: false,
      }
    },
    methods: {
      handleLogin() {
        if (this.loading)
          return;

        this.loading = true
        setTimeout(()=>{
          this.loading = false
        },500)
      }
    },
    created() {
    }
  }
</script>

<style scoped>

  .input-box {
    margin-bottom: 10px;
    width: 100%;
  }

  .reg-btn {
    width: 100%;
    height: 35px;
    font-size: 15px;
  }
</style>
