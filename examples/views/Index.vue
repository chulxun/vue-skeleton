<template>
  <div class="home">
    <router-link to="/demo-index">常用首页骨架demo</router-link>
    <router-link to="/demo-detail">常用详情页骨架demo</router-link>
    <router-link to="/demo-picture">图片列表不规则布局demo</router-link>
    <router-link to="/demo-list">商品搜索列表页demo</router-link>
    <router-link to="/demo-moudle">列表骨架模块demo</router-link>
    <!-- <router-link to="/create">体验生成骨架</router-link> -->
  </div>
</template>
<script>
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.home {
  a {
    display: block;
    color: #333;
    padding: 8px;
  }
}
</style>
