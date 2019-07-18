<template>
  <div class="home-container" v-if="kingdoms">
    <div class="card-view">
      <div class="cards-title">Kingdoms</div>
      <Cards v-bind:items="kingdoms" type="kingdom"></Cards>
    </div>
  </div>
</template>

<script>
import Cards from '../components/Cards'
import { GET_KINGDOMS_QUERY } from '../constants/graphql'
import { get_display_name, sort_by_name } from '../constants/helpers'
export default {
  name: 'Home',
  components: {
    Cards
  },
  beforeMount: function () {
    this.$store.commit('resetBreadcrumbs')
  },
  data () {
    return {
      kingdoms: null
    }
  },
  methods: {
    get_display_name,
    sort_by_name
  },
  apollo: {
    kingdoms: {
      query: GET_KINGDOMS_QUERY,
      update (data) {
        let kingdoms = data.kingdom
        for (let k of kingdoms) {
          this.get_display_name(k)
        }
        this.sort_by_name(kingdoms)
        return kingdoms
      }
    }
  }
}
</script>

<style scoped>

</style>
