var webpack=require('webpack');
var path=require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const package=require('./package.json');

var DIST_DIR=path.resolve(__dirname,'dist');
var SRC_DIR=path.resolve(__dirname,'src');

var config={
  entry: SRC_DIR+"/app/index.js",
  output:{
    path:DIST_DIR+"/app",
    filename:"bundle.js",
    publicPath:"/app/"
  },
  devServer: {
    // contentBase: SRC_DIR,
    contentBase: DIST_DIR,
    compress: true,
    historyApiFallback: true,
    port: 9000
  },



  module:{
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',"@babel/preset-react"]
          }
        }
      }
    ]
      
  },
  plugins:[
    new CopyPlugin([
      // { from: 'src/index.html', to: '../' },
      // { from: './node_modules/bootstrap/dist/css/bootstrap.min.css', to: '../app/' },
      // { from: 'src/all.css', to: '../app/' }
    ]),
    new HtmlWebpackPlugin({
      inject:false,
      template:'src/index.html',
      myUrl:package.homepage,
      filename :'../index.html'
    })
  ]
};

module.exports= config;