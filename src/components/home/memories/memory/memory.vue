<template>
  <div class="memory place">
    <crumb></crumb>
    <div class="memory-content">
      <div class="memory-content-infor">
        <p class="memory-content-infor-captain">Greenmonster Inc.</p>
        <p class="memory-content-infor-desc">#666 Gsan-dong, Greenmonster</p>
      </div>
      <div class="memory-content-media"></div>
    </div>
    <div class="memory-timeline"></div>
  </div>
</template>

<script>
import crumb from '@/components/home/memories/memory/crumb/crumb'
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.memory {
  position: relative;
  margin-bottom: 1rem;
  @include flexbox;
  @include flex-direction(row);

  &-content {
    @include flex(1);
    padding: 0;
    border-bottom: 1px solid #f0f0f0;

    @include flexbox;
    @include flex-direction(row);
    &-infor {
      @include flex(1);
      padding-right: 1rem;

      @include flexbox;
      @include flex-direction(column);
      > p {
        @include flex(1);
        text-align: right;
      }
      &-captain {
        @include font-size(1.6);
        color: $titleColor;
        @include flexbox;
        @include flex-direction(column);
        @include justify-content(flex-end);
      }
      &-desc {
        @include font-size(1.4);
        color: $descColor;
      }
    }
    &-media {
      background: red;
    }
  }

  &-timeline {
    width: 4px;
    height: auto;
    display: block;
    background-color: darkblue;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  .crumb {
    left: 1rem;
  }
}
.memory.place {
  .memory-content-media {
    width: 6rem;
    height: 6rem;
    background-color: $placeColor;
    &::after {
      content: 'Place';
    }
  }
}
</style>
