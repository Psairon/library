const path = require('path');

module.exports = {
   watch: true,
   entry: "./src/index.js",
   output: {
       filename: "bundle.js",
       path: path.resolve(__dirname,'build'),
       publicPath: "/"
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
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
      })
    ]
  
};