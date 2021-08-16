// vue.config.js
let path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  // 将 examples 目录添加为新的页面
  pages: {
    index: {
      // page 的入口
      entry: "examples/main.js",
      // 模板来源
      template: "public/index.html",
      // 输出文件名
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("examples")); // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  lintOnSave: false // 是否在保存的时候检查
};
