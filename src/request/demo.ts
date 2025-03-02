import request from './index'

// 获取产品列表
export function products() {
	return request<Response<Pick<Product, 'id' | 'name'>[]>>('/manage/products', {
		method: 'get'
	})
}

// 查询用户产品选择（通用）
export function rProductSelect() {
	return request<Response<Product>>('/manage/products/user/select', {
		method: 'get'
	})
}

// 编辑用户产品选择（通用）
export function uProductSelect(data: UProductSelect) {
	return request<Response<Product>>('/manage/products/user/select', {
		data,
		method: 'put'
	})
}

// 查询用户产品选择（密钥）
export function rProductSelectKey() {
	return request<Response<Product>>('/manage/products/user/select/keys', {
		method: 'get'
	})
}

// 编辑用户产品选择（密钥）
export function uProductSelectKey(data: UProductSelect) {
	return request<Response<Product>>('/manage/products/user/select/keys', {
		data,
		method: 'put'
	})
}

// Types
import type { Response } from '../vite-env'

export interface Product {
	brand: string
	code: string
	categoryCode: string
	categoryId: string
	id: string
	name: string
	categoryName?: string
	lastFirmwareVersion?: string
	/**
	 * 通讯方式 0：蓝牙，1：WIFI，2：WIFI + 蓝牙
	 */
	communicationModule?: number
	/**
	 * 当前密钥数量
	 */
	keyNumber?: number
	/**
	 * 最大密钥数量
	 */
	keyNumberMax?: number
}

export interface UProductSelect {
	productId: string
}
