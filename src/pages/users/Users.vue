<template>
    <div>
        <my-header @pin="" @unpin=""/>
        <main>
            <b-container style="padding: 0;max-width: 960px;">
                <b-row no-gutters>
                    <b-col cols="12" lg="9" class="left-box">
                        <user-info-block :id="id"/>
                        <list-block :id="id" :location="location"/>
                    </b-col>
                    <div class="hidden-sm-and-down right-box">
                        <div class="sticky">
                            <follow-block :id="id"/>
                            <more-block/>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </main>
    </div>
</template>

<script>
    import MyHeader from "../../components/BaseHeader";
    import MyFooter from "../../components/BaseFooter";
    import UserInfoBlock from "./components/children/UserInfoBlock";
    import FollowBlock from "./components/children/UserFollowsBlock";
    import MoreBlock from "./components/children/UserMoreBlock";
    import ListBlock from "./components/children/UserNavList";

    export default {
        name: "Users",
        components: {ListBlock, MoreBlock, FollowBlock, UserInfoBlock, MyFooter, MyHeader},
        props: [],
        data() {
            return {
                id: this.$route.params.id,
                location: this.$route.params.loc,
                user: {},
            }
        },
        watch: {},
        methods: {
            getUserInfo() {
                const user = {
                    id: 10086,
                    username: "用户名称",
                    avatar: "https://mirror-gold-cdn.xitu.io/16e351642238a294aea",
                    createdAt: '2019-11-04T06:24:39.395Z',
                    updatedAt: '2019-11-05T06:24:39.395Z',
                    email: '131231@132.com',
                    followeesCount: 20,
                    followersCount: 10,
                    jobTitle: '一句话介绍',
                    latestLoginedInAt: '2019-11-05T06:24:39.395Z',

                }
            }
        },
        created() {

        }
    }
</script>

<style scoped>
    .right-box {
        margin-left: 15px;
    }

    .right-box .sticky {
        width: 200px;
        position: fixed;
    }
</style>
