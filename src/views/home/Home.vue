<template>
	<div @click="testPersist">点击测试持久化</div>
	<div v-if="isFetching" class="flex justify-center items-center w-screen h-screen">
		<van-loading color="#8B5CF6"> 疯狂的home页面加载中...</van-loading>
	</div>

	<div v-else class="bg-gray-100 h-full dark:bg-xieyezi-black flex flex-col items-center overflow-hidden pb-12">
		<!-- header -->
		<Head title="首页" :back="false">
			<template v-slot:header-action>
				<van-icon name="cart-o" size="26" badge="9" :color="isDark ? '#A78BFA' : '#8B5CF6'" class="mr-2" />
			</template>
		</Head>
		<!-- search-input -->
		<Search @keywordChange="keyWordChange" :onClick="toSearch"></Search>
		<!-- content -->
		<div class="w-11/12 mt-2">
			<Swiper :list="banners"></Swiper>
			<Category :list="cateGoryList"></Category>
			<LeftTitle title="品牌专场"></LeftTitle>
			<Brand :list="brandList" ref="brandRef"></Brand>
			<LeftTitle title="热销商品"></LeftTitle>
			<HotList :hotList="hotList"></HotList>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useDark } from '@vueuse/core'
import Head from '@components/Head.vue'
import Search from '@components/Search.vue'
import Swiper from '@components/Swiper.vue'
import LeftTitle from '@components/LeftTitle.vue'
import Category from './components/Category.vue'
import Brand from './components/Brand.vue'
import HotList from './components/HotList.vue'
import { useHomeStore } from '../../store/home'

export default defineComponent({
	name: 'Home',
	components: {
		Head,
		Search,
		Swiper,
		Category,
		Brand,
		LeftTitle,
		HotList
	},
	setup() {
		const isDark = useDark()
		let brandRef = ref<any>(null)

		// 在组件中使用
		const homeStore = useHomeStore()

		// 获取状态属性
		const isFetching = homeStore.isFetching
		const banerList = homeStore.banerList as any
		const cateGoryList = homeStore.cateGoryList
		const brandList = homeStore.brandList
		const hotList = homeStore.hotList
		const numberValue = homeStore.numberValue
		console.log(homeStore.numberValue)
		// 调用 actions
		const fetchData = async () => {
			await homeStore.getHomeData()
			// 这里可以在调用 getHomeData 后获取更新后的数据
			console.log(homeStore.banerList, homeStore.cateGoryList)
		}

		// 使用 toggleLoading 切换加载状态
		const toggleLoading = () => {
			homeStore.toggleLoading()
		}
		// const [isFetching, banerList, cateGoryList, brandList, hotList, getHomeData] = useStore((state) => [
		// 	state.isFetching,
		// 	state.banerList,
		// 	state.cateGoryList,
		// 	state.brandList,
		// 	state.hotList,
		// 	state.getHomeData
		// ])

		const banners = computed(
			() =>
				banerList.length &&
				banerList?.value.map((e: string) => {
					return {
						imgUrl: e,
						url: ''
					}
				})
		)

		onMounted(() => {
			fetchData()
			toggleLoading()
		})

		const keyWordChange = (e: string) => {
			console.log('keyword:', e)
		}

		const toSearch = () => {
			console.log('去搜索页')
		}

		const testPersist = () => {
			console.log('点击测试持久化')
			homeStore.changeNumberValue(133)
		}

		return {
			testPersist,
			brandRef,
			isDark,
			isFetching,
			banerList,
			cateGoryList,
			brandList,
			banners,
			hotList,
			keyWordChange,
			toSearch
		}
	}
})
</script>
