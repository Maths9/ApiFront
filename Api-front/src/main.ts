import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import axios from './services/axiosConfig'

const app = createApp(App)

app.config.globalProperties.$axios = axios;

createApp(App).mount('#app')




    

