import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Kingdom from './views/Kingdom.vue'
import Phylum from './views/Phylum.vue'
import Class from './views/Class.vue'
import Order from './views/Order.vue'
import Family from './views/Family.vue'
import Genus from './views/Genus.vue'
import Species from './views/Species.vue'
import Subspecies from './views/Subspecies.vue'
import Taxon from './views/Taxon.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/kingdom/:tax_id',
      name: 'Kingdom',
      component: Kingdom,
      props: true
    }, {
      path: '/phylum/:tax_id',
      name: 'Phylum',
      component: Phylum,
      props: true
    }, {
      path: '/class/:tax_id',
      name: 'Class',
      component: Class,
      props: true
    }, {
      path: '/order/:tax_id',
      name: 'Order',
      component: Order,
      props: true
    }, {
      path: '/family/:tax_id',
      name: 'Family',
      component: Family,
      props: true
    }, {
      path: '/genus/:tax_id',
      name: 'Genus',
      component: Genus,
      props: true
    }, {
      path: '/species/:tax_id',
      name: 'Species',
      component: Species,
      props: true
    }, {
      path: '/subspecies/:tax_id',
      name: 'Subspecies',
      component: Subspecies,
      props: true
    }, {
      path: '/taxon/:tax_id',
      name: 'Taxon',
      component: Taxon,
      props: true
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
