<template>
    <div>
        <!--    回到顶部按钮-->
        <div class="suspension-panel suspension-panel">
            <button
                title="回到顶部"
                class="btn to-top-btn"
                id="topBtn"
                @click="backTop"
                v-show="isShow"
            >
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yooxi"/>
                </svg>
            </button>
            <button title="建议反馈" class="btn hidden-xs-only" style="">
                <svg class="icon active" aria-hidden="true">
                    <use xlink:href="#icon-pinglun1"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "backAppBackTop",
        data() {
            return {
                isShow: false,
                timer: null,
                isTop: true,
            }
        },
        mounted() {
            window.addEventListener('scroll', this.scrollToTop)
        },
        destroyed() {
            window.removeEventListener('scroll', this.scrollToTop)
        },


        methods: {
            // 点击图片回到顶部方法，加计时器是为了过渡顺滑
            backTop() {
                //设置一个定时器
                this.timer = setInterval(() => {
                    //获取滚动条的滚动高度
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    //用于设置速度差，产生缓动的效果
                    let speed = Math.floor(-osTop / 2);
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
                    //用于阻止滚动事件清除定时器
                    this.isTop = true;
                    if (osTop === 0) {
                        clearInterval(this.timer);
                    }
                }, 20);
            },

            // 为了计算距离顶部的高度，当高度大于250显示回顶部图标，小于250则隐藏
            scrollToTop() {
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                this.isShow = this.scrollTop > 250;
                //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
                if (!this.isTop) {
                    clearInterval(this.timer);
                }
                this.isTop = false;
            }
        },

    }
</script>

<style scoped>
    .suspension-panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        position: fixed;
        right: 1.4rem;
        bottom: 3.8rem;
        z-index: 1001;
    }

    .suspension-panel .btn {
        margin: 0.7rem 0 0;
        padding: 0;
        width: 2.33rem;
        height: 2.33rem;
        line-height: 1;
        color: #909090;
        background-color: #fff;
        border: 1px solid #f1f1f1;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(0, 0, 0, .05);
        cursor: pointer;
    }

    .suspension-panel .to-top-btn {
        font-size: 1.2rem;
    }

</style>
