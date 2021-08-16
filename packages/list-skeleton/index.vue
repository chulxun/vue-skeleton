<template>
  <vue-skeleton
    :animation="animation"
    :backgroundColor="backgroundColor"
    :rowOptions="rowOptions"
    :childOptions="childOptions"
  >
    <slot></slot>
  </vue-skeleton>
</template>
<script>
import VueSkeleton from "../vue-skeleton/index.vue";
import mxData from "./data.js";
export default {
  name: "list-skeleton",
  components: { VueSkeleton },
  mixins: [mxData],
  data() {
    return {};
  },
  props: {
    animation: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    rowOptions: {
      type: Object,
      default: function() {
        return {};
      }
    },
    repeat: {
      type: Number,
      default: 1
    },
    theme: {
      type: Number,
      default: 1
    }
  },
  computed: {
    childOptions() {
      let newArray = [];
      let child = this.row2;
      if (this.theme == 2) {
        child = this.circle_row2;
      } else if (this.theme == 3) {
        child = this.row3;
      } else if (this.theme == 4) {
        child = this.circle_row3;
      }
      for (let i = 0; i < this.repeat; i++) {
        newArray = newArray.concat(child);
      }
      return newArray;
    }
  }
};
</script>
<style lang="less"></style>
