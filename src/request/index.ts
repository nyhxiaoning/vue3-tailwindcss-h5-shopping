// import { message } from 'antd'
import axios from 'axios'
import store from 'store2'

/**
 * Types
 */
import type { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

import type { Response } from '../vite-env'
/**
 * Axios
 */
const instance = axios.create({
	baseURL: '/api', // 你的 API 基础路径
	timeout: 10000
})

instance.interceptors.request.use((config) => {
	if (store.has('token')) {
		config.headers.Token = store.get('token')
	}

	return config
})

// 请求响应拦截器，统一处理响应格式
instance.interceptors.response.use(
	(response: AxiosResponse<Response<any>>) => {
		const res = response.data
		if (res.code === 200) {
			return res.result // ✅ 只返回 `result` 数据
		} else {
			return Promise.reject(res.message || '请求失败')
		}
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default function request<T = any>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
	return instance(url, config) as Promise<T>
}

// export default axios
