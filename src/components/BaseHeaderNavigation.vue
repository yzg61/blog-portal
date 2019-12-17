<template>
  <div class="navigation">
    navigation
  </div>
</template>

<script>
    export default {
        name: "BaseHeaderNavigation",
        props: [],
        data() {
            return {}
        },
        methods: {},
        created() {
        }
    }
</script>

<style scoped>
  .navigation {
    background-color: #ffffff;
    position: fixed;
    top: 56px;
    width: 100%;
    height: 40px;
    z-index: 100;
  }
</style>
