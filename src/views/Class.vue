<template>
  <div class="taxon-container" v-if="this_class">
    <div class="taxon-title">
      <span class="taxon-title-name-big">{{this_class.common_name}}</span><span class="taxon-title-name-small"> / {{this_class.display_name}}</span>
    </div>    
    <div class="card-view">
      <div class="cards-title">Orders</div>
      <Cards v-bind:items="this_class.orders" type="order"></Cards>
    </div>
  </div>
</template>

<script>
import Cards from '../components/Cards'
import { GET_CLASS_DATA_QUERY } from '../constants/graphql'
import { get_display_name, set_breadcrumbs, sort_by_name } from '../constants/helpers'

export default {
  name: 'Class',
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
    this_class: {
      query: GET_CLASS_DATA_QUERY,
      variables () {
        return { tax_id: this.$route.params.tax_id }
      },
      update(data) {
        let this_class = data.class[0]
        this_class.hierarchy = [this_class.kingdom, this_class.phylum]
        this.get_display_name(this_class)
        for (let h of this_class.hierarchy) {
          this.get_display_name(h)
        }
        for (let o of this_class.orders) {
          this.get_display_name(o)
        }
        let breadcrumbs = this.set_breadcrumbs(this_class)
        this.$store.commit('setBreadcrumbs', breadcrumbs)
        this.sort_by_name(this_class.orders)
        return this_class
      }
    }
  }
}
</script>

<style scoped>

</style>
