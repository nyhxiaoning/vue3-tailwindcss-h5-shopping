import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import router from './router'
import './index.css'
import { useVant } from './hooks'

const app = useVant(createApp(App))
// 使用 Pinia
app.use(createPinia())

app.use(router).mount('#app')
