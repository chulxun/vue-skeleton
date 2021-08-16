export default {
  data() {
    return {
      //2列
      row2: [
        { span: 5, type: "card", options: { height: "60px" } },
        {
          span: 17,
          type: "list",
          alignSelf: "center",
          options: {
            list: [{ width: "100%" }, { width: "70%" }, { width: "50%" }]
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
      ],
      //3列
      row3: [
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
      ],
      //2列 圆
      circle_row2: [
        { span: 4, type: "circle", options: { alignSelf: "center" } },
        {
          span: 18,
          type: "list",
          alignSelf: "center",
          options: {
            list: [{ width: "100%" }, { width: "70%" }, { width: "50%" }]
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
      ],
      //3列 圆
      circle_row3: [
        { span: 4, type: "circle", options: { alignSelf: "center" } },
        {
          span: 15,
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
    };
  }
};
