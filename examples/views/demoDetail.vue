<template>
  <div class="home">
    <!-- 常用详情页骨架： -->
    <vue-skeleton
      animation="race"
      :rowOptions="rowOptions"
      :childOptions="childOptions"
    >
    </vue-skeleton>
  </div>
</template>
<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      rowOptions: {
        padding: "0 16px 16px"
      },
      childOptions: [
        {
          span: 24,
          type: "banner"
        },
        // 用户区域
        { span: 24, type: "spaceline" },
        {
          span: 4,
          type: "circle",
          options: {
            alignSelf: "center"
          }
        },
        {
          type: "list",
          options: {
            list: [{ width: "70%" }, { width: "90%" }, { width: "40%" }]
          }
        },
        // 简介区域
        { span: 24, type: "spaceline", options: { height: "20px" } },
        {
          span: 24,
          type: "list"
        },
        // 列表区域
        { span: 24, type: "spaceline", options: { height: "20px" } },
        {
          span: 24,
          type: "list",
          options: {
            repeat: 1,
            list: [
              { width: "30%", alignSelf: "center" },
              { width: "100%", height: "1px" },
              { width: "100%", height: "0" }
            ]
          }
        },
        {
          type: "repeat",
          repeat: 5,
          list: [
            {
              span: 7,
              type: "card",
              options: {
                height: "60px"
              }
            },
            {
              span: 16,
              type: "list",
              alignSelf: "center",
              options: {
                list: [{ width: "70%" }, { width: "100%" }, { width: "40%" }]
              }
            },
            {
              span: 24,
              type: "list",
              options: {
                list: [
                  { width: "100%", height: "0" },
                  { width: "100%", height: "1px" },
                  { width: "100%", height: "0" }
                ]
              }
            }
          ]
        }
      ]
    };
  }
};
</script>
