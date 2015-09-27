var path = require('path');
var webpack = require('webpack');

module.exports = {
    // entry: [
    //     'webpack-dev-server/client?http://localhost:3004', // WebpackDevServer host and port
    //     'webpack/hot/only-dev-server',
    //     "./example_use_webpack/demo.js"
    // ],

    entry: {
      basic: './example_use_webpack/js/basic/demo.js',
      column: './example_use_webpack/js/column/demo.js',
      columnFormat: './example_use_webpack/js/column-format/demo.js',
      sort: './example_use_webpack/js/sort/demo.js',
      pagination: './example_use_webpack/js/pagination/demo.js',
      vendors: ['webpack-dev-server/client?http://localhost:3004', 'webpack/hot/only-dev-server']
    },
    devtool: 'eval',
    output: {
        path: path.join(__dirname, 'example_use_webpack'),
        filename: '[name].bundle.js'
    },
    serverConfig:{
        port:'3004',//server port
        publicPath:'/',//js path
        contentBase:'example_use_webpack/'//web root path
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
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
