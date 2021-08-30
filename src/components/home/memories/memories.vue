<template>
  <div>
    <memory
    v-for="(memory, index) in memories"
    :key="index"
    :memory="memory"></memory>
  </div>
</template>

<script>
import memory from '@/components/home/memories/memory/memory'

export default {
  name: 'memories',
  components: { memory },
  data () {
    return {
      memories: [{
        id: 1,
        type: 'text', // video location
        title: 'Title is Gerard Way',
        subTitle: 'This is a text item'
      }, {
        id: 2,
        type: 'text 2', // video location
        title: 'Title is Gerard Way 2',
        subTitle: 'This is a text item 2'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
