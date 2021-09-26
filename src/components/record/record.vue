<template>
  <div class="view-record">
    <navigator
    left-icon-class="fa-close"
    :left-icon-action="onCancelButtonClick"
    :show-right-navigation="true"
    right-icon-class="fa-check"
    :right-icon-action="onSubmitButtonClick"
    >
      <input class="record-title" type="text" v-model="memory.title" />
    </navigator>
    <section class="bodyer">
      <record-datetime></record-datetime>
      <record-editable v-model="memory.contents" @updateContents="updatedContents"></record-editable>
      <record-footer></record-footer>
    </section>
  </div>
</template>

<script>
import navigator from '@/components/navigator/navigator'
import recordDatetime from './record-datetime/record-datetime'
import recordEditable from './record-editable/record-editable'
import recordFooter from './record-footer/record-footer'

export default {
  name: 'record',
  components: { navigator, recordDatetime, recordEditable, recordFooter },
  data() {
    return {
      memory: {
        title: 'deufault title',
        contents: 'default parent contents'
      }
    }
  },
  methods: {
    onCancelButtonClick () {
      console.log('点击取消按钮')
      this.$router.go(-1)
    },
    onSubmitButtonClick () {
      this.$store.dispatch('memory/saveRecord', this.memory)
      this.$router.back()
    },
    updatedContents(v) {
      this.memory.contents = v
    },
  },
  created () {
    console.log('record created')
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.view-record {
  height: 80%;
  background: red;
  .record-title {
    background-color: $recordInputBackgroundColor;
    @include font-size(1.6);
    text-align: center;
    border-radius: 3px;
    line-height: 30px;
    width: 100%;
  }
}
</style>
