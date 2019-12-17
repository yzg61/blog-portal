<template>
  <div>
    user-message
  </div>
</template>

<script>
    export default {
        name: "MessageUser",
        props: [],
        data() {
            return {
                loading: false,
                hasNext: false,
                messages: [],
            }
        },
        methods: {
            getMessages() {
                this.messages = []
            },
            load() {

            }
        },
        created() {
            document.title = '用户消息 - 我的消息 - 博客'
        }
    }
</script>

<style scoped>

</style>
