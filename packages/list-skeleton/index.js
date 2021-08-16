// 导入组件，组件必须声明 name
import ListSkeleton from "./index.vue";

// 为组件添加 install 方法，用于按需引入
ListSkeleton.install = function (Vue) {
  Vue.component(ListSkeleton.name, ListSkeleton);
};

export default ListSkeleton;
