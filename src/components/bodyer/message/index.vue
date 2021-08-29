<template>
  <li>
      <h1>{{msg.title}}</h1>
      <h3>{{msg.subTitle}}</h3>
  </li>
</template>

<script>
export default {
  name: 'message',
  props: {
    message: Object
  },
  data () {
    return {
      msg: this.message
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
