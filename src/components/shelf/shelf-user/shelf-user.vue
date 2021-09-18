<template>
  <div class="shelf-user">
    <div class="shelf-user-profile">
      <div class="shelf-user-profile--head">
        <headshot size="normal"></headshot>
      </div>
      <div class="shelf-user-profile--info">
        <p class="shelf-user-profile--info--name">Jay Chou</p>
        <p class="shelf-user-profile--info--date">Mar 27. 1990</p>
      </div>
    </div>
  </div>
</template>

<script>
import headshot from '@/components/headshot/headshot'
export default {
  name: 'shelf-user',
  components: { headshot }
}
</script>

<style lang="scss" scoped>
.shelf-user {
  &-profile {
    @include flexbox;
    @include flex-direction(row);
    padding: 10rem 1rem 0;
    background: url('~/static/images/default_slide_images_04.jpg') center center no-repeat;
    background-size: cover;
    &--head {
      text-align: center;
      margin-right: 1rem;
    }
    &--info {
      @include flex(1);
      @include flexbox;
      @include flex-direction(column);
      > p {
        color: $shelfFontColor;
      }
      &--name {
        @include font-size(2);
        @include flex(1);
        @include flexbox;
        @include flex-direction(column);
        @include justify-content(flex-end);
      }
      &--date {
        @include font-size(1);
        @include flex(1);
        padding-top: .2rem;
      }
    }
  }
}
</style>
