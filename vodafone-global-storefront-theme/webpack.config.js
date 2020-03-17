/* eslint-env node, es6 */

const {keyBy, mapValues} = require('lodash');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: mapValues(
    keyBy([
      'main',
      'pages/checkout',
      'pages/profile',
      'pages/profile2',
      'pages/configure-product',
      'pages/cyber-configurator'
    ]),
    moduleName => `./themes/vodafone/assets/js/src/${moduleName}.js`
  ),
  output: {
    path: path.resolve(__dirname, 'themes/vodafone/assets/js/dist'),
    publicPath: '/assets/js/dist/'
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
        exclude: /node_modules/
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
