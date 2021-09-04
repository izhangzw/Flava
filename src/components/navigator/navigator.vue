<template>
  <header>
    {{navTitle}}
    <a class="header-left-button" @click="leftIconAction">
      <i class="fa fa-2x" :class="leftIconClass"></i>
    </a>
    <a
      class="header-right-button"
      v-if="showRightNavigation"
      @click="rightIconAction"
    >
      <i class="fa fa-2x" :class="rightIconClass"></i>
    </a>
    <a class="header-third-button" v-if="showThirdNavigation" @click="thirdIconAction">
      <i class="fa fa-2x" :class="thirdIconClass"></i>
    </a>
  </header>
</template>

<script>
export default {
  name: 'navigator',
  props: {
    title: String, // [P]: Photo; [I]: Input

    leftIconClass: String,
    leftIconAction: Function,

    showRightNavigation: {
      type: Boolean,
      default: false
    },
    rightIconClass: String,
    rightIconAction: Function,

    showThirdNavigation: {
      type: Boolean,
      default: false
    },
    thirdIconClass: String,
    thirdIconAction: Function
  },
  computed: {
    navTitle () {
      return this.title
    }
  },
  // components: { Photo },
  methods: {
    onCreateClick () {
      console.log()
      this.rightIconAction()
      // this.$router.push('/item')
      // this.$emit(this.rightIconAction)
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  padding-top: env(safe-area-inset-top);
  left: 0;
  right: 0;
  top: 0;
  background-color: aliceblue;
  text-align: center;
  height: 44px;
  line-height: 44px;
  box-shadow: 0px -1px 2px gray;
  > a {
    position: absolute;
    width: 44px;
    height: 100%;
  }
  .header {
    &-left-button {
      left: 0;
      background-color: aqua;
    }
    &-right-button {
      right: 0;
      background-color: yellowgreen;
    }
    &-third-button {
      right: 44px;
      background-color: gainsboro;
    }
  }
}
</style>
