import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetailView from "@/views/ProductDetailView.vue";
import ProductsOverzichtView from "@/views/ProductsOverzichtView.vue";
import CartView from "@/views/CartView.vue";
import CheckOutView from "@/views/CheckOutView.vue";
import BevestigenView from "@/views/BevestigenView.vue";
import NotFound from "@/views/NotFound.vue";
import categorieLijstView from "@/views/CategorieLijstView.vue";
import ProductenPerCategorieView from "@/views/ProductenPerCategorieView.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
        path: '/',
        name: 'Home',
        component: HomeView
    },
        {
            path: '/producten',
            name: 'Producten',
            component: ProductsOverzichtView,
        },
    {
        path: '/producten/:id',
        name: ':id',
        component: ProductDetailView,
        props:true
    },

        {
            path: '/producten/categorie',
            name: 'categorie',
            component: categorieLijstView,
        },
        {
            path: '/producten/categorie/:categorie',
            name: 'ProductenPerCategorie',
            component: ProductenPerCategorieView,
            props:true
        },
        {
            path: '/login',
            name: 'Aanmelden',
            component: CartView,

        },

    {
        path: '/cart',
        name: 'Winkelmandje',
        component: CartView,

    },
    {
        path: '/checkout',
          name: 'Check-out',
        component: CheckOutView,
    },
    {
        path: '/confirmation',
        name: 'Bevestiging',
        component: BevestigenView
    },
        {
            path: '/:notFound(.*)',
            name: 'Fout',
            component: NotFound
        }
    ]
})


export default router
