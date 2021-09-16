<template>
  <div class="crumb">
    <i v-for="(crumb, index) in crumbs" :key="index" :class="'crumb-' + crumb"></i>
  </div>
</template>

<script>
export default {
  name: 'crumb',
  computed: {
    crumbs () {
      return ['photo', 'video', 'weblink']
    }
  }
}
</script>

<style lang="scss" scoped>
.crumb {
  position: absolute;
  > i {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    display: inline-block;
    margin: 1px;
    &.crumb- {
      &photo {
        background-color: $photoColor;
      }
      &video {
        background-color: $videoColor;
      }
      &weblink {
        background-color: $weblinkColor;
      }
    }
  }
}
</style>
