<script setup lang="ts">
import { theme } from 'ant-design-vue'
import { isEmpty } from 'lodash'
import { reactive, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Components
import AppInfo from './AppInfo.vue'

/**
 * Types
 */
import type { RouteRecordRaw } from 'vue-router'

interface StateType {
	routes: RouteRecordRaw[]
}

/**
 * Hooks
 */
const currentRoute = useRoute()
const router = useRouter()
const { token } = theme.useToken()

/**
 * States
 */
const state = reactive<StateType>({
	routes: []
})

/**
 * ChildrenProps
 */
const routerLinkStyles = {
	'--colorPrimary': token.value.colorPrimary,
	'--colorPrimaryBg': token.value.colorPrimaryBg,
	'--colorText': token.value.colorText
}

/**
 * Effects
 */
watchEffect(() => {
	const routes = router.options.routes.filter((route) => {
		if (route.meta?.invisible || isEmpty(route.children)) {
			return false
		}

		return true
	})

	// 路由为空
	if (!routes.length) {
		state.routes = []
		return
	}

	// 显示路由
	state.routes = routes.filter((route) => {
		// 过滤子路由
		route.children = route.children!.filter((route) => {
			// 替换动态参数
			route.path = route.path.replace(/^\/(.+?)\//, `/${currentRoute.params.id}/`)

			return route.meta?.invisible !== true
		})

		if (isEmpty(route.children)) {
			return false
		}

		return true
	})
})
</script>

<template>
	<!-- 小应用 -->
	<AppInfo />

	<!-- 菜单 -->
	<div v-for="(route, rk) in state.routes" class="admin-sider" :key="rk">
		<div class="admin-sider-menu">
			<a-space>
				<!-- 图标 -->
				<template v-if="route.meta?.icon">
					<img v-if="typeof route.meta.icon === 'string'" alt="" :src="route.meta.icon" />

					<component v-else :is="route.meta.icon" />
				</template>

				<!-- 名称 -->
				{{ route.meta?.breadcrumb || route.name }}
			</a-space>
		</div>

		<div v-for="(child, ck) in route.children" :key="`${rk}_${ck}`">
			<RouterLink
				class="admin-sider-submenu"
				:style="routerLinkStyles"
				:to="child.path.startsWith('/') ? child.path : `${route.path}/${child.path}`"
			>
				<a-space>
					<!-- 图标 -->
					<template v-if="child.meta?.icon">
						<img v-if="typeof child.meta.icon === 'string'" alt="" :src="child.meta.icon" />

						<component v-else :is="child.meta.icon" />
					</template>

					<!-- 名称 -->
					{{ child.meta?.breadcrumb || child.name }}
				</a-space>
			</RouterLink>
		</div>
	</div>
</template>

<style scoped lang="less">
.admin-sider {
	margin: 0 12px;
	padding: 12px 0;
	border-bottom: 1px solid rgba(0, 0, 0, 0.06);

	&:last-child {
		border-bottom: 0;
	}
}

.admin-sider-menu {
	padding-left: 12px;
	height: 28px;
	color: #7a8692;
	font-size: 12px;
	line-height: 28px;
}

.admin-sider-submenu {
	display: block;
	padding: 0 12px;
	border-radius: 4px;
	height: 40px;
	color: var(--colorText, #1d2129);
	font-size: 14px;
	line-height: 40px;
	cursor: pointer;

	&:hover {
		color: var(--colorPrimary, #1d99f2);
	}

	&.router-link-active {
		background-color: var(--colorPrimaryBg, #e5f4ff);
		color: var(--colorPrimary, #1d99f2);
	}
}
</style>
