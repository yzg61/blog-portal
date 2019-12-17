<template>
  <div>
    collections
  </div>
</template>

<script>
    export default {
        name: "UserCollections",
        props: [],
        data() {
            return {
                collections: [],
                loading: false,
                hasNext: true,

            }
        },
        methods: {
            load() {
                this.loading = true

                setTimeout(()=> {

                    this.loading = false
                },500)
            },

            getCollections() {
                this.collections = []
                this.load()
            }
        },
        created() {
            document.title = "用户x的个人主页 - 收藏 - 博客"
            this.getCollections()
        }
    }
</script>

<style scoped>

</style>
