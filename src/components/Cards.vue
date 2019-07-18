<template>
  <div class="card-items">
    <router-link v-for="item in items" v-bind:key="item.tax_id" :to="`/${type}/${item.tax_id}`">
      <el-card class="card-item" shadow="always">
        <div class="card-header" slot="header">{{item.display_name}}</div>
        <div v-for="name in item.names" v-bind:key="name.uuid"><span v-if="name.class != 'authority'">{{name.name}}</span></div>
      </el-card>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  props: {
    items: Array,
    type: String
  }
}
</script>

<style scoped>
  .card-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: scroll;
    max-height: 400px;
  }
  .card-items a {
    text-decoration: none;
  }
  .card-item {
    min-width: 300px;
    margin: 5px 25px;
  }
  .card-header {
    text-transform: capitalize;
  }
</style>
