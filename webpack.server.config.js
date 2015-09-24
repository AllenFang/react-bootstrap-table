var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3004', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        "./example/js/demo.js"
    ],
    devtool: 'eval',
    output: {
        path: path.join(__dirname, 'example/js'),
        publicPath: 'http://localhost:3004/',
        filename: 'demo.bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.less']
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
        new webpack.HotModuleReplacementPlugin()
    ]
}