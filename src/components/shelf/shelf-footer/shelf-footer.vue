<template>
  <div class="shelf-footer">
    <a class="shelf-footer-setting"><i class="fa fa-cog fa-3x"></i></a>
    <a class="shelf-footer-clouding">
      <p class="shelf-footer-clouding-icon">
        <i class="fa fa-cloud fa-3x"></i>
        <i class="fa fa-refresh refresh"></i>
      </p>
      <p class="shelf-footer-clouding-info">
        <label>Last sync</label>
        <b>Aug 19, 2013. 10:00 AM</b>
      </p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'shelf-footer'
}
</script>

<style lang="scss" scoped>
.shelf-footer {
  @include flexbox;
  @include flex-direction(row);
  position: fixed;
  bottom: safe-area(bottom);
  left: 0;
  width: inherit;
  color: $shelfFontColor;
  &-setting {
    padding: 1rem;
    padding-left: safe-area(left, 10.5);
    color: inherit;
  }
  &-clouding {
    @include flex(1);
    @include flexbox;
    @include flex-direction(row);
    padding: 1rem;
    color: inherit;
    &-icon {
      position: relative;
      padding-right: 1rem;
      color: inherit;
      > .refresh {
        position: absolute;
        left: 1rem;
        top: 1rem;
        color: $shelfFontColorReverse;
      }
    }
    &-info {
      @include flex(1);
      @include flexbox;
      @include flex-direction(column);
      color: inherit;
      label {
        @include font-size(1.2);
        @include flex(1);
        color: inherit;
      }
      b {
        @include font-size(1.6);
        @include flex(2);
        color: inherit;
      }
    }
  }
}
</style>
