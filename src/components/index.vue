<template>
  <div>
    <Header></Header>
    <bodyer></bodyer>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import bodyer from '@/components/bodyer/index'

export default {
  name: 'index',
  components: { Header, bodyer },
  data () {
    return {msg: 'xx'}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
