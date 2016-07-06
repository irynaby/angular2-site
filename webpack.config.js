const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

/* Webpack Constants */
const METADATA = {
  title: 'Angular 2 site app',
  baseUrl: '/'
};

module.exports = {
  metadata: METADATA,
  devtool: 'source-map',
  debug: true,
  entry: './src/app/boot.ts',
  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [ root('node_modules/rxjs') ]
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: [ /\.(spec|e2e)\.ts$/ ]
      },
      //Json loader support for *.json files
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      //{ test: /\.(html|css)$/, loader: 'raw-loader' },
      //to string and css loader support for *.css files
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },
       //Raw loader support for *.html
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [root('src/index.html')]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    //Copy files and directories in webpack.
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }]),
    //Simplifies creation of HTML files to serve your webpack bundles
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    })
  ]
};