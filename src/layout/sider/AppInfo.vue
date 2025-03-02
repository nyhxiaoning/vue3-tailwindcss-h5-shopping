<script setup lang="ts">
import { SwapOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { computed, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/store/app'

/**
 * APIs
 */
import { apps, rApp } from '@/request/app'
import { useRequest } from 'vue-request'

/**
 * Types
 */
import type { MenuInfo } from 'ant-design-vue/es/menu/src/interface'
import type { App } from '@/request/app'

type State = {
	apps: App[]
}

/**
 * Hooks
 */
const appStore = useAppStore()

const route = useRoute()
const router = useRouter()

/**
 * States
 */
const state: State = reactive({
	apps: []
})

const app = computed(() => appStore.state.app)

/**
 * Requests
 */
const { run: runApps } = useRequest(apps, {
	manual: true,
	onSuccess: ({ data }) => {
		if (data.code === 200) {
			state.apps = data.result
		}
	}
})

useRequest(rApp, {
	defaultParams: [{ id: route.params.id as string }],
	onSuccess: ({ data }) => {
		if (data.code === 200) {
			appStore.state.app = data.result
		} else {
			message.error(data.message)
		}
	}
})

/**
 * Events
 */
// 切换小应用
const onAppClick = ({ key }: MenuInfo) => {
	router.push(route.fullPath.replace(/^\/(.+?)\//, `/${key}/`))
	setTimeout(() => window.location.reload())
}
</script>

<template>
	<div class="app-info">
		<a-dropdown overlayClassName="app-info-swap" placement="bottomLeft" trigger="click" @click="() => runApps()">
			<a-row class="swap-item" align="middle" :gutter="8" justify="space-between" :wrap="false">
				<a-col>
					<a-image :height="26" :preview="false" :src="app.icon" :width="26" />
				</a-col>

				<a-col flex="auto">
					<a-typography-text v-model:content="app.name" ellipsis />
				</a-col>

				<a-col>
					<SwapOutlined class="swap-btn" />
				</a-col>
			</a-row>

			<template #overlay>
				<a-menu @click="onAppClick">
					<a-menu-item v-for="item in state.apps" :key="item.id">
						<a-space>
							<a-image :height="26" :preview="false" :src="item.icon" :width="26" />

							<a-typography-text>
								{{ item.name }}
							</a-typography-text>
						</a-space>
					</a-menu-item>
				</a-menu>
			</template>
		</a-dropdown>
	</div>
</template>

<style scoped lang="less">
.app-info {
	padding: 20px 14px;
	border-bottom: 1px solid #f2f2f2;

	.swap-item {
		cursor: pointer;
	}

	.swap-btn {
		padding: 2px;
		background-color: #f8f8f8;
		border-radius: 4px;
		color: #9a9c9e;
		font-size: 12px;
		line-height: 12px;
	}
}
</style>

<style lang="less">
.app-info-swap {
	width: 180px;
	max-height: 500px;
	overflow-y: auto;
	box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.04), 0px 8px 25px rgba(0, 0, 0, 0.05), 0px 10px 29px rgba(0, 0, 0, 0.06);

	.ant-dropdown-menu .ant-dropdown-menu-item {
		padding: 8px;
	}
}
</style>
