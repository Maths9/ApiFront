import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import axios from './services/axiosConfig'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
})

app.config.globalProperties.$axios = axios;

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
    




    

