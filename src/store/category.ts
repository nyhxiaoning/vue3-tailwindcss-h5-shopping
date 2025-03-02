import { defineStore } from 'pinia'
import axios from 'axios'
import { NameWithIcon } from './home'

export interface CateGory {
	name: string
	banner: string
	list: Array<NameWithIcon>
}

export interface HomeState {
	isFetching: boolean
	categoryList: Array<CateGory>
}

export const useCategoryStore = defineStore('category', {
	state: (): HomeState => ({
		isFetching: false,
		categoryList: []
	}),

	actions: {
		async getCategoryData() {
			this.isFetching = true
			try {
				const res = await axios.get('/api/category')
				const { categoryData } = res.data
				this.categoryList = categoryData
			} catch (error) {
				console.error('获取分类数据失败', error)
			} finally {
				this.isFetching = false
			}
		}
	}
})
