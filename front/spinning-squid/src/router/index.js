import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SkateparkList from '../views/SkateparkList.vue'
import SkateparkAdd from '../views/SkateparkAdd.vue'
import ProductList from '../views/ProductList.vue'
import NewsList from '../views/NewsList.vue'
import Contact from '../views/Contact.vue'
import Subscribe from '../views/Subscribe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/trouve-ton-skatepark',
    name: 'skateparkList',
    component: SkateparkList,
  },
  {
    path: '/trouve-ton-skatepark/ajoute-ton-spot',
    name: 'skateparkAdd',
    component: SkateparkAdd,
  },
  {
    path: '/trouve-ton-matos',
    name: 'productList',
    component: ProductList,
  },
  {
    path: '/forum',
    name: 'newsList',
    component: NewsList,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/connexion',
    name: 'subscribe',
    component: Subscribe,
  },
]

const router = new VueRouter({
  routes,
  // //I change the default active link class
  // linkExactActiveClass: "",
  // linkActiveClass: "",
  // linkExactPathActiveClass: "nav-link--active"
})

export default router
