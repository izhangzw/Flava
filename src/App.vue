<template>
  <div class="container" id="app">
    <shelf></shelf>
    <router-view class="view" />
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
$bodyer-margin-top: 44px;
.container {
  height: 100%;
  .view {
    background-color: $globalViewBackgroundColor;
  }
}
section.bodyer {
  height: 100%;
  width: 100%;
  margin-top: calc( #{$bodyer-margin-top} + #{$safe-area-inset-top} );
  background-color: inherit;
}
header.navigator {
  background-color: inherit;
}
</style>
