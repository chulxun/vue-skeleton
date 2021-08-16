<template>
  <p class="banner" :style="options"></p>
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
  computed: {}
};
</script>
<style lang="less" scoped>
.banner {
  width: 100vw;
  height: 200px;
  border-radius: 0;
  align-self: center;
}
</style>
