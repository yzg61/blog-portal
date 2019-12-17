<template>
    <div>
        <tags-list type="subscribed" sort="new"/>
    </div>
</template>

<script>
    import TagsList from "../components/TagsList";
    export default {
        name: "SubscribedTags",
        components: {TagsList},
        props: [],
        data() {
            return {}
        },
        methods: {},
        created() {
            document.title = '已关注标签 - 标签 - 博客'
        }
    }
</script>

<style scoped>

</style>
