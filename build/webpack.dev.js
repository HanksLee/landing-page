const path = require("path");
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.js');


const devConfig = {
  /**
  * 打包模式，不配置會警告，但底層還是會去配置默認的，就是production
  * production: 壓縮模式，被壓縮的代碼
  * development: 開發模式，不壓縮的代碼
  *
  */
  mode: 'development',
  /**
  * cheap:在生成source-map的時候可以不帶列信息，只帶行信息就可以了
  * 同時不要對我load代碼的source-map。只要對我的業務代碼進行source-map生成
  * 這種方式提示的錯誤比較全，打包速度比較快，
  */
  // 　　devtool: 'cheap-module-eval-source-map',

  // 起個服務器
  devServer: {
    // 這個意思是服務器要生成在哪個文件夾下
    // 　　　　contentBase:'./dist',
    // 啟動的時候自動打開瀏覽器，然後自動訪問這個服務器地址
    open: true,
    // 開啟Hot Module Replacement
    hot: true,
    contentBase: path.resolve(__dirname, '../dist'),
    port: 3000,
    // publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(commonConfig, devConfig);