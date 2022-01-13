import Vue from 'vue'
import VueRouter from 'vue-router'
import storage from '../store/index';
import Home from '../views/Home.vue'
import SkateparkList from '../views/SkateparkList.vue'
import SkateparkDetails from '../views/SkateparkDetails.vue'
import SkateparkAdd from '../views/SkateparkAdd.vue'
import SkateparkEdit from '../views/SkateparkEdit.vue'
import ProductList from '../views/ProductList.vue'
import NewsList from '../views/NewsList.vue'
import Contact from '../views/Contact.vue'
import Subscribe from '../views/Subscribe.vue'
import UserHome from '../views/UserHome.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter);

function guardMyroute(to, from, next)
{
  // La vérification se fait dans App.vue
  if(storage.state.user) {
    next(); // authorise à accéder à la route
  } else{
    next('/connexion'); //renvoie sur le formulaire d'inscription/connexion;
  }
}

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
    path: '/trouve-ton-skatepark/:id',
    name: 'skateparkDetails',
    component: SkateparkDetails,
  },
  {
    path: '/ajoute-ton-spot',
    name: 'skateparkAdd',
    component: SkateparkAdd,
    beforeEnter: guardMyroute,
  },
  {
    path: '/modifie-ton-spot/:id',
    name: 'skateparkEdit',
    component: SkateparkEdit,
    beforeEnter: guardMyroute,
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
  {
    path: '/profil',
    name: 'userHome',
    component: UserHome,
    beforeEnter: guardMyroute,
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
  },
  {
    path: '*',
    redirect: '/404',
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
