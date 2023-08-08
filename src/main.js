
import { createApp } from 'vue'
import App from './App.vue'
import './assets/Main.css'

import { library } from '@fortawesome/fontawesome-svg-core' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'


library.add(faBars, faInstagram, faFacebook)

import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Shop from './components/Shop.vue'
import HireUs from './components/HireUs.vue'

const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/About', name: 'About', component: About},
        {path: '/Shop', name: 'Shop', component: Shop},
        {path: '/HireUs', name: 'HireUs', component: HireUs},
    ]
})

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
