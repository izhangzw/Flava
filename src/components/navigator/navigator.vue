<template>
  <header class="navigator">
    <div class="navigator-inner">
      <template v-if="navTitle">
        {{navTitle}}
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </div>
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
      this.rightIconAction()
      // this.$router.push('/item')
      // this.$emit(this.rightIconAction)
    }
  }
}
</script>

<style lang="scss" scoped>
$navigatorHeight: 44px;
header {
  position: fixed;
  padding-top: safe-area();
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
  height: $navigatorHeight;
  line-height: $navigatorHeight;
  box-shadow: inset 0px -1px 20px 0px #ececec;
  .navigator-inner {
    width: calc( 100% - 100px );
    margin: 0 auto;
    > img {
      vertical-align: middle;
    }
  }
  > a {
    position: absolute;
    width: $navigatorHeight;
    height: 100%;
    top: 0;
  }
  .header {
    &-left-button {
      left: 0;
    }
    &-right-button {
      right: 0;
    }
    &-third-button {
      right: $navigatorHeight;
    }
  }
}
</style>
