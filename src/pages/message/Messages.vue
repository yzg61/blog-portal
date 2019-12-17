<template>
  <div>
    <my-header/>
    <main>
      <b-container style="padding: 0;max-width: 960px">
        <b-col cols="12" lg="9" class="Card">
          <el-tabs v-model="activeName" @tab-click="handleSelect">
            <el-tab-pane label="用户消息" name="messages"/>
            <el-tab-pane label="系统通知" name="messageSystem"/>
          </el-tabs>
          <router-view/>
        </b-col>

      </b-container>
    </main>
  </div>
</template>

<script>
    import MyHeader from "../../components/BaseHeader";
    import MessageUser from "./components/MessageUser";
    import MessageSystem from "./components/MessageSystem";
    import BaseHeaderNavigation from "../../components/BaseHeaderNavigation";
    export default {
        name: "Messages",
        components: {BaseHeaderNavigation, MessageSystem, MessageUser, MyHeader},
        props: [],
        data() {
            return {
                activeName: this.$route.name
            }
        },
        methods: {
            handleSelect(tab) {
                if (this.$route.name !== tab.name)
                    this.$router.push({name: tab.name})
            },

        },
        created() {
            document.title = '我的消息 - 博客'
        }
    }
</script>

<style scoped>

</style>
