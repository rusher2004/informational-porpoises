<template>
  <div class="taxon-container" v-if="phylum">
    <div class="taxon-title">
      <span class="taxon-title-name-big">{{phylum.common_name}}</span><span class="taxon-title-name-small"> / {{phylum.display_name}}</span>
    </div>
    <div class="card-view">
      <div class="cards-title">Classes</div>
      <Cards v-bind:items="phylum.classes" type="class"></Cards>
    </div>
  </div>
</template>

<script>
import Cards from '../components/Cards'
import { GET_PHYLUM_DATA_QUERY } from '../constants/graphql'
import { get_display_name, set_breadcrumbs, sort_by_name } from '../constants/helpers'
export default {
  name: 'Phylum',
  components: {
    Cards
  },
  data () {
    return {
      phylum: null
    }
  },
  methods: {
    get_display_name,
    set_breadcrumbs,
    sort_by_name
  },
  apollo: {
    phylum: {
      query: GET_PHYLUM_DATA_QUERY,
      variables () {
        return { tax_id: this.$route.params.tax_id }
      },
      update(data) {
        let phylum = data.phylum[0]
        phylum.hierarchy = [phylum.kingdom]
        this.get_display_name(phylum)
        for (let h of phylum.hierarchy) {
          this.get_display_name(h)
        }
        for (let c of phylum.classes) {
          this.get_display_name(c)
        }
        let breadcrumbs = this.set_breadcrumbs(phylum)
        this.$store.commit('setBreadcrumbs', breadcrumbs)
        this.sort_by_name(phylum.classes)
        return phylum
      }
    }
  }
}
</script>

<style scoped>

</style>
