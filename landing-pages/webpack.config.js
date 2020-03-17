/* eslint-env node, es6 */

const { keyBy, mapValues } = require('lodash');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: mapValues(
    keyBy([
      'main',
      'pages/choose-product',
      'pages/products/office-365'
    ]),
    moduleName => `./src/site/scripts/${moduleName}.js`
  ),
  output: {
    path: path.resolve(__dirname, 'dist/scripts/'),
    publicPath: '/scripts/'
  },
  devServer: {
    hot: true,
    contentBase: 'dist/',
    open: true,
    openPage: 'working-on-the-move.html'
  },
  resolve: {
    alias: {
      // Enable Vue runtime compiler
      // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ["@babel/env"]
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
