// bundle a min version of the umd build without source maps
var webpack = require('webpack');
var umdConfig = require('./webpack.umd.config');

// setting environment
process.env.NODE_ENV = 'production';

umdConfig.output.filename = '[name].min.js';
umdConfig.devtool = null;
umdConfig.plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin()
];

module.exports = umdConfig;
