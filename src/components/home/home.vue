<template>
  <div class="view-home">
    <navigator></navigator>
    <overview></overview>
  </div>
</template>

<script>
import '@/assets/styles/app.scss'
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
<style lang="scss" scoped>
</style>
