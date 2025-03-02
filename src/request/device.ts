import request from './index'

// 获取设备列表
export function devices(params: DeviceParam) {
	return request<Response<Device[]>>('/manage/devices', {
		params,
		method: 'get'
	})
}

// Types
import type { Response } from '../vite-env'

export interface Device {
	id: string
	categoryCode: string
	name: string
}

export interface DeviceParam {
	categoryCode?: string
	search?: string
}
