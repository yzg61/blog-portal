<template>
  <div class="Card">
    <div class="follow-box">
      <router-link :to="'/users/'+id+'/follow?type=following'" class="follow-item">
        <div>关注了</div>
        <div class="follow-count">10</div>
      </router-link>
      <router-link :to="'/users/'+id+'/follow?type=follower'" class="follow-item">
        <div>关注者</div>
        <div class="follow-count">20</div>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserFollowsBlock",
        props: ['id'],
        data() {
            return {
            }
        },
        methods: {},
        created() {
        }
    }
</script>

<style scoped>
  .follow-box {
    display: flex;
  }
  .follow-item {
    text-align: center;
    flex: 1 1 auto;
    padding: 20px 0;
    font-size: 16px;
    cursor: pointer;
    color: #0b2e13;
  }
  .follow-item:hover {
    color: rgba(11, 46, 19, 0.8);
  }
  .follow-item .follow-count {
    font-weight: 700;
  }
  .follow-box:after {
    content: "";
    position: absolute;
    top: 38%;
    left: 50%;
    width: 1px;
    height: 50%;
    background-color: #f3f3f4;
    transform: translate(-50%,-50%);
  }
</style>
