const path = require('path')
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
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-react", "@babel/preset-env"],
                },
              },
            },
        ],
    }
};