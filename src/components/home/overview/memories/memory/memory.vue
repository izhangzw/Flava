<template>
  <div class="memory" :class="item.coverType" @click="onDetailClick(item.id)">
    <crumb></crumb>
    <div class="memory-content" v-if="item.coverType === 'photo'">
      <div class="memory-content-media">
        <div class="memory-content-media-infor">
          <p class="memory-content-infor-captain">{{item.title}}</p>
          <p class="memory-content-infor-desc">{{item.contents}}</p>
        </div>
        <b class="memory-content-media-count">{{item.images.length}}</b>
        <i class="memory-content-media-arrow"></i>
        <i class="memory-content-media-point"></i>
      </div>
    </div>
    <div class="memory-content" v-else>
      <div class="memory-content-infor">
        <p class="memory-content-infor-captain">{{item.title}}</p>
        <p class="memory-content-infor-desc">{{item.contents}}</p>
      </div>
      <div v-if="item.coverType !== 'text'" class="memory-content-media fa fa-4x">
        <i class="memory-content-media-arrow"></i>
        <i class="memory-content-media-point"></i>
      </div>
    </div>
  </div>
</template>

<script>
import crumb from './crumb/crumb'
export default {
  name: 'memory',
  components: { crumb },
  props: {
    memory: Object
  },
  data () {
    return {
      item: this.memory
    }
  },
  methods: {
    onDetailClick(id) {
      this.$router.push(`/record/${id}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@function mediaColor($type) {
  @if $type == "place" {
    @return $placeColor
  } @else if $type == "photo" {
    @return $photoColor
  } @else if $type == "weblink" {
    @return $weblinkColor
  } @else if $type == "music" {
    @return $musicColor
  }
}
.memory {
  position: relative;
  @include flexbox;
  @include flex-direction(row);
  &-content {
    @include flex(1);
    padding-right: calc( 2.4rem + 4px );
    @include flexbox;
    @include flex-direction(row);
    &-infor {
      @include flex(1);
      padding-right: 1rem;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      padding-left: 1rem;
      @include border1px(bottom, solid, $memoryItemBorderColor);
      @include flexbox;
      @include flex-direction(column);
      width: 0;
      > p {
        @include flex(1);
        text-align: right;
      }
      &-captain {
        @include font-size(1.6);
        color: $titleColor;
        padding-bottom: .5rem;
        @include flexbox;
        @include flex-direction(column);
        @include justify-content(flex-end);
        @include ellipsis;
      }
      &-desc {
        @include font-size(1.4);
        color: $descColor;
        @include ellipsis;
      }
    }
    &-media {
      position: relative;
      &-arrow:after {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        right: -1.5rem;
        top: 2rem;
        border-style: solid;
        border-width: .8rem;
        border-color: transparent;
      }
      &-point {
        border-radius: 50%;
        width: .5rem;
        height: .5rem;
        position: absolute;
        right: -2.2rem;
        top: 2.35rem;
        background-color: $timelineColor;
        border: 4px solid #fff;
        z-index: 1;
      }
    }
  }

  .crumb {
    left: 1rem;
  }
}
.memory.place {
  .memory-content-media {
    width: 6rem;
    height: 6rem;
    text-align: center;
    color: #fff;
    background-color: mediaColor('place');
    &::after {
      content: "\F041";
    }
    &-arrow::after {
        border-left-color: mediaColor('place');
    }
  }
}
.memory.music {
  .memory-content-media {
    width: 6rem;
    height: 6rem;
    text-align: center;
    color: #fff;
    background-color: mediaColor('music');
    &::after {
      content: "\F001";
    }
    &-arrow::after {
        border-left-color: mediaColor('music');
    }
  }
}
.memory.photo {
  .memory-content {
    @include justify-content(flex-end);
  }
  .memory-content-media {
    width: 22rem;
    height: 15rem;
    background-color: mediaColor('photo');
    &-arrow::after {
        border-left-color: mediaColor('photo');
    }
    &-infor {
      background-color: rgba(210, 210, 210, .5);
      height: 6rem;
      > p {
        text-align: right;
      }
    }
    &-count {
      position: absolute;
      bottom: 0;
      left: 0;
      color: #000;
      width: 2rem;
      height: 2rem;
      background: -webkit-linear-gradient(bottom left,#fff 50% ,red 0);
    }
  }
}
</style>
