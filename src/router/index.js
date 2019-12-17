import Vue from 'vue'
import Router from 'vue-router'
import NotFound from "../pages/404/404"

//解决路由重复访问时的控制台报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        //首页
        {
            path: '/',
            name: 'index',
            component: resolve => require(['../pages/index/Index'], resolve),
            meta: {
                title: '首页'
            }
        },
        //文章详情页
        {
            path: '/article/:id',
            name: 'article',
            component: resolve => require(['../pages/article/Article'], resolve)
        },
        //讨论列表页
        {
            path: '/forum',
            name: 'forum',
            component: resolve => require(['../pages/forum/Forum'], resolve),
            meta: {
                title: '讨论'
            },
            children: [
                //指定排序讨论列表页
                {
                    path: '/forum/:type',
                    name: 'forumByType',
                }
            ]
        },

        //标签页
        {
            path: '/tags',
            component: resolve => require(['../pages/tags/Tags'], resolve),
            meta: {
                title: '标签'
            },
            children: [
                //所有标签页
                {
                    path: '/',
                    redirect: {
                        name: 'allTags'
                    },
                },
                {
                    path: 'all',
                    name: 'allTags',
                    component: resolve => require(['../pages/tags/children/AllTags'], resolve),
                },

                //已关注标签页
                {
                    path: 'subscribed',
                    name: 'subscribedTags',
                    component: resolve => require(['../pages/tags/children/SubscribedTags'], resolve),
                },
            ]
        },

        //指定标签的文章列表
        {
            path: '/tag/:id',
            name: 'articlesByTag',
            component: resolve => require(['../pages/tags/Tag'], resolve),
        },

        //搜索结果页
        {
            path: '/search',
            name: 'search',
            component: resolve => require(['../pages/search/Search'], resolve),
        },

        //草稿列表页
        {
            path: '/drafts',
            name: 'drafts',
            component: resolve => require(['../pages/drafts/Drafts'], resolve),
        },

        //新建草稿页
        {
            path: '/drafts/new',
            name: 'newDraft',
            component: resolve => require(['../pages/drafts/NewDraft'], resolve),
        },

        //指定草稿详情页
        {
            path: '/drafts/:id',
            name: 'editDraft',
            component: resolve => require(['../pages/drafts/NewDraft'], resolve),
        },

        //用户设置页
        {
            path: '/user/settings',
            component: resolve => require(['../pages/settings/Settings'], resolve),
            children: [
                //默认为个人资料设置
                {
                    path: '/',
                    redirect: {
                        name: 'profile'
                    },
                },
                //个人资料设置页
                {

                    path: 'profile',
                    name: 'profile',
                    component: resolve => require(['../pages/settings/children/ProfileSettingForm'], resolve),
                },
                //修改密码页
                {
                    path: 'password',
                    name: 'password',
                    component: resolve => require(['../pages/settings/children/ChangePasswordForm'], resolve),
                }
            ]
        },

        //指定用户主页
        {
            path: '/users/:id',
            component: resolve => require(['../pages/users/Users'], resolve),
            children: [
                //访问主页默认为动态列表
                {
                    path: '',
                    name: 'users',
                    component: resolve => require(['../pages/users/components/activitites/UserActivitiesList'], resolve),
                },
                //用户相关讨论列表
                {
                    path: 'forums',
                    name: 'userForums',
                    component: resolve => require(['../pages/users/components/forums/UserForums'], resolve),
                },
                //用户动态列表
                {
                    path: 'activities',
                    name: 'userActivities',
                    component: resolve => require(['../pages/users/components/activitites/UserActivitiesList'], resolve),
                },
                //用户关注列表
                {
                    path: 'follow',
                    name: 'userFollow',
                    component: resolve => require(['../pages/users/components/follows/UserFollows'], resolve),
                },
                //用户收藏集
                {
                    path: 'collections',
                    name: 'userCollections',
                    component: resolve => require(['../pages/users/components/collections/UserCollections'], resolve),
                }
            ]
        },

        //消息中心
        {
            path: '/messages',
            component: resolve => require(['../pages/message/Messages'], resolve),
            children: [
                //用户消息列表
                {
                    path: '',
                    name: 'messages',
                    component: resolve => require(['../pages/message/components/MessageUser'], resolve)
                },
                //系统消息列表
                {
                    path: 'system',
                    name: 'messageSystem',
                    component: resolve => require(['../pages/message/components/MessageSystem'], resolve)
                },
            ]
        },

        //404页面
        {
            path: '*',
            name: '404',
            component: NotFound
        },
    ],

})

