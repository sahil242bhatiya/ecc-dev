import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../pages/about.vue')
    },
    {
        path: '/production-plant',
        name: 'Production Plant',
        component: () => import('../pages/production-plant.vue')
    },
    {
        path: '/environment',
        name: 'Environment',
        component: () => import('../pages/environment.vue')
    },
    {
        path: '/technology',
        name: 'Technology',
        component: () => import('../pages/technology.vue')
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import('../pages/portfolio.vue')
    },
    {
        path: '/news',
        name: 'News',
        component: () => import('../pages/news.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../pages/contact.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    scroll(0, 0)
})

router.afterEach((to, from) => {
    scroll(0, 0);
})

export default router