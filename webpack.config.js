const webpack = require("webpack"); // 引入webpack
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 引入插件生成html
const path = require("path");

// 模块导出
module.exports = {
  entry: "./src/index.tsx", // 以前椒jsx,因为使用ts，所以后缀椒tsx
  mode: "development", // 指定模式是开发模式
  // 输出配置
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录是当前目录下的dist
    filename: "index.js" // 输出文件名
  },
  devtool: "source-map", // 方便调试配置调试工具
  // 解析路径，查找模块使用
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"] // 一般模块不会写后缀 这里配置相应的后缀，在不写后缀时，会按照这个后缀顺序查找
  },
  // 解析处理模块的转化
  module: {
    // 遵循的规则
    rules: [
      {
        test: /\.tsx?$/, // 模块是.ts或.tsx，使用ts-loader转化成es5
        loader: "ts-loader"
      },
      {
        enforce: 'pre', // 使用sourcemap调试，pre表示 这个loader要在别的loader执行前 执行
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  // 插件的配置
  plugins: [
    //生成index.html
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 以哪个文件为模板
      filename: "index.html" // 编译后的文件名
    }),
    new webpack.HotModuleReplacementPlugin() // hot module replacement 启动模块热替换的插件
  ],
  // 开发环境服务配置
  devServer: {
    hot: true, // 启动热更新，当模块，组件有变化，不刷新整个页面，局部刷新
    contentBase: path.resolve(__dirname, 'dist')
  }
}
