import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import Index from '@/pages/index/index'
// 解决导航栏或者底部导航tabBar中的vue-router在3.0版本以上频繁点击菜单报错的问题。
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)
const router = new Router({
    routes:[
        {
            path: '/',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    component: Index                
                },   
                {
                    path: '/detail/:id',
                    component: () => import('@/pages/detail')
                },
                {
                    path: 'search',
                    component: () => import('@/pages/search')
                }
            ]
        },
        {
            path: '/profile',
            component: () => import('@/pages/profile'),
            redirect: '/myInfo',
            children: [
                {
                    path: '/collect',
                    component: () => import('@/pages/profile/c-pages/collect')
                },
                {
                    path: '/myInfo',
                    component: () => import('@/pages/profile/c-pages/myInfo')
                }
            ]
        },
        {
            path: '/myCart',
            component: () => import('@/pages/cart')
        },
        {
            path: '/login',
            component: () => import('@/pages/login')
        },
        {
            path: '/register',
            component: () => import('@/pages/register')
        },
        {
            path: '/order',
            component: () => import('@/pages/order'),
            children: [
                {
                    path: 'confirm',
                    component: () => import('@/pages/orderConfirm')
                },
                {
                    path: 'pay',
                    component: () => import('@/pages/orderPay')
                },
                {
                    path: 'list',
                    component: () => import('@/pages/orderList')
                }   
            ]
        }
    ]
})
router.afterEach(() => {
    window.scrollTo(0,0)
})
export default router