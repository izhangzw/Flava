<template>
  <div class="view-home">
    <navigator
    left-icon-class="fa-bars"
    :left-icon-action="onMenuButtonClick"
    :show-right-navigation="true"
    right-icon-class="fa-plus"
    :right-icon-action="onCreateButtonClick"
    :show-third-navigation="true"
    third-icon-class="fa-search"
    :third-icon-action="onSearchButtonClick"
    >
      <headshot size="small"></headshot>
    </navigator>
    <section class="bodyer">
      <overview></overview>
    </section>
  </div>
</template>

<script>
import navigator from '@/components/navigator/navigator'
import overview from './overview/overview'
import headshot from '@/components/headshot/headshot'

export default {
  name: 'home',
  components: { navigator, overview, headshot },
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
