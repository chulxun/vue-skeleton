<template>
  <div>
    <p>列表demo repeat=3 theme=1</p>
    <list-skeleton
      :repeat="3"
      :theme="1"
      animation="raceBlack"
    ></list-skeleton>
    <p>列表demo repeat=3 theme=2</p>
    <list-skeleton :repeat="3" :theme="2"></list-skeleton>
    <p>列表demo repeat=3 theme=3</p>
    <list-skeleton :repeat="3" :theme="3"></list-skeleton>
    <p>列表demo repeat=3 theme=4</p>
    <list-skeleton :repeat="3" :theme="4"></list-skeleton>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>
