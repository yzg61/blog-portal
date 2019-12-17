<template>
    <div>
        <forum-list :user-id="'userId'"/>
    </div>
</template>


<script>
    import ForumList from "../../../forum/components/ForumList";

    export default {
        name: "UserForums",
        components: {ForumList},
        props: [],
        data() {
            return {
                count: 0
            }
        },
        methods: {
            load() {
                this.count += 2
            }
        },
        created() {
            document.title = "用户x的个人主页 - 讨论 - 博客"

        }
    }
</script>

<style scoped>

</style>
