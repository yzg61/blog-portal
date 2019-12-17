<template>
    <div>
        <div class="header">
            <div class="logo">
                Blog
            </div>
            <el-popover
                class="submit"
                placement="bottom"
                title="发布文章"
                width="300"
                trigger="click"
                @show="SubmitPopoverShow = true"
            >
                <submit-popover v-if="SubmitPopoverShow"/>
                <el-button type="primary" size="small" slot="reference">发布</el-button>
            </el-popover>
        </div>
        <b-container style="max-width: 720px">
            <div class="title-input">
                <input
                    placeholder="请填写标题..."
                    v-model="title"
                />
            </div>
            <div>正文：</div>
            <drafts-new-wang-editor class="content" :isClear="isClear" @change="change" :value="content"/>
        </b-container>
        <back-top/>
    </div>
</template>

<script>
    import DraftsNewWangEditor from "./components/DraftsNewWangEditor";
    import BackTop from "../../components/AppBackTop";
    import SubmitPopover from "./components/DraftsNewSubmitPopover";

    export default {
        name: "NewDraft",
        components: {SubmitPopover, BackTop, DraftsNewWangEditor},
        props: [],
        data() {
            return {
                isClear: false,
                title: "",
                content: "",
                SubmitPopoverShow: false,
                isNewDraft: this.$route.name === 'newDraft',
                id: this.$route.params.id
            }
        },
        methods: {
            change(val) {
                console.log(val)

            },

            //更新当前草稿
            updateDraft() {

            },

            //保存并新建草稿
            saveDraft() {
                this.isNewDraft = false

            },

            //加载指定草稿
            getDraft(id) {

            },

        },
        created() {
            document.title = "写文章 - 博客"
            //如果不是新建草稿，先获取指定草稿的数据
            if (!this.isNewDraft) {
                console.log("加载草稿...")
                this.getDraft(this.id)
            }
        },
    }
</script>

<style scoped>
    body {
        background-color: #fff;
    }

    .content {
    }

    .title-input {
        padding-top: 85px;
        margin-right: 20px;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    .title-input input {
        width: 100%;
        border: 0;
        outline: none;
        background-color: rgba(0, 0, 0, 0);
        font-size: 2rem;
        font-weight: 700;
    }

    .header {
        position: fixed;
        display: flex;
        margin-top: 15px;
        width: 100%;
        top: 0;
        z-index: 1000;
        max-width: 960px;
    }

    .logo {
        margin-left: auto;
        margin-right: auto;
    }
    .submit {
        margin-right: 15px;
    }
</style>
