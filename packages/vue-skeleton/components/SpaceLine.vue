<template>
  <div class="spaceLine" :style="style"></div>
</template>
<script>
export default {
  props: {
    options: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    style() {
      let styles = {
        height: this.options.height || "10px"
      };
      return styles;
    }
  }
};
</script>
<style lang="less" scoped>
.spaceLine {
  height: 10px;
}
</style>
