<template>
  <div class="home">
    <vue-skeleton
      animation="raceBlack"
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
        padding: "12px",
        gutter: 12
      },
      childOptions: [
        // 搜索区域
        { span: 24, type: "card", options: { height: "30px" } },
        { span: 24, type: "spaceline", options: { height: "15px" } },
        {
          span: 24,
          type: "tag",
          options: {
            justify: "space-between",
            list: [
              { width: "30%", height: "15px" },
              { width: "30%", height: "15px" },
              { width: "30%", height: "15px" }
            ]
          }
        },
        { span: 24, type: "banner", options: { height: "10px" } },
        // 列表区域
        { span: 24, type: "spaceline", options: { height: "20px" } },
        {
          type: "repeat",
          repeat: 5,
          list: [
            { span: 4, type: "card", options: { height: "50px" } },
            {
              span: 20,
              type: "more",
              children: [
                {
                  type: "list",
                  options: {
                    list: [
                      { width: "50%" },
                      { width: "80%" },
                      { width: "40%" },
                      { width: "100%", height: "1px" },
                      { width: "100%", height: "0px" }
                    ]
                  }
                },
                {
                  type: "tag",
                  options: {
                    justify: "space-between",
                    list: [{ width: "20%" }, { width: "20%" }, { width: "20%" }]
                  }
                }
              ]
            },
            {
              span: 24,
              type: "list",
              options: {
                list: [
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
