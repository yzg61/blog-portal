<template>
    <div class="tags-list">
        <div
            class="item"
            v-for="tag in tags"
        >
            <div class="box">
                <div
                    style="cursor: pointer"
                    @click="handleClickTag(tag)"
                >
                    <div class="img">
                        <img
                            style="height: 32px;"
                            :src="tag.icon"
                            :alt="tag.title"
                        />
                    </div>
                    <div class="title">{{tag.title}}</div>
                </div>

                <div class="number">
                    <span>{{tag.followCount}}</span>&nbsp;关注
                    <span>{{tag.entryCount}}</span>&nbsp;文章
                </div>
                <div>
                    <el-button
                        v-if="tag.isFollow"
                        @click="handleDisFollow(tag)"
                        size="mini"
                        type="primary"
                    >
                        已关注
                    </el-button>
                    <el-button
                        v-else
                        @click="handleFollow(tag)"
                        size="mini"
                        type="primary"
                        plain
                    >
                        关注
                    </el-button>
                </div>
            </div>
        </div>
        <div
            v-if="loading"
            class="loading"
        >
            <base-loading-point title="加载中"/>
        </div>
        <div v-else-if="tags.length === 0">
            没有数据
        </div>
    </div>
</template>

<script>
    import BaseLoadingPoint from "../../../components/holder/BaseLoadingPoint";

    export default {
        name: "TagsList",
        components: {BaseLoadingPoint},
        props: {
            //标签列表类型
            type: {
                type: String,
                default: 'all',//默认为所有标签
                validator: function (value) {
                    return ['all', 'subscribed', ].indexOf(value) !== -1
                }
            },
            //排序方式
            sort: {
                type: String,
                default: 'hot',//默认为按热度排序
                validator: function (value) {
                    return ['hot', 'new', ].indexOf(value) !== -1
                }
            },
            //查询关键字符串
            query: {
                type:String
            }
        },
        data() {
            return {
                loading: false,
                hasNext: true,
                tags: [],
            }
        },

        watch: {

            'sort'(value) {
                this.push()
                this.getTags()
            },

            'query'(value) {
                this.push()
                this.getTags()
            },
        },

        methods: {
            //刷新地址栏url
            push() {
                let query = {};
                if (this.sort !== '') {
                    query.sort = this.sort
                }
                if (this.query !== '') {
                    query.query = this.query
                }
                this.$router.push({
                    name: this.$route.name,
                    query: query
                })
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
                            followCount: 29 * i * i + 10086,
                            entryCount: 31 * i * i + 10086,
                        }
                        this.tags.push(tag)
                    }

                    this.loading = false
                }, 500)
            },
            //初始化标签列表
            getTags() {
                this.tags = []
                this.load()
            },
            //点击单个标签
            handleClickTag(tag) {
                this.$router.push({
                    name: 'articlesByTag',
                    params: {
                        id: tag.id
                    }
                })
            },
            //关注标签
            handleFollow(tag) {
                console.log('follow', tag)

            },
            //取消关注标签
            handleDisFollow(tag) {
                console.log('disfollow', tag)

            },
        },
        created() {
            this.getTags()
        }
    }
</script>

<style scoped>

    .loading {
        text-align: center;
        padding: 25px 0;
        font-size: 16px;
        color: #909090;
    }

    .tags-list {
        padding: 0 15px;
    }

    .tags-list .item {
        float: left;
    }

    .box {
        margin: 0 10px 20px 10px;
        padding: 20px 0;
        border: 1px solid #f1f1f1;
        text-align: center;
    }

    @media (max-width: 600px) {
        .tags-list {
            padding: 0 5px;
        }

        .box {
            margin: 0 5px 20px 5px;
        }
    }

    .img {
        margin: 10px 0;
    }

    .title {
        color: #333333;
        font-size: 18px;
        font-weight: 500;
    }

    .number {
        color: #909090;
        font-size: 14px;
        margin-bottom: 10px;
    }

    @media (min-width: 760px) {
        .tags-list .item {
            width: 25%;
        }
    }

    @media (max-width: 760px) {
        .tags-list .item {
            width: 50%;
        }
    }
</style>
