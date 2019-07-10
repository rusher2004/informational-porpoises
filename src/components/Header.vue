<template>
  <div class="header-container">
    <a href="/"><i class="el-icon-discover"></i></a>
    <h1 class="site-name">Informational Porpoises</h1>
    <!-- <el-autocomplete class="search" v-model="results" placeholder="Search..."></el-autocomplete> -->
    <el-input class="header-search" v-model="searchTerm" placeholder="Search..."></el-input>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      searchTerm: ''
    }
  }
}
</script>

<style>
  .header-container {
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
  .header-search {
    max-width: 400px;
  }
</style>
