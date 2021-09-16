<template>
  <div class="shelf-filter">
    <h3>{{title}}</h3>
    <div class="filters">
      <a class="filter filter-text"><i class="fa fa-file"></i></a>
      <a class="filter filter-photo"><i class="fa fa-camera"></i></a>
      <a class="filter filter-video"><i class="fa fa-video-camera"></i></a>
      <a class="filter filter-voice"><i class="fa fa-microphone"></i></a>
      <a class="filter filter-music"><i class="fa fa-music"></i></a>
      <a class="filter filter-book"><i class="fa fa-book"></i></a>
      <a class="filter filter-weblink"><i class="fa fa-link"></i></a>
      <a class="filter filter-place"><i class="fa fa-map-marker"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shelf-filter',
  props: {
    title: String,
    typer: String,
  },
  computed: {
    filters: {
      get() {
        return this[this.typer]
      }
    }
  },
  data () {
    return {
      types: [1, 2, 3],
      tags: [10, 100, 1000]
    }
  },
  methods: {
    toggleFilter (e) {
      console.log(e.target)
    }
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
      border: 1px solid $shelfFontColor;
      @include font-size(3);
      width: 5rem;
      height: 5rem;
      line-height: 5rem;
      text-align: center;
      margin: 0 .5rem 1rem;
      &.active {
        border-color: transparent;
      }
    }
  }
}
</style>
