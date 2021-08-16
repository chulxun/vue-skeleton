<template>
  <Col
    :span="item.span"
    :alignSelf="item.alignSelf"
    :align="item.align"
    :justify="item.justify"
    :order="item.order"
  >
    <List v-if="item.type == 'list'" :options="item.options"></List>
    <Card v-else-if="item.type == 'card'" :options="item.options"></Card>
    <Banner v-else-if="item.type == 'banner'" :options="item.options"></Banner>
    <Circlecom
      v-else-if="item.type == 'circle'"
      :options="item.options"
    ></Circlecom>
    <SpaceLine
      v-else-if="item.type == 'spaceline'"
      :options="item.options"
    ></SpaceLine>
    <Tag v-else-if="item.type == 'tag'" :options="item.options"></Tag>

    <template v-else-if="item.type == 'more'">
      <template v-for="(item1, index1) in item.children">
        <List
          v-if="item1.type == 'list'"
          :options="item1.options"
          :key="index1"
        ></List>
        <Card
          v-else-if="item1.type == 'card'"
          :options="item1.options"
          :key="index1"
        ></Card>
        <Circlecom
          v-else-if="item1.type == 'circle'"
          :options="item1.options"
          :key="index1"
        ></Circlecom>
        <SpaceLine
          v-else-if="item1.type == 'spaceline'"
          :options="item1.options"
          :key="index1"
        ></SpaceLine>
        <Tag
          v-else-if="item1.type == 'tag'"
          :options="item1.options"
          :key="index1"
        ></Tag>
      </template>
    </template>
  </Col>
</template>
<script>
import List from "./List";
import Card from "./Card";
import Circlecom from "./Circle";
import Col from "./FlexItem";
import SpaceLine from "./SpaceLine";
import Banner from "./Banner";
import Tag from "./Tag";
export default {
  components: {
    List,
    Card,
    Circlecom,
    Col,
    SpaceLine,
    Banner,
    Tag
  },
  props: {
    item: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
<style lang="less" scoped></style>
