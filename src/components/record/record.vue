<template>
  <div class="view-record">
    <navigator
    title="Record New / Edit"
    left-icon-class="fa-close"
    :left-icon-action="onCancelButtonClick"
    :show-right-navigation="true"
    right-icon-class="fa-check"
    :right-icon-action="onSubmitButtonClick"
    ></navigator>
    <section class="bodyer">
      <record-datetime></record-datetime>
      <record-editable></record-editable>
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
  methods: {
    onCancelButtonClick () {
      console.log('点击取消按钮')
      this.$router.go(-1)
    },
    onSubmitButtonClick () {
      console.log('点击提交按钮')
      this.$router.go(-1)
    }
  },
  created () {
    console.log('created  init')
  },
  mounted () {
    console.log('mounted call everytime')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
