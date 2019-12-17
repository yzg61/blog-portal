<template>
    <div>
        <ul>
            <li v-for="tag in tags">
                <div class="img">
                    <img :src="tag.icon"/>
                </div>
                <div>
                    <div class="title">{{tag.title}}</div>
                    <div class="number">{{tag.followCount}}关注 · {{tag.entryCount}}文章</div>
                </div>
                <div class="btn">
                    <el-button size="mini" v-if="tag.isFollow" type="primary" plain>关注</el-button>
                    <el-button size="mini" v-else type="primary">已关注</el-button>
                </div>
            </li>
        </ul>
        <user-activities-list-holder v-if="loading"/>
        <div v-else-if="!hasNext">
            暂无数据
        </div>
    </div>
</template>

<script>
    import UserActivitiesListHolder from "../../users/components/activitites/UserActivitiesListHolder";
    export default {
        name: "TagsSearchResult",
        components: {UserActivitiesListHolder},
        props: {
            //查询关键字
            query: {
                type: String
            }
        },
        data() {
            return {
                tags: [],
                loading: false,
                hasNext: true,
            }
        },
        methods: {
            getTags() {
                this.tags = []
                this.load()
            },
            //加载标签列表
            load() {
                if (this.loading || !this.hasNext)
                    return;

                this.loading = true
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        const tag = {
                            id: Math.random() * i,
                            title: '标签名称' + i,
                            alias: 'english pinyin',
                            createdAt: 'xxx',
                            updateAt: 'xxx',
                            icon: 'https://lc-gold-cdn.xitu.io/279e631b065a5a31289f.png?imageView2/2/w/200/h/64/q/85/format/webp/interlace/1',
                            isFollow: i % 2 === 0,
                            followCount: 29 * i  + 10086,
                            entryCount: 31 * i * i + 10086,
                        }
                        this.tags.push(tag)
                    }

                    this.loading = false
                }, 500)
            },
        },
        created() {
            this.getTags()
        }
    }
</script>

<style scoped>

    ul {
        padding: 0;
        margin: 0;
    }
    ul li {
        display: flex;
        width: 100%;
        align-items: center;
        padding: 20px;
    }
    ul li:not(:last-child) {
        border-bottom: 1px solid rgba(178,186,194,.15);
    }

    ul li .img {
        margin-right: 20px;
    }
    ul li .img img {
        width: 70px;
    }
    ul li .title {
        font-size: 16px;
        font-weight: 600;
    }

    ul li .number {
        font-size: 14px;
    }

    ul li .btn {
        margin-left: auto;
    }
</style>
