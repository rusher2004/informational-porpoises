<template>
  <div class="header-container">
    <div class="title-and-search">
      <a href="/"><i class="el-icon-discover"></i></a>
      <h1 class="site-name">Informational Porpoises</h1>
      <el-autocomplete class="search-bar" popper-class="search-results" v-model="search_text" :fetch-suggestions="get_results" placeholder="Search..." @select="handle_select">
        <template slot-scope="{ item }">
          <div class="search-result-item">
            <div class="search-result-item-name">{{ item.name }}</div>
            <div class="search-result-item-taxon-type">({{ item.taxon.labels[0] }})</div>
          </div>
        </template>
      </el-autocomplete>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item v-for="crumb in breadcrumbs" v-bind:key="crumb.path" :to="{ path: `${crumb.path}` }">{{crumb.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
import { SEARCH_QUERY } from '../constants/graphql'
import { clearTimeout, setTimeout } from 'timers';
export default {
  name: 'Header',
  computed: {
    breadcrumbs () {
      return this.$store.state.breadcrumbs
    }
  },
  data () {
    return {
      search_results: [],
      search_text: '',
      search_timeout: null,
    }
  },
  methods: {
    get_results (query_string, cb) {
      var items = this.search_results
      var results = query_string ? items.filter(this.create_filter(query_string)) : items

      clearTimeout(this.search_timeout)
      this.search_timeout = setTimeout(() => {
        cb(results)
      }, 1000 * Math.random())
    },
    create_filter (query_string) {
      return (item) => {
        if (item.taxon.labels[0] === 'no_rank') return
        return (item.name.toLowerCase().indexOf(query_string.toLowerCase()) === 0)
      }
    },
    handle_select (item) {
      this.$router.push({ path: `/${item.taxon.labels[0]}/${item.taxon.properties.tax_id}`})
    }
  },
  apollo: {
    search_results: {
      query: SEARCH_QUERY,
      variables () {
        return {
          searchText: this.search_text
        }
      },
      skip () {
        return !this.search_text
      },
      update (results) {
        return results.name_search
      }
    }
  }
}
</script>

<style>
  .title-and-search {
    display: flex;
    align-items: center;
  }
  i {
    font-size: 2em;
    padding-right: 10px;
    color: #2196f3;
  }
  .site-name {
    padding-right: 10px;
    white-space: nowrap;
  }
  .search-bar {
    max-width: 400px;
  }
  .search-results {
    display: flex;
  }
  .search-result-item {
    display: flex;
  }
  .search-result-item-name {
    margin-right: 3px;
  }
  .search-result-item-taxon-type {
    font-style: italic;
  }
</style>
