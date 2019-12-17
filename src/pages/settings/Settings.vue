
<!--用户设置界面主组件-->
<template>
  <div>
    <my-header/>
    <main>
      <b-container class="Card" style="padding: 25px;max-width: 640px;">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="个人资料" name="profile"/>
          <el-tab-pane label="修改密码" name="password"/>
        </el-tabs>
        <router-view/>
      </b-container>
    </main>
  </div>
</template>

<script>
  import MyHeader from "../../components/BaseHeader";

  export default {
    name: "Settings",
    components: {MyHeader},
    props: [],
    data() {
      return {
        activeName: this.$route.name,
      }
    },
    methods: {
      handleClick(key) {
        if (key.name !== this.$route.name)
          this.$router.push({name: key.name})
      }
    },
    created() {
    }
  }
</script>

<style scoped>

</style>
