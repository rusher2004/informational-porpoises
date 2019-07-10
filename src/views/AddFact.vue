<template>
  <div>
    <div>
      <input
        v-model="factId"
        type="text"
        placeholder="Fact ID">
      <input
        v-model="animalId"
        type="text"
        placeholder="Animal ID">
      <input
        v-model="factText"
        type="text"
        placeholder="Something interesting..">
    </div>
    <button @click="addFact()">Submit</button>
  </div>
</template>

<script>
import { ADD_FACT_MUTATION } from '../constants/graphql'

export default {
  name: 'AddFact',
  data () {
    return {
      factId: '',
      animalId: '',
      factText: ''
    }
  },
  methods: {
    addFact () {
      const { factId, animalId, factText } = this.$data
      this.$apollo.mutate({
        mutation: ADD_FACT_MUTATION,
        variables: {
          factId,
          animalId,
          factText
        }
      })
    }
  }
}
</script>

<style>

</style>
