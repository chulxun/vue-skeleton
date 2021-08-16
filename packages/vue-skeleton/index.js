// 导入组件，组件必须声明 name
import VueSkeleton from "./index.vue";

// 为组件添加 install 方法，用于按需引入
VueSkeleton.install = function (Vue) {
  Vue.component(VueSkeleton.name, VueSkeleton);
};

export default VueSkeleton;
