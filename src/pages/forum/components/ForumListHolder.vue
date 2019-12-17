<template>
    <div class="activity-skeleton Card">
        <div class="skeleton-row"></div>
        <div class="skeleton-row"></div>
        <div class="skeleton-row"></div>
        <div class="skeleton-row"></div>
    </div>
</template>

<script>
    export default {
        name: "ForumListHolder",
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
    .activity-skeleton {
        padding: 20px;
        background-color: #fff;
        border-radius: 0 0 2px 2px;
        overflow: hidden;
    }

    .skeleton-row {
        margin-bottom: 8px;
        height: 15px;
        background-color: #f3f3f3;
    }

    .activity-skeleton .skeleton-row {
        margin-bottom: 16px;
        background: linear-gradient(90deg, #fff, #edeff1, #fff);
        background-size: 480px 480px;
        animation: skeleton-stripes .6s linear infinite;
    }

    @-moz-keyframes skeleton-stripes {
        0% {
            background-position: 0 0
        }
        to {
            background-position: 480px 0
        }
    }

    @-webkit-keyframes skeleton-stripes {
        0% {
            background-position: 0 0
        }
        to {
            background-position: 480px 0
        }
    }

    @-o-keyframes skeleton-stripes {
        0% {
            background-position: 0 0
        }
        to {
            background-position: 480px 0
        }
    }

    @keyframes skeleton-stripes {
        0% {
            background-position: 0 0
        }
        to {
            background-position: 480px 0
        }
    }

    .activity-skeleton .skeleton-row:last-of-type {
        margin-bottom: 0;
    }

    .activity-skeleton .skeleton-row:first-of-type {
        width: 30%;
    }

    .activity-skeleton .skeleton-row:nth-of-type(2) {
        width: 80%;
    }

    .activity-skeleton .skeleton-row:nth-of-type(3) {
        width: 70%;
    }

    .activity-skeleton .skeleton-row:nth-of-type(4) {
        width: 60%;
    }
</style>
