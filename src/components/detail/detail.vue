<template>
  <div class="view-detail">
    <navigator
    left-icon-class="fa-close"
    :left-icon-action="onCancelButtonClick"
    :show-right-navigation="true"
    right-icon-class="fa-check"
    :right-icon-action="onEditButtonClick"
    >
      {{memory.title}}
    </navigator>
    <section class="bodyer">
      <detail-moment></detail-moment>
      <record-uneditable :details="memory"></record-uneditable>
      <detail-footer></detail-footer>
    </section>
  </div>
</template>

<script>
import navigator from '@/components/navigator/navigator'
import detailMoment from './detail-moment/detail-moment'
import recordUneditable from './record-uneditable/record-uneditable'
import detailFooter from './detail-footer/detail-footer'
import {mapState} from 'vuex'

export default {
  name: 'detail',
  components: { navigator, detailMoment, recordUneditable, detailFooter },
  computed: {
    ...mapState('memory', ['memory'])
  },
  methods: {
    onCancelButtonClick () {
      console.log('点击返回按钮')
      this.$router.go(-1)
    },
    onEditButtonClick () {
      console.log('点击编辑按钮')
    },
  },
  beforeCreate () {
    this.$store.dispatch('memory/findRecord', this.$router.currentRoute.params.id)
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>
