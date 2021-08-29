<template>
  <header class="header">
    <input type="text" />
    <a class="header-menu" @click="onBackClick"></a>
    <a class="header-create" @click="onBackClick"></a>
  </header>
</template>

<script>
import index from '../index.vue'
export default {
  components: { index },
  name: 'index',
  data () {
    return {
      msg: 'Item'
    }
  },
  methods: {
    onBackClick () {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: fixed;
  top: env(safe-area-inset-top);
  left: 0;
  right: 0;
  background-color: aliceblue;
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
