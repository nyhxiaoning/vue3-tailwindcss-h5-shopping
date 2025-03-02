import { useAuth } from '@src/hooks'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Index',
		meta: {
			title: '首页',
			breadcrumb: true,
			// auth: true
			invisible: true
		},
		component: () => import('../views/Index/Index.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/login/Login.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

router.beforeEach((to, from, next) => {
	if (to.name !== 'Login' && !useAuth()) next({ name: 'Login' })
	else next()
})

export default router
