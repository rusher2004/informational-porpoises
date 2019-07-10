<template>
  <div>
    <div>
      <input
        v-model="id"
        type="text"
        placeholder="Fact ID">
      <input
        v-model="name"
        type="text"
        placeholder="Animal Name">
      <input
        v-model="description"
        type="text"
        placeholder="Description">
    </div>
    <button @click="addAnimal()">Submit</button>
  </div>
</template>

<script>
import { ADD_ANIMAL_MUTATION } from '../constants/graphql'

export default {
  name: 'AddAnimal',
  data () {
    return {
      id: '',
      name: '',
      description: ''
    }
  },
  methods: {
    addAnimal () {
      const { id, name, description } = this.$data
      this.$apollo.mutate({
        mutation: ADD_ANIMAL_MUTATION,
        variables: {
          id,
          name,
          description
        }
      })
    }
  }
}
</script>

<style>

</style>
