// this is just to build a umd build for https://npmcdn.com/
// and for users that don't use webpack or browserify

// For npm package authors, npmcdn relieves the burden of publishing
// your code to a CDN in addition to the npm registry.
// All you need to do is include your UMD build in your npm package
// (not your repo, that's different!).

// You can do this easily using the following setup:

// - Add the umd (or dist in this case) directory to your .gitignore file
// - Add the dist directory to your files array in package.json
// - Use a build script to generate your UMD build in the dist directory just before you publish
// - That's it! Now when you npm publish you'll have a version available on npmcdn as well

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'react-bootstrap-table': './src/index.js'
  },
  devtool: '#cheap-module-source-map',
  output: {
    path: './dist',
    filename: '[name].js',
    library: 'ReactBootstrapTable',
    libraryTarget: 'umd'
  },
  externals: [{
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }, {
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }],
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: [/node_modules/, path.resolve(__dirname, './src/filesaver.js')],
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }]
  }
};
