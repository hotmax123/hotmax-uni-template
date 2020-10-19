import Vue from 'vue'
import App from './App.vue'
import initToast from '@/components/hm-toast/init.js'
import initLoading from '@/components/hm-loading/init.js'
import HMButton from '@/components/hm-button/hm-button.vue'
initToast(Vue)
initLoading(Vue)

Vue.component('hm-button', HMButton)

Vue.config.productionTip = false

new App().$mount()
