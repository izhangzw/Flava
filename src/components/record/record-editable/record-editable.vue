<template>
  <div class="record-editable">
    <textarea v-model="contents" placeholder="input something..." @change="sendContents"></textarea>
  </div>
</template>

<script>
export default {
  name: 'record-editable',
  props: {
    value: String
  },
  data() {
    return {
      contents: this.value
    }
  },
  methods: {
    sendContents() {
      this.$emit('updateContents', this.contents)
    }
  }
}
</script>
<style lang="scss" scoped>
.record-editable {
  height: 100%;
  > textarea {
    width: 100%;
    height: 100%;
    height: 100%;
    padding: 1rem;
    @include font-size(1.6);
  }
}
</style>
