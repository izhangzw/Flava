<template>
  <div>
      <h1>{{item.title}}</h1>
      <h3>{{item.subTitle}}</h3>
  </div>
</template>

<script>
export default {
  name: 'memory',
  props: {
    memory: Object
  },
  data () {
    return {
      item: this.memory
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
