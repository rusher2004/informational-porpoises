<template>
  <div class="taxon-container" v-if="family">
    <div class="taxon-title">
      <span class="taxon-title-name-big">{{family.common_name}}</span><span class="taxon-title-name-small"> / {{family.display_name}}</span>
    </div>
    <div class="card-view">
      <div class="cards-title">Genera</div>
      <Cards v-bind:items="family.genera" type="genus"></Cards>
    </div>
  </div>
</template>

<script>
import Cards from '../components/Cards'
import { GET_FAMILY_DATA_QUERY } from '../constants/graphql'
import { get_display_name, set_breadcrumbs, sort_by_name } from '../constants/helpers'

export default {
  name: 'Family',
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
    family: {
      query: GET_FAMILY_DATA_QUERY,
      variables () {
        return { tax_id: this.$route.params.tax_id }
      },
      update(data) {
        let family = data.family[0]
        family.hierarchy = [family.kingdom, family.phylum, family.class, family.order]
        this.get_display_name(family)
        for (let h of family.hierarchy) {
          this.get_display_name(h)
        }
        for (let g of family.genera) {
          this.get_display_name(g)
        }
        let breadcrumbs = this.set_breadcrumbs(family)
        this.$store.commit('setBreadcrumbs', breadcrumbs)
        this.sort_by_name(family.genera)
        return family
      }
    }
  }
}
</script>

<style scoped>

</style>
