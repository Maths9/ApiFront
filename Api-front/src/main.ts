import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import axios from './services/axiosConfig'

const app = createApp(App)

app.config.globalProperties.$axios = axios;

createApp(App)
    .use(router)
    .mount('#app')
    




    

