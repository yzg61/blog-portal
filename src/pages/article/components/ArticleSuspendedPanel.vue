<template>
    <div class="panel">
        <!--    大屏幕在固定在文章左侧-->
        <div class="hidden-sm-and-down left">
            <!--      点赞-->
            <div class="item" :badge="160">
                <svg class="icon like-icon" aria-hidden="true">
                    <use xlink:href="#icon-dianzan"/>
                </svg>
            </div>
            <!--      评论-->
            <div class="item" :badge="100" @click="toComment">
                <svg class="icon comment-icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"/>
                </svg>
            </div>
            <!--      收藏-->
            <div class="item" :badge="80">
                <svg class="icon comment-icon" aria-hidden="true" style="font-size: 17px;">
                    <use xlink:href="#icon-shoucang-"/>
                </svg>
            </div>
        </div>
        <!--    小屏幕固定在底部-->
        <div class="hidden-md-and-up button">
            <div class="button-list">
                <!--        点赞-->
                <div class="item">
                    <div class="box active">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-dianzan"/>
                        </svg>
                        <span>30</span>
                    </div>
                </div>
                <!--        评论-->
                <div class="item">
                    <div class="box">
                        <svg class="icon" aria-hidden="true" @click="toComment">
                            <use xlink:href="#icon-pinglun"/>
                        </svg>
                        <span>30</span>
                    </div>
                </div>
                <!--        收藏-->
                <div class="item">
                    <div class="box">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shoucang-"/>
                        </svg>
                        <span>收藏</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleSuspendedPanel",
        props: ['show', 'likeCount', 'commentCount', 'collectCount'],
        data() {
            return {}
        },
        methods: {
            toComment() {//去评论
                window.location.hash = ""
                window.location.hash = "#comments"
            }
        },
        created() {

        }
    }
</script>

<style scoped>


    .left {
        top: 250px;
        position: fixed;
        margin-left: -65px;
    }

    .left .item {
        margin-bottom: 20px;
        width: 35px;
        height: 35px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04);
        cursor: pointer;
        display: flex;
        color: #b2bac2;
    }

    .left .item:hover {
        color: rgb(140, 148, 156);
    }

    .left .item:after {
        content: attr(badge);
        position: absolute;
        left: 75%;
        padding: .1rem .4rem;
        font-size: 1rem;
        text-align: center;
        line-height: 1;
        white-space: nowrap;
        color: #fff;
        background-color: #b2bac2;
        border-radius: .7rem;
        transform-origin: left top;
        transform: scale(.75);
    }

    .icon {
        margin: auto;
        font-size: 16px;
    }

    .button {
        position: fixed;
        bottom: -1px;
        z-index: 1000;
        width: 100%;
        background-color: #ffffff;
    }

    .button-list {
        display: flex;
        border-top: 1px solid #f1f1f1;
        background-color: #ffffff;
        height: 45px;
    }

    .button-list .item:not(:last-child):after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -1rem;
        width: 1px;
        height: 35px;
        background-color: #ebebeb;
    }

    .button-list .item {
        flex: 1 1 33.333%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 100%;
        cursor: pointer;
        user-select: none;
        font-size: 13px;
        color: #8a93a0;
    }

    .button-list .item .box {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button-list .item .box .icon {
        font-size: 16px;
    }
</style>
