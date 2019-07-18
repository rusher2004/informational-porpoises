<template>
  <div class="taxon-container" v-if="kingdom">
    <div class="taxon-title">
      <span class="taxon-title-name-big">{{kingdom.common_name}}</span><span class="taxon-title-name-small"> / {{kingdom.display_name}}</span>
    </div>
    <div class="card-view">
      <div class="cards-title">Pyhla</div>
      <Cards v-bind:items="kingdom.phyla" type="phylum"></Cards>
    </div>
  </div>
</template>

<script>
import Cards from '../components/Cards'
import { GET_KINGDOM_DATA_QUERY } from '../constants/graphql'
import { get_display_name, set_breadcrumbs, sort_by_name } from '../constants/helpers'

export default {
  name: 'Kingdom',
  components: {
    Cards
  },
  data () {
    return {
      kingdom: null
    }
  },
  methods: {
    get_display_name,
    set_breadcrumbs,
    sort_by_name
  },
  apollo: {
    kingdom: {
      query: GET_KINGDOM_DATA_QUERY,
      variables () {
        return { tax_id: this.$route.params.tax_id }
      },
      update (data) {
        let kingdom = data.kingdom[0]
        kingdom.hierarchy = []
        this.get_display_name(kingdom)
        for (let p of kingdom.phyla) {
          this.get_display_name(p)
        }
        this.$store.commit('setBreadcrumbs', this.set_breadcrumbs(kingdom))
        this.sort_by_name(kingdom.phyla)
        return kingdom
      }
    }
  }
}
</script>

<style scoped>

</style>
