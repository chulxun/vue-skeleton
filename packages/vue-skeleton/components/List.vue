<template>
  <div class="list" :style="style">
    <template v-for="(count, index) in options.repeat || 1">
      <p
        v-for="(item, index1) in options.list || [{}, {}, {}]"
        :style="item"
        :key="index1"
      ></p>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Object,
      default: function() {
        return {
          repeat: 1,
          direction: "",
          list: [{}, {}, {}]
        };
      }
    }
  },
  computed: {
    style() {
      let _dir = "";
      switch (this.options.direction) {
        case "right":
          _dir = "flex-end";
          break;
        case "center":
          _dir = "center";
          break;
        default:
          _dir = "flex-start";
          break;
      }
      let styles = {
        alignItems: _dir
      };
      return styles;
    }
  }
};
</script>
<style lang="less" scoped>
.list {
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 10px;
    width: 100%;
    &:last-child {
      width: 50%;
      margin-bottom: 0;
    }
  }
}
</style>
