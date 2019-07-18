<template>
  <div class="taxon-container" v-if="species">
    <div class="taxon-title">
      <span class="taxon-title-name-big">{{species.common_name}}</span><span class="taxon-title-name-small"> / {{species.display_name}}</span>
    </div>
    <div class="card-view" v-if="species.subspecies.length">
      <div class="cards-title">Subspecies</div>
      <Cards v-bind:items="species.subspecies" type="subspecies"></Cards>
    </div>
  </div>
</template>

<script>
import Cards from '../components/Cards'
import { GET_SPECIES_DATA_QUERY } from '../constants/graphql'
import { get_display_name, set_breadcrumbs, sort_by_name } from '../constants/helpers'

export default {
  name: 'Species',
  components: {
    Cards
  },
  data () {
    return {
      this_class: null
    }
  },
  methods: {
    get_display_name,
    set_breadcrumbs,
    sort_by_name
  },
  apollo: {
    species: {
      query: GET_SPECIES_DATA_QUERY,
      variables () {
        return { tax_id: this.$route.params.tax_id }
      },
      update(data) {
        let species = data.species[0]
        species.hierarchy = [species.kingdom, species.phylum, species.class, species.order, species.family, species.genus]
        this.get_display_name(species)
        for (let h of species.hierarchy) {
          this.get_display_name(h)
        }
        for (let s of species.subspecies) {
          this.get_display_name(s)
        }
        let breadcrumbs = this.set_breadcrumbs(species)
        this.$store.commit('setBreadcrumbs', breadcrumbs)
        this.sort_by_name(species.subspecies)
        return species
      }
    }
  }
}
</script>

<style scoped>

</style>
