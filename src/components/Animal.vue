<template>
  <div>{{animal.id}}: {{animal.name}} - {{animal.description}}</div>
</template>

<script>
export default {
  name: 'Animal',
  props: ['animal']
}
</script>

<style>

</style>
