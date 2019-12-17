import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

//引入bootstrapVue组件
import {

    NavPlugin,
    NavbarPlugin,
    ModalPlugin,
    LayoutPlugin,
    LinkPlugin,
    MediaPlugin,
    ImagePlugin,
} from 'bootstrap-vue'

Vue.use(NavPlugin)
Vue.use(NavbarPlugin)
Vue.use(ModalPlugin)
Vue.use(LayoutPlugin)
Vue.use(LinkPlugin)
Vue.use(MediaPlugin)
Vue.use(ImagePlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'element-ui/lib/theme-chalk/index.css';
//引入element ui组件
import {
    Button,
    Input,
    Message,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Tag,
    Avatar,
    Backtop,
    Popover,
    Autocomplete,
    Notification,
    Badge,
    Menu,
    MenuItem,
    Tabs,
    TabPane,
    Form,
    FormItem
} from 'element-ui';
// 在调用 Vue.use 前，给 Message 添加 install 方法
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
Vue.use(Input)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tag)
Vue.use(Avatar)
Vue.use(Backtop)
Vue.use(Popover)
Vue.use(Autocomplete)
Vue.use(Badge)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Form)
Vue.use(FormItem)

//引入element 动画
//import 'element-ui/lib/theme-chalk/base.css';

//全局css文件
import '../static/css/index.css'

// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api;

//引入utils文件
import utils from './utils/index'
import form from "bootstrap-vue/esm/mixins/form";
//将utils方法绑定到全局
Vue.prototype.$utils = utils;

Vue.config.productionTip = false;

//自定义指令
//点击元素以外的区域触发
const clickOutside = {
    // 初始化指令
    bind(el, binding, vnode) {
        function clickHandler(e) {
            // 这里判断点击的元素是否是本身，是本身，则返回
            if (el.contains(e.target)) {
                return false;
            }
            // 判断指令中是否绑定了函数
            if (binding.expression) {
                // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
                binding.value(e);
            }
        }

        // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
        el.__vueClickOutside__ = clickHandler;
        document.addEventListener('click', clickHandler);
    },
    update() {
    },
    unbind(el, binding) {
        // 解除事件监听
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    },
};
Vue.directive('clickOutside', clickOutside);

//全局路由跳转后返回页面顶部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

