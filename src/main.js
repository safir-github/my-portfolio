

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import home from './components/home.vue'
import router from './router'

const app = createApp(home)

app.use(createPinia())
app.use(router)

app.mount('#app')
