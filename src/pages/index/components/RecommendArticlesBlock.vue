<template>
  <div class="hot-box Card">
    <div class="header">
      <div class="title">推荐文章</div>
    </div>
    <div class="article-list">
      <ul class="list">
        <li class="item">
          <router-link to="/article/1" class="item-link" target="_blank">
            <div>栈、堆、队列深入理解</div>
            <div class="item-action">
              <div>
                <svg class="icon like-icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan"></use>
                </svg>
                &nbsp;20
              </div>
              <div style="padding-left: 10px">
                <svg class="icon" aria-hidden="true" style="font-size: 14px;">
                  <use xlink:href="#icon-pinglun"></use>
                </svg>
                  12
              </div>
            </div>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/article/1" class="item-link" target="_blank">
            <div>栈、堆、队列深入理解，面试无忧</div>
            <div class="item-action">
              <div>
                <svg class="icon like-icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan"></use>
                </svg>
                &nbsp;20
              </div>
              <div style="padding-left: 10px">
                <svg class="icon" aria-hidden="true" style="font-size: 14px;">
                  <use xlink:href="#icon-pinglun"></use>
                </svg>
                12
              </div>
            </div>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/article/1" class="item-link" target="_blank">
            <div>栈、堆、队列深入理解，面试无忧</div>
            <div class="item-action">
              <div>
                <svg class="icon like-icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan"></use>
                </svg>
                &nbsp;20
              </div>
              <div style="padding-left: 10px">
                <svg class="icon" aria-hidden="true" style="font-size: 14px;">
                  <use xlink:href="#icon-pinglun"></use>
                </svg>
                12
              </div>
            </div>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/article/1" class="item-link" target="_blank">
            <div>栈、堆、队列深入理解，面试无忧</div>
            <div class="item-action">
              <div>
                <svg class="icon like-icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan"></use>
                </svg>
                &nbsp;20
              </div>
              <div style="padding-left: 10px">
                <svg class="icon" aria-hidden="true" style="font-size: 14px;">
                  <use xlink:href="#icon-pinglun"></use>
                </svg>
                12
              </div>
            </div>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/article/1" class="item-link" target="_blank">
            <div>栈、堆、队列深入理解，面试无忧</div>
            <div class="item-action">
              <div>
                <svg class="icon like-icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan"></use>
                </svg>
                &nbsp;20
              </div>
              <div style="padding-left: 10px">
                <svg class="icon" aria-hidden="true" style="font-size: 14px;">
                  <use xlink:href="#icon-pinglun"></use>
                </svg>
                12
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RecommendArticlesBlock",
        data() {
            return {
                articles:[]
            }
        },
        methods: {

        },
        created() {

        }
    }
</script>

<style scoped>
  .hot-box {
    background-color: #ffffff;
  }
  .header {
    height: 45px;
    line-height: 45px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
  }
  .title {
    font-size: 14px;
    flex-grow: 1;
    padding-right: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .article-list {

  }
  .article-list .list {
    margin: 0;
    padding: 0;
  }
  .article-list .list .item {
    padding: 10px 15px;
    border-bottom: 1px solid #f6f6f6;
  }
  .article-list .list .item:hover {
    background-color: #f9f9f9;
  }
  .item-link {
    color: #333333;
    font-size: 13px;
  }
  .item-action {
    color: #909090;
    margin-top: 5px;
    display: flex;
  }

</style>
