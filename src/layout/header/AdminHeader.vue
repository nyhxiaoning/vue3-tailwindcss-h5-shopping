<script setup lang="ts">
/**
 * Components
 */
import HeaderAvatar from './HeaderAvatar.vue'

/**
 * Resources
 */
import Logo from '@/assets/logo.svg'
</script>

<template>
	<a-row justify="space-between">
		<a-col flex="none" style="align-items: center">
			<RouterLink to="/">
				<a-space :size="6">
					<img alt="" :src="Logo" />

					<div class="title">冒泡小应用</div>
				</a-space>
			</RouterLink>

			<a-space :size="16" style="margin-left: 50px">
				<a-typography-link
					href="https://ox8zrpl57d.feishu.cn/wiki/wikcnI4t2ZKFlYN976VHa0JiKsb"
					style="color: #000"
					target="_blank"
				>
					文档
				</a-typography-link>

				<a-typography-link href="https://www.imdodo.com/channel/196117/1597610" style="color: #000" target="_blank">
					社区
				</a-typography-link>
			</a-space>
		</a-col>

		<a-col flex="none">
			<HeaderAvatar />
		</a-col>
	</a-row>
</template>

<style scoped lang="less">
.title {
	color: #030220;
	font-size: 18px;
}
</style>
