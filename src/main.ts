import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import './normalize.css'
import './index.css'
import { useVant } from './hooks'

const app = useVant(createApp(App))

const pinia = createPinia()
pinia.use(piniaPersistedstate)
app.use(pinia)

app.use(router).mount('#app')
