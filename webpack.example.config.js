// this will build and serve the examples

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './examples/js/app.js'
    ],
    vendors: [ 'webpack-dev-server/client?http://localhost:3004', 'webpack/hot/only-dev-server' ]
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
    contentBase: 'examples/'// web root path
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
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
        loaders: ['babel']
      }, {
        test: /\.css$/, loader: 'style-loader!css-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProgressPlugin(function(percentage, message) {
      const percent = Math.round(percentage * 100);
      process.stderr.clearLine();
      process.stderr.cursorTo(0);
      process.stderr.write(percent + '% ' + message);
    })
  ]
};
