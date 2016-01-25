var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    'react-bootstrap-table': './src/index.js'
  },
  output: {
    path: './dist',
    filename: '[name].min.js',
    library: 'ReactBootstrapTable',
    libraryTarget: 'umd'
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
