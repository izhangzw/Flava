<template>
  <img class="photo" :class="size" src="../assets/logo.png">
</template>

<script>
export default {
  name: 'Photo',
  props: {
    size: {
      type: String,
      default: 'small' // small normal large
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .small {
    width: 2rem;
    height: 2rem;
  }
  .normal {
    width: 5rem;
    height: 5rem;
  }
  .large {
    width: 10rem;
    height: 10rem;
  }
</style>
