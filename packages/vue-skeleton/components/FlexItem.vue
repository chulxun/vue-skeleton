<template>
  <div class="flexbox-item" :style="style"><slot></slot></div>
</template>
<script>
const prefixList = ["-moz-box-", "-webkit-box-", ""];
export default {
  props: {
    span: [Number, String],
    // order: [Number, String],
    justify: String,
    align: String,
    alignSelf: String
  },
  beforeMount() {
    this.bodyWidth = document.documentElement.offsetWidth;
  },
  methods: {
    buildWidth(width) {
      if (typeof width === "number") {
        if (width < 1) {
          return width;
        } else {
          return width / 24;
        }
      } else if (typeof width === "string") {
        return width.replace("px", "") / this.bodyWidth;
      }
    }
  },
  computed: {
    style() {
      let styles = {};
      if (this.$parent.$parent.gutter * 1 !== 0) {
        let _w = this.$parent.$parent.gutter / 2;
        if (this.$parent.$parent.orient === "horizontal") {
          styles.paddingLeft = `${_w}px`;
          styles.paddingRight = `${_w}px`;
        } else {
          styles.paddingTop = `${_w}px`;
          styles.paddingBottom = `${_w}px`;
        }
      }
      styles["justify-content"] = this.justify;
      styles["-webkit-justify-content"] = this.justify;
      styles["align-items"] = this.align;
      styles["-webkit-align-items"] = this.align;
      styles["align-self"] = this.alignSelf;
      if (this.span) {
        for (let i = 0; i < prefixList.length; i++) {
          styles[`${prefixList[i]}flex`] = `0 0 ${this.buildWidth(this.span) *
            100}%`;
        }
      }
      // if (typeof this.order !== "undefined") {
      //   styles.order = this.order;
      // }
      return styles;
    }
  }
};
</script>
<style lang="less" scoped>
.flexbox-item {
  display: flex;
  flex-direction: column;
}
</style>
