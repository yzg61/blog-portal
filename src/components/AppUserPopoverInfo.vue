<template>
  <div class="user-popover">
    <div class="user-header">
      <div class="avatar">
        <el-avatar :size="60" :src="user.avatar"></el-avatar>
      </div>
      <div class="username-box">
        <div class="username">
          {{user.username}}
        </div>
        <div class="job-title">
          {{user.jobTitle}}
        </div>
      </div>
    </div>
    <div class="user-follow">
      <div class="follow-box">
        <div class="nums">{{user.follows}}</div>
        <div class="name">关注</div>
      </div>
      <div class="follow-box">
        <div class="nums">{{user.fans}}</div>
        <div class="name">关注者</div>
      </div>
      <div class="follow-btn">
        <el-button type="primary" :plain="!user.isFollow" size="small">
          <template v-if="user.isFollow" @click="Follow(user.id)">
            已关注
          </template>
          <template v-else @click="unFollow(user.id)">
            关注
          </template>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AppUserPopoverInfo",
        props: ['userId','show'],
        data() {
            return {
                user:{}
            }
        },
        watch: {
          'show': function (value) {
              this.getUserInfo()
          }
        },
        methods: {
            getUserInfo() {
                console.log('getUserInfo')
                this.user = {
                    id: 10086,
                    username: '用户10086',
                    avatar: 'https://user-gold-cdn.xitu.io/2019/7/19/16c099d776dfbb0f?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                    jobTitle: '一句话描述',
                    follows: 20,
                    fans: 18,
                    isFollow: false,
                }
            },
            follow(id) {//关注用户

            },
            unFollow(id) {//取消关注用户

            }
        },
        created() {

        }
    }
</script>

<style scoped>
  .user-header {
    display: flex;
    margin-bottom: 10px;
  }
  .avatar {
    margin: 5px;
  }
  .username-box {
    margin-top: 10px;
    margin-left: 10px;
    height: 100%;
    margin-bottom: 0;
  }
  .username {
    color: #333;
  }
  .job-title {
    color: #8a9aa9;
    margin-top: 12px;
    font-size: 13px;
  }
  .user-follow {
    display: flex;
  }
  .follow-box {
    text-align: center;
    padding-right: 15px;
    padding-left: 15px;
  }
  .follow-box .nums {
    color: #333;
    font-weight: 700;
    font-size: 18px;
  }
  .follow-box .name {
    margin-top: 5px;
    color: #8a9aa9;
  }
  .follow-btn {
    margin: auto 0 0 auto;
    vertical-align:middle;
  }
</style>
