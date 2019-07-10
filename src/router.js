import Vue from 'vue'
import Router from 'vue-router'
import AnimalList from './views/AnimalList.vue'
import AddAnimal from './views/AddAnimal.vue'
import AddFact from './views/AddFact.vue'
import Taxon from './views/Taxon.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: AnimalList
    }, {
      path: '/add-animal',
      name: 'AddAnimal',
      component: AddAnimal
    }, {
      path: '/add-fact',
      name: 'AddFact',
      component: AddFact
    }, {
      path: '/taxon/:tax_id',
      name: 'Taxon',
      component: Taxon,
      props: true
    }
  ]
})
