import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Taxon from './views/Taxon.vue'
import Callback from './views/Callback'

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
      name: 'kingdom',
      component: Taxon,
      props: true
    }, {
      path: '/phylum/:tax_id',
      name: 'phylum',
      component: Taxon,
      props: true
    }, {
      path: '/class/:tax_id',
      name: 'class',
      component: Taxon,
      props: true
    }, {
      path: '/order/:tax_id',
      name: 'order',
      component: Taxon,
      props: true
    }, {
      path: '/family/:tax_id',
      name: 'family',
      component: Taxon,
      props: true
    }, {
      path: '/genus/:tax_id',
      name: 'genus',
      component: Taxon,
      props: true
    }, {
      path: '/species/:tax_id',
      name: 'species',
      component: Taxon,
      props: true
    }, {
      path: '/subspecies/:tax_id',
      name: 'subspecies',
      component: Taxon,
      props: true
    }, {
      path: '/callback',
      name: 'Callback',
      component: Callback
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
