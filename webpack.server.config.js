var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3004', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        "./example_use_webpack/demo.js"
    ],
    devtool: 'eval',
    output: {
        path: path.join(__dirname, 'example_use_webpack'),
        filename: 'demo.bundle.js'
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}