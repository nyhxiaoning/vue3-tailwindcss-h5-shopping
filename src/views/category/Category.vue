<template>
	<div v-if="isFetching" class="flex justify-center items-center w-screen h-screen">
		<van-loading color="#8B5CF6"> 疯狂加载中...</van-loading>
	</div>
	<div v-else class="bg-white h-full dark:bg-xieyezi-black flex flex-col items-center overflow-hidden pb-12">
		<!-- header -->
		<Head title="分类" :back="false">
			<template v-slot:header-action>
				<van-icon name="cart-o" size="26" badge="9" :color="isDark ? '#A78BFA' : '#8B5CF6'" class="mr-2" />
			</template>
		</Head>
		<!-- search-input -->
		<Search @keywordChange="keyWordChange" :onClick="toSearch"></Search>
		<!-- content -->
		<div class="w-full mt-1 flex justify-start content-start">
			<!-- left sliderbar -->
			<SliderBar :categoryList="categoryList" @sliderIndexChange="indexChange"></SliderBar>
			<!-- right list -->
			<RightGoods :cateGory="categoryList[active]"></RightGoods>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useCategoryStore } from '@src/store/category'
import { useDark } from '@vueuse/core'
import Head from '@components/Head.vue'
import Search from '@components/Search.vue'
import SliderBar from './components/SlideBar.vue'
import RightGoods from './components/RightGoods.vue'

export default defineComponent({
	name: 'Cartgory',
	components: {
		Head,
		Search,
		SliderBar,
		RightGoods
	},
	setup() {
		const active = ref(0)
		const isDark = useDark()
		// 在组件中使用
		const categoryStore = useCategoryStore()

		// 获取状态属性

		const isFetching = categoryStore.isFetching

		const categoryList = categoryStore.categoryList

		onMounted(() => {
			categoryStore.getCategoryData()
		})

		const indexChange = (index: number) => {
			active.value = index
		}

		const keyWordChange = (e: string) => {
			console.log('keyword:', e)
		}

		const toSearch = () => {
			console.log('去搜索页')
		}

		return {
			active,
			isDark,
			isFetching,
			categoryList,
			keyWordChange,
			toSearch,
			indexChange
		}
	}
})
</script>
