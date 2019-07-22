<template>
  <div class="fact-container">
    <div class="fact-item">
      <div class="fact-text">{{ fact.text }}</div>
      <div class="fact-source">Source: <a v-bind:href="fact.source" target="_blank">{{ fact.source }}</a></div>
      <div class="fact-creator">Submitted by: <span class="fact-creator-name">{{ fact.creator.username }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fact',
  props: {
    fact: Object
  }
}
</script>

<style scoped>

</style>
