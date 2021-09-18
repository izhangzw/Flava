<template>
  <div class="record-footer">
    <record-footer-medias></record-footer-medias>
  </div>
</template>

<script>
import recordFooterMedias from './record-footer-medias/record-footer-medias'
export default {
  name: 'record-footer',
  components: { recordFooterMedias }
}
</script>
<style lang="scss" scoped>
.record-footer {
  position: fixed;
  bottom: safe-area(bottom);
  left: 0;
  right: 0;
}
</style>
