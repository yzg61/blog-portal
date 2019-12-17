<template>
  <div id="catalog" :class="{'top':top,'catalog':active}">
    目录
    <div>目录1</div>
    <div>目录2</div>
    <div>目录3</div>
    <div>目录4</div>
    <div>目录5</div>
    <div>目录6</div>
  </div>
</template>

<script>
    export default {
        name: "ArticleCatalogPanel",
        props: ['top'],
        data() {
            return {
                active: false
            }
        },
        methods: {},
        created() {
        },
        mounted() {
            let height = document.querySelector("#catalog").offsetTop
            document.addEventListener("scroll",()=>{
                this.active = document.documentElement.scrollTop > height;
            },false);
        }
    }
</script>

<style scoped>
  .catalog {
    position: fixed;
    top: 75px;
    transition: all .3s ease-in-out;
  }

  .top {
    top: 25px;
  }
</style>
