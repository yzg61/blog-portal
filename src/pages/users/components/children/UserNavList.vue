<template>
  <div class="">
    <div class="header" style="margin-bottom: 0;">
      <router-link
        class="item"
        v-for="(nav,index) in navList"
        :to="nav.path"
        :key="nav.path"
        :class="{'active':$route.path === nav.path || ($route.name === 'users' && index === 0)}"
      >{{nav.name}}</router-link>
    </div>
    {{location}}
    <router-view/>

  </div>
</template>

<script>
    export default {
        name: "UserNavList",
        props: ['id','location'],
        data() {
            return {
                navList: [
                    {
                        path: '/users/'+this.id+'/activities',
                        name: '动态'
                    },
                    {
                        path: '/users/'+this.id+'/forums',
                        name: '讨论'
                    },
                    {
                        path: '/users/'+this.id+'/follow',
                        name: '关注'
                    },
                    {
                        path: '/users/'+this.id+'/collections',
                        name: '收藏'
                    }
                ]
            }
        },
        methods: {

        },
        created() {
        }
    }
</script>

<style scoped>
  .header {
    display: flex;
    background-color: #ffffff;
    border-bottom: 1px solid #ebebeb;
    height: 45px;
    align-items: center;
    max-width: 960px;
    white-space: nowrap;
    position: relative;
  }
  .header .item {
    display: flex;
    font-size: 16px;
    font-weight: 500;
    width: 75px;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .active {
    box-shadow: inset 0 -2px 0 #3780f7;
  }

</style>
