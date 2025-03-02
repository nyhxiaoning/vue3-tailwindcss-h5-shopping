import request from './index'

// 获取设备列表
export function pages(params: DeviceParams) {
	return request<Response<DeviceResult>>('/developer/device/page', {
		params,
		method: 'get'
	})
}

// 设备详情
export function detail(id: string) {
	return request<Response<Device & DeviceInfo>>('/developer/device/detail/' + id, {
		method: 'get'
	})
}

// 更新名字
export function uName(data: { id: string; name: string }) {
	return request<Response>('/developer/device/name', {
		data,
		method: 'put'
	})
}

// 设备状态
export function status(id: string) {
	return request<Response>('/developer/device/status/' + id, {
		method: 'get'
	})
}

/**
 * Types
 */
import type { Response } from './../vite-env'

// 设备实体
export type Device = {
	avatar: string
	activeTime: number
	id: string
	createTime: number
	firmwareCode: string
	firmwareId: number
	name: string
	sn: string
	ip: string
	mac: string
	updateTime: number
	/**
	 * 在线状态 0 离线 1 在线
	 * @example 0 离线 1 在线
	 */
	online: 0 | 1
	productId: number
}

// 设备详情 ... Device DeviceInfo
export type DeviceInfo = {
	type: string
	switchFirmware: string
	productCode: string
	firmwareVersion: boolean
	firmwareType: string
	productModel: string
	headImage?: string
}

// 获设备列表 - 参数
export type DeviceParams = {
	pageNumber?: number
	pageSize?: number
	searchKey?: string
}
// 获取设备列表 - 结果
export type DeviceResult = {
	total: number
	list: Device[]
}
