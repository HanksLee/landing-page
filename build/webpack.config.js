const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  context: path.resolve(__dirname, '../'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      '@': `${path.resolve(__dirname, '../')}/src/`,
      'static': `${path.resolve(__dirname, '../')}/src/static/`,
      'utils': `${path.resolve(__dirname, '../')}/src/utils/`,
      'config': `${path.resolve(__dirname, '../')}/src/config/`,
      'views': `${path.resolve(__dirname, '../')}/src/views/`,
      'services': `${path.resolve(__dirname, '../')}/src/services/`,
      'components': `${path.resolve(__dirname, '../')}/src/components/`,
      'models': `${path.resolve(__dirname, '../')}/src/models/`,
      // '@img': path.resolve(__dirname, 'assets/img'),
    }
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    // publicPath: "/dist/",
    filename: "bundle.js"
  },
  plugins: [
    // HtmlWebpackPlugin會在打包結束後，自動生成一個html文件，並把打包生成的js自動引入到這個html文件中
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin()]
};