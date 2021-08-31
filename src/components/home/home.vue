<template>
  <div class="view-home">
    <navigator></navigator>
    <overview></overview>
  </div>
</template>

<script>
import navigator from '@/components/navigator/navigator'
import overview from './overview/overview'

export default {
  name: 'home',
  components: { navigator, overview }
  // data () {
  //  return {}
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
