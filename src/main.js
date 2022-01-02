import { createApp } from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Vue } from 'vue/types/vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

createApp(App).mount('#app')
