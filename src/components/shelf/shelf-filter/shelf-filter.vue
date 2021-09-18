<template>
  <div class="shelf-filter">
    <h3>{{title}}</h3>
    <div class="filters">
      <a
      v-for="(filter, index) in filters" :key="index"
      class="filter"
      :type="filter.name"
      :class="{active: filter.isActived}"
      @click="toggleFilter(index)"
      ><i class="fa" :class="filter.icon"></i></a>
    </div>
  </div>
</template>

<script>
import {MEMORY_ICONS_HASH, MEMORY_TYPES} from '@/constants'

export default {
  name: 'shelf-filter',
  props: {
    title: String,
    typer: String,
  },
  computed: {
    // TODO 优化 - filters 这个计算属性被没有数据代理
    filters() {
      return MEMORY_TYPES.map(memoryType => {
        return {
          isActived: true,
          icon: MEMORY_ICONS_HASH[memoryType],
          name: memoryType
        }
      })
    }
  },
  watch: {
  },
  data() {
    return {
      tags: [10, 100, 1000]
    }
  },
  methods: {
    toggleFilter (i) {
      this.filters[i].isActived = !this.filters[i].isActived
      // TODO 优化 - filters 这个计算属性被没有数据代理
      this.$forceUpdate()
      // this.$emit("xxxx","子向父组件传值");//自定义事件  传递值“子向父组件传值”
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
// TODO 平均分配每个filter的空间
.shelf-filter {
  h3 {
    color: $shelfFontColor;
    @include font-size(1.6);
    padding: 1.5rem 1rem 2rem;

  }
  .filters {
    padding: 1rem .5rem;
    .filter {
      border-radius: 50%;
      border: 1px solid $shelfFontColorReverse;
      @include font-size(3);
      width: 5rem;
      height: 5rem;
      line-height: 5rem;
      text-align: center;
      margin: 0 .5rem 1rem;
      &.active {
        color: $shelfFilterActivedColor;
        border-color: transparent;
      }
    }
  }
}
.filter.active {
  &[type=text] {
    background-color: $textColor;
  }
  &[type=place] {
    background-color: $placeColor;
  }
  &[type=weblink] {
    background-color: $weblinkColor;
  }
  &[type=photo] {
    background-color: $photoColor;
  }
  &[type=video] {
    background-color: $videoColor;
  }
  &[type=voice] {
    background-color: $voiceColor;
  }
  &[type=music] {
    background-color: $musicColor;
  }
  &[type=book] {
    background-color: $bookColor;
  }
  &[type=archive] {
    background-color: $archiveColor;
  }
}
</style>
