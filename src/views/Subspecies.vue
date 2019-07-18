<template>
  <div class="taxon-container" v-if="subspecies">
    <div class="taxon-title">
      <span class="taxon-title-name-big">{{subspecies.common_name}}</span><span class="taxon-title-name-small"> / {{subspecies.display_name}}</span>
    </div>
  </div>
</template>

<script>
import { GET_SUBSPECIES_DATA_QUERY } from '../constants/graphql'
import { get_display_name, set_breadcrumbs } from '../constants/helpers'

export default {
  name: 'Subspecies',
  data () {
    return {
      this_class: null
    }
  },
  methods: {
    get_display_name,
    set_breadcrumbs
  },
  apollo: {
    subspecies: {
      query: GET_SUBSPECIES_DATA_QUERY,
      variables () {
        return { tax_id: this.$route.params.tax_id }
      },
      update(data) {
        let subspecies = data.subspecies[0]
        subspecies.hierarchy = [subspecies.kingdom, subspecies.phylum, subspecies.class, subspecies.order, subspecies.family, subspecies.genus, subspecies.species]
        this.get_display_name(subspecies)
        for (let h of subspecies.hierarchy) {
          this.get_display_name(h)
        }
        let breadcrumbs = this.set_breadcrumbs(subspecies)
        this.$store.commit('setBreadcrumbs', breadcrumbs)
        return subspecies
      }
    }
  }
}
</script>

<style scoped>

</style>
