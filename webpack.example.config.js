var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry: {
      basic: './examples/js/basic/demo.js',
      column: './examples/js/column/demo.js',
      columnFormat: './examples/js/column-format/demo.js',
      sort: './examples/js/sort/demo.js',
      pagination: './examples/js/pagination/demo.js',
      selection: './examples/js/selection/demo.js',
      manipulation: './examples/js/manipulation/demo.js',
      cellEdit: './examples/js/cell-edit/demo.js',
      complex: './examples/js/complex/demo.js',
      style: './examples/js/style/demo.js',
      advance: './examples/js/advance/demo.js',
      tableDataSet: './examples/js/tableDataSet/demo.js',
      vendors: ['webpack-dev-server/client?http://localhost:3004', 'webpack/hot/only-dev-server']
    },
    devtool: 'eval',
    output: {
        path: path.join(__dirname, 'examples'),
        filename: '[name].bundle.js'
    },
    serverConfig:{
        port:'3004',//server port
        publicPath:'/',//js path
        contentBase:'examples/'//web root path
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias:{
          'react-bootstrap-table': '../../../src/index.js'
        }
    },
    module: {
        loaders: [

            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            }, {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}, // use ! to chain loaders
            {test: /\.css$/, loader: 'style-loader!css-loader'}]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
