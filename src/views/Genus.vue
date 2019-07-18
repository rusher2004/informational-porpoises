<template>
  <div class="taxon-container" v-if="genus">
    <div class="taxon-title">
      <span class="taxon-title-name-big">{{genus.common_name}}</span><span class="taxon-title-name-small"> / {{genus.display_name}}</span>
    </div>
    <div class="card-view">
      <div class="cards-title">Species</div>
      <Cards v-bind:items="genus.species" type="species"></Cards>
    </div>
  </div>
</template>

<script>
import Cards from '../components/Cards'
import { GET_GENUS_DATA_QUERY } from '../constants/graphql'
import { get_display_name, set_breadcrumbs, sort_by_name } from '../constants/helpers'

export default {
  name: 'Genus',
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
    genus: {
      query: GET_GENUS_DATA_QUERY,
      variables () {
        return { tax_id: this.$route.params.tax_id }
      },
      update(data) {
        let genus = data.genus[0]
        genus.hierarchy = [genus.kingdom, genus.phylum, genus.class, genus.order, genus.family]
        this.get_display_name(genus)
        for (let h of genus.hierarchy) {
          this.get_display_name(h)
        }
        for (let s of genus.species) {
          this.get_display_name(s)
        }
        let breadcrumbs = this.set_breadcrumbs(genus)
        this.$store.commit('setBreadcrumbs', breadcrumbs)
        this.sort_by_name(genus.species)
        return genus
      }
    }
  }
}
</script>

<style scoped>

</style>
