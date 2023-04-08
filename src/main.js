import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router'


const app = createApp(App)
app.config.productionTip = false

app.use(store)
app.use(router)
app.mount('#app')


