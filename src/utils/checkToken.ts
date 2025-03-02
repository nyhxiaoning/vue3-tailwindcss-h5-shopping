import store from 'store2'

// 检查 Token 是否有效
export function checkToken(redirect: string = encodeURIComponent(window.location.href)) {
	const inLogin = window.location.hash.startsWith('#/login')
	const inRegister = window.location.hash.startsWith('#/register')

	if (store.has('token')) {
		if (inLogin || inRegister) {
			window.location.href = '/'
		}

		return
	}

	if (inLogin || inRegister) {
		return
	}

	window.location.href = '/#/login?redirect=' + redirect
}
