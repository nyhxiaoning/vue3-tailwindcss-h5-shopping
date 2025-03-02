<script setup lang="ts">
import { useRoute } from 'vue-router'

/**
 * Components
 */
import AdminHeader from '../header/AdminHeader.vue'
import AdminSider from '../sider/AdminSider.vue'

/**
 * Hooks
 */
const route = useRoute()
</script>

<template>
	<!-- Admin Layout -->
	<a-layout class="admin-layout">
		<!-- Header -->
		<a-layout-header class="admin-layout-header">
			<AdminHeader />
		</a-layout-header>

		<!-- Content -->
		<a-layout>
			<!-- Sider -->
			<a-layout-sider class="admin-layout-sider">
				<AdminSider />
			</a-layout-sider>

			<!-- Content -->
			<a-layout-content class="admin-layout-content">
				<!-- Breadcrumb -->
				<div class="breadcrumb">
					{{ route.name }}
				</div>

				<!-- Page -->
				<div class="page">
					<RouterView />
				</div>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<style scoped lang="less">
.admin-layout {
	height: 100vh;
}

.admin-layout-header {
	height: 60px;
	padding: 0 12px;
	background-color: #fff;
	box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.06) inset;
	line-height: 60px;
}

.admin-layout-sider {
	background-color: #fff;
	overflow: auto;
}

.admin-layout-content {
	display: flex;
	flex-direction: column;
	padding: 24px;
	overflow: auto;

	.breadcrumb {
		margin-bottom: 16px;
		font-size: 20px;
		font-weight: 600;
		line-height: 28px;
	}

	.page {
		flex: 1;
	}
}
</style>
