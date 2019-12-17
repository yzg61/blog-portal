<template>
    <div class="drafts-list">
        <ul class="list">
            <li
                class="item"
                v-for="it in draftsList"
                :key="it.id"
            >
                <div>
                    <router-link :to="'/drafts/' + it.id">
                        <span class="title">{{it.title}}</span>
                    </router-link>
                </div>
                <div class="time">
                    {{it.updatedAt}}
                    &nbsp;&nbsp;
                    <el-dropdown trigger="click" size="small" @command="handleCommand">
                      <span class="el-dropdown-link"><i class="el-icon-more more-icon"/></span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item :command="{method: 'Delete', params: it}">
                                删除
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "DraftsList",
        props: {
        },
        data() {
            return {
                draftsList: [],
                hasNext: true,
                loading: false,
            }
        },
        methods: {
            getDraftsList() {
                this.draftsList = []
                this.load()
            },

            load() {
                if (!this.hasNext || this.loading)
                    return;
                this.loading = true
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        const draft = {
                            id: Math.random(),
                            title: '草稿的标题' + i,
                            updatedAt: '2019-11-18T02:14:16.781Z',
                            createdAt: '2019-11-18T02:14:16.781Z',
                        }
                        this.draftsList.push(draft)
                    }
                    this.loading = false
                }, 500)
            },

            handleCommand(val) {
                this['handle' + val.method](val.params)
            },

            handleDelete(it) {
                console.log('delete' + it.id)
            },

            //滚动加载更多
            scrollGetMore() {
                const st = this.$utils.getScrollTop();
                const wh = this.$utils.getWindowHeight();
                const sh = this.$utils.getScrollHeight();
                if (200 + st + wh > sh) {
                    this.load()
                }

            }
        },

        created() {
            this.getDraftsList()
        },

        mounted() {
            window.addEventListener('scroll', this.scrollGetMore)
        },

        destroyed() {
            window.removeEventListener('scroll', this.scrollGetMore)
        },
    }
</script>

<style scoped>
    .drafts-list {
        padding: 0 10px;
    }

    .list {
        margin: 0;
        padding: 0;
    }

    .item {
        padding: 20px 15px;
        border-top: 1px solid rgba(0, 0, 0, .05);
    }

    .title {
        font-size: 15px;
        font-weight: 700;
        color: #0b2e13;
    }

    .time {
        color: #909090;
        font-size: 14px;
        padding-top: 10px;
    }
</style>
