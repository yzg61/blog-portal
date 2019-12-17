<template>
    <span class="point">
        {{title}}
    </span>
</template>

<script>
    export default {
        name: "BaseLoadingPoint",
        props: {
            //loading的显示文字
            title: {
                type: String,
            }
        },
        data() {
            return {}
        },
        methods: {},
        created() {
        }
    }
</script>

<style scoped>
    .point:after {
        overflow: hidden;
        display: inline-block;
        vertical-align: bottom;
        animation: ellipsis 2s infinite;
        content: "\2026";
    }
    @keyframes ellipsis {
        from {
            width: 2px;
        }
        to {
            width: 15px;
        }
    }
</style>
