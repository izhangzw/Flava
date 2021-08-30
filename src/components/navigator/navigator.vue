<template>
  <header>
    Something
    <a class="header-menu"></a>
    <a class="header-create" @click="onCreateClick"></a>
  </header>
</template>

<script>
export default {
  name: 'navigator',
  // components: { Photo },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onCreateClick () {
      this.$router.push('/item')
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: env(safe-area-inset-top);
  left: 0;
  right: 0;
  background-color: aliceblue;
  text-align: center;
}

.header-menu {
  position: absolute;
  left: 0;
  width: 44px;
  height: 100%;
  background-color: aqua;
}
.header-create {
  position: absolute;
  right: 0;
  width: 44px;
  height: 100%;
  background-color: yellowgreen;
}
</style>
