<template>
  <div class="tag" :style="styles">
    <p v-for="(item, index) in options.list" :style="item" :key="index"></p>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Object,
      default: function() {
        return {
          justify: "",
          list: [{}, {}, {}, {}]
        };
      }
    }
  },
  computed: {
    styles() {
      const styles = {
        "justify-content": this.options.justify,
        "-webkit-justify-content": this.options.justify
      };
      return styles;
    }
  }
};
</script>
<style lang="less" scoped>
.tag {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  p {
    width: 12%;
    margin-right: 10px;
    margin-bottom: 10px;
    &:nth-child(2n) {
      width: 20%;
    }
    &:nth-child(3) {
      width: 25%;
    }
    &:nth-child(4) {
      width: 8%;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
