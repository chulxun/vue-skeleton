<template>
  <div :class="'skeleton ' + animation" :style="outsideStyle" ref="skeleton">
    <row
      class="skeleton_layout"
      :gutter="rowOptions.gutter"
      :orient="rowOptions.orient"
      :justify="rowOptions.justify"
      :align="rowOptions.align"
      :wrap="rowOptions.wrap"
      :direction="rowOptions.direction"
    >
      <template v-for="(item, index) in childOptions">
        <template v-if="item.type == 'repeat'">
          <template v-for="(count, index1) in item.repeat || 1" >
            <Mixins :item="item2" v-for="(item2, index2) in item.list" ></Mixins>
          </template>
        </template>
        <Mixins v-else :key="index" :item="item"></Mixins>
      </template>
    </row>
    <slot></slot>
  </div>
</template>
<script>
import Row from "./components/Flex";
import Mixins from "./components/Mixins";
export default {
  name: "vue-skeleton",
  components: {
    Row,
    Mixins,
  },
  data() {
    return {};
  },
  props: {
    animation: {
      type: String,
      default: "",
    },
    backgroundColor: {
      type: String,
      default: "#f1f1f1",
    },
    rowOptions: {
      type: Object,
      default: function () {
        return {};
      },
    },
    childOptions: Array,
  },
  watch: {
    backgroundColor: {
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            if (this.$refs.skeleton) {
              let x = this.$refs.skeleton.querySelectorAll("p");
              for (let i = 0; i < x.length; i++) {
                if (!x[i].style.backgroundColor) {
                  x[i].style.backgroundColor = val;
                }
              }
            }
          });
        }
      },
      immediate: true,
    },
  },
  computed: {
    outsideStyle() {
      if (this.rowOptions.padding) {
        return { padding: this.rowOptions.padding };
      }
      return {};
    },
  },
};
</script>
<style lang="less">
.skeleton {
  background: #fff;
  padding: 16px;
  overflow: hidden;
  position: relative;
  &.race:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: -webkit-linear-gradient(
      0,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 30%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0)
    );
    background-size: 100% 100%;
    animation: raceAn 1.4s infinite linear;
  }
  &.raceBlack:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    height: 100%;
    pointer-events: none;
    background-image: -webkit-linear-gradient(
      0,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.07) 30%,
      rgba(0, 0, 0, 0.07) 60%,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 0)
    );
    mix-blend-mode: color-burn;
    animation: raceBlackAn 1.4s infinite linear;
  }
  &.fade {
    animation: fadeAn 0.8s infinite linear;
  }
  p {
    background: #f1f1f1;
    height: 10px;
    border-radius: 5px;
  }
}
// 骨架动画
@keyframes raceAn {
  0% {
    transform: translateX(-60%);
  }
  100% {
    transform: translateX(160%);
  }
}
@keyframes raceBlackAn {
  0% {
    left: -20%;
    opacity: 1;
  }
  100% {
    left: 120%;
    opacity: 0;
  }
}
@keyframes fadeAn {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
}
</style>
