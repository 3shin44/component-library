import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// FontAwesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import all icons (fas) */
import { fas } from '@fortawesome/free-solid-svg-icons'
/* add all icons to the library */
library.add(fas)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import customerize scss
import "../src/assets/css/index.scss"

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(ElementPlus)
.use(store)
.use(router)
.mount('#app')
