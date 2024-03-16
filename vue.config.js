const { defineConfig } = require("@vue/cli-service");
const path = require('path');
const config = require('./config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8111",
        changeOrigin: true,
        pathRewrite: {
          // '^/api': '/api'  //实际请求地址是http://localhost:8111/api/news/list
          // "^/api": "/", //实际请求地址是http://localhost:8111/news/list
          // 我的理解就是http://localhost:8111替换了/api/news/list里面的/api
        },
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.wasm$/,
          type: 'webassembly/experimental',
        },
      ],
    },
    // 如果您的WebAssembly文件是静态的，并且位于public目录，请确保publicPath正确
    output: {
      // 此路径定义了在开发服务器上访问静态资源的基本路径
      // 这通常应该与您的public文件夹路径相对应
      publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, './node_modules/libpag/lib/libpag.wasm'),
            to: path.resolve(__dirname, config.build.assetsPublicPath),
          },
        ],
      }),
    ],
  },

});
