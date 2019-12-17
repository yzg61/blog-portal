<template>
    <div>
        <base-header/>
        <main>
            <b-container class="Card" style="padding: 0;max-width: 960px">
                <el-tabs
                    class="tags-box"
                    v-model="activeName"
                    @tab-click="handleClick"
                >
                    <el-tab-pane label="已关注标签" name="subscribedTags"/>
                    <el-tab-pane label="全部标签" name="allTags"/>
                </el-tabs>
                <router-view/>
            </b-container>
        </main>
        <base-footer/>
    </div>

</template>

<script>
    import TagsList from "./components/TagsList";
    import BaseHeader from "../../components/BaseHeader";
    import BaseFooter from "../../components/BaseFooter";

    export default {
        name: "Tags",
        components: {BaseFooter, BaseHeader, TagsList},
        props: [],
        data() {
            return {
                //导航栏中被选中的选项
                activeName: this.$route.name,
                //排序方式
                sort: this.$route.query.sort,
                //搜索关键字
                queryInput: this.$route.query.query,
                query: this.$route.query.query,
            }
        },
        methods: {
            //点击导航栏切换选项
            handleClick(key) {
                if (this.$route.name !== key.name) {
                    this.$router.push({name: key.name})
                }
            },

        },
        created() {
        }
    }
</script>

<style scoped>
    .header-ul {

    }

    .header-ul li {
        font-size: 15px;
        margin: 0 10px;
    }

    .header-ul li a:hover {
        color: #007fff;
    }

    .tags-box {
        padding: 25px 25px 0 25px;
    }

    @media (max-width: 600px) {
        .tags-box {
            padding: 0 10px;
        }

    }


</style>
