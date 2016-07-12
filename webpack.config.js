var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
  environment : 'development',

  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // // necessary for hot reloading with IE:
    // 'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    // 'webpack-hot-middleware/client',
    // your code:
    './src/javascript.social.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'javascript.social.js',
    publicPath: '/dist/'
  },
  "externals": [
    {
      "jQuery" : "jQuery"
    }
  ],
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      { from : 'dist/javascript.social.js', to: path.join(__dirname, 'examples/client/react/vendor') }
    ])
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};


module.exports = config;