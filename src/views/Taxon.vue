<template>
  <div class="taxon-container">
    <div v-if="loading">loading...</div>
    <div class="record-view" v-if="animal">
      <div class="record-names"><span class="title-common-name">{{animal.common_name}}</span><span class="title-scientific-name"> / {{animal.scientific_name}}</span></div>
      <div class="fact-box">
        <div v-if="animal.pending_facts.length">Did you know...?</div>
        <div
          class="record-facts"
          v-for="fact in animal.pending_facts"
          v-bind:key="fact.uuid">
          <div>{{fact.text}}</div>
          <div>source: {{fact.source}}</div>
          <div>Created by {{fact.creator.username}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_SPECIES_WITH_FACTS_QUERY, GET_TAXON_QUERY, GET_SPECIES_QUERY } from '../constants/graphql'

export default {
  name: 'Taxon',
  data () {
    return {
      thing: '',
      animal: null,
      taxon: null,
      loading: 0
    }
  },
  methods: {
    log_animal () {
      console.log("animal", this.animal)
    }
  },
  apollo: {
    animal: {
      query: GET_SPECIES_QUERY,
      variables () {
        return { tax_id: this.$route.params.tax_id }
      },
      update(data) {
        for (let n of data.species[0].names) {
          if (n.class === 'genbank_common_name') {
            data.species[0].common_name = n.name
          }
          if (n.class === 'scientific_name') {
            data.species[0].scientific_name = n.name
          }
        }
        data.species[0].pending_facts = []
        return data.species[0]
      }
    },
    taxon: {
      query: GET_TAXON_QUERY,
      variables () {
        return { tax_id: this.$route.params.tax_id }
      },
      update(data) {
        console.log('query', GET_TAXON_QUERY)
        console.log('taxon data', data)
        return data
      }
    }
  }
}
</script>

<style>
  .taxon-container {
    display: flex;
  }
  .record-view {
    display: flex;
    flex-direction: column;
  }
  .title-common-name {
    font-size: 2em;
  }
  .title-scientific-name {
    font-size: 1.5em;
    font-style: italic;
  }
</style>
