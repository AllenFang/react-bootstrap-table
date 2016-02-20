var webpack = require('webpack');
var base = require('./webpack.base.config');

module.exports = {
  devtool: '#eval-source-map',
  entry: base.entry,
  output: {
    path: './dist',
    filename: '[name].min.js',
    library: 'ReactBootstrapTable',
    libraryTarget: 'umd'
  },
  externals: base.externals,
  module: base.module,
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
