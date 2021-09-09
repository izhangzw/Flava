<template>
  <div class="shelf">
    <shelf-user></shelf-user>
    <shelf-filter-types></shelf-filter-types>
    <shelf-filter-tags></shelf-filter-tags>
    <shelf-footer></shelf-footer>
  </div>
</template>
<script>
import shelfUser from './shelf-user/shelf-user'
import shelfFilterTypes from './shelf-filter-types/shelf-filter-types'
import shelfFilterTags from './shelf-filter-tags/shelf-filter-tags'
import shelfFooter from './shelf-footer/shelf-footer'
export default {
  name: 'shelf',
  components: {
    shelfUser,
    shelfFilterTypes,
    shelfFilterTags,
    shelfFooter
  }
}
</script>

<style lang="scss" scoped>
$shelfBackgroundColor: #000;
$shelfIndex: 100;
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
