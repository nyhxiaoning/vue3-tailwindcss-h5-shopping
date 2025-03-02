import { defineStore } from 'pinia'
import axios from 'axios'

export interface NameWithIcon {
	name: string
	icon: string
}

export interface GoodItem {
	goodsId: string
	goodsMiniPrice: string
	goodsName: string
	goodsPicUrl: string
}

export interface HomeState {
	isFetching: boolean
	banerList: string[]
	cateGoryList: Array<NameWithIcon>
	brandList: Array<NameWithIcon>
	hotList: Array<GoodItem>
}

export const useHomeStore = defineStore('home', {
	state: (): HomeState => ({
		isFetching: false,
		banerList: [],
		cateGoryList: [],
		brandList: [],
		hotList: []
	}),

	actions: {
		toggleLoading() {
			this.isFetching = !this.isFetching
		},

		async getHomeData() {
			this.isFetching = true
			try {
				const res = await axios.get('/api/index')
				const { banerList, cateGoryList, brandList, hotList } = res.data
				this.banerList = banerList
				this.cateGoryList = cateGoryList
				this.brandList = brandList
				this.hotList = hotList
			} catch (error) {
				console.error('获取首页数据失败', error)
			} finally {
				this.isFetching = false
			}
		}
	}
})
