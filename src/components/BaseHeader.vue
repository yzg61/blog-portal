<template>
    <div>
        <headroom
            class="Card"
            @pin="$emit('pin')"
            @unpin="$emit('unpin')"
            :speed="300"
        >
            <!--    导航栏1-->
            <b-navbar id="nav1" type="light" class="header-box">
                <b-container class="header-main">
                    <!--        logo+导航-->
                    <div style="display: flex">
                        <b-navbar-brand href="/" active>
                            Blog
                        </b-navbar-brand>
<!--                        大屏下显示导航栏-->
                        <div class="hidden-sm-and-down" style="display: flex;margin-left: 25px;">
                            <b-nav-item :active="location === ''" to="/">首页</b-nav-item>
                            <b-nav-item :active="location === '/tags'" to="/tags">标签</b-nav-item>
                            <b-nav-item :active="location === '/forum' || location === 'forumType'" to="/forum">讨论
                            </b-nav-item>
                        </div>
                    </div>
<!--                    小屏下显示下拉框导航-->
                    <el-dropdown trigger="click" class="hidden-md-and-up menu-dropdown">
                        <span class="el-dropdown-link">
                          {{title}}<i class="el-icon-arrow-down el-icon--right"/>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item
                                @click.native="$router.push('/')"
                                icon="el-icon-s-home"
                            >
                                首页
                            </el-dropdown-item>
                            <el-dropdown-item
                                @click.native="$router.push('/tags')"
                                icon="el-icon-collection-tag"
                            >
                                标签
                            </el-dropdown-item>
                            <el-dropdown-item
                                @click.native="$router.push('/forum')"
                                icon="el-icon-s-comment"
                            >
                                讨论
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <!--搜索栏+写文章+个人中心/注册登录-->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <!--  搜索框-->
                            <search-input/>

                            <div style="display: flex;align-items: center">
                                <!--未登录用户显示内容-->
                                <ul style="display: flex;" class="hidden-sm-and-down">
                                    <li class="write-icon active">
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#icon-write"/>
                                        </svg>
                                    </li>
                                    <li class="write active">
                                        <router-link to="/drafts/new" style="color: #007fff">写文章</router-link>
                                    </li>
                                </ul>
                                <template v-if="false">
                                    <ul class="active-box">
                                        <li class="active regB" @click="open('register')">注册</li>
                                        <li class="active">·</li>
                                        <li class="active logB" @click="open('login')">登录</li>
                                    </ul>
                                </template>
                                <!--已登录用户显示内容-->
                                <template v-else>
                                    <ul style="display: flex;padding: 0 5px;align-items: center;">
                                        <li style="padding-left: 5px">
                                            <!--                                            消息通知-->
                                            <b-nav-item>
                                                <router-link to="/messages">
                                                    <i class="el-icon-message-solid">
                                                        <el-badge is-dot class="item" type="primary" :hidden="false"/>
                                                    </i>
                                                </router-link>
                                            </b-nav-item>
                                        </li>
                                        <li class="user-avatar">
                                            <el-dropdown trigger="click" @command="handleCommand">
                                                <el-avatar :size="30"
                                                           src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
                                                </el-avatar>
                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item
                                                        icon="el-icon-edit"
                                                        :command="{type:'link',params:'/drafts/new'}"
                                                    >写文章
                                                    </el-dropdown-item>
                                                    <el-dropdown-item
                                                        icon="el-icon-document"
                                                        :command="{type:'link',params:'/drafts'}"
                                                    >草稿
                                                    </el-dropdown-item>
                                                    <el-dropdown-item
                                                        icon="el-icon-user"
                                                        :command="{type:'link',params:'/users/id'}"
                                                    >我的主页
                                                    </el-dropdown-item>
                                                    <el-dropdown-item
                                                        icon="el-icon-setting"
                                                        :command="{type:'link',params:'/user/settings/profile'}"
                                                    >设置
                                                    </el-dropdown-item>
                                                    <el-dropdown-item
                                                        :command="{type:'method',params:'logout'}"
                                                    >
                                                        <svg class="icon" aria-hidden="true">
                                                            <use xlink:href="#icon-tuichu"/>
                                                        </svg>
                                                        退出登录
                                                    </el-dropdown-item>
                                                </el-dropdown-menu>
                                            </el-dropdown>

                                        </li>
                                    </ul>
                                </template>
                            </div>


                        </b-nav-form>
                    </b-navbar-nav>

                </b-container>
            </b-navbar>
            <!--    导航栏1结束-->
        </headroom>

        <back-top/>
        <!--注册弹窗-->
        <b-modal id="reg-model"
                 :centered="true"
                 :no-fade="true"
                 :no-close-on-backdrop="true"
                 :no-close-on-esc="true"
                 :hide-footer="true"
                 size="sm">
            <template v-slot:modal-title>
                加入博客
            </template>
            <div>
                <register-model :id="'reg-model'" :type="type"/>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import RegisterModel from "./login/BaseRegisterModel";
    import BackTop from "./AppBackTop";
    import SearchInput from "./BaseSearchInput";

    import {headroom} from 'vue-headroom'

    export default {
        name: "BaseHeader",
        components: {SearchInput, BackTop, RegisterModel, headroom},
        data() {
            return {
                location: this.$route.matched[0].path,
                title: this.$route.matched[0].meta.title ? this.$route.matched[0].meta.title : '首页',
                key: '',
                search: false,
                type: 0
            };
        },
        methods: {

            //跳转搜索页面
            toSearch(key) {
                if (key.length > 0) {
                    this.$router.push('/search?key=' + key)
                }
            },

            //注册或登录弹窗,type=0为注册，type=1为登录
            open(type) {
                this.type = type
                this.$bvModal.show('reg-model')
            },

            //导航下拉菜单选择
            handleCommand(command) {
                console.log(command)
                //选择链接
                if (command.type === 'link') {
                    if (this.$route.path !== command.params) {
                        this.$router.push(command.params)
                    }
                    //执行指定方法
                } else if (command.type === 'method') {
                    this[command.params]()
                }
            },

            //注销
            logout() {
                console.log("logout!")
            }
        },
        created() {
        },
        mounted() {

        }
    }


</script>

<style scoped>

    .header-box {
        background-color: #ffffff;
        font-size: 1rem;
        padding-right: 0;
        box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
    }

    .header-main {
        max-width: 960px;
    }

    .menu-dropdown {
        font-size: 16px;
        cursor: pointer;
        color: #007fff;
    }

    .nav-tabs .nav-tab:hover {
        color: #007fff;
    }

    .logo {
        padding-right: 50px;
    }

    .search {
        font-size: 13px;
        height: 30px;
        max-width: 120px;
        cursor: text;
    }

    .items li {
        margin-right: 20px;
    }

    .write {
        display: flex;
        padding-right: 10px;
        cursor: pointer;
        align-content: center;
    }

    .write-icon {
        display: table-cell;
        text-align: center;
    }

    .regB {
        padding-left: 10px;
        padding-right: 5px;
        cursor: pointer;

    }

    .input-disabled {
        background-color: #e9ecef;
        opacity: 1;
    }

    .button-disabled {
        opacity: 0.65;
    }

    .logB {
        padding-left: 5px;
        padding-right: 10px;
        cursor: pointer;
    }

    .active {
        color: #007fff !important;
    }

    .active-box {
        display: flex;
        padding-left: 0;
        border-left: 1px solid #d2d2d2;
    }

    @media (max-width: 991px) {
        .active-box {
            border-left: 0;
        }
    }

    .user-avatar {
        padding-right: 10px;
        display: flex;
        cursor: pointer;
    }
</style>
