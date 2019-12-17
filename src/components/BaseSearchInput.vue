<template>
    <div>
        <!--    大屏-->
        <el-input
            class="search-input hidden-sm-and-down"
            size="mini"
            maxlength="15"
            @focus="search=true" @blur="search=false"
            @keydown.enter.native="toSearch(key)"
            v-model="key"
            placeholder="搜索博客"
            :class="{'search-input-open':search}"
        >
            <i
                slot="suffix"
                :class="{'active':search}"
                @click="toSearch(key)"
                class="el-input__icon el-icon-search search-icon"
            />
        </el-input>
        <!--    小屏-->
        <el-input
            class="search-input hidden-md-and-up"
            :class="{'search-input-open':search}"
            maxlength="15"
            size="small"
            @focus="search=true"
            @blur="search=false"
            @keydown.enter.native="toSearch(key)"
            v-model="key"
            placeholder="搜索博客"
        >
            <i
                slot="suffix"
                :class="{'active':search}"
                @click="toSearch(key)"
                class="el-input__icon el-icon-search search-icon"
            />
        </el-input>
    </div>
</template>

<script>
    export default {
        name: "BaseSearchInput",
        data() {
            return {
                key: '',
                search: false
            }
        },
        methods: {
            toSearch(key) {//跳转搜索页面
                if (key.length > 0 && this.$route.query.key !== this.key) {
                    this.$router.push({
                        name: 'search',
                        query: {
                            key: this.key
                        }
                    })
                }
            },
        },
        created() {

        }
    }
</script>

<style scoped>

    @media (min-width: 991px) {
        .search-input {
            width: 120px;
            transition: all 0.2s;
        }
        .search-input-open {
            width: 200px;
        }
    }

    @media (max-width: 991px) {
        .search-input {
            width: 100px;
        }
        .search-input-open {
            z-index: 2000;
            position: absolute;
            top: 12px;
            left: 0;
            width: 100%;
            padding: 0 5px;
            transition: all .3s ease-in;
        }
    }

    .search-icon {
        font-size: 14px;
        cursor: pointer;
        font-weight: 700;
    }
</style>
