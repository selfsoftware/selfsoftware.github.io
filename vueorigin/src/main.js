// import Vue from '../node_modules/vue/dist/vue.js'
import Vue from 'vue'
import app from './app.vue' //2.导入login组件
import VueRouter from 'vue-router' //路由的导入
// 各组件的引入
import acount from './vuebox/acount.vue'
import goodlist from './vuebox/goodlist.vue'
import login from './vuebox/login.vue'
import regis from './vuebox/regis.vue'
Vue.use(VueRouter)  //在webpack中需要手动Vue。use调用路由

const router = new VueRouter({
    routes: [{
            path: '/acount',
            component: acount,
            children: [{
                    path: 'login',
                    component: login
                },
                {
                    path: 'regis',
                    component: regis
                }
            ]
        },
        {
            path: '/goodlist',
            component: goodlist
        },
    ]
})
var vm = new Vue({
    el: '#app',
    data: {
        msg: 'webpack+++vue结合使用以及配置'
    },
    render(h) { //使用render渲染组件，
        //1.先安装vue-loader,vue-template-compiler，第三方解析器  
        //2.在src目录下直接新建一个.vue后缀的vue组件，
        //3.通过import 组件名from ‘名称.vue’导入
        //4.在comfig.js中的rules中配置{test:/\.vue$/,use:'vue-loader'}
        return h(app)
    },
    router,
})