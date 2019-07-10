<template>
  <div>
    <h4 v-if="loading">Loading...</h4>
    <animal
      v-for="animal in allAnimals"
      v-bind:key="animal.id"
      :animal="animal">
    </animal>
  </div>
</template>

<script>
import { ALL_ANIMALS_QUERY } from '../constants/graphql'
import Animal from '../components/Animal'

export default {
  name: 'AnimalList',
  data () {
    return {
      allAnimals: [],
      loading: 0
    }
  },
  components: {
    Animal
  },
  apollo: {
    allAnimals: {
      query: ALL_ANIMALS_QUERY
    }
  }
}
</script>

<style>

</style>
