import Vue from 'vue'
import App from './App'

import home from './pages/home/home.vue'
Vue.component('home',home)

import category from './pages/category/category.vue'
Vue.component('category',category)

import chat from './pages/chat/chat.vue'
Vue.component('chat',chat)

import cart from './pages/cart/cart.vue'
Vue.component('cart',cart)

import my from './pages/my/my.vue'
Vue.component('my',my)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
