/// <reference types="vite/client" />
import 'vue-router'

interface ImportMetaEnv {
	readonly VITE_API_URL: string
	readonly VITE_WSS_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare module 'vue-router' {
	interface RouteMeta {
		/**
		 * 是否在面包屑中显示此导航
		 * @default true
		 */
		breadcrumb?: boolean
		/**
		 * 图标
		 */
		icon?: any
		/**
		 * 菜单是否不可见
		 * @default false
		 */
		invisible?: boolean
	}
}

export interface Response<T = any> {
	code: number
	message: string
	result: T
}
