import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import App from '../App.vue'

import VCatalog from "../components/V-catalog"
import VCart from "../components/V-cart"

createApp(App).use(createRouter)

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: VCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: VCart,
            props: true
        },
    ]
})

export default router