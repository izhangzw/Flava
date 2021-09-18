<template>
  <div class="shelf">
    <shelf-user></shelf-user>
    <shelf-filter title="Sort by Types" typer="types"></shelf-filter>
    <shelf-filter title="Sort by Tags" typer="tags"></shelf-filter>
    <shelf-footer></shelf-footer>
  </div>
</template>
<script>
import shelfUser from './shelf-user/shelf-user'
import shelfFilter from './shelf-filter/shelf-filter'
import shelfFooter from './shelf-footer/shelf-footer'
export default {
  name: 'shelf',
  components: {
    shelfUser,
    shelfFilter,
    shelfFooter
  }
}
</script>

<style lang="scss" scoped>
$shelfBackgroundColor: #000;
$shelfIndex: -1;
.shelf {
  position: fixed;
  left: 0;
  width: 80%;
  top: safe-area();
  bottom: safe-area(bottom);
  background: $shelfBackgroundColor;
  z-index: $shelfIndex;
}
</style>
