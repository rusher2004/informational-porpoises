<template>
  <div class="taxon-container" v-if="order">
    <div class="taxon-title">
      <span class="taxon-title-name-big">{{order.common_name}}</span><span class="taxon-title-name-small"> / {{order.display_name}}</span>
    </div>
    <div class="card-view">
      <div class="cards-title">Families</div>
      <Cards v-bind:items="order.families" type="family"></Cards>
    </div>
  </div>
</template>

<script>
import Cards from '../components/Cards'
import { GET_ORDER_DATA_QUERY } from '../constants/graphql'
import { get_display_name, set_breadcrumbs, sort_by_name } from '../constants/helpers'

export default {
  name: 'Order',
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
    order: {
      query: GET_ORDER_DATA_QUERY,
      variables () {
        return { tax_id: this.$route.params.tax_id }
      },
      update(data) {
        let order = data.order[0]
        order.hierarchy = [order.kingdom, order.phylum, order.class]
        this.get_display_name(order)
        for (let h of order.hierarchy) {
          this.get_display_name(h)
        }
        for (let f of order.families) {
          this.get_display_name(f)
        }
        let breadcrumbs = this.set_breadcrumbs(order)
        this.$store.commit('setBreadcrumbs', breadcrumbs)
        this.sort_by_name(order.families)
        return order
      }
    }
  }
}
</script>

<style scoped>

</style>
