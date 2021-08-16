<template>
  <p class="circle" :style="options"></p>
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
  }
};
</script>
<style lang="less" scoped>
.circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
