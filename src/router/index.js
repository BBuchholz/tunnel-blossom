import { createRouter, createWebHistory } from 'vue-router'
import CardsView from '../views/CardsView.vue'
import CardView from '../views/CardView.vue'
import ZhonesView from '../views/ZhonesView.vue'
import SitesView from '../views/SitesView.vue'
import SiteView from '../views/SiteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CardsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/card/:id', 
      name: 'card', 
      component: CardView
    },
    {
      path: '/zhones',
      name: 'zhones',
      component: ZhonesView
    },
    {
      path: '/sites',
      name: 'sites',
      component: SitesView
    },
    {
      path: '/site/:zhonecode',
      name: 'site',
      component: SiteView
    }
  ]
})

export default router
