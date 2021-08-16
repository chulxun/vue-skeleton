<template>
  <div class="home">
    <!-- 常用首页骨架： -->
    <vue-skeleton
      animation="fade"
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
          type: "banner",
          options: {
            height: "100px"
          }
        },
        // 分类区域
        { span: 24, type: "spaceline", options: { height: "20px" } },
        {
          type: "repeat",
          repeat: 4,
          list: [{ span: 6, type: "circle", options: {}, align: "center" }]
        },
        { span: 24, type: "spaceline" },
        {
          type: "repeat",
          repeat: 4,
          list: [
            {
              span: 6,
              type: "card",
              options: { width: "70%", height: "10px" },
              align: "center"
            }
          ]
        },

        { span: 24, type: "spaceline", options: { height: "20px" } },
        {
          type: "repeat",
          repeat: 4,
          list: [{ span: 6, type: "circle", options: {}, align: "center" }]
        },
        { span: 24, type: "spaceline" },
        {
          type: "repeat",
          repeat: 4,
          list: [
            {
              span: 6,
              type: "card",
              options: { width: "70%", height: "10px" },
              align: "center"
            }
          ]
        },
        // 列表区域
        { span: 24, type: "spaceline", options: { height: "20px" } },
        { span: 24, type: "banner", options: { height: "10px" } },
        { span: 24, type: "spaceline", options: { height: "20px" } },
        {
          span: 24,
          type: "list",
          options: {
            list: [
              { width: "30%", height: "20px" },
              { width: "100%", backgroundColor: "transparent" }
            ]
          }
        },
        {
          type: "repeat",
          repeat: 4,
          list: [
            { span: 5, type: "card", options: { height: "60px" } },
            {
              span: 14,
              type: "list",
              alignSelf: "center",
              options: {
                list: [{ width: "100%" }, { width: "70%" }, { width: "50%" }]
              }
            },
            {
              span: 5,
              type: "list",
              alignSelf: "center",
              options: {
                direction: "right",
                list: [{ width: "50%" }, { width: "70%" }, { width: "100%" }]
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
