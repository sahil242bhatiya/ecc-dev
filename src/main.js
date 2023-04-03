import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import "./animations.css"

createApp(App)
    .use(router)
    .mount('#app')
