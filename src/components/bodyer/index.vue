<template>
  <ul>
    <message
    v-for="(message, index) in messages"
    :key="index"
    :message="message"></message>
  </ul>
</template>

<script>
import message from './message'
export default {
  components: { message },
  name: 'bodyer',
  data () {
    return {
      messages: [{
        id: 1,
        type: 'text', // video location
        title: 'Title is Gerard Way',
        subTitle: 'This is a text item'
      }, {
        id: 2,
        type: 'text 2', // video location
        title: 'Title is Gerard Way 2',
        subTitle: 'This is a text item 2'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
