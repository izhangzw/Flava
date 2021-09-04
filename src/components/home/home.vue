<template>
  <div class="view-home">
    <navigator
    title="Gerard Way"
    left-icon-class="fa-bars"
    :left-icon-action="onMenuButtonClick"
    :show-right-navigation="true"
    right-icon-class="fa-plus"
    :right-icon-action="onCreateButtonClick"
    :show-third-navigation="true"
    third-icon-class="fa-search"
    :third-icon-action="onSearchButtonClick"
    ></navigator>
    <section class="bodyer">
      <overview></overview>
    </section>
  </div>
</template>

<script>
import navigator from '@/components/navigator/navigator'
import overview from './overview/overview'

export default {
  name: 'home',
  components: { navigator, overview },
  methods: {
    onMenuButtonClick () {
      console.log('点击左侧菜单按钮')
    },
    onCreateButtonClick () {
      console.log('点击创建按钮')
      this.$router.push('record')
    },
    onSearchButtonClick () {
      console.log('点击查询按钮')
    }
  }
}
</script>
