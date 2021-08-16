# fjy-vue-skeleton

## demo演示：https://www.fanjinyan.com/works/skeleton_demo/

### 项目中使用：
```
npm install fjy-vue-skeleton --save

main.js中引入：
import VueSkeleton from "vue-skeleton";
import "vue-skeleton/lib/vue-skeleton.css";
Vue.use(VueSkeleton);

组件中使用：
<vue-skeleton
  animation="fade"
  :rowOptions="rowOptions"
  :childOptions="childOptions"
></vue-skeleton>
<list-skeleton
  :repeat="3"
  :theme="1"
  animation="raceBlack"
></list-skeleton>
```

## 骨架屏组件
```
该组件只实现：
框架加载后，数据加载前，显示骨架屏
```

## 默认配置
```
所有骨架块默认样式 width:100%;height:10px;border-radius:5px;background: #f1f1f1;
```

## api配置项
参数 | 说明 | 类型 | 默认值
----|------|-----|------
animation | 使用动画名称(race,raceBlack,fade) | String | ""
backgroundColor | 骨架颜色 | String | "#f1f1f1"
rowOptions | 总体flex布局属性 | Object | {}
childOptions | 具体骨架 | Array | []

### rowOptions示例：
```
{
  gutter: 16,
  orient: "horizontal",
  justify: "center",
  align: "center",
  wrap: "wrap",
}
```
#### rowOptions参数说明：
参数 | 说明 | 类型 | 默认值
----|------|-----|------
gutter | 列元素之间的间距 | Number | 10
orient | 布局方向horizontal或vertical | String | "horizontal"
justify | 主轴对齐方式 | String | "flex-start"
align | 交叉轴对齐方式 | String | "flex-start"
wrap | 是否换行 | String | "wrap"
padding | 骨架组件最外层padding | String | "16px"

### childOptions示例:
```
[
  { span: 3, type: "card", options: {} },
  { span: 3, alignSelf: "center", type: "circle" },
  { span: 9,type: "more",
    children: [
      {type: "circle", options: {}},
      {type: "spaceline",options: {}},
      {type: "list",options: {}}
    ]
  },
]
```
#### childOptions参数说明：
参数 | 说明 | 类型 | 默认值
----|------|-----|------
span | 列元素宽度，24列栅格 | Number, String | 24
type | 骨架类型 | String | ""
justify | 主轴对齐方式 | String | "flex-start"
align | 交叉轴对齐方式 | String | "flex-start"
alignSelf | 单独设置该列相对父级的对齐方式 | String | "auto"
options | 骨架参数 | Object | {}
children | type=more时该列垂直方向可配置多个骨架 | Array | []


### 列表类型骨架 type=list
参数 | 说明 | 类型 | 默认值
----|------|-----|------
direction | 对齐方向:left right center | String | "left"
repeat | 重复次数 | Number | 1
list | 每行style样式 | Array | [{"marginBottom":"10px"},{"marginBottom":"10px"},{"width":"50%"}]
```
完整示例（注意有些参数可省略，为减少代码量，尽量省略）:
{
  type: "list",
  span:'24',
  options: {
    direction:'left',
    repeat:1,
    list:[
      {"width":"30%","height":"5px","backgroundColor":"#ffcaca"},
      {"width":"80%","height":"5px","backgroundColor":"#ffcaca"},
      {"width":"100%","height":"5px","backgroundColor":"#ffcaca"}
    ],
    }
}
```

### 卡片类型骨架 type=card
参数 | 说明 | 类型 | 默认值
----|------|-----|------
-- | style样式 | Object | {"height":"50px"}
```
完整示例（注意有些参数可省略，为减少代码量，尽量省略）:
{
  type: "card",
  span:'24',
  options: {
    height: "60px"
  }
}
```

### banner类型骨架 type=banner
```
和别的骨架不同的地方在于，width默认填充整个宽度,左右没有边距
```
参数 | 说明 | 类型 | 默认值
----|------|-----|------
-- | style样式 | Object | {"height":"200px","borderRadius":0}
```
完整示例（注意有些参数可省略，为减少代码量，尽量省略）:
{
  type: "banner",
  span:'24',
  options: {
    height: "100px"
  }
}
```

### 圆类型骨架 type=circle
参数 | 说明 | 类型 | 默认值
----|------|-----|------
-- | style样式 | Object | {"width":"30px","height":"30px","borderRadius":"50%"}
```
完整示例（注意有些参数可省略，为减少代码量，尽量省略）:
  {
    type: "circle",
    span:'24',
    options: {
      "width":"100px",
      "height":"100px",
      "borderRadius":"50%"
    }
  }
```

### 空白行类型骨架 type=spaceline
参数 | 说明 | 类型 | 默认值
----|------|-----|------
-- | style样式 | Object | {"height":"10px"}
```
完整示例（注意有些参数可省略，为减少代码量，尽量省略）:
  {
    type: "spaceline",
    span:'24',
    options: {
      "height":"20px"
    }
  }
```

### 标签类型骨架 type=tag
参数 | 说明 | 类型 | 默认值
----|------|-----|------
justify | 水平对齐方向 | String | "flex-start"
list | 每行style样式 | Array | [{"width":"12%"},{"width":"20%"},{"width":"25%"},{"width":"8%"}]
```
完整示例（注意有些参数可省略，为减少代码量，尽量省略）:
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
}
```
### 重复显示骨架 type=repeat
参数 | 说明 | 类型 | 默认值
----|------|-----|------
repeat | 重复次数 | Number | 1
list | 骨架列表，等同于childOptions，但是不能有type=repeat，不支持循环嵌套 | Array | []
```
完整示例（注意有些参数可省略，为减少代码量，尽量省略）:
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
              list: [{ width: "50%" },{ width: "80%" },]
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
    ]
  }
```

### 多种类型骨架混合 type=more
该类型是个数组，支持垂直方向添加以上骨架类型，除了banner，因为没有必要，可以用card代替。
```
完整示例（注意有些参数可省略，为减少代码量，尽量省略）:
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
  }
```

# 快捷骨架组件

## 列表类型组件 list-skeleton
参数 | 说明 | 类型 | 默认值
----|------|-----|------
repeat | 重复次数 | Number | 1
theme | 列表主题类型（1、2、3、4） | Number | 1
animation | 使用动画名称(race,raceBlack,fade) | String | ""
backgroundColor | 骨架颜色 | String | "#f1f1f1"
rowOptions | 总体flex布局属性（同上） | Object | {}
```
完整示例（注意有些参数可省略，为减少代码量，尽量省略）:
<list-skeleton
  :repeat="3"
  :theme="1"
  animation="raceBlack"
></list-skeleton>
```

```
复用性高的快捷组件，更利于运用到项目中，这个还需要根据实际项目积累，来完善组件。
以后会慢慢增加更多快捷组件。
```
