<template>
  <div class="container" id="app">
    <shelf></shelf>
    <router-view/>
  </div>
</template>

<script>
import shelf from '@/components/shelf/shelf'
export default {
  name: 'App',
  components: { shelf }
}
</script>
<style lang="scss">
@import '@/assets/app.scss';

.container {
  height: 100%;
}
</style>
