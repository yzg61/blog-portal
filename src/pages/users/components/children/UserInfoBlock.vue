<template>
  <div class="Card user-info">
    <div style="display: flex;">
      <div class="user-avatar">
        <el-avatar :size="90"></el-avatar>
      </div>
      <div class="info-box">
        <div class="username">
          用户名111
        </div>
        <div class="outline">
          这个人很懒，什么都没有写
        </div>
      </div>
      <div class="action-box hidden-sm-and-down">
        <div></div>
        <div class="setting-btn">
          <router-link to="/user/settings/profile">
            <el-button plain type="primary" size="medium">编辑个人资料</el-button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="hidden-md-and-up md-info-box">
      <div class="stat-item">
        <div>12</div>
        <div>关注</div>
      </div>
      <div class="stat-item">
        <span>13</span>
        <span>关注者</span>
      </div>
      <div class="stat-item">
        <span>10</span>
        <span>讨论</span>
      </div>
      <div class="stat-btn">
        <router-link to="/user/settings/profile">
          <el-button plain type="primary" size="mini">设置</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserInfoBlock",
        props: ['id','user'],
        data() {
            return {
            }
        },
        methods: {

        },
        created() {
        }
    }
</script>

<style scoped>
  .user-info {
    padding: 30px;
  }

  .user-avatar {
    flex: 0 0 auto;
    margin-right: 35px;
  }
  .info-box {
    flex: 1 1 auto;
  }
  .username {
    font-size: 26px;
    font-weight: 700;
  }
  .outline {
    margin-top: 10px;
    font-size: 16px;
    color: #72777b;
  }
  .action-box {
    margin-left: auto;
    display: grid;
  }
  .setting-btn {
    margin-top: auto;
  }
  .md-info-box {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
  .stat-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 25%;
    font-size: 15px;
    color: #31455d;
  }

  .stat-btn {
    width: 25%;
    text-align: center;
  }
</style>
