<template>
  <div class="taxon-container" v-if="taxon">
    <div class="taxon-title">
      <span class="taxon-title-name-big">{{taxon.common_name}}</span><span class="taxon-title-name-small"> / {{taxon.display_name}}</span>
    </div>
    <div class="fact-view" v-if="taxon.facts && taxon.facts.length">
      <div class="fact-title">Did you know...?</div>
      <Fact v-for="fact in taxon.facts" v-bind:key="fact.uuid" v-bind:fact="fact"></Fact>
    </div>
    <div class="card-view" v-if="taxon.children">
      <div class="cards-title">{{taxon.children_type}}</div>
      <Cards v-bind:items="taxon.children" v-bind:type="taxon.children_type"></Cards>
    </div>
  </div>
</template>

<script>
import Cards from '../components/Cards'
import Fact from '../components/Fact'
import { get_display_name, set_breadcrumbs, sort_by_name } from '../constants/helpers'
import {
  GET_KINGDOM_DATA_QUERY,
  GET_PHYLUM_DATA_QUERY,
  GET_CLASS_DATA_QUERY,
  GET_ORDER_DATA_QUERY,
  GET_FAMILY_DATA_QUERY,
  GET_GENUS_DATA_QUERY,
  GET_SPECIES_DATA_QUERY,
  GET_SUBSPECIES_DATA_QUERY
  } from '../constants/graphql'

export default {
  name: 'Taxon',
  components: {
    Cards,
    Fact
  },
  data () {
    return {
      taxon: null
    }
  },
  methods: {
    get_display_name,
    set_breadcrumbs,
    sort_by_name,
  },
  apollo: {
    taxon: {
      query() {
        var query = null
        switch (this.$route.name) {
          case 'kingdom':
            query = GET_KINGDOM_DATA_QUERY
            break
          case 'phylum':
            query = GET_PHYLUM_DATA_QUERY
            break
          case 'class':
            query = GET_CLASS_DATA_QUERY
            break
          case 'order':
            query = GET_ORDER_DATA_QUERY
            break
          case 'family':
            query = GET_FAMILY_DATA_QUERY
            break
          case 'genus':
            query = GET_GENUS_DATA_QUERY
            break
          case 'species':
            query = GET_SPECIES_DATA_QUERY
            break
          case 'subspecies':
            query = GET_SUBSPECIES_DATA_QUERY
        }
        return query
      },
      variables () {
        return {
          tax_id: this.$route.params.tax_id
          }
      },
      update(data) {
        let taxon = data[this.$route.name][0]
        taxon.hierarchy = [taxon.kingdom || null, taxon.phylum || null, taxon.class || null, taxon.order || null, taxon.family || null, taxon.genus || null, taxon.species || null]
        taxon.hierarchy = taxon.hierarchy.filter(h => h !== null)
        this.get_display_name(taxon)
        for (let h of taxon.hierarchy) {
          this.get_display_name(h)
        }
        if (taxon.children && taxon.children.length) {
          for (let c of taxon.children) {
            this.get_display_name(c)
          }
          this.sort_by_name(taxon.children)
          taxon.children_type = taxon.children[0].__typename
        }
        let breadcrumbs = this.set_breadcrumbs(taxon)
        this.$store.commit('setBreadcrumbs', breadcrumbs)
        return taxon
      }
    }
  }
}
</script>

<style scoped>
  .fact-title {
    font-size: 1.5em;
    text-align: left;
  }
</style>
