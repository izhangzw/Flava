<template>
  <img class="headshot" :class="size" :src="src">
</template>

<script>
export default {
  name: 'headshot',
  props: {
    size: {
      type: String,
      default: 'small' // small normal large
    },
    src: {
      type: String,
      default: './static/images/default-head.jpg'
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.headshot {
  border-radius: 50%;

  &.small {
    width: 2rem;
    height: 2rem;
  }
  &.normal {
    width: 5rem;
    height: 5rem;
  }
  &.large {
    width: 10rem;
    height: 10rem;
  }
}
</style>
