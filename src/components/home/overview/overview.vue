<template>
  <section class="view-overview">
    <memories></memories>
  </section>
</template>

<script>
import memories from '@/components/home/memories/memories'
export default {
  name: 'overview',
  components: { memories }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.view-overview {
  height: 100%;
  width: 100%;
  margin-top: 44px;
}
</style>
