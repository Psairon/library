const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
   watch: true,
   entry: "./src/index.js",
   output: {
       filename: "bundle.js",
       path: path.resolve(__dirname, "build"),
       publicPath: "/library/"
   },
   devServer: {
    port: 8000,
    historyApiFallback: true,
    hot: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ]
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg|jfif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                publicPath: '/',
              }
            }
          ]
        }
      ]
    },
  

    plugins: [
      new HtmlWebpackPlugin()
    ]
  
};