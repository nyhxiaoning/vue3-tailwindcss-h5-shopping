<script setup lang="ts">
import { ref } from 'vue'
import { LogoutOutlined, UnlockOutlined } from '@ant-design/icons-vue'
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'
import store from 'store2'

import orderList from '@/components/OrderList/IndexPage.vue'
import modifyPassword from '@/components/ModifyPassword.vue'

/**
 * Resources
 */
import Avatar from '@/assets/avatar.svg'

/**
 * Hooks
 */
const router = useRouter()

const storage = useStorage('user', { avatar: null, name: '冒泡' })

const OrderListRef = ref(null)
const ModifyPasswordRef = ref(null)

/**
 * Events
 */
// 退出登录
const onLogout = () => {
	store.remove('token')
	store.remove('user')

	router.push('/login')
}

const onOrderList = () => {
	OrderListRef.value.init()
}

const onModifyPassword = () => {
	ModifyPasswordRef.value.init()
}
</script>

<template>
	<a-dropdown placement="bottomRight">
		<!-- Avatar -->
		<a-space class="header-avatar">
			<a-avatar shape="circle" :src="storage.avatar ?? Avatar" />

			<span>{{ storage.name }}</span>
		</a-space>

		<!-- Menu -->
		<template #overlay>
			<a-menu>
				<a-menu-item @click="onOrderList">
					<a-space>
						<unordered-list-outlined />

						<span>我的订单</span>
					</a-space>
				</a-menu-item>
				<a-menu-item @click="onModifyPassword">
					<a-space>
						<unlock-outlined />
						<span>修改密码</span>
					</a-space>
				</a-menu-item>
				<a-menu-item @click="onLogout">
					<a-space>
						<logout-outlined />

						<span>退出登录</span>
					</a-space>
				</a-menu-item>
			</a-menu>
		</template>
	</a-dropdown>
	<orderList ref="OrderListRef" from="orderList" />
	<modifyPassword ref="ModifyPasswordRef" from="ModifyPassword" />
</template>

<style scoped lang="less">
.header-avatar {
	padding: 0 12px;
	cursor: pointer;

	&:hover {
		background-color: rgba(0, 0, 0, 0.025);
	}
}
</style>
