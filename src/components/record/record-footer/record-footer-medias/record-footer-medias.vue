<template>
  <div class="record-footer-medias">
    <p class="record-footer-medias__types">
      <a><i class="fa fa-camera"></i></a>
      <a><i class="fa fa-video-camera"></i></a>
      <a><i class="fa fa-microphone"></i></a>
      <a><i class="fa fa-map-marker"></i></a>
      <a><i class="fa fa-music"></i></a>
      <a><i class="fa fa-book"></i></a>
      <a><i class="fa fa-link"></i></a>
    </p>
    <p class="record-footer-medias__tags">
      <a><i class="fa fa-heart"></i></a>
      <a><i class="fa fa-hashtag"></i></a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'record-footer-medias'
}
</script>
<style lang="scss" scoped>
.record-footer-medias {
  background-color: $recordFooterMediasBgColor;
  height: 4rem;
  position: relative;
  a {
    width: 4rem;
    height: 4rem;
    text-align: center;
    line-height: 4rem;
    @include font-size(2);
  }
  &__types {
    width: calc( 100% - 8.6rem );
    overflow-y: auto;
    white-space: nowrap;
  }
  &__tags {
    width: 8.5rem;
    box-shadow: -1px 0px 1px rgb(155, 155, 155);
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
