import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import Index from '@/pages/index/index'
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
                    path: '/myCart',
                    component: () => import('@/pages/cart')
                }
            ]
        },
        {
            path: '/login',
            component: () => import('@/pages/login')
        }    
    ]
})
export default router