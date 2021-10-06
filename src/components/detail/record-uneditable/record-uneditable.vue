<template>
  <div class="record-uneditable">
    <pre>{{memory.contents}}</pre>
  </div>
</template>

<script>
export default {
  name: 'record-uneditable',
  props: {
    details: Object
  },
  data() {
    return {
      memory: this.details
    }
  },
  methods: {
    playVideo() {},
    viewPhoto() {}
  }
}
</script>
<style lang="scss" scoped>
.record-uneditable {
  height: 100%;
  padding: 1rem;
}
</style>
