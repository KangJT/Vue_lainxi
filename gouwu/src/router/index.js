import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: 'index'
        },
        {
            path: '/index',
            name: 'index',
            component: () =>
                import ('@/views/index')
        }, {
            path: '/share',
            name: 'share',
            component: () =>
                import ('@/views/share')

        }, {
            path: '/gouwu',
            name: 'gouwu',
            component: () =>
                import ('@/views/gouwu')

        }, {
            path: '/mean',
            name: 'mean',
            component: () =>
                import ('@/views/mean')
        }, {
            path: '/detail/:id',
            name: 'detail',
            component: () =>
                import ('@/views/detail')
        }
    ]
})