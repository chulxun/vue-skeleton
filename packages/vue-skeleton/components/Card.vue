<template>
  <p class="card" :style="options"></p>
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
.card {
  width: 100%;
  height: 50px;
}
</style>
