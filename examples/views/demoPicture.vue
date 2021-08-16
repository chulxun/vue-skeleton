<template>
  <div class="home">
    <vue-skeleton
      :childOptions="childOptions"
      :rowOptions="rowOptions"
      backgroundColor="#aadbf1"
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
        padding: "6px",
        gutter: 6
      },
      childOptions: [
        {
          span: 8,
          type: "more",
          children: [
            {
              span: 24,
              type: "card",
              options: { height: "80px", marginBottom: "5px" }
            },
            {
              span: 24,
              type: "card",
              options: { height: "180px", marginBottom: "5px" }
            },
            { span: 24, type: "card", options: { height: "120px" } }
          ]
        },
        {
          span: 8,
          type: "more",
          children: [
            {
              span: 24,
              type: "card",
              options: { height: "200px", marginBottom: "5px" }
            },
            { span: 24, type: "card", options: { height: "185px" } }
          ]
        },
        {
          span: 8,
          type: "more",
          children: [
            {
              span: 24,
              type: "card",
              options: { height: "100px", marginBottom: "5px" }
            },
            {
              span: 24,
              type: "card",
              options: { height: "180px", marginBottom: "5px" }
            },
            { span: 24, type: "card", options: { height: "100px" } }
          ]
        }
      ]
    };
  }
};
</script>
