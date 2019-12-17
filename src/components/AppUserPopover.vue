<template>
  <div>
<!--    显示头像-->
    <div v-if="type === 'head'">
      <!--          大屏下悬停显示详情-->
      <el-popover class="hidden-xs-only"
                  placement="bottom"
                  @show="show"
                  width="267"
                  :open-delay="500"
                  :close-delay="200"
                  trigger="hover">
        <user-popover-info :user-id="user.id" :show="s"/>
        <span class="user-avatar" slot="reference" @click="toUser">
          <el-avatar :size="size" :src="user.avatar"/>
        </span>
      </el-popover>
      <!--          小屏下不显示详情-->
      <span class="user-avatar hidden-sm-and-up" slot="reference" @click="toUser">
        <el-avatar :size="size" :src="user.avatar"/>
      </span>
    </div>
<!--    显示用户名-->
    <div v-if="type === 'name'">
      <!--          大屏下悬停显示详情-->
      <el-popover class="hidden-xs-only"
                  placement="bottom"
                  @show="show"
                  width="267"
                  :open-delay="500"
                  :close-delay="500"
                  trigger="hover">
        <user-popover-info :user-id="user.id" :show="s"/>
        <span slot="reference" @click="toUser">{{user.username}}</span>
      </el-popover>
      <!--          小屏下不显示详情-->
      <span class="hidden-sm-and-up" slot="reference" @click="toUser">
        {{user.username}}
      </span>
    </div>
  </div>
</template>

<script>
    import UserPopoverInfo from "./AppUserPopoverInfo";
    export default {
        name: "AppUserPopover",
        components: {UserPopoverInfo},
        props: ['type','user','size'],
        data() {
            return {
                s: false,
            }
        },
        methods: {
            show() {
                console.log('show')
                this.s = true
            },
            toUser() {
                //跳转到用户主页
                const { href } = this.$router.resolve({name: 'users', params:{id: this.user.id}});
                window.open(href, '_blank');
            }
        }
    }
</script>

<style scoped>
span:hover {
  cursor: pointer;
}
</style>
