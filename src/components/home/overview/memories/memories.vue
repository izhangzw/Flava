<template>
  <div class="memories">
    <memory
    v-for="memory in memories"
    :key="memory.id"
    :memory="memory"></memory>
    <div class="timeline"></div>
  </div>
</template>

<script>
import memory from './memory/memory'
import {mapState} from 'vuex'

export default {
  name: 'memories',
  components: { memory },
  computed: {
    ...mapState('memory', ['memories'])
  },
  created() {
    // this.$store.dispatch('memory/queryRecords')
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.timeline {
  width: 4px;
  height: auto;
  display: block;
  background-color: $timelineColor;
  margin-right: 1rem;
  margin-left: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
}
</style>
