import { createApp } from 'vue'
// import {createPinia} from 'pinia'
import { createPinia } from './pinia/index'

import App from './App.vue'

const pinia = createPinia()
console.log(pinia)

const app =createApp(App)
app.use(pinia)
app.mount('#app')
