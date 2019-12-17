<template>
  <div class="Card nav-list">
    <div class="item"
         v-for="(nav, index) in navList"
         :class="{'active' : type === nav.name}"
         :key="nav.name"
         @click="handleChange(nav)"
    >
      <router-link :to="nav.path">
        <div class="title">
          {{nav.title}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ForumLeftNav",
        props: ['type'],
        data() {
            return {
                navList:[
                    {
                        name: 'recommend',
                        path: '/forum/recommend',
                        title: '推荐'
                    },
                    {
                        name: 'follow',
                        path: '/forum/follow',
                        title: '关注'
                    },
                    {
                        name: 'hot',
                        path: '/forum/hot',
                        title: '热门'
                    },
                ],
            }
        },
        methods: {
            handleChange(nav) {
                this.$emit('change', nav.name)
                document.title = nav.title + " - 讨论 - 博客"
            }
        },
        created() {
        },
    }
</script>

<style scoped>
  .nav-list {
    padding: 10px;
    font-size: 14px;
  }
  .nav-list .item {
    text-align: center;
    margin-bottom: 5px;
    margin-top: 5px;
    border-radius: .25rem;
    transition: background-color .2s,color .2s;
  }
  .nav-list .item:hover {
    cursor: pointer;
  }
  .nav-list .item:not(.active):hover {
    background-color: #f1f1f1;
    color: #007fff;
  }
  .nav-list .item .title {
    padding: 5px;
  }
  .nav-list .active {
    background-color: #007fff;
  }
  .nav-list .active .title {
    color: #fff;
  }
</style>
