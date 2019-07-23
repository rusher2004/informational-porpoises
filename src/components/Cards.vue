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
  },
  created() {
    for (let item of this.items) {
      // Take the display name of out the list of names shown in the card body
      item.names = item.names.filter(n => n.name !== item.display_name)
      // Remove any leftover duplicates
      let name_list = [...new Set(item.names.map(n => n.name.toLowerCase()))]
      let temp_names = item.names
      item.names = []
      for (let i = 0; i < name_list.length; i++) {
        let found_name = temp_names.find(function(element) {
          return element.name.toLowerCase() === name_list[i]
        })
        item.names.push(found_name)
      }
    }
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
