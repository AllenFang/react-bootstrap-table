// this will build and serve the examples

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './examples/js/app.js',
    vendors: ['webpack-dev-server/client?http://localhost:3004', 'webpack/hot/only-dev-server']
  },
  debug: true,
  devtool: '#eval-source-map',
  output: {
    path: path.join(__dirname, 'examples'),
    filename: '[name].bundle.js'
  },
  serverConfig: {
    port: '3004',// server port
    publicPath: '/',// js path
    contentBase: 'examples/'//web root path
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react-bootstrap-table': path.resolve(__dirname, './src')
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: [ /node_modules/, path.resolve(__dirname, './src/filesaver.js') ],
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }, {
        test: /\.css$/, loader: 'style-loader!css-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
