//-----------  Imports  -----------//

var path           = require('path')
var webpack        = require('webpack')
var HtmlPlugin     = require('html-webpack-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

//-----------  Configuration  -----------//

module.exports = {
  entry: path.resolve(__dirname, 'src/loader.js'),
  output: {
    filename : 'loader.js',
    path     : path.resolve(__dirname, 'build')
  },
  devtool: 'hidden-source-map',
  module: {
    rules: [{
      test    : /\.js$/,
      exclude : /(node_modules|bower_components)/,
      use     : {
        loader  : 'babel-loader',
        options : { presets: ['env'] }
      }
    },{
      test    : /\.css$/,
      include : /src/,
      use     : [{
        loader  : 'style-loader',
      },{
        loader  : 'css-loader',
        options : { minimize: true }
      }]
    },{
      test    : /\.html$/,
      include : /src/,
      loaders : ['html-loader']
    },{
      test    : /\.(svg|jpg)$/,
      include : /src/,
      loaders : ['file-loader']
    }]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new UglifyJSPlugin(),
    new HtmlPlugin({
      inject   : true,
      template : 'src/index.html',
      minify   : {
        collapseWhitespace            : true,
        keepClosingSlash              : true,
        minifyCSS                     : true,
        minifyJS                      : true,
        minifyURLs                    : true,
        removeComments                : true,
        removeEmptyAttributes         : true,
        removeRedundantAttributes     : true,
        removeStyleLinkTypeAttributes : true,
        useShortDoctype               : true,
      },
    })
  ],
  // devServer: {
  //   publicPath  : '/',
  //   hot         : true,
  //   contentBase : path.resolve(__dirname, 'build'),
  // }
};
