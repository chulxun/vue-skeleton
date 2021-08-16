<template>
  <div
    class="flexbox"
    :class="{
      'flex-col': orient === 'vertical',
      'flex-row': orient === 'horizontal'
    }"
    :style="styles"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    gutter: {
      type: Number,
      default: 10
    },
    orient: {
      type: String,
      default: "horizontal"
    },
    justify: String,
    align: String,
    wrap: String
  },
  computed: {
    styles() {
      const styles = {
        "justify-content": this.justify,
        "-webkit-justify-content": this.justify,
        "align-items": this.align,
        "-webkit-align-items": this.align,
        "flex-wrap": this.wrap,
        "-webkit-flex-wrap": this.wrap,
        "flex-direction": this.direction,
        "-webkit-flex-direction": this.direction,
        "margin-left": -this.gutter / 2 + "px",
        "margin-right": -this.gutter / 2 + "px"
      };
      return styles;
    }
  }
};
</script>
<style lang="less">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.flexbox {
  display: flex;
  flex-wrap: wrap;
  .flexbox-item {
    flex: 1;
    min-width: 20px;
    width: 0%;
  }
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
  > .flexbox-item {
    width: 100%;
  }
}
</style>
