<template>
    <div>
        <my-header @pin="headerShow = true" @unpin="headerShow = false"/>
        <main>
            <b-container>
                <b-row>
                    <div class="left-nav hidden-sm-and-down" style="width: 120px;"
                         :class="{'left-nav-top':!headerShow}">
                        <!--            左侧导航栏-->
                        <left-nav :type="type"/>
                    </div>
                    <div class="hidden-sm-and-down" style="width: 120px;"></div>
                    <div class="forum-main">
                        <forum-editor class="Card hidden-sm-and-down"/>
                        <forum-list :sort="type"/>
                    </div>
                    <aside class="forum-aside hidden-sm-and-down">
                        <user-info-section/>
                        <register-section/>
                    </aside>
                </b-row>

            </b-container>
        </main>
        <my-footer/>
    </div>
</template>

<script>
    import MyHeader from "../../components/BaseHeader";
    import MyFooter from "../../components/BaseFooter";
    import ForumEditor from "./components/ForumEditor";
    import ForumList from "./components/ForumList";
    import RegisterSection from "../../components/login/BaseRegisterSection";
    import LeftNav from "./components/ForumLeftNav";
    import UserInfoSection from "./components/UserInfoSection";

    export default {
        name: "Forum",
        components: {UserInfoSection, LeftNav, RegisterSection, ForumList, ForumEditor, MyFooter, MyHeader},
        data() {
            return {
                headerShow: true,
                // 初始化type，从route中获取，不存在则默认为‘recommend’
                type: this.$route.params.type ? this.$route.params.type : 'recommend'
            }
        },
        watch: {
            //当路由变化时，初始化type的值
            '$route'(to, from) {
                this.type = to.params.type ? to.params.type : 'recommend'
            }
        },
        methods: {},
        filters: {},
        created() {
            document.title = "讨论 - 博客"
        }

    }
</script>

<style scoped>
    .left-nav {

        position: fixed;
        max-width: 105px;
        transition: all .3s ease-in-out;
        top: 65px;
    }

    .left-nav-top {
        top: 5px;
    }


    @media (min-width: 991px) {
        .forum-main {
            width: 570px;
        }
    }

    @media (max-width: 991px) {
        .forum-main {
            width: 100%;
        }
    }

    .forum-aside {
        width: 240px;
        margin-left: 15px;
    }
</style>
