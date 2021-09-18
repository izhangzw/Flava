<template>
  <div class="record-datetime">
    <a class="record-date">九 5, 2021</a>
    <a class="record-time">17:28 PM</a>
  </div>
</template>

<script>
export default {
  name: 'record-datetime'
}
</script>
<style lang="scss" scoped>
$datetime-picker-border-color: rgba(225, 225, 225, 1);
.record-datetime {
  padding: 1rem;
  > a {
    border: 1px solid;
    border-color: $datetime-picker-border-color;
    padding: 1rem 2rem;
  }
}
</style>
